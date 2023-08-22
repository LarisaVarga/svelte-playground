<!-- <script>
    import ImagesUpload from "$lib/components/ImagesUpload.svelte";
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<ImagesUpload />

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style> -->

<script>
    import Icon from "svelte-awesome";
    import chevronRight from "svelte-awesome/icons/chevronRight";
    import chevronDown from "svelte-awesome/icons/chevronDown";
    import arrowRight from "svelte-awesome/icons/arrowRight";
    import heart from "svelte-awesome/icons/heart";
    import star from "svelte-awesome/icons/star";
    import shoppingCart from "svelte-awesome/icons/shoppingCart";
    import BoopIcon from "$lib/components/BoopIcon.svelte";
    import BoopTextIconBtn from "$lib/components/BoopTextIconBtn.svelte";
    import BoopTextIconBtn2 from "$lib/components/BoopTextIconBtn2.svelte";
    import {
        Button,
        Dropdown,
        DropdownItem,
        DropdownDivider,
    } from "flowbite-svelte";
    import PopUp1 from "$lib/components/PopUp1.svelte";
    import BoopTextIconLink from "$lib/components/BoopTextIconLink.svelte";
    import PopUp2 from "$lib/components/PopUp2.svelte";
    import LoginFrom from "$lib/components/LoginFrom.svelte";
    import LoginFrom2 from "$lib/components/LoginFrom2.svelte";
    import Form from "$lib/components/Form.svelte";

    let dropdownOpen = false;
</script>

<h1 class="text-3xl font-bold mb-4">Buttons</h1>

<div class="flex">
    <BoopTextIconBtn
        btnText={"See how we're different 1"}
        btnIcon={chevronRight}
    />

    <button
        class="btn-animation bg-gradient-to-r from-blue-600 via-blue-600 via-cyan-400 to-blue-600 text-white uppercase py-2 px-6 rounded-full font-medium italic flex items-center mr-3"
    >
        See how we're different 2
    </button>

    <button
        class="btn-animation bg-gradient-to-r from-sky-700 via-sky-400 via-cyan-400 to-sky-700 text-white uppercase py-2 px-6 rounded-lg font-medium italic flex items-center hover:drop-shadow-md mr-3"
    >
        See how we're different 3
    </button>

    <button
        class="btn4 bg-blue-500 text-white rounded-full h-10 flex items-center hover:bg-blue-700 hover:drop-shadow-md mr-3"
    >
        <p class="uppercase pl-6 font-medium italic">
            See how we're different 4
        </p>
        <div
            class="btn4-icon bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center ml-1"
        >
            <Icon class="h-3" data={chevronRight} />
        </div>
    </button>

    <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-3"
    >
        Simple Btn
    </button>
</div>

<h1 class="text-3xl font-bold mt-10 mb-4">Cards</h1>

<div class="flex gap-5">
    <div
        class="card w-1/4 rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:outline hover:outline-green-500"
    >
        <div class="relative">
            <img
                class="w-full h-64 object-cover"
                src="https://ecocult.com/wp-content/uploads/2023/05/christydawnsundress.png.webp"
                alt="Sustainable Clothing"
            />
            <div class="ml-4 mb-4 absolute bottom-0 left-0">
                <span
                    class="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white"
                    >Best Seller</span
                >
                <span
                    class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white"
                    >Sale</span
                >
            </div>
            <div
                class="mr-4 mt-4 absolute top-0 right-0 flex items-center justify-center"
            >
                <BoopIcon
                    boopParams={{ scale: 1.2, timing: 200 }}
                    icon={heart}
                    initialIconColor={"text-white"}
                    favIconColor={"text-rose-700"}
                />
            </div>
        </div>
        <div class="p-4 flex flex-col justify-between h-bottom-card">
            <div class="">
                <h3 class="font-bold text-xl mb-2">Sustainable Clothing 1</h3>
                <p class="text-gray-700 text-base">
                    Made in: <span class="text-blue-500 hover:underline"
                        >Nepal</span
                    >
                </p>
            </div>

            <div class="flex justify-between mt-4">
                <div>
                    <div class="flex">
                        <h4 class="uppercase font-medium">239dkk</h4>
                        <div class="relative ml-2">
                            <h5 class="uppercase font-medium text-red-700">
                                499dkk
                            </h5>
                            <span
                                class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <Icon class="h-6 text-yellow-500 mr-1" data={star} />
                    <h4>4.8</h4>
                </div>
            </div>
        </div>
    </div>

    <div
        class="card w-1/4 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
    >
        <div class="relative">
            <img
                class="w-full h-64 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJFq84khyhUSxRdg77w_mCpCTEbeDtDbpDeGkstsAisk31_CHWp78VJJuFpL0jVMnNx8&usqp=CAU"
                alt="Sustainable Clothing"
            />
            <div
                class="mx-4 mb-4 absolute bottom-0 left-0 right-0 flex justify-between"
            >
                <div>
                    <span
                        class="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-white"
                        >Best Seller</span
                    >
                    <span
                        class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white"
                        >Sale</span
                    >
                </div>
                <div class="flex items-center bg-white rounded-full px-2">
                    <Icon class="h-6 text-yellow-500 mr-1" data={star} />
                    <span class="text-sm font-semibold">4.8</span>
                </div>
            </div>
            <div
                class="mr-4 mt-4 absolute top-0 right-0 flex items-center justify-center"
            >
                <BoopIcon
                    boopParams={{ scale: 1.2, timing: 200 }}
                    icon={heart}
                />
            </div>
        </div>
        <div class="p-4 flex flex-col justify-between h-bottom-card">
            <div class="">
                <h3 class="font-bold text-xl mb-2">Sustainable Clothing 2</h3>
                <p class="text-gray-700 text-base">
                    Made in: <span class="text-blue-500 hover:underline"
                        >Nepal</span
                    >
                </p>
            </div>

            <div class="flex justify-between">
                <div>
                    <div class="flex">
                        <h4 class="uppercase font-medium">239dkk</h4>
                        <div class="relative ml-2">
                            <h5 class="uppercase font-medium text-red-700">
                                499dkk
                            </h5>
                            <span
                                class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <BoopTextIconBtn2
                        btnText={"Add to cart"}
                        btnIcon={shoppingCart}
                        boopParams={{ rotation: 20, timing: 200 }}
                        btnColors={"bg-green-600"}
                    />
                </div>
            </div>
        </div>
    </div>

    <div
        class="card w-1/4 rounded overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
    >
        <div class="relative">
            <img
                class="w-full h-64 object-cover"
                src="https://cdn.shopify.com/s/files/1/1132/5272/files/Nicks3_7b381e7a-f96d-4cbb-b42d-d7bb28e2f1e6.jpg?v=1685467325"
                alt="Sustainable Clothing"
            />
            <div
                class="mx-2 absolute bottom-0 left-0 right-0 flex justify-between"
            >
                <div>
                    <span
                        class="inline-block bg-green-600 rounded-t-lg px-2 py-1 text-sm font-semibold text-white"
                        >Best Seller</span
                    >
                    <span
                        class="inline-block bg-red-600 rounded-t-lg px-2 py-1 text-sm font-semibold text-white"
                        >Sale</span
                    >
                </div>
                <div class="flex items-center bg-white rounded-t-lg px-2">
                    <Icon class="h-6 text-yellow-500 mr-1" data={star} />
                    <span class="text-sm font-semibold">4.8</span>
                </div>
            </div>
            <div
                class="mr-2 mt-2 bg-white w-8 h-8 rounded-full absolute top-0 right-0 flex items-center justify-center"
            >
                <BoopIcon
                    boopParams={{ scale: 1.2, timing: 200 }}
                    icon={heart}
                    initialIconColor={"text-slate-300"}
                />
            </div>
        </div>
        <div class="p-4 flex flex-col justify-between h-bottom-card">
            <div class="">
                <h3 class="font-bold text-xl mb-2">Sustainable Clothing 3</h3>
                <p class="text-gray-700 text-base">
                    Made in: <span class="text-blue-500 hover:underline"
                        >Nepal</span
                    >
                </p>
            </div>

            <div class="flex justify-between">
                <div class="flex items-center">
                    <h4 class="uppercase font-medium">239dkk</h4>
                    <div class="relative ml-2">
                        <h5 class="uppercase font-medium text-red-700">
                            499dkk
                        </h5>
                        <span
                            class="absolute bg-red-700 w-full h-1px transform -rotate-12 bottom-5px origin-bottom-left"
                        />
                    </div>
                </div>
                <div>
                    <BoopTextIconBtn2
                        btnText={"Add to cart"}
                        btnIcon={shoppingCart}
                        boopParams={{ rotation: 20, timing: 200 }}
                        btnColors={"bg-gradient-to-r from-green-600 to-green-900"}
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<h1 class="text-3xl font-bold mt-10 mb-4">Links</h1>

<div class="flex">
    <a href="/" class="text-red-600 font-medium uppercase cursor-pointer mr-4"
        >Click me</a
    >
    <a
        href="/"
        class="text-blue-600 font-medium uppercase cursor-pointer underline italic mr-4"
        >Click me</a
    >
    <a
        href="/"
        class="text-teal-600 font-medium uppercase cursor-pointer italic flex items-center mr-4"
    >
        Click me
        <Icon class="h-3 ml-1" data={arrowRight} />
    </a>
    <BoopTextIconLink aLink={"/"} textLink={"Click me now!"} />
</div>

<h1 class="text-3xl font-bold mt-10 mb-4">Dropdowns</h1>

<div class="flex gap-5">
    <div>
        <h2 class="my-3">Preline</h2>
        <div class="hs-dropdown relative inline-flex">
            <button
                id="hs-dropdown-default"
                type="button"
                class="w-60 hs-dropdown-toggle p-3 flex justify-between items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
                Dropdown button
                <svg
                    class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </button>

            <div
                class="hs-dropdown-menu absolute transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-60 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                aria-labelledby="hs-dropdown-default"
            >
                <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/"
                >
                    Newsletter
                </a>
                <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/"
                >
                    Purchases
                </a>
                <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/"
                >
                    Downloads
                </a>
                <a
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    href="/"
                >
                    Team Account
                </a>
            </div>
        </div>
    </div>
    <div>
        <h2 class="my-3">Flowbite Svlete</h2>
        <Button
            >Dropdown button
            <div class="">aaa</div></Button
        >
        <Dropdown>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownItem slot="footer">Separated link</DropdownItem>
        </Dropdown>
    </div>

    <div>
        <h2 class="my-3">Daisy UI</h2>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <details class="dropdown">
            <summary class="m-1 btn w-52">
                Dropdown
                <Icon class="h-3 ease-in-out duration-300" data={chevronDown} />
            </summary>
            <ul
                class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
                <li><a href="/">Item 1</a></li>
                <li><a href="/">Item 2</a></li>
            </ul>
        </details>
    </div>
    <div>
        <h2 class="my-3">Vanilla</h2>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="dropdown" on:click={() => (dropdownOpen = !dropdownOpen)}>
            <button class="btn w-52 flex justify-between">
                Dropdown
                <Icon
                    class="h-3 ease-in-out duration-300 {dropdownOpen
                        ? 'rotate-180'
                        : ''}"
                    data={chevronDown}
                />
            </button>
            <ul
                class="p-2 mt-1 shadow menu bg-base-100 rounded w-52 absolute {dropdownOpen
                    ? 'd-block'
                    : 'hidden'}"
                data={chevronDown}
            >
                <li><a href="/">Item 1</a></li>
                <li><a href="/">Item 2</a></li>
                <li><a href="/">Item 3</a></li>
            </ul>
        </div>
    </div>
</div>

<h1 class="text-3xl font-bold mt-10 mb-4">Pop Ups / Modals</h1>
<div class="flex">
    <PopUp1
        btnClasses={"btn-animation bg-gradient-to-r from-sky-700 via-sky-400 via-cyan-400 to-sky-700 text-white uppercase py-2 px-6 rounded-lg font-medium italic flex items-center hover:drop-shadow-md mr-4"}
    />
    <PopUp2
        btn2Classes={"btn-animation bg-gradient-to-r from-sky-700 via-sky-400 via-cyan-400 to-sky-700 text-white uppercase py-2 px-6 rounded-lg font-medium italic flex items-center hover:drop-shadow-md mr-4"}
    />
</div>

<h1 class="text-3xl font-bold mt-10 mb-4">Forms</h1>
<div class="grid grid-cols-2 gap-8">
    <LoginFrom />
    <div class="bg-slate-100 p-4 rounded-md">
        <LoginFrom2 />
    </div>
    <div class="p-4 rounded-md border-2 border-slate-300">
        <Form />
    </div>
</div>

<div class="my-56" />

<style>
    .btn-animation {
        transition: all 0.4s ease-in-out;
        background-size: 300% 100%;
    }
    .btn-animation:hover {
        background-position: 100% 0;
        transition: all 0.4s ease-in-out;
    }
    .btn4:hover .btn4-icon {
        animation: rotate 0.5s ease-in;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        99.99% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
