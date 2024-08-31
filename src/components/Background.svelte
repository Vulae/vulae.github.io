<script lang="ts">
    let _class: string = '';
    export { _class as class }
</script>

<style lang="scss">
    // In Firefox rendering the background SVG is EXTREMELY slow & buggy.
    // It does render still just the scaling is all messed up at very specific sizes (Like very weird sizes I actually have 0 clue why.)
    // So I just disable it to prevent page from going unresponsive.
    @supports (-moz-appearance: none) {
        .background-motion-reduce {
            display: none;
        }
        .background-static {
            display: block !important;
        }
    }

    .background {
        view-transition-name: background;
    }
</style>

<img
    src="/background.svg"
    alt="Background"
    class="background background-motion-reduce motion-reduce:hidden {_class}"
/>
<img
    src="/background-static.png"
    alt="Background"
    class="background background-static motion-safe:hidden object-cover {_class}"
/>
