import type { PostgrestError } from "@supabase/supabase-js";
import type { CustomError } from "$lib/ambient";

import { error as svelteError } from "@sveltejs/kit";
import sanitize from "sanitize-html";

/* Status messages */
export const Status = {
	/**
	 * A generic error message.
	 */
	ERROR: "Ni ka kumekuwa na mchezo wa taoni mahali. Ebu jaribu tena tuone ka itakubali.",
	/**
	 * A generic loading message.
	 */
	LOADING: "Injecting…"
};

/* Utility functions */
export const Utility = {
	/**
	 * Returns a custom error object.
	 * @param {number} code - The error code; defaults to `500` if not provided or invalid
	 * @param {string} message - The error message
	 * @returns An object with the error `code` and `message`
	 */
	customError: (code: number | undefined, message: string) =>
		!code || code < 400 || code > 599 ? { code: 500, message: Status.ERROR } : { code, message },
	/**
	 * Parses a `CustomError` object within a page/layout server load function and returns an error to be thrown.
	 * @param {CustomError} error - The error object
	 * @returns A new `Error` object if the error is unexpected, or a Svelte error otherwise
	 */
	parseLoadError: (error: CustomError) =>
		error.code === 500
			? new Error(error.message)
			: svelteError(error.code, { message: error.message }),
	/**
	 * Parses a `PostgrestError` object and returns a custom error object if any has occurred.
	 * @param {PostgrestError | null} error - The `PostgrestError` object, or `null` if no error occurred
	 * @returns An object with an `error` if any has occurred
	 */
	parsePostgrestError: (error: PostgrestError | null) => {
		const hint = Number(error?.hint);
		const code = isNaN(hint) || !(hint >= 400 && hint <= 599) ? 500 : hint;
		const message = code === 500 ? Status.ERROR : (error?.message ?? Status.ERROR);
		return { error: error ? Utility.customError(code, message) : undefined };
	},
	/**
	 * Sanitises any potential HTML injected into user input.
	 * @param {string} input - The input to be sanitised
	 * @returns A sanitised string, or an empty string if the input is invalid
	 */
	sanitiseHtml: (input: string) =>
		typeof input !== "string" ? "" : sanitize(input, { allowedTags: [], allowedAttributes: {} })
};

/* Dummy blacklist */
const DummyBlacklist = [
	"ItsMutai",
	"RobertAlai",
	"Michaelkhimu",
	"iam_kendiii",
	"MuchiriGichuri",
	"BiancaNaom1",
	"MRSMuruguu",
	"lawrencekitema",
	"_fels1",
	"abuga_makori",
	"Terriz_Sam",
	"MutahiNgunyi",
	"JaneFKyalo",
	"Kaikainaipaa",
	"Gideon_Kitheka",
	"kipyegyi",
	"belive_kinuthia",
	"YanguNiYangu",
	"MikeToriet",
	"bungomaduke",
	"SeyMonicah",
	"HonAyubSavula",
	"amakanjithomas",
	"SamsonOgola",
	"neddykutsuru",
	"NjeriBt",
	"WendoAli",
	"Tabbykanyungu",
	"SharleenWambui9",
	"DrDennisOuma",
	"jwkhasndi",
	"mulwa_jr",
	"mtejawilliam",
	"SusanMutuku",
	"RaymondMatata",
	"johnmark254",
	"OleItumbi",
	"AmazingKisii",
	"MercyChepkurui_",
	"TalesofBosongo"
];

/* Export */
const General = { Status, Utility, DummyBlacklist };
export default General;
