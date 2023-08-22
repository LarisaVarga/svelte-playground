<script>
    // @ts-nocheck

    import { fade } from "svelte/transition";
    import CancelIcon from "./CancelIcon.svelte";
    export let btnClasses;

    let isPopUpVisible = false;

    function togglePopUp() {
        isPopUpVisible = !isPopUpVisible;
        document.body.style.overflow = isPopUpVisible ? "hidden" : "auto";
    }

    // function closePopUp() {
    //   isPopUpVisible = false;
    // }
</script>

<div>
    <button class={btnClasses} on:click={togglePopUp}>
        <!-- {#if isPopUpVisible} Hide PopUp {:else} Show PopUp{/if} -->
        Pop up transition animation
    </button>

    {#if isPopUpVisible}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="popup-bg">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="popup-content"
                on:click={(e) => e.stopPropagation()}
                transition:fade
            >
                <button class="close-btn" on:click={togglePopUp}>
                    <span class="close-icon"><CancelIcon /></span>
                </button>
                <h2>PopUp Content</h2>
                <p>This is the content of the PopUp!</p>
            </div>
        </div>
    {/if}
</div>

<style>
    .popup-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .popup-content {
        position: relative;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        width: 60%;
        height: 15rem;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .close-icon {
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }
</style>
