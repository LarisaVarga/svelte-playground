<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Run this code after the component is rendered
    onMount(() => {
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", toggleMenu);
        });
    });
</script>

<div class:open={isMenuOpen}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="burger-menu fixed top-2.5 right-2.5 flex md:hidden flex-col justify-between w-7 h-6 cursor-pointer z-50"
        on:click={toggleMenu}
    >
        <div class="line w-full h-1 bg-black rounded-sm" />
        <div class="line w-full h-1 bg-black rounded-sm" />
        <div class="line w-full h-1 bg-black rounded-sm" />
    </div>

    <div
        class="menu fixed top-0 right-0 w-72 md:w-full h-full md:h-12 bg-white shadow-md z-40"
        transition:fly={{ x: isMenuOpen ? 0 : "100%", duration: 300 }}
    >
        <ul class="p-0 m-4 md:m-0 pt-6 md:pt-0 flex flex-col md:flex-row">
            <li
                class="menu-item mb-4 md:mb-0"
                aria-current={$page.url.pathname === "/" ? "page" : undefined}
            >
                <a href="/">Home</a>
            </li>
            <li
                class="menu-item mb-4"
                aria-current={$page.url.pathname === "/about"
                    ? "page"
                    : undefined}
            >
                <a href="/about">About</a>
            </li>
            <li
                class="menu-item mb-4"
                aria-current={$page.url.pathname === "/about"
                    ? "page"
                    : undefined}
            >
                <a href="/galery">Galery</a>
            </li>
        </ul>
    </div>
</div>

<style>
    @media (max-width: 768px) {
        .burger-menu .line {
            transition: transform 0.3s ease;
        }
        .open .burger-menu .line {
            transition: transform 0.3s ease;
        }
        .open .burger-menu .line:nth-child(1) {
            transform: rotate(45deg) translate(7px, 7px);
        }
        .open .burger-menu .line:nth-child(2) {
            opacity: 0;
        }
        .open .burger-menu .line:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
        .menu {
            transform: translate(100%, 0);
            transition: transform 0.3s ease;
        }
        .open .menu {
            transform: translate(0%, 0);
            transition: transform 0.3s ease;
        }
    }
</style>
