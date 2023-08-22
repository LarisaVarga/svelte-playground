<script>
// @ts-nocheck
  import Icon from 'svelte-awesome';
	import boop from './boop.js';
	
	let isBooped = false;
	export let btnText;
	export let btnIcon;
	
	/**
	 * @param {boolean} val
	 */
	function setIsBooped(val) {
		isBooped = val;
	}

</script>

<button class="bg-blue-500 text-white rounded-full h-10 flex items-center hover:bg-blue-700 hover:drop-shadow-md mr-3 px-5" on:mouseenter={() => isBooped = true}>
	<p class="buttonText uppercase font-medium italic">{btnText}</p>
	<span class="mb-2px" use:boop={{isBooped, x: 5, timing: 200, setter: setIsBooped}}>
		<Icon class="h-3 ml-2" style="display:inline-block" data="{btnIcon}"/>
	</span>
</button>

<style>

</style>