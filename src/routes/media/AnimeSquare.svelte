<script lang="ts">
    import ScriptGate from "$components/ScriptGate.svelte";

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

    let gridItems: GridItem[] = [{
        name: 'Mobile Suit Gundam the Witch from Mercury',
        url: 'https://www.crunchyroll.com/series/G79H2307W/mobile-suit-gundam-the-witch-from-mercury',
        img: '07fda9ad4ae86df75320c1543a53719b.jpe'
    }, {
        name: 'To Your Eternity',
        url: 'https://www.crunchyroll.com/series/GG5H5XMWV/to-your-eternity',
        img: '0ce768f96b6dfa3db33abfca5108919f.jpe'
    }, {
        name: 'Horimiya',
        url: 'https://www.crunchyroll.com/series/G9VHN9P43/horimiya',
        img: '3a1254f863bf0c9315086d37911c66df.jpe'
    }, {
        name: "Vivy -Fluorite Eye's Song-",
        url: 'https://www.crunchyroll.com/series/GMEHME4M4/vivy--fluorite-eyes-song-',
        img: '41c3eec54958204f4c962defffd948c7.jpe'
    }, {
        name: "Snow White with the Red Hair",
        url: 'https://www.crunchyroll.com/series/GRZJ7QN86/snow-white-with-the-red-hair',
        img: '9e04c79f744de8a33913958ec987f49a.jpe'
    }, {
        name: "Welcome to Demon School! Iruma-kun",
        url: 'https://www.crunchyroll.com/series/G6NVG970Y/welcome-to-demon-school-iruma-kun',
        img: 'c0f666958d8a0bcadf03f637f6688672.jpe'
    }, {
        name: "Charlotte",
        url: 'https://www.crunchyroll.com/series/GYGG99WDY/charlotte',
        img: '00e81d27511ab96bc39b3b343bd9971f.jpe'
    }, {
        name: "BUILD-DIVIDE -#000000- CODE BLACK",
        url: 'https://www.crunchyroll.com/series/GG5H5XDE1/build-divide--000000--code-black',
        img: '9cf5ad7375ee37e1a829a6ae7d837dde.jpe'
    }, {
        name: "Recovery of an MMO Junkie",
        url: 'https://www.crunchyroll.com/series/GR49WNQE6/recovery-of-an-mmo-junkie',
        img: '2bdcf4cae76581578c128c8e87f71036.jpe'
    }];

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

</style>

<ScriptGate type="js-disabled">
    <div class="grid grid-cols-3 grid-rows-3 gap-2 rounded-md overflow-clip">
        {#each gridItems as item}
            <a 
                href={item.url} title={item.name} target="_blank"
            >
                <img
                    src="https://www.crunchyroll.com/imgsrv/display/thumbnail/{imgSizes.small}/catalog/crunchyroll/{item.img}" alt="{item.name}"
                    class="aspect-square object-cover"
                >
            </a>
        {/each}
    </div>
</ScriptGate>

<ScriptGate type="js-enabled">
    <div class="relative rounded-md overflow-clip">
        <div class="grid grid-cols-3 grid-rows-3 gap-2 w-full aspect-square">
            {#each gridItems as item}
                <button
                    title={item.name}
                    on:click={() => currentItem = item}
                    class="grid-overlap [&>span]:hover:opacity-100 overflow-clip"
                >
                    <img
                        src="https://www.crunchyroll.com/imgsrv/display/thumbnail/{imgSizes.small}/catalog/crunchyroll/{item.img}" alt="{item.name}"
                        class="aspect-square object-cover"
                    >
                    <span
                        class="text-white text-outline text-outline-black font-bold text-2xl overflow-clip text-ellipsis
                        opacity-0 transition-opacity backdrop-blur-sm
                        w-full h-full flex justify-center items-center"
                    >{item.name}</span>
                </button>
            {/each}
        </div>
        {#if currentItem}
            {@const item = currentItem}
            <div class="fade-in absolute top-0 left-0 w-full h-full grid-overlap">
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
                                {item.comment}
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
</ScriptGate>
