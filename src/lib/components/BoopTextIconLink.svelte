<script>
// @ts-nocheck
  import Icon from 'svelte-awesome';
	import boop from './boop.js';
  import arrowRight from 'svelte-awesome/icons/arrowRight';
	
	let isBooped = false;
	export let aText = "I am a link";
	export let aIcon = arrowRight;
	export let aLink = "/";
	
	/**
	 * @param {boolean} val
	 */
	function setIsBooped(val) {
		isBooped = val;
	}

</script>

<a href="{aLink}" class="text-blue-500 flex items-center mr-3" on:mouseenter={() => isBooped = true}>
	<p class="buttonText uppercase font-medium italic">{aText}</p>
	<span class="mb-3px" use:boop={{isBooped, x: 5, timing: 200, setter: setIsBooped}}>
		<Icon class="h-3 ml-1" style="display:inline-block" data="{aIcon}"/>
	</span>
</a>

<style>

</style>