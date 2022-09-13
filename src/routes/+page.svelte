<script lang="ts">
	import { graphql } from "$houdini";

	const store = graphql`
		query Test {
			echo(m: "Hello world")
		}
	`;
</script>

<!-- +page.svelte -->
<p>Hello! {JSON.stringify($store)}</p>
