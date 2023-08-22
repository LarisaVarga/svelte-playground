<script>
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

    async function submitImage(event) {
        const files = event.target.previousElementSibling.files;
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
    }

    // Initial load of images
    updateImages();
</script>

<h1>Gallery</h1>
<div class="d-flex">
    <input type="file" accept="image/*" id="imageInput" multiple />
    <button class="relative" on:click={submitImage}>Upload Images</button>
</div>

<div class="image-grid">
    {#each images as image, index}
        <div class="image-container">
            <img src={image} alt={`Image ${index}`} />
            <button on:click={() => deleteImage(index)}>Delete</button>
        </div>
    {/each}
</div>

<style>
    .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }

    .image-container {
        position: relative;
        width: 15rem;
        height: 15rem;
    }

    img {
        max-width: 100%;
        width: 15rem;
        height: 15rem;
    }

    button {
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
