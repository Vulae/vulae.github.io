<script lang="ts">

    let _class: string = '';
    export { _class as class }

</script>

<style lang="scss">

    .background {
        view-transition-name: background;
    }

</style>

<img
    src="/background.svg"
    alt="Background"
    class="background motion-reduce:hidden {_class}"
/>
<img
    src="/background-static.svg"
    alt="Background"
    class="background motion-safe:hidden {_class}"
/>
