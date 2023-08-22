<script>
    import ImagesUpload from "$lib/components/ImagesUpload.svelte";
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<ImagesUpload />

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
