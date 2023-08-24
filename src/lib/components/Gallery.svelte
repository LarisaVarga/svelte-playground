<script>
    import { Fileupload, Label } from "flowbite-svelte";

    let images = [];

    function updateImages() {
        if (typeof localStorage !== "undefined") {
            images = JSON.parse(localStorage.getItem("images")) || [];
        }
    }

    function deleteImage(index) {
        images.splice(index, 1);
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("images", JSON.stringify(images));
            updateImages(); // Refresh images after deletion
        }
    }

    async function submitImage() {
        // const files = event.target.previousElementSibling.files;
        const filesInput = document.getElementById("multiple_files");
        const files = filesInput.files;
        for (const file of files) {
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    images.push(e.target.result);
                    if (typeof localStorage !== "undefined") {
                        localStorage.setItem("images", JSON.stringify(images));
                        updateImages(); // Refresh images after upload
                    }
                };
                reader.readAsDataURL(file);
            }
        }
        // Clear the selected files
        filesInput.value = "";
    }

    // Initial load of images
    updateImages();
</script>

<div class="mb-4">
    <!-- <input type="file" accept="image/*" id="imageInput" multiple /> -->
    <Label class="pb-2" for="multiple_files">Upload multiple files</Label>

    <div class="flex">
        <div class="w-1/2 mr-4">
            <Fileupload id="multiple_files" multiple />
        </div>
        <button
            class="relative btn-animation bg-gradient-to-r from-slate-900 via-slate-500 via-slate-400 to-slate-900 text-white uppercase py-2 px-6 rounded-lg font-medium italic flex items-center hover:drop-shadow-md mr-3"
            on:click={submitImage}>Upload Images</button
        >
    </div>
</div>

<div class="grid grid-cols-6 gap-4">
    {#each images as image, index}
        <div class="image-container relative">
            <img
                class="w-full object-cover min-h-gallery"
                src={image}
                alt={`Image ${index}`}
            />
            <button on:click={() => deleteImage(index)}>Delete</button>
        </div>
    {/each}
</div>

<style>
    img {
        max-width: 100%;
    }
</style>
