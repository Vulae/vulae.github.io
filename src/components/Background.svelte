<script lang="ts">

    let _class: string = '';
    export { _class as class }

</script>

<img
    src="/background.svg"
    alt="Background"
    class="motion-reduce:hidden {_class}"
    style:view-transition-name="background"
/>
<img
    src="/background-static.svg"
    alt="Background"
    class="motion-safe:hidden {_class}"
    style:view-transition-name="background"
/>
