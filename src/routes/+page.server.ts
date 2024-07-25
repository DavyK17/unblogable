import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";

import { BASE_URL } from "$env/static/private";
import { Status } from "$lib/helpers";

/* FORM ACTIONS */
export const actions: Actions = {
	auth: async ({ locals: { supabase } }) => {
		try {
			// Authenticate X user
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: "twitter",
				options: { redirectTo: `${BASE_URL}/auth/callback` }
			});
			if (error) return fail(Number(error.code), { message: error.message });

			// Return
			if (data.url) throw redirect(303, data.url);
		} catch (err) {
			return fail(500, { message: Status.ERROR });
		}
	}
};
