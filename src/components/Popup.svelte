<script lang="ts">
    export let id: string;

</script>

<style lang="scss">
    .popup {
        @apply transition-opacity;
        opacity: 0;
        visibility: hidden;

        &:target {
            opacity: 1;
            visibility: visible;
        }
    }
</style>

<div
    {id}
    class="popup z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <!-- svelte-ignore a11y-missing-content -->
    <a
        href="#"
        class="absolute top-0 bottom-0 left-0 right-0"
    />
    <slot />
</div>