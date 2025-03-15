<script lang="ts">
    import type { Snippet } from "svelte";
    import type { Action } from "svelte/action";

    let {
        class: _class = "",
        glowSize = 700,
        glowVisibility = 0.15,
        children,
    }: {
        class?: string;
        glowSize?: number;
        glowVisibility?: number;
        children: Snippet<[]>;
    } = $props();

    /** Injects `--mouse-x` & `--mouse-y` variables into element style. */
    const cursorStyle: Action<HTMLElement> = (node) => {
        const handleMouseMove = (ev: MouseEvent) => {
            if (ev.defaultPrevented) return;
            if (!node) return;
            const nodeRect = node.getBoundingClientRect();
            node.style.setProperty("--mouse-x", `${ev.clientX - nodeRect.x}px`);
            node.style.setProperty("--mouse-y", `${ev.clientY - nodeRect.y}px`);
        };

        node.addEventListener("mousemove", handleMouseMove);

        return {
            destroy() {
                node.removeEventListener("mousemove", handleMouseMove);
            },
        };
    };
</script>

<div
    use:cursorStyle
    class="glow bg-zinc-900/50 backdrop-blur-md border border-zinc-800 rounded-xl drop-shadow-lg {_class}"
    style:--glow-size="{glowSize}px"
    style:--glow-visibility={glowVisibility}
>
    {@render children()}
</div>

<style>
    .glow {
        position: relative;

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            border-radius: var(--radius-xl);
            z-index: -10;
            content: "";
            transition: opacity 0.5s;
            opacity: 0;
            background: rgba(255, 255, 255, 0.1);
            background-size: 100px;
            mix-blend-mode: screen;
            background-blend-mode: screen;
            mask-image: radial-gradient(
                var(--glow-size) circle at var(--mouse-x) var(--mouse-y),
                rgba(0, 0, 0, 1),
                transparent 70%
            );
        }
        &:hover::before {
            opacity: var(--glow-visibility);
        }
    }
</style>
