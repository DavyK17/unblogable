import { redirect } from "@sveltejs/kit";

export const GET = async ({ url, locals: { supabase } }) => {
	// Get the code and next URL from the query string
	const code = url.searchParams.get("code") as string;
	const next = url.searchParams.get("next") ?? "/";

	// Exchange the code for a session
	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (error) throw redirect(303, "/auth/error");
	}

	// Redirect the user to the next page
	throw redirect(303, next);
};
