<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import "../style.scss";

    onNavigate(navigation => {
        // @ts-ignore
        if(!document.startViewTransition) return;

        return new Promise(resolve => {
            // @ts-ignore
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });

    });

</script>

<svelte:head>
    <meta name="view-transition" content="same-origin" />
</svelte:head>

<slot />
