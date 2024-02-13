<script lang="ts">
    import Card from "$components/Card.svelte";

    let _class: string = '';
    export { _class as class };

</script>

<Card class="overflow-hidden flex flex-col justify-between {_class}">
    <dl class="font-segoe px-4 py-2">
        <dt class="text-zinc-200 text-2xl font-bold mb-1">
            <slot name="title" />
        </dt>
        <dd class="text-zinc-400 text-xl">
            <slot name="description" />
        </dd>
    </dl>
    <div class="pt-4 pl-8 w-full h-48">
        <div class="float-right w-full rounded-tl-xl overflow-clip h-full">
            <slot name="extra" />
        </div>
    </div>
</Card>
