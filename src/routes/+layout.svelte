<script>
    import "../app.css";
    import BurgerMenu from "$lib/components/BurgerMenu.svelte";
    import { page } from "$app/stores";
    import { fly } from "svelte/transition";
    import { cubicIn } from "svelte/easing";

    // export let data;
</script>

<header>
    <BurgerMenu />
</header>
<main class="mt-20">
    {#key $page.url.pathname}
        <div
            in:fly={{ x: -200, duration: 300, delay: 300, easing: cubicIn }}
            out:fly={{ x: 200, duration: 300 }}
        >
            <slot />
        </div>
    {/key}
</main>
