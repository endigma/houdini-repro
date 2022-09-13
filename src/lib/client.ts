import { HoudiniClient, type RequestHandlerArgs } from "$houdini";
import { browser } from "$app/environment";

async function fetchQuery({
	fetch,
	text = "",
	variables = {},
	metadata,
	session,
}: RequestHandlerArgs) {
	const url =
		import.meta.env.VITE_GRAPHQL_ENDPOINT ||
		"https://swapi-graphql.netlify.app/.netlify/functions/index";

	console.log("Reading session token", session.token);

	const result = await fetch(url, {
		method: "POST",
		mode: "cors",
		headers: {
			...(!browser
				? { Origin: import.meta.env.VITE_BASE_URL ?? "http://localhost:5173" }
				: {}),
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: text,
			variables,
		}),
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);
