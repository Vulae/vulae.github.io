<!--
    To whomever is reading this:
        In my very little wisdom, I have decided to attempt remaking this.
        I have completely forgot how shit webdev is, like how does anyone do this without going insane?
        So much stuff just doesn't work how you'd expect, and maybe it's not wrong, but it's not entirely correct.

        There's so many stupid hacks and stuff, which when I look back at pre svelte-5, it just seems to work, but now it doesn't.
        Mostly having to do with selector specificity just not working basically anywhere.
        And also a bunch of stupid warnings that will not go away, but the project builds without warnings?

        Sorry about the wall of text, just putting it here to remind myself to never touch this again.
-->
<script lang="ts">
    import { onMount } from "svelte";
    import Background from "../components/Background.svelte";
    import Card from "../components/Card.svelte";
    import Kaomoji from "../components/Kaomoji.svelte";

    import {
        LucideChevronDown,
        LucideChevronLeft,
        LucideChevronRight,
    } from "@lucide/svelte";

    let email: string | null = null;
    onMount(() => {
        email = atob("dnVsYWUuZkBnbWFpbC5jb20=");
    });
</script>

<div class="w-screen h-screen grid grid-cols-1 grid-rows-1">
    <Background
        class="w-full h-full col-start-1 col-end-1 row-start-1 row-end-1 object-cover"
    />

    <div
        class="w-full h-full col-start-1 col-end-1 row-start-1 row-end-1 flex flex-col"
    >
        <div class="w-full h-16"></div>
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
                        <!-- font-caveat! selector specificity is stupid. . . -->
                        <span
                            class="px-2 font-caveat! text-8xl font-semibold name"
                        >
                            Vulae
                        </span>
                    </div>
                    <span
                        class="text-2xl text-white drop-shadow-outset text-center"
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

                <Card
                    class="flex flex-col text-white text-lg font-semibold"
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
        <div class="w-full h-16">
            <div
                class="bg-gradient-to-b from-transparent to-black w-full h-full"
            >
                <a
                    href="#projects"
                    class="flex justify-around mix-blend-color-dodge opacity-50 text-white hover:text-gray-200 hover:translate-y-1 transition-all"
                >
                    <LucideChevronDown size="42px" class="not-lg:hidden" />
                    <LucideChevronDown size="42px" class="not-sm:hidden" />
                    <LucideChevronDown size="42px" />
                </a>
            </div>
        </div>
    </div>
</div>

<div
    class="w-screen flex flex-col items-center bg-gradient-to-br from-pink-950 to-purple-950"
>
    <div class="w-full h-16 bg-gradient-to-b from-black to-transparent"></div>

    <div class="p-16 flex flex-col gap-16" id="projects">
        <dl class="px-4 py-2 max-w-lg mx-auto">
            <dt class="text-zinc-200 text-4xl font-bold mb-1">Projects</dt>
            <dd class="text-zinc-400 text-2xl">
                For a more extensive list of projects check out my
                <a
                    href="https://github.com/Vulae?tab=repositories"
                    class="link"
                >
                    GitHub
                </a>
            </dd>
        </dl>

        <div class="flex flex-col items-center">
            <div
                class="grid items-center justify-items-center md:grid-cols-2 not-md:max-w-[24rem] max-w-[48rem] gap-6 text-zinc-200"
            >
                <div class="text-xl p-4">
                    <a
                        href="https://github.com/Vulae/pkmc"
                        class="link text-3xl font-bold"
                    >
                        pkmc
                    </a>
                    <br />
                    Framework for building simple minigame-like Minecraft servers
                    in Rust
                </div>
                <img src="/pkmc.png" alt="pkmc" class="h-48" />
                <div class="text-xl p-4">
                    <a
                        href="https://github.com/Vulae/infinite-minesweeper"
                        class="link text-3xl font-bold"
                    >
                        infinite-minesweeper
                    </a>
                    <br />
                    Infinite Minesweeper game with biomes that change the rules
                    <span class="font-bold flex items-center">
                        <LucideChevronRight strokeWidth="0.175rem" />
                        <a
                            href="https://vulae.github.io/infinite-minesweeper"
                            class="link"
                            target="_blank"
                        >
                            PLAY
                        </a>
                        <LucideChevronLeft strokeWidth="0.175rem" />
                    </span>
                </div>
                <a
                    href="https://vulae.github.io/infinite-minesweeper"
                    target="_blank"
                    class="hover:scale-105 transition-transform"
                >
                    <img
                        src="/infinite-minesweeper.png"
                        alt="Infinite Minesweeper"
                        class="h-48"
                    />
                </a>
                <div class="text-xl p-4">
                    <a
                        href="https://github.com/Vulae/universal-explorer"
                        class="link text-3xl font-bold"
                    >
                        universal-explorer
                    </a>
                    <br />
                    Simple tool to view & unpack a variety of game archive formats
                </div>
                <img
                    src="/universal-explorer.png"
                    alt="Universal Explorer"
                    class="h-48"
                />
            </div>
        </div>
    </div>

    <div class="w-full h-16 bg-gradient-to-b from-transparent to-black"></div>
</div>

<footer
    class="bg-black text-white flex flex-wrap justify-center gap-x-32 gap-y-12 px-16 py-4"
>
    {#snippet footerLinks(groups: {
        [key: string]: {
            [key: string]: string;
        };
    })}
        {#each Object.entries(groups) as [groupName, group]}
            <section class="flex flex-col">
                <h1 class="font-bold">{groupName}</h1>
                <span class="pl-4 flex flex-col border-l-2 border-l-white">
                    {#each Object.entries(group) as [linkName, link]}
                        <a
                            href={link}
                            target={link.startsWith("http") ? "_blank" : ""}
                            class="text-gray-300 hover:text-white transition-colors underline"
                        >
                            {linkName}
                        </a>
                    {/each}
                </span>
            </section>
        {/each}
    {/snippet}

    {@render footerLinks({
        Contact: {
            Email: `mailto:${email}`,
            Discord: "https://discordapp.com/users/1043398419030482994",
        },
        Other: {
            Source: "https://github.com/Vulae/vulae.github.io",
            Kaomoji: "/kaomoji.txt",
        },
        "Logo Attribution": {
            GitHub: "https://github.com/logos",
            Discord: "https://discord.com/branding",
            Twitch: "https://brand.twitch.com/",
            YouTube:
                "https://www.youtube.com/howyoutubeworks/resources/brand-resources/",
            Reddit: "https://www.redditinc.com/brand",
        },
    })}
</footer>

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
