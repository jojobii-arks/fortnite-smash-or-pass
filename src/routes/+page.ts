import type { Outfit } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(
		'https://fortnite-api.com/v2/cosmetics/br/search/all?language=en&type=outfit&hasFeaturedImage=true'
	);
	const { data } = await res.json();
	return { outfits: data as Outfit[] };
}) satisfies PageLoad;
