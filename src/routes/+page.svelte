<script>
    import {createCart} from "#lib/cart.svelte.ts";

    let {data} = $props();
    let cart = createCart();

</script>

<main class="container">
    <h1>🛒 QuickShop</h1>
    <p class="badge">Articles dans le panier : <strong>{cart.count}</strong></p>

    <!-- Catalogue -->
    <h2>Catalogue</h2>
    <div class="grid">
        {#each data.products as product (product.id)}
            <div class="card">
                <h3>{product.name}</h3>
                <p class="price">{product.price} €</p>
                <button onclick={() => cart.add(product)}>Ajouter au panier</button>
            </div>
        {/each}
    </div>

    <!-- Panier -->
    <section class="cart-section">
        <h2>Mon Panier</h2>
        <ul>
            {#each cart.items as item (item.id)}
                <li>
                    <span>{item.name} (x{item.qty})</span>
                    <span>{item.price * item.qty} €</span>
                    <button class="remove" onclick={() => cart.remove(item.id)}>❌</button>
                </li>
            {:else}
                <p class="empty">Votre panier est vide.</p>
            {/each}
        </ul>
        <h3>Total : {cart.total} €</h3>
    </section>
</main>

<style>
    .container { max-width: 600px; margin: 2rem auto; font-family: system-ui; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; }
    .card { border: 1px solid #ddd; padding: 1rem; border-radius: 8px; text-align: center; }
    .price { font-weight: bold; color: #ff3e00; }
    button { background: #ff3e00; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; }
    .cart-section { background: #f9f9f9; padding: 1.5rem; border-radius: 8px; }
    ul { list-style: none; padding: 0; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0; border-bottom: 1px solid #eee; }
    .remove { background: transparent; color: red; padding: 0; }
    .empty { color: #666; font-style: italic; }
</style>
