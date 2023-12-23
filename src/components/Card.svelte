<script lang="ts">
    import { cursorStyle } from "$lib/CursorStyle";

    let _class: string = '';
    export { _class as class };

    export let glowSize: number = 700;
    export let glowVisibility: number = 0.15;

</script>

<style lang="scss">

    .glow {
        @apply relative;

        &::before {
            @apply absolute top-0 left-0 w-full h-full pointer-events-none rounded-xl -z-10;
            content: '';
            transition: opacity 0.5s;
            opacity: 0;
            background: rgba(255, 255, 255, 0.1) url('/grain.svg');
            background-size: 100px;
            mix-blend-mode: screen;
            background-blend-mode: screen;
            mask-image: radial-gradient(var(--glow-size) circle at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 1), transparent 70%);
        }
        &:hover::before {
            opacity: var(--glow-visibility);
        }
    }

</style>

<div
    use:cursorStyle
    class="glow bg-zinc-900 bg-opacity-50 backdrop-blur-md border border-zinc-800 rounded-xl drop-shadow-lg {_class}"
    style:--glow-size="{glowSize}px"
    style:--glow-visibility={glowVisibility}
>
    <slot />
</div>
