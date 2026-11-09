// src/routes/+page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		products: [
			{ id: '1', name: 'T-shirt Svelte 5', price: 25 },
			{ id: '2', name: 'Casquette SvelteKit', price: 18 },
			{ id: '3', name: 'Stickers Runes', price: 5 }
		]
	};
};
