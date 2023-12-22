<script lang="ts">
    import Background from "$components/Background.svelte";
    import Card from "$components/Card.svelte";
    import Profile from "$components/Profile.svelte";
    import SocialLink from "$components/SocialLink.svelte";

</script>

<svelte:head>
    <title>Vulae</title>
</svelte:head>

<Background class="absolute w-full h-full" />

<div class="w-screen h-screen flex items-center justify-center">
    <div class="flex flex-wrap items-center justify-center gap-16 p-8 max-w-full max-h-full">
        
        <Profile />
        
        <div class="w-1 h-72 max-md:hidden rounded-full bg-zinc-800 drop-shadow-outset-sm" />
        <div class="w-full max-w-md h-1 md:hidden rounded-full bg-zinc-800 drop-shadow-outset-sm" />
    
        <Card
            class="flex flex-col text-white font-segoe text-lg font-semibold"
            glowSize={300}
        >
            <span class="m-auto p-1">
                Links
            </span>
            <div class="flex flex-col gap-1 py-2 border-t border-t-zinc-800">
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
        </Card>
    </div>
    
    <div class="popup fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50 bg-black bg-opacity-50" id="logos">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <!-- svelte-ignore a11y-missing-content -->
        <a class="fixed top-0 bottom-0 left-0 right-0" href="#"></a>
        <Card
            class="flex flex-col text-white font-segoe text-lg font-semibold"
            glowSize={300}
        >
            <span class="m-auto p-1">
                Logo Attribution
            </span>
            <div class="flex flex-col gap-1 py-2 border-t border-t-zinc-800">
                <div class="flex flex-col px-8">
                    <SocialLink href="https://github.com/logos" img="/logos/github-mark.svg" img_alt="GitHub" newTab={false}>GitHub logo</SocialLink>
                    <SocialLink href="https://discord.com/branding" img="/logos/discord-mark.svg" img_alt="Discord" newTab={false}>Discord logo</SocialLink>
                    <SocialLink href="https://www.redditinc.com/brand" img="/logos/reddit-mark.svg" img_alt="Reddit" newTab={false}>Reddit logo</SocialLink>
                    <SocialLink href="https://www.youtube.com/howyoutubeworks/resources/brand-resources/" img="/logos/youtube-mark.svg" img_alt="YouTube" newTab={false}>YouTube logo</SocialLink>
                </div>
                <span class="mx-auto text-xs font-normal">
                    Logos are property of their respective owners.
                </span>
            </div>
        </Card>
    </div>
</div>
