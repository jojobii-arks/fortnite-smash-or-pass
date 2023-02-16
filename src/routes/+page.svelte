<script lang="ts">
	import type { Outfit } from '$lib/types';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let randomIndex: number = 0;
	function shuffleOutfit() {
		loading = true;
		randomIndex = Math.floor(Math.random() * data.outfits.length);
	}
	let randomOutfit = data.outfits[randomIndex];
	$: randomOutfit = data.outfits[randomIndex];

	let img: HTMLImageElement;
	let loading = true;

	onMount(() => {
		shuffleOutfit();
		img.onload = () => {
			loading = false;
		};
	});

	let user: {
		data: {
			smash: Outfit[];
			pass: Outfit[];
		};
	} = {
		data: {
			smash: [],
			pass: []
		}
	};

	function userOutfitSmash() {
		const outfit = randomOutfit;
		user.data.smash = [...user.data.smash, outfit];
		shuffleOutfit();
	}
	function userOutfitPass() {
		const outfit = randomOutfit;
		user.data.pass = [...user.data.pass, outfit];
		shuffleOutfit();
	}
</script>

<div class="container mx-auto py-16">
	<h1 class="text-6xl font-black mb-16">Fortnite Smash or Pass</h1>

	<div class="card bg-base-200 max-w-xl mx-auto mb-16">
		<div class="card-body ">
			<h2 class="card-title ">{randomOutfit.name}</h2>
			<img
				class="h-96 object-contain {loading
					? 'opacity-0'
					: 0} transition-opacity bg-base-300 rounded-xl"
				src={randomOutfit.images.featured}
				alt={randomOutfit.name}
				bind:this={img}
			/>
			<div class="flex justify-between gap-4">
				<button on:click={userOutfitSmash} class="btn flex-1 btn-lg btn-secondary">Pass</button>
				<button on:click={userOutfitPass} class="btn flex-1 btn-lg btn-success">Smash</button>
			</div>
		</div>
	</div>

	<div class="flex justify-around bg-base-300 p-8 rounded-xl gap-8">
		<div class="flex-1">
			<h2 class="text-3xl font-semibold text-center">Pass</h2>
			<ul class="grid grid-cols-4">
				{#each user.data.pass as outfit}
					<li class="rounded-xl bg-neutral text-neutral-content p-4">
						<p class="mb-2 text-sm font-bold">{outfit.name}</p>
						<img
							class="aspect-square object-contain"
							src={outfit.images.smallIcon}
							alt={outfit.name}
						/>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex-1">
			<h2 class="text-3xl font-semibold text-center">Smash</h2>
			<ul class="grid grid-cols-4 gap-2">
				{#each user.data.smash as outfit}
					<li class="rounded-xl bg-neutral text-neutral-content p-4">
						<p class="mb-2 text-sm font-bold">{outfit.name}</p>
						<img
							class="aspect-square object-contain"
							src={outfit.images.smallIcon}
							alt={outfit.name}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
