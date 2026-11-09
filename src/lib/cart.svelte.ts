
interface CartItem {
	id: number;
	name: string;
	price: number;
	qty: number;
}

export function createCart() {
	let items = $state<CartItem[]>([]);

	const total = $derived(items.reduce((sum: number, item: CartItem) => sum + item.price, 0))
	const count = $derived(items.reduce((sum, item: CartItem) => sum + item.qty,0))

	return {
		get items() {
			return items;
		},
		get total() {
			return total;
		},
		get count() {
			return count;
		},
		add(product: CartItem) {
			const existing = items.find((item) => item.id == product.id)
			if (existing) existing.qty++;
			else {
				product.qty = 1;
				items.push(product);
			}
			return
		},
		remove(id: number) {
			items = items.filter((i) => i.id !== id);
		}
	};
}
