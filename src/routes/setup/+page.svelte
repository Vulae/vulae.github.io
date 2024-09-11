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
    <div class="grid md:grid-cols-2 gap-8 mx-auto max-w-5xl">
        <TitleCard class="bg-zinc-950">
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
                        <td>Storage (OS: Windows 10 Home)</td>
                        <td>1TB SSD</td>
                    </tr>
                    <tr>
                        <td>Storage (OS: Fedora Linux)</td>
                        <td>1TB HDD</td>
                    </tr>
                    <tr>
                        <td>Storage (Media storage)</td>
                        <td>2TB HDD</td>
                    </tr>
                </table>
            </slot:fragment>
        </TitleCard>
        <TitleCard>
            <slot:fragment slot="title">
                Linux Setup
            </slot:fragment>
            <slot:fragment slot="description">
                I still have yet to customize any of this<br />
                OS: <a href="https://fedoraproject.org/workstation/">Fedora Linux 40 (Workstation Edition)</a><br />
                Shell: <a href="https://zsh.sourceforge.io/">zsh 5.9</a> with <a href="https://ohmyz.sh/">oh-my-zsh</a><br />
                Terminal: <a href="https://sw.kovidgoyal.net/kitty/">kitty</a><br />
                DE: GNOME 46.4 (wayland)<br />
                WM: Mutter<br />
                WM Theme: Adwaita<br />
            </slot:fragment>
        </TitleCard>
        <TitleCard class="bg-zinc-950">
            <slot:fragment slot="title">
                Tools
            </slot:fragment>
            <slot:fragment slot="description">
                <a href="https://getpaint.net/">paint.net</a> (Basic image editing)<br />
                <a href="https://www.gimp.org/">Gimp</a> (Advanced image editing)<br />
                <a href="https://notepad-plus-plus.org/">Notepad++</a> (Basic text editing)<br />
                <a href="https://www.blender.org/">Blender</a> (3d modelling & video editing)<br />
                <a href="https://obsproject.com/">OBS Studio</a> (Video recording)<br />
                <a href="https://claude.ai/">Claude</a> (AI Assistant)<br />
                <a href="https://gchq.github.io/CyberChef/">CyberChef</a> (Simple data modification)<br />
                <a href="https://github.com/WerWolv/ImHex">ImHex</a> (Binary data forensics)<br />
                <a href="https://godbolt.org/">Compiler Explorer</a><br />
                <a href="https://github.com/yt-dlp/yt-dlp">yt-dlp</a> (Download videos from literally any site)<br />
                <a href="https://pinggy.io/">Pinggy</a> (Tunnel localhost)<br />
            </slot:fragment>
        </TitleCard>
        <TitleCard class="bg-zinc-950">
            <slot:fragment slot="title">
                Code Editor
            </slot:fragment>
            <slot:fragment slot="description">
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                <br />
                Theme - Default (Dark Modern)
                <br />
                Font - Default (Consolas, 'Courier New', monospace)
                <br />
                <br />
                Extensions:
                <a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker" title="Yes I'm bad at spelling.">Code Spell Checker</a>,
                <a href="https://marketplace.visualstudio.com/items?itemName=fill-labs.dependi" title="Just 1 glance to see outdated dependency versions & just 1 click to update dependencies.">Dependi</a>,
                <a href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree" title="You won't believe how many times I make something a future me problem with this extension.">Todo Tree</a>,
                <a href="https://marketplace.visualstudio.com/items?itemName=Katsute.code-background" title="Anime girl background!">Background</a>
                <br />
                <small class="text-sm">
                    There's a bunch more extensions but they're all language-specific.
                </small>
                <br />
                <br />
                <a href="https://zed.dev/">Zed</a>
                <br />
                Theme - Catppuccin Mocha
                <br />
                Font - Zed Plex Mono
            </slot:fragment>
        </TitleCard>
    </div>
</div>

<div class="w-full h-32" />
