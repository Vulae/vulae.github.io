<script lang="ts">
    import Background from "../components/Background.svelte";
    import Card from "../components/Card.svelte";
    import Kaomoji from "../components/Kaomoji.svelte";
</script>

{#snippet socialLink(
    href: string,
    img: string,
    img_alt: string,
    title: string,
    text: string,
)}
    <a
        {href}
        {title}
        class="flex items-center justify-between gap-4 px-8 py-2 drop-shadow-sm transition-all hover:drop-shadow-lg hover:text-gray-300 hover:scale-105"
        target="_blank"
    >
        <img src={img} alt={img_alt} class="w-8" />
        {text}
    </a>
{/snippet}

<div class="w-screen h-screen grid grid-cols-1 grid-rows-1">
    <Background
        class="w-full h-full col-start-1 col-end-1 row-start-1 row-end-1 object-cover static"
    />

    <div
        class="w-full h-full col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col"
    >
        <div class="w-screen h-screen flex items-center justify-center">
            <div
                class="flex max-lg:flex-col flex-wrap items-center justify-center gap-16 p-8 max-w-full max-h-full"
            >
                <div class="profile flex flex-col gap-4">
                    <div
                        class="group flex justify-center gap-2 px-2 py-4 profile-avatar-name"
                    >
                        <img
                            src="/picture.png"
                            alt="Profile Profile"
                            class="w-24 h-24 rounded-full border-2 border-zinc-900"
                        />
                        <span
                            class="px-2 font-caveat text-8xl font-semibold name"
                        >
                            Vulae
                        </span>
                    </div>
                    <span
                        class="font-segoe text-2xl text-white drop-shadow-outset text-center"
                    >
                        I program <span class="italic">sometimes</span> . . .
                        <Kaomoji />
                    </span>
                </div>

                <div
                    class="w-1 h-72 max-lg:hidden rounded-full bg-zinc-800 drop-shadow-outset-sm"
                ></div>
                <div
                    class="w-full h-1 lg:hidden rounded-full bg-zinc-800 drop-shadow-outset-sm"
                ></div>

                <Card
                    class="flex flex-col text-white font-segoe text-lg font-semibold"
                    glowSize={300}
                >
                    <span
                        class="text-center w-full p-2 border-b border-zinc-800"
                    >
                        Links
                    </span>
                    <div class="flex flex-col px-8 py-1">
                        {@render socialLink(
                            "https://github.com/Vulae",
                            "/logos/github-mark.svg",
                            "GitHub",
                            "GitHub profile",
                            "Vulae",
                        )}
                        {@render socialLink(
                            "https://discordapp.com/users/1043398419030482994",
                            "/logos/discord-mark.svg",
                            "Discord",
                            "Add as friend on Discord",
                            "@vulae",
                        )}
                        {@render socialLink(
                            "https://www.twitch.tv/vulae_",
                            "/logos/twitch-mark.svg",
                            "Twitch",
                            "Twitch channel",
                            "Vulae_",
                        )}
                        {@render socialLink(
                            "https://www.youtube.com/@vulae",
                            "/logos/youtube-mark.svg",
                            "YouTube",
                            "YouTube channel",
                            "@vulae",
                        )}
                        {@render socialLink(
                            "https://www.reddit.com/user/vulae_",
                            "/logos/reddit-mark.svg",
                            "Reddit",
                            "Reddit profile",
                            "u/vulae_",
                        )}
                    </div>
                </Card>
            </div>
        </div>
    </div>
</div>

<style>
    .profile-avatar-name {
        filter: drop-shadow(5px 3px 2px black);
    }

    .name {
        background: linear-gradient(
            56deg,
            rgba(139, 0, 181, 1) 10%,
            rgba(0, 130, 176, 1) 50%,
            rgba(0, 33, 255, 1) 80%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
