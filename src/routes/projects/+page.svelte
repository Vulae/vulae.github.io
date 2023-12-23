<script lang="ts">
    import Background from "$components/Background.svelte";
    import Profile from "$components/Profile.svelte";
    import ProjectCard from "$components/ProjectCard.svelte";

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
    <div class="flex justify-center gap-6">
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
            <div slot="content" class="relative">
                <Background class="absolute w-full h-full"/>
                <div class="scale-50">
                    <Profile />
                </div>
            </div>
        </ProjectCard>
        <ProjectCard class="w-80 bg-zinc-950">
            <slot:fragment slot="title">
                That's all!
            </slot:fragment>
            <slot:fragment slot="description">
                I'm sorta new here so there wont me much for a while. . .
            </slot:fragment>
            <div slot="content" class="relative" />
        </ProjectCard>
    </div>
</div>

<div class="w-full h-32" />
