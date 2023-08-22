
<script>
  export let placeholder = "";
  export let inputType = "text";
  let inputEl; // reference to the input DOM node
  let isFocused = false;

  export let formIcon = "";

function onFocus() {
    isFocused = true;
  }

  function onBlur() {
    isFocused = false;
  }
</script>


<div class="form-control">
  <div class="input-group ">
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 512 512"><path d="{formIcon}"></path></svg>
    </button>
    <input type="{inputType}" bind:this={inputEl} on:focus={onFocus} on:blur={onBlur} {placeholder} class="input input-bordered w-full mb-4 {isFocused ? 'focus:ring-2 focus:ring-blue-500/50' : ''}">
  </div>
</div>