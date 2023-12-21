
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

<div class="bg-purple-950 w-full h-full">
    <!-- Huge help: https://codepen.io/finnhvman/pen/abWrPBZ -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" class="fade-in">
    
        <defs>
    
            <filter id="stars" color-interpolation-filters="sRGB">
                <feTurbulence baseFrequency="0.2" {seed} />
                <feColorMatrix values="0 0 0 9 -5
                                       0 0 0 9 -5
                                       0 0 0 9 -5
                                       0 0 0 0 1" />
                <feBlend in="SourceGraphic" mode="screen" />
            </filter>
    
            <!-- TODO: Animate the nebulae moving and morphing instead of just changing colors. -->
            <filter id="nebula1" color-interpolation-filters="sRGB">
                <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" {seed} />
                <feColorMatrix values="0.3 0 0 0 0
                                       0 0 0 0 0
                                       0 0 0.5 0 0
                                       0.5 -0.5 0.5 1 0"/>
                <feColorMatrix type="hueRotate">
                    <animate attributeName="values" values="0;360" dur="120s" repeatCount="indefinite" />
                </feColorMatrix>
            </filter>
    
            <filter id="nebula2" color-interpolation-filters="sRGB">
                <feTurbulence type="fractalNoise" baseFrequency="0.002" numOctaves="3" seed={seed+1} />
                <feColorMatrix values="0 0 0 0 0
                                       0 0 0 0 0
                                       0 0 0.7 0 0
                                       0.5 -0.5 0.5 0 0" />
                <feColorMatrix type="hueRotate">
                    <animate attributeName="values" values="0;360" dur="120s" repeatCount="indefinite" />
                </feColorMatrix>
            </filter>
            
            <!-- A perspective effect to immerse more into space instead of just being a flat wallpaper. -->
            <!-- https://www.smashingmagazine.com/2021/09/deep-dive-wonderful-world-svg-displacement-filtering/ -->
            <!-- https://garden.bradwoods.io/notes/svg/filters/fedisplacementmap -->
            <linearGradient id="displacement-x" x1="0" x2="1" y1="0" y2="0" color-interpolation="sRGB" gradientUnits="objectBoundingBox">
                <stop offset="0%" stop-color="#F00" stop-opacity="1" />
                <stop offset="100%" stop-color="#F00" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="displacement-y" x1="0" x2="0" y1="0" y2="1" color-interpolation="sRGB" gradientUnits="objectBoundingBox">
                <stop offset="0%" stop-color="#00F" stop-opacity="1" />
                <stop offset="100%" stop-color="#00F" stop-opacity="0" />
            </linearGradient>
            <radialGradient id="displacement-circle">
                <stop offset="0%" stop-color="rgba(127, 127, 127, 1)" />
                <stop offset="75%" stop-color="rgba(127, 127, 127, 1)" />
                <stop offset="100%" stop-color="rgba(127, 127, 127, 0)" />
            </radialGradient>
            <g id="displacement" class="[&>*]:mix-blend-screen">
                <rect width="100%" height="100%" fill="black" />
                <rect width="100%" height="100%" fill="url(#displacement-x)" />
                <rect width="100%" height="100%" fill="url(#displacement-y)" />
                <circle cx="50%" cy="50%" r="50%" fill="url(#displacement-circle)" />
            </g>
            <filter id="perspective">
                <feImage href="#displacement" result="displace" />
                <!-- I for the life of me cannot figure out why this will not displace. -->
                <!-- Displace the displacement map by the SourceGraphic, but not the other way around??????? -->
                <feDisplacementMap
                    in="SourceGraphic"
                    in2="displace"
                    xChannelSelector="R"
                    yChannelSelector="B"
                    scale="50"
                />
            </filter>
    
        </defs>
    
        <rect width="100%" height="100%" fill="black" />
        
        <!-- <g width="100%" height="100%" filter="url(#perspective)"> -->
            <g width="100%" height="100%" filter="url(#stars)">
                <rect width="100%" height="100%" filter="url(#nebula1)" />
                <rect width="100%" height="100%" filter="url(#nebula2)" />
            </g>
        <!-- </g> -->
        
        <!-- <image href="/github.jpg" width="100%" height="100%" filter="url(#perspective)"> -->

    </svg>
</div>
