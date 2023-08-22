<script>
    import { scale } from "svelte/transition";
    import CancelIcon from "./CancelIcon.svelte";
    export let btn2Classes = "btn-animation";

    let isModalOpen = false;

    function toggleModal() {
        isModalOpen = !isModalOpen;
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }
</script>

<div>
    <button class={btn2Classes} on:click={toggleModal}
        >Pop up scale up animation</button
    >

    {#if isModalOpen}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="modal-bg" on:click={toggleModal}>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="modal-content"
                on:click={(e) => e.stopPropagation()}
                transition:scale
            >
                <button class="close-btn" on:click={toggleModal}>
                    <span class="close-icon"><CancelIcon /></span>
                </button>
                <h2>Modal Content</h2>
                <p>This is the content of the modal!</p>
            </div>
        </div>
    {/if}

    <style>
        .modal-bg {
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

        .modal-content {
            position: relative;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            transform-origin: center;
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
            font-size: 24px;
            color: #000;
        }
    </style>
</div>
