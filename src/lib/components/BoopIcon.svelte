<script>
    import Icon from "svelte-awesome";
    import boop from "./boop.js";
    /**
     * @type {{ setter: any; }}
     */
    export let boopParams;
    export let icon;
    export let initialIconColor = "text-white";
    export let favIconColor = "text-rose-700";
    let isBooped = false;
    let favorite = false;

    // Is there a more Svelte-y way to do this?
    /**
     * @param {boolean} val
     */
    function setIsBooped(val) {
        isBooped = val;
    }

    function triggerBoop() {
        isBooped = true;
    }

    function toggleColor() {
        favorite = !favorite;
    }
</script>

<button
    on:mouseenter={triggerBoop}
    on:click={toggleColor}
    use:boop={{ isBooped, ...boopParams, setter: setIsBooped }}
>
    <Icon
        class="h-6 cursor-pointer {favorite ? favIconColor : initialIconColor}"
        data={icon}
    />
</button>
