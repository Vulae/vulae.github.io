<script lang="ts">
    import Background from "$components/Background.svelte";
    import { onMount } from "svelte";

    const fetchData: boolean = true;

    const login: string = 'Vulae';
    let url: string = 'https://github.com/Vulae';
    let name: string = login;
    let avatar: string = '/github.jpg';
    let bio: string | undefined;
    
    onMount(async () => {
        if(!fetchData) return;

        const req = await fetch(`https://api.github.com/users/${login}`)
        const data = await req.json() as object;

        console.log(req, data);

        if(typeof data != 'object' || data == null) {
            throw new Error('Failed to parse request data.');
        }


        if('html_url' in data && typeof data.html_url == 'string') {
            url = data.html_url;
        }
        if('login' in data && typeof data.login == 'string') {
            name = data.login;
        }
        if('name' in data && typeof data.name == 'string') {
            name = data.name;
        }
        if('avatar_url' in data && typeof data.avatar_url == 'string') {
            avatar = data.avatar_url;
        }
        if('bio' in data && typeof data.bio == 'string') {
            bio = data.bio;
        }

    });

</script>

<style lang="scss">

    .name {
        background: linear-gradient(56deg, rgba(139, 0, 181, 1) 10%, rgba(0, 130, 176, 1) 50%, rgba(0, 33, 255, 1) 80%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .social-link {
        @apply flex items-center justify-between gap-4 px-8 py-2 drop-shadow-sm transition-all text-white;

        & > img {
            @apply w-8;
        }

        &:hover {
            @apply drop-shadow-lg text-gray-300 scale-[105%];
        }
    }

    .attribution-link {
        @apply social-link;
    }

</style>

<div class="z-0 absolute w-full h-full">
    <Background />
</div>

<div class="z-10 flex flex-wrap items-center justify-center gap-16 p-8 max-w-full max-h-full">
    <div class="flex flex-col gap-4">
        <div class="group flex gap-2 px-2 py-4 drop-shadow-outset">
            <a
                href="https://www.pixiv.net/en/artworks/99750487"
                title="Profile picture source"
                class="hover:brightness-125 transition-[filter]"
            >
                <img
                    src={avatar}
                    alt="GitHub Profile"
                    class="w-24 h-24 rounded-full border-2 border-white"
                >
            </a>
            <span class="px-2 font-caveat text-8xl font-semibold name">
                {name}
            </span>
        </div>
        {#if bio}
            <span class="font-segoe text-2xl text-white drop-shadow-outset text-center">
                {bio}
            </span>
        {/if}
    </div>
    
    <div class="w-1 h-64 bg-white bg-opacity-50 rounded-full max-md:hidden" />
    <div class="w-full h-1 bg-white bg-opacity-50 rounded-full md:hidden" />

    <div
        class="flex flex-col gap-2 p-2 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg drop-shadow-md text-white font-segoe text-lg font-semibold"
    >

        <span class="flex justify-center w-full border-b-2 border-white pb-2 min-w-[256px]">Links</span>

        <div class="flex flex-col px-8">
            <a href={url} target="_blank" class="social-link" title="GitHub profile">
                <img src="/logos/github-mark.svg" alt="GitHub">
                GitHub
            </a>
            <a href="https://discordapp.com/users/1043398419030482994" target="_blank" class="social-link" title="Add as friend on Discord">
                <img src="/logos/discord-mark.svg" alt="Discord">
                Discord
            </a>
            <a href="https://www.reddit.com/user/vulae_/" target="_blank" class="social-link" title="Reddit profile">
                <img src="/logos/reddit-mark.svg" alt="Reddit">
                Reddit
            </a>
            <a href="https://www.youtube.com/@vulae" target="_blank" class="social-link" title="YouTube channel">
                <img src="/logos/youtube-mark.svg" alt="YouTube">
                YouTube
            </a>
        </div>

        <span class="mx-auto text-xs font-normal [&>a]:text-blue-800 [&>a]:underline [&>a:hover]:text-blue-600">
            <a href="#logos">Logo attribution</a> • <a href="https://github.com/Vulae/vulae.github.io">Source</a>
        </span>

    </div>
</div>

<div class="popup fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 bg-black bg-opacity-50" id="logos">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <!-- svelte-ignore a11y-missing-content -->
    <a class="fixed top-0 bottom-0 left-0 right-0" href="#"></a>
    <div class="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg drop-shadow-md text-white font-segoe text-lg font-semibold p-2 flex flex-col gap-2">
        <span class="flex justify-center w-full border-b-2 border-white pb-2 px-6">
            Logo Attribution
        </span>
        <a href="https://github.com/logos" class="attribution-link">
            <img src="/logos/github-mark.svg" alt="GitHub">
            GitHub logo
        </a>
        <a href="https://discord.com/branding" class="attribution-link">
            <img src="/logos/discord-mark.svg" alt="Discord">
            Discord logo
        </a>
        <a href="https://www.redditinc.com/brand" class="attribution-link">
            <img src="/logos/reddit-mark.svg" alt="Reddit">
            Reddit logo
        </a>
        <a href="https://www.youtube.com/howyoutubeworks/resources/brand-resources/" class="attribution-link">
            <img src="/logos/youtube-mark.svg" alt="YouTube">
            YouTube logo
        </a>
        <span class="text-xs font-normal text-black">
            Logos are property of their respective owners.
        </span>
    </div>
</div>
