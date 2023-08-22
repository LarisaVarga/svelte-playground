<script>
// @ts-nocheck
  import Icon from 'svelte-awesome';
	import boop from './boop.js';
	/**
     * @type {{ setter: any; }}
     */
	export let boopParams;
  export let btnIcon;
  export let btnText;
  export let btnColors;
  export let textIconColor = 'text-white';
	let isBooped = false;
	
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
</script>


<button class="flex items-center py-1 px-3 rounded-full {btnColors}" on:mouseenter={triggerBoop}>
	<span class="buttonText uppercase text-xs	font-medium italic mr-1 {textIconColor}">{btnText}</span>
	<div use:boop={{isBooped, ...boopParams, setter: setIsBooped}}>
		<Icon class="h-6 cursor-pointer {textIconColor}" data="{btnIcon}" />
	</div>
</button>