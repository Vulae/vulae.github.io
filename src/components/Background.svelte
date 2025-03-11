<!-- Firefox has issues rendering the SVG, so we just use a static .png for firefox. -->

<script lang="ts">
    let { class: _class = "" }: { class?: string } = $props();
</script>

<img
    src="./background.svg"
    alt="Background"
    class="background-animated {_class}"
/>
<img
    src="./background-static.png"
    alt="Background"
    class="background-static {_class}"
/>

<style>
    @supports (-moz-appearance: none) {
        .background-static {
            display: block !important;
        }
        .background-animated {
            display: none !important;
        }
    }
</style>
