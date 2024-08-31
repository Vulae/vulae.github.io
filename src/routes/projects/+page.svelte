<script lang="ts">
    import Background from "$components/Background.svelte";
    import Profile from "$components/Profile.svelte";
    import ProjectCard from "./ProjectCard.svelte";

</script>

<svelte:head>
    <title>Vulae - Projects</title>
</svelte:head>

<div class="px-16 py-4">
    <a href="/" class="p-4 text-white font-bold text-1xl">Back</a>
    <dl class="font-segoe px-4 py-2 max-w-lg mx-auto my-16">
        <dt class="text-zinc-200 text-4xl font-bold mb-1">
            My Projects
        </dt>
        <dd class="text-zinc-400 text-2xl">
            For a more extensive list of projects check out my <a href="https://github.com/Vulae?tab=repositories">GitHub</a>.
        </dd>
    </dl>
    <div class="flex justify-center flex-wrap gap-6">
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                <a href="/">vulae.github.io</a>
            </slot:fragment>
            <slot:fragment slot="description">
                This website!
                Built in
                <a href="https://svelte.dev/">Svelte <span class="text-red-500 text-outline text-outline-red-400">♥</span></a>
                with <a href="https://tailwindcss.com/">Tailwind CSS</a> —
                <a href="https://github.com/Vulae/vulae.github.io">Source code</a>.
            </slot:fragment>
            <slot:fragment slot="extra">
                <div class="relative">
                    <Background class="absolute w-full h-full"/>
                    <div class="w-full h-full flex justify-center items-center">
                        <div class="scale-50">
                            <Profile />
                        </div>
                    </div>
                </div>
            </slot:fragment>
        </ProjectCard>
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                <a href="https://github.com/Vulae/infinite-minesweeper" target="_blank">Infinite Minesweeper</a>
            </slot:fragment>
            <slot:fragment slot="description">
                Infinite Minesweeper game with biomes that change the rules.
            </slot:fragment>
            <slot:fragment slot="extra">
                <a href="https://vulae.github.io/infinite-minesweeper/" target="_blank">
                    <img
                        class="w-full h-full bg-black object-cover"
                        src="/infinite-minesweeper.png"
                        alt="Infinite Minesweeper"
                    >
                </a>
            </slot:fragment>
        </ProjectCard>
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                <a href="https://github.com/Vulae/universal-explorer" target="_blank">universal-explorer</a>
            </slot:fragment>
            <slot:fragment slot="description">
                Simple tool to view & unpack a variety of game archive formats. 
            </slot:fragment>
        </ProjectCard>
        <!-- <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                <a href="https://github.com/Vulae/itch-io-downloader">itch-io-downloader</a>
            </slot:fragment>
            <slot:fragment slot="description">
                Download & play <a href="https://itch.io/">Itch.io</a> games directly from the game's page.
            </slot:fragment>
            <slot:fragment slot="extra">
                <a href="https://github.com/Vulae/itch-io-downloader/releases/latest" target="_blank">
                    <img
                        class="w-full h-full bg-black object-contain"
                        src="/itch-io-downloader.png"
                        alt="itch-io-downloader"
                    >
                </a>
            </slot:fragment>
        </ProjectCard> -->
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                <a href="https://github.com/Vulae/gmod-bad-apple">gmod-bad-apple</a>
            </slot:fragment>
            <slot:fragment slot="description">
                A bi-level video encoder to play <a href="https://www.youtube.com/watch?v=FtutLA63Cp8">Bad Apple</a> inside <a href="https://gmod.facepunch.com/">Garry's Mod</a>
                using <a href="https://www.wiremod.com/">Wiremod</a>.
            </slot:fragment>
            <slot:fragment slot="extra">
                <a href="https://www.youtube.com/watch?v=nf00VvO-mEk" target="_blank">
                    <img
                        class="w-full h-full bg-black object-contain"
                        src="https://img.youtube.com/vi/nf00VvO-mEk/0.jpg"
                        alt="gmod-bad-apple"
                    >
                </a>
            </slot:fragment>
        </ProjectCard>
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                <a href="https://github.com/Vulae/yt-dlp-music-player" target="_blank">yt-dlp-music-player</a>
            </slot:fragment>
            <slot:fragment slot="description">
                A simple Windows media player to download & play a Youtube playlist of songs.
            </slot:fragment>
        </ProjectCard>
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                That's all!
            </slot:fragment>
            <slot:fragment slot="description">
                Check out my <a href="https://github.com/Vulae">GitHub</a> for all of my projects.
            </slot:fragment>
        </ProjectCard>
    </div>
</div>

<div class="w-full h-32" />
