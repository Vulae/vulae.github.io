<script lang="ts">
    export let href: string;
    export let img: string;
    export let img_alt: string;
    export let newTab: boolean = true;
    export let title: string | undefined = undefined;
</script>

<style lang="scss">

    .social-link {
        @apply flex items-center justify-between gap-4 px-8 py-2 drop-shadow-sm transition-all text-white;

        & > img {
            @apply w-8;
        }

        &:hover {
            @apply drop-shadow-lg text-gray-300 scale-[105%];
        }
    }

</style>

<a class="social-link" {href} target={newTab ? "_blank" : "_self"} {title}>
    <img src={img} alt={img_alt} />
    <slot />
</a>
