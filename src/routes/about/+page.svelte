<script>
// @ts-nocheck


    import { Icon } from "svelte-awesome";
    import BoopIcon from "$lib/components/BoopIcon.svelte";
    import BoopTextIconBtn2 from "$lib/components/BoopTextIconBtn2.svelte";
    import heart from "svelte-awesome/icons/heart";
    import star from "svelte-awesome/icons/star";
    import shoppingCart from "svelte-awesome/icons/shoppingCart";

</script>

<h1 class="text-3xl font-bold mt-10 mb-4"> Cards </h1>

<div class="flex gap-5">

  <div class="card w-1/4 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer">
    <div class="relative">
      <img class="w-full h-64 object-cover" src="https://cdn.shopify.com/s/files/1/1132/5272/files/Nicks3_7b381e7a-f96d-4cbb-b42d-d7bb28e2f1e6.jpg?v=1685467325" alt="Sustainable Clothing">
      <div class="mx-2 absolute bottom-0 left-0 right-0 flex justify-between">
        <div>
          <span class="inline-block bg-green-600 rounded-t-lg px-2 py-1 text-sm font-semibold text-white">Best Seller</span>
          <span class="inline-block bg-red-600 rounded-t-lg px-2 py-1 text-sm font-semibold text-white">Sale</span>
        </div>
        <div class="flex items-center bg-white rounded-t-lg px-2">
          <Icon class="h-6 text-yellow-500 mr-1" data="{star}"/>
          <span class="text-sm font-semibold">4.8</span>
        </div>
      </div>
      <div class="mr-2 mt-2 bg-white w-8 h-8 rounded-full absolute top-0 right-0 flex items-center justify-center">
        <BoopIcon boopParams={{ scale: 1.2, timing: 200}} icon={heart} initialIconColor={'text-slate-300'}></BoopIcon>
      </div>
    </div>
    <div class="p-4 flex flex-col justify-between h-bottom-card">
      <div class="">
        <h3 class="font-bold text-xl mb-2">Sustainable Clothing 3</h3>
        <p class="text-gray-700 text-base">
          Made in: <span class="text-blue-500 hover:underline">Nepal</span>
        </p>
      </div>

      <div class="flex justify-between">
        <div class="flex items-center">
          <h4 class="uppercase font-medium">239dkk</h4> 
          <div class="relative ml-2">
            <h5 class="uppercase font-medium text-red-700">499dkk</h5> 
            <span class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"></span>
          </div>
        </div>
        <div>
          <BoopTextIconBtn2 btnText={"Add to cart"}  btnIcon={shoppingCart} boopParams={{ rotation: 20, timing: 200}} btnColors={'bg-gradient-to-r from-green-600 to-green-900'}></BoopTextIconBtn2>
        </div>

      </div>
    </div>
  </div>
</div>