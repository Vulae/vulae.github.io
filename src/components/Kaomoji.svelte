<script lang="ts">
    import { onMount } from "svelte";

    let kaomoji = "o_o";
    
    function random(seed: number, input: number): number {
        function u32(n: number): number {
            return n >>> 0;
        }
        seed = Math.round(seed);
        input = Math.round(input);
        const MUL = 1664525;
        const ACC = 1013904223;
        const combined = u32(u32(u32(seed * MUL) + input) + ACC);
        return u32(u32(combined * MUL) + ACC);
    }

    onMount(async () => {
        const kaomojiListString = await (await fetch("/kaomoji.txt")).text();
        const kaomojiList = kaomojiListString.split('\n').filter(s => !s.startsWith("###"));
        const daysSinceEpoch = Date.now() / 8.64e7;
        const generatedRandom = random(0x52889B44, daysSinceEpoch);
        kaomoji = kaomojiList[generatedRandom % kaomojiList.length]
    });

</script>

<span class="text-nowrap whitespace-nowrap">{kaomoji}</span>
