<script lang="ts">
	import '../app.css';
	export const prerender = true;

</script>

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>
