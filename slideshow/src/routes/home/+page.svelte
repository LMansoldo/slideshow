<script lang="ts">
	import axios from 'axios';
	import CONFIGS from '../../services/api/constants';
	import { Button, Card, Input, Slider } from '../../components';

	let gifsData = [];

	$: showModal = false;

	async function handleSearchFromApi(event: CustomEvent<unknown>) {
		const services = await axios
			.get(
				`https://api.giphy.com/v1/gifs/search?api_key=${CONFIGS.API_KEY}&q=${event.target.term.value}`
			)
			.then(function ({ data }) {
				console.log(data);
				gifsData = data;
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	}
</script>

<section class="flex flex-col items-center justify-center w-full p-5">
	<form on:submit={handleSearchFromApi} class="max-w-md">
		<Input name="term" type="text" label="Search for Gifs" />
		<Button type="submit">Send</Button>
		<Button type="button">Show more</Button>
	</form>

	<div class="flex flex-col gap-4 w-full p-4">
		{#if gifsData && gifsData.data}
			{#each gifsData.data as gif}
				<Card>
					<div class="" on:click={() => showModal = !showModal}>
						<img src={gif.images.preview_gif.url} alt={gif.slug} class="w-[10rem]"/>
					</div>
				</Card>
			{/each}
		{/if}
	</div>

	<Slider bind:showModal />
</section>
