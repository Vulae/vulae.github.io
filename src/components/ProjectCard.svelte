<script lang="ts">
    import Card from "./Card.svelte";

    let _class: string = '';
    export { _class as class };

</script>

<Card class="overflow-hidden {_class}">
    <dl class="font-segoe px-4 py-2">
        <dt class="text-zinc-200 text-2xl font-bold mb-1">
            <slot name="title" />
        </dt>
        <dd class="text-zinc-400 text-xl">
            <slot name="description" />
        </dd>
    </dl>
    <div class="pt-6 pl-8">
        <div class="float-right rounded-tl-xl overflow-hidden">
            <slot name="content" />
        </div>
    </div>
</Card>
