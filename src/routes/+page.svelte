<script lang="ts">
    import Background from "$components/Background.svelte";
    import Profile from "$components/Profile.svelte";
    import SocialLink from "$components/SocialLink.svelte";

</script>

<svelte:head>
    <title>Vulae</title>
</svelte:head>

<div class="z-0 absolute w-full h-full">
    <Background />
</div>

<div class="z-10 flex flex-wrap items-center justify-center gap-16 p-8 max-w-full max-h-full">
    
    <Profile />
    
    <div class="w-1 h-64 bg-white bg-opacity-50 rounded-full max-md:hidden" />
    <div class="w-full h-1 bg-white bg-opacity-50 rounded-full md:hidden" />

    <div
        class="flex flex-col gap-2 p-2 bg-white bg-opacity-50 backdrop-blur-lg rounded-lg drop-shadow-md text-white font-segoe text-lg font-semibold"
    >

        <span class="flex justify-center w-full border-b-2 border-white pb-2 min-w-[256px]">Links</span>

        <div class="flex flex-col px-8">
            <SocialLink href="https://github.com/Vulae" img="/logos/github-mark.svg" img_alt="GitHub" title="GitHub profile">Vulae</SocialLink>
            <SocialLink href="https://discordapp.com/users/1043398419030482994" img="/logos/discord-mark.svg" img_alt="Discord" title="Add as friend on Discord">vulae</SocialLink>
            <SocialLink href="https://www.reddit.com/user/vulae_" img="/logos/reddit-mark.svg" img_alt="Reddit" title="Reddit profile">u/vulae_</SocialLink>
            <SocialLink href="https://www.youtube.com/@vulae" img="/logos/youtube-mark.svg" img_alt="YouTube" title="YouTube channel">@vulae</SocialLink>
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
        <SocialLink href="https://github.com/logos" img="/logos/github-mark.svg" img_alt="GitHub" newTab={false}>GitHub logo</SocialLink>
        <SocialLink href="https://discord.com/branding" img="/logos/discord-mark.svg" img_alt="Discord" newTab={false}>Discord logo</SocialLink>
        <SocialLink href="https://www.redditinc.com/brand" img="/logos/reddit-mark.svg" img_alt="Reddit" newTab={false}>Reddit logo</SocialLink>
        <SocialLink href="https://www.youtube.com/howyoutubeworks/resources/brand-resources/" img="/logos/youtube-mark.svg" img_alt="YouTube" newTab={false}>YouTube logo</SocialLink>
        <span class="text-xs font-normal text-black">
            Logos are property of their respective owners.
        </span>
    </div>
</div>
