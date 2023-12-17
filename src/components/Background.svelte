
<script lang="ts">
    import { onMount } from "svelte";

    let seed = 1;

    onMount(() => {
        seed = Math.floor(Math.random()*1000000)
    });

</script>

<style lang="scss">

    /* This animation is needed to hide the seed change. */
    @keyframes fade-in {
        from { opacity: 0; filter: blur(20px); }
        to { opacity: 1; filter: blur(0px); }
    }

    .fade-in {
        opacity: 0;
        animation-name: fade-in;
        animation-duration: 0.8s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
    }

</style>

<!-- Huge help: https://codepen.io/finnhvman/pen/abWrPBZ -->
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" class="fade-in">
    
    <defs>

        <filter id="stars">
            <feTurbulence baseFrequency="0.2" {seed} />
            <feColorMatrix values="0 0 0 9 -5
                                   0 0 0 9 -5
                                   0 0 0 9 -5
                                   0 0 0 0 1" />
            <feBlend in="SourceGraphic" mode="screen" />
        </filter>

        <filter id="nebula1">
            <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" {seed} />
            <feColorMatrix values="0.3 0 0 0 0
                                   0 0 0 0 0
                                   0 0 1.2 0 0
                                   0.5 -0.5 0.5 0 0" />
        </filter>

        <filter id="nebula2">
            <feTurbulence type="fractalNoise" baseFrequency="0.002" numOctaves="3" seed={seed+1} />
            <feColorMatrix values="0 0 0 0 0
                                   0 0 0 0 0
                                   0 0 0.5 0 0
                                   0.5 -0.5 0.2 0 0" />
        </filter>

    </defs>

    <rect width="100%" height="100%" fill="black" />

    <g width="100%" height="100%" filter="url(#stars)">
        <rect width="100%" height="100%" filter="url(#nebula1)" />
        <rect width="100%" height="100%" filter="url(#nebula2)" />
    </g>

</svg>
