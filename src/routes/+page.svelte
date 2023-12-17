<script lang="ts">
    import Background from "$components/Background.svelte";
    import { onMount } from "svelte";

    const login: string = 'Vulae';
    let url: string = 'https://github.com/Vulae';
    let name: string = login;
    let avatar: string = '/github.jpg';
    let bio: string | undefined;
    
    onMount(async () => {
        const req = await fetch(`https://api.github.com/users/${login}`)
        const data = await req.json() as object;

        console.log(req, data);

        if(typeof data != 'object' || data == null) {
            throw new Error('Failed to parse request data.');
        }


        if('html_url' in data && typeof data.html_url == 'string') {
            url = data.html_url;
        }
        if('login' in data && typeof data.login == 'string') {
            name = data.login;
        }
        if('name' in data && typeof data.name == 'string') {
            name = data.name;
        }
        if('avatar_url' in data && typeof data.avatar_url == 'string') {
            avatar = data.avatar_url;
        }
        if('bio' in data && typeof data.bio == 'string') {
            bio = data.bio;
        }

    });

</script>

<div class="z-0 absolute w-full h-full bg-purple-950">
    <Background />
</div>

<div class="z-10 flex flex-col items-center gap-2 p-8 max-w-full max-h-full">
    <a
        href={url}
        target="_blank"
        title="GitHub Profile"
        class="flex gap-2 p-4 text-blue-700 visited:text-purple-700 hover:brightness-125 transition-all drop-shadow-outset"
    >
        <img
            src={avatar}
            alt="GitHub Profile"
            class="w-24 h-24 rounded-full border-2 border-"
        >
        <span class="font-caveat text-8xl font-semibold">
            {name}
        </span>
    </a>
    
    {#if bio}
        <span class="font-segoe text-2xl text-white drop-shadow-outset">
            {bio}
        </span>
    {/if}
</div>
