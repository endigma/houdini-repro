<script lang="ts">
	import { graphql } from "$houdini";

	const store = graphql`
		query QueryFilms {
			allFilms {
				films {
					title
					director
					releaseDate
					speciesConnection {
						species {
							name
							classification
							homeworld {
								name
							}
						}
					}
				}
			}
		}
	`;
</script>

<!-- +page.svelte -->
<p>Hello!</p>

<pre>{JSON.stringify($store, undefined, 2)}</pre>
