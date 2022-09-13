import type { Handle } from "@sveltejs/kit";

import houdiniClient from "$lib/client";

export const handle: Handle = async ({ event, resolve }) => {
	const token: string | undefined = event.cookies.get("session");

	console.log("Setting session token,", token);

	houdiniClient.setSession(event, { token });
	return await resolve(event);
};
