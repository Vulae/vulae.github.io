<script lang="ts">
    import TitleCard from "$components/TitleCard.svelte";

</script>

<svelte:head>
    <title>Vulae - Setup</title>
</svelte:head>

<style lang="scss">

    td {
        @apply px-2 py-1 border border-zinc-400;
    }

</style>

<div class="px-16 py-4">
    <a href="/" class="p-4 text-white font-bold text-1xl">Back</a>
    <dl class="font-segoe px-4 pb-2 max-w-lg mx-auto my-16">
        <dt class="text-zinc-200 text-4xl font-bold mb-1">
            My Setup
        </dt>
        <dd class="text-zinc-400 text-2xl">
            PC specs, code editor, & tools I use.
        </dd>
    </dl>
    <div class="grid grid-rows-2 md:grid-cols-2 gap-8 mx-auto max-w-5xl">
        <TitleCard class="bg-zinc-950 row-span-2">
            <slot:fragment slot="title">
                PC Specs
            </slot:fragment>
            <slot:fragment slot="description">
                <table class="w-full">
                    <tr>
                        <td>CPU</td>
                        <td>AMD Ryzen 5 5600G</td>
                    </tr>
                    <tr>
                        <td>GPU</td>
                        <td>NVIDIA GeForce GTX 1060 6GB</td>
                    </tr>
                    <tr>
                        <td>Memory</td>
                        <td>16 GB 3600MHz DDR4</td>
                    </tr>
                    <tr>
                        <td>Storage</td>
                        <td>1TB SSD & 2TB HDD</td>
                    </tr>
                    <tr>
                        <td>OS</td>
                        <td>Windows 10 Home</td>
                    </tr>
                </table>
            </slot:fragment>
        </TitleCard>
        <TitleCard class="bg-zinc-950 col-span-1">
            <slot:fragment slot="title">
                Code Editor
            </slot:fragment>
            <slot:fragment slot="description">
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                <br />
                Theme - Default (Dark Modern)
                <br />
                Font - Default (Consolas, 'Courier New', monospace)
            </slot:fragment>
        </TitleCard>
        <TitleCard class="bg-zinc-950 col-span-1">
            <slot:fragment slot="title">
                Tools
            </slot:fragment>
            <slot:fragment slot="description">
                <a href="https://getpaint.net/">paint.net</a> (Image editing)
                <br />
                <a href="https://notepad-plus-plus.org/">Notepad++</a> (Text editing)
                <br />
                <a href="https://www.blender.org/">Blender</a> (3d modelling & video editing)
                <br />
                <a href="https://obsproject.com/">OBS Studio</a> (Video recording)
            </slot:fragment>
        </TitleCard>
    </div>
</div>

<div class="w-full h-32" />
