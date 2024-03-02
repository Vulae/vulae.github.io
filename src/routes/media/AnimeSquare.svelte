<script lang="ts">
    import { onMount } from "svelte";

    const imgSizes = {
        small: '640x360',
        medium: '1200x675',
        large: '1920x1080'
    }

    interface GridItem {
        name: string;
        url: string;
        img: string;
        comment?: string;
    }

    export let width: number;
    export let height: number;
    export let items: GridItem[];

    let mounted: boolean = false;

    onMount(() => {
        if(width * height != items.length) {
            throw new Error('AnimeSquare invalid number of items.');
        }

        mounted = true;
    });

    let currentItem: GridItem | null = null;

</script>

<style lang="scss">
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .fade-in {
        opacity: 0;
        animation: fade-in 0.25s ease-in-out forwards;
    }

    .grid-overlap {
        @apply grid grid-cols-1 grid-rows-1;
        & > * {
            @apply col-start-1 col-end-1 row-start-1 row-end-1;
        }
    }

    .grid-item {
        @apply grid-overlap aspect-square overflow-clip;

        .grid-item-image {
            @apply object-cover aspect-square transition-[filter];
        }

        &:hover .grid-item-image {
            @apply blur-sm;
        }

        .grid-item-title {
            @apply text-white text-outline text-outline-black font-bold text-2xl text-ellipsis text-center;
            @apply w-full h-full flex justify-center items-center;
            @apply opacity-0 z-10 transition-opacity;
        }

        &:hover .grid-item-title {
            @apply opacity-100;
        }
    }

</style>

<div class="relative rounded-md overflow-clip">
    <div
        class="grid gap-2 w-full aspect-square"
        style:grid-template-columns="repeat({width}, minmax(0, 1fr))"
        style:grid-template-rows="repeat({height}, minmax(0, 1fr))"
    >

        {#if mounted}

            {#each items as item}
                <button class="grid-item" title={item.name} on:click={() => currentItem = item}>
                    <img
                        src="https://www.crunchyroll.com/imgsrv/display/thumbnail/{imgSizes.small}/catalog/crunchyroll/{item.img}" alt="{item.name}"
                        class="grid-item-image"
                    >
                    <span class="grid-item-title">{item.name}</span>
                </button>
            {/each}

        {:else}

            {#each items as item}
                <a class="grid-item" title={item.name} href={item.url} target="_blank">
                    <img
                        src="https://www.crunchyroll.com/imgsrv/display/thumbnail/{imgSizes.small}/catalog/crunchyroll/{item.img}" alt="{item.name}"
                        class="grid-item-image"
                    >
                    <span class="grid-item-title">{item.name}</span>
                </a>
            {/each}

        {/if}

    </div>
    {#if currentItem}
        {@const item = currentItem}
        <div class="fade-in absolute top-0 left-0 w-full h-full grid-overlap z-20">
            <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/{imgSizes.medium}/catalog/crunchyroll/{item.img}" alt="{item.name}"
                class="aspect-square object-cover blur-sm scale-110"
            >
            <div class="z-10 flex flex-col justify-between text-white bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,1)]">
                <div class="flex flex-col gap-4 px-8 py-4">
                    <a
                        class="text-3xl font-bold"
                        href={item.url} title={item.name} target="_blank"
                    >{item.name}</a>
                    {#if item.comment}
                        <span class="pt-4 text-2xl">
                            {@html item.comment}
                        </span>
                    {/if}
                </div>
                <button class="p-4 w-full flex justify-center [&>svg]:hover:translate-y-2" on:click={() => currentItem = null}>
                    <svg class="transition-transform lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    {/if}
</div>
