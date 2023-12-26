<script lang="ts">
    import Card from "./Card.svelte";
    import TitleCard from "./TitleCard.svelte";

    let _class: string = '';
    export { _class as class };

</script>

<TitleCard class={_class}>
    <slot:fragment slot="title">
        <slot name="title"/>
    </slot:fragment>
    <slot:fragment slot="description">
        <slot name="description"/>
    </slot:fragment>
    <slot:fragment slot="extra">
        <div class="pt-6 pl-8">
            <div class="float-right rounded-tl-xl overflow-hidden">
                <slot name="content" />
            </div>
        </div>
    </slot:fragment>
</TitleCard>
