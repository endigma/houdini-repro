import type { Handle } from "@sveltejs/kit";

import houdiniClient from "$lib/client";

export const handle: Handle = async ({ event, resolve }) => {
	const token = "TOKEN_SET_BY_HANDLE";

	console.log("Setting session token,", token);

	houdiniClient.setSession(event, { token });
	return await resolve(event);
};
