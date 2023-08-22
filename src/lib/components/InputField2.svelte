<script>
  import { scale } from "svelte/transition";
  export let placeholder = "";
  export let inputType = "text";
  export let label = "";
  export let id = "";
  let inputEl; // reference to the input DOM node
  let isFocused = false;
  
  function onFocus() {
    isFocused = true;
  }

  function onBlur() {
    isFocused = false;
  }
</script>
<div>
  <label for={id}>{label}</label>
  <input {id} in:scale={{duration: 200}} bind:this={inputEl} on:focus={onFocus} on:blur={onBlur} class="input input-bordered w-full mb-4 mt-2 placeholder:text-slate-400 {isFocused ? 'focus:ring-2 focus:ring-blue-500/50' : ''}" type="{inputType}" {placeholder}>
</div>
