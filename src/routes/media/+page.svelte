<script lang="ts">
    import AnimeSquare from "./AnimeSquare.svelte";
    import TitleCard from "$components/TitleCard.svelte";

</script>

<svelte:head>
    <title>Vulae - Media</title>
</svelte:head>

<style lang="scss">

    .creator-list {
        & > a {
            @apply flex gap-2 items-center;
            & > img {
                @apply rounded-full w-6 h-6;
            }
        }
    }

</style>

<div class="px-16 py-4">
    <a href="/" class="p-4 text-white font-bold text-1xl">Back</a>
    <dl class="font-segoe px-4 pb-2 max-w-lg mx-auto my-16">
        <dt class="text-zinc-200 text-4xl font-bold mb-1">
            Media I Like
        </dt>
        <dd class="text-zinc-400 text-2xl">
            Here's a list of awesome media that I love and would recommend to you.
        </dd>
    </dl>
    <div class="grid grid-rows-2 md:grid-cols-2 gap-8 mx-auto max-w-5xl">
        <TitleCard class="bg-zinc-950 row-span-2">
            <!-- <slot:fragment slot="title">
                YouTube
            </slot:fragment> -->
            <slot:fragment slot="description">
                <h1 class="text-white text-2xl font-bold">YouTube</h1>
                <span>
                    Tech channels that are awesome —
                </span>
                <div class="creator-list">
                    <a href="https://www.youtube.com/@Bismuth9" title="World record and tool-assisted speedrun explanations.">
                        <img src="https://yt3.googleusercontent.com/SSREcpreiHTyS3kTfBIOCOUNByeVb-3gvQoekzwZiVJMlY24_NqeTOZggIEI5UwyljSDurmP8w=s24" alt="@Bismuth9 Avatar" />
                        Bismuth
                    </a>
                    <a href="https://www.youtube.com/@BranchEducation" title="How do Microchips work?  How does your smartphone camera work?  How does Bluetooth work?  At Branch Education, we dive deep into the science, engineering, and technology in our modern world using 3D animation and incredibly detailed models. ">
                        <img src="https://yt3.googleusercontent.com/4toKBJKPsAfwxy2xfr_EQJ7CuHpLvZa4eux6T2TAf8EU25uH_G9gbUA9djqaCrTjkIESnPjzww=s24" alt="@BranchEducation Avatar" />
                        Branch Education
                    </a>
                    <a href="https://www.youtube.com/@acegikmo" title="I do videos on tech art, math, game dev, and whatever else I want to project to your screens.">
                        <img src="https://yt3.googleusercontent.com/fRuGUY-F28mPwio41AQwnvnikF2Yy3oFOWoBxK9Xlpri2QhGgCUmy3XoAkJgEGeBdNLaen6SkGo=s24" alt="@acegikmo Avatar" />
                        Freya Holmér
                    </a>
                    <a href="https://www.youtube.com/@MollyRocket" title="This is the official YouTube channel of https://mollyrocket.com, home of Star Code Galaxy, Handmade Hero, Meow the Infinite, and 1935.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQYxNrp39Nz0unYiMMe_FXX1vvRJCtFcNU1h3mWwQ=s24" alt="@MollyRocket Avatar" />
                        Molly Rocket
                    </a>
                    <a href="https://www.youtube.com/@RGMechEx" title="A YouTube channel about video games & programming.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZTgonpqvirGHQ5joSfxra8_5TVq5En1Qvk3ir6xFA=s24" alt="@RGMechEx Avatar" />
                        Retro Game Mechanics Explained
                    </a>
                </div>
                <span>
                    Awesome documentary channels —
                </span>
                <div class="creator-list">
                    <a href="https://www.youtube.com/@XboxAhoy" title="Insightful gaming videos.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRskEAIr9p8xDjGVZZKxZrlaVOqr-mBZFxSycdlKg=s24" alt="@XboxAhoy Avatar" />
                        Ahoy
                    </a>
                    <a href="https://www.youtube.com/@BobbyBroccoli" title="Howdy, I do deep dive broccumentaries into science scandals and controversies. Currently I animate in Blender, and previously dabbled in Google Earth for a bit. Studied engineering physics and photonics in school.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZR9dOg25858-j6LnltCep-FbyzJRjWTksnNzG0o4g=s24" alt="@BobbyBroccoli Avatar" />
                        BobbyBroccoli
                    </a>
                    <a href="https://www.youtube.com/@LEMMiNO" title="Long-form videos about space and mysteries and whatnot.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRUFsEFNGLFNBVN54-xha1omfcAxC2Ny11LvH3P=s24" alt="@LEMMiNO Avatar" />
                        LEMMiNO
                    </a>
                    <a href="https://www.youtube.com/@melodysheep" title="MELODYSHEEP is John D. Boswell, a Washington State based musician and filmmaker.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQLfN7PSjqFFZL_nBtja3eGK2k9JXeMuBzu9Tjh2A=s24" alt="@melodysheep Avatar" />
                        melodysheep
                    </a>
                    <a href="https://www.youtube.com/@SummoningSalt" title="Speedrun history.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZTAYQXQXTL47WWey_Gor-KM7TTVJOia0ORbd9O0_g=s24" alt="@SummoningSalt Avatar" />
                        Summoning Salt
                    </a>
                    <a href="https://www.youtube.com/@sea_space" title="I make chilled out videos about all things space-related. Hope you like what you see, thanks for stopping by! ">
                        <img src="https://yt3.ggpht.com/ZcqlWtkaF6smZqOuyCnUy4nlhRKuusF_5wB2Z-br0YSWBO9NQVhPC6X5LMk-r90w55lniJJ-5w=s24" alt="@sea_space Avatar" />
                        Sea
                    </a>
                </div>
                <span>
                    Some other amazing channels —
                </span>
                <div class="creator-list">
                    <a href="https://www.youtube.com/@Aliensrock" title="Hi I'm Tyler, and I have a puzzle game addiction.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZTf3JO5neXj3mEeQ7sibbIZSHXM8dH5bi9ktsJM=s24" alt="@Aliensrock Avatar" />
                        Aliensrock
                    </a>
                    <a href="https://www.youtube.com/@Asianometry" title="Video essays on business, economics, and history. Sometimes about Asia, but not always. ">
                        <img src="https://yt3.googleusercontent.com/fBpoUkJJ6iVHfHocQ0gPcqLxa1RJIZzdGmP0o72ZK2uVJFwbNt4Afnwmkvv_NikYGCQ6oI7L4dA=s24" alt="@Asianometry Avatar">
                        Asianometry
                    </a>
                    <a href="https://www.youtube.com/@CarlSagan42" title="CarlSagan42 plays Mario games.">
                        <img src="https://yt3.googleusercontent.com/5ZIyqBQuo2aMTrbNEWCDx8d6AUzLu4rGTnQ6KLApaVDRWpQxg1GpQnzz8eEbJfvHRwk2-HvUSw=s24" alt="@CarlSagan42 Avatar" />
                        CarlSagan42 
                    </a>
                    <a href="https://www.youtube.com/@CDawgVA " title="This guy is hilarious, his acting is on point and he's just a great guy. He also likes talking about himself in the third person, he thinks third person means 3 times as many people like his stuff. Oh you.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQrhG8raM7U3ZUHTZ1qlVZpZTVkxJPkVINJQPIL_Q=s24" alt="@CDawgVA Avatar" />
                        CDawgVA 
                    </a>
                    <!-- <a href="https://www.youtube.com/@Profussy" title="Professor Lando is educating the masses on every single subject and discipline imaginable.">
                        <img src="https://yt3.googleusercontent.com/PoKfZtEUZ5bgHUAMkXFWbAkg6whjTujwwq4hScDPk-GlTtfvpg2HVUzD48hx2jYwNsBm4Sq9=s24" alt="@Profussy Avatar" />
                        Professor Lando
                    </a> -->
                    <!-- <a href="https://www.youtube.com/@redshell907" title="Im just a guy who got lucky, not special.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQHptNuhp3zaXSTm1Ugk2ueYXLHeOTmYY0jJoAW=s24" alt="@redshell907 Avatar" />
                        Redshell
                    </a> -->
                </div>
                <h1 class="text-white text-2xl font-bold">Twitch</h1>
                <span>
                    Twitch channels I frequently watch —
                </span>
                <div class="creator-list">
                    <a href="https://www.twitch.tv/cdawgva" title="I'm that guy">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/49110706-4c6c-4da5-8037-0fbd429405f5-profile_image-70x70.png" alt="CDawgVa Avatar" />
                        CDawgVa
                    </a>
                    <a href="https://www.twitch.tv/ironmouse" title="Im your cringe demon queen from VShojo">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/c2aca19b-b318-4398-99a5-fb6a597536fd-profile_image-70x70.png" alt="ironmouse Avatar" />
                        ironmouse
                    </a>
                    <a href="https://www.twitch.tv/kephrii" title="Focuses on competitive First Person Shooter games!">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0414975-0beb-4f28-8799-26cbda05dc60-profile_image-70x70.jpeg" alt="Kephrii Avatar" />
                        Kephrii
                    </a>
                    <a href="https://www.twitch.tv/meisaka" title="I like to write complex or challenging software, anything from engines to operating systems. Occasionally I play games, or reverse engineer stuff.">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9a79ca99-e9ea-4a4c-a5df-ec42b0800cb4-profile_image-70x70.png" alt="Meisaka Avatar" />
                        Meisaka
                    </a>
                    <a href="https://www.twitch.tv/theo" title="Hi I'm Theo I build things • Founder of ping.gg • ex-Twitch engineer • streamer I guess? ??">
                        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a7f1c81b-6f00-41fc-8da9-18aabf169e75-profile_image-70x70.png" alt="Theo Avatar" />
                        Theo
                    </a>
                </div>
            </slot:fragment>
        </TitleCard>
        <TitleCard class="bg-zinc-950 col-span-1">
            <slot:fragment slot="title">
                Anime
            </slot:fragment>
            <slot:fragment slot="description">
                <AnimeSquare
                    width={3}
                    height={3}
                    items={[{
                        name: 'Mobile Suit Gundam the Witch from Mercury',
                        url: 'https://www.crunchyroll.com/series/G79H2307W/mobile-suit-gundam-the-witch-from-mercury',
                        img: { type: 'crunchyroll', id: '07fda9ad4ae86df75320c1543a53719b' },
                        comment: "I very much recommend this anime for first time gundam watchers.<br /><br />I usually watch the currently airing gundam anime on <a href=\"https://www.youtube.com/@GundamInfo/playlists\">GundamInfo</a> YouTube channel."
                    }, {
                        name: 'To Your Eternity',
                        url: 'https://www.crunchyroll.com/series/GG5H5XMWV/to-your-eternity',
                        img: { type: 'crunchyroll', id: '0ce768f96b6dfa3db33abfca5108919f' },
                        comment: "The first episode got me so hooked. I watched all 40 episodes in 2 days."
                    }, {
                        name: 'Horimiya',
                        url: 'https://www.crunchyroll.com/series/G9VHN9P43/horimiya',
                        img: { type: 'crunchyroll', id: '3a1254f863bf0c9315086d37911c66df' },
                        comment: "Very cute and wholesome romance anime."
                    }, {
                        name: "Vivy -Fluorite Eye's Song-",
                        url: 'https://www.crunchyroll.com/series/GMEHME4M4/vivy--fluorite-eyes-song-',
                        img: { type: 'crunchyroll', id: '41c3eec54958204f4c962defffd948c7' }
                    }, {
                        name: "Snow White with the Red Hair",
                        url: 'https://www.crunchyroll.com/series/GRZJ7QN86/snow-white-with-the-red-hair',
                        img: { type: 'crunchyroll', id: '9e04c79f744de8a33913958ec987f49a' }
                    }, {
                        name: "Welcome to Demon School! Iruma-kun",
                        url: 'https://www.crunchyroll.com/series/G6NVG970Y/welcome-to-demon-school-iruma-kun',
                        img: { type: 'crunchyroll', id: 'c0f666958d8a0bcadf03f637f6688672' }
                    }, {
                        name: "Charlotte",
                        url: 'https://www.crunchyroll.com/series/GYGG99WDY/charlotte',
                        img: { type: 'crunchyroll', id: '00e81d27511ab96bc39b3b343bd9971f' }
                    }, {
                        name: "Terror in Resonance",
                        url: 'https://www.crunchyroll.com/series/G675W00MR/terror-in-resonance',
                        img: { type: 'crunchyroll', id: 'e0bc1639524e169511fbabc9fcb15970' }
                    }, {
                    //     name: "Recovery of an MMO Junkie",
                    //     url: 'https://www.crunchyroll.com/series/GR49WNQE6/recovery-of-an-mmo-junkie',
                    //     img: '2bdcf4cae76581578c128c8e87f71036.jpe'
                    // }, {
                        name: 'Rent-a-Girlfriend',
                        url: 'https://www.crunchyroll.com/series/G6QWV3976/rent-a-girlfriend',
                        img: { type: 'crunchyroll', id: '548c51dae7f89955eadaf9f9ce79359b' },
                        comment: "Very degenerate but also extremely wholesome (Especially season 2)."
                    }]}
                />
            </slot:fragment>
        </TitleCard>
        <TitleCard class="bg-zinc-950 col-span-1">
            <slot:fragment slot="title">
                Gaming
            </slot:fragment>
            <slot:fragment slot="description">
                <span>
                    Here's some of my favorite games.
                    <br />
                    <a href="https://www.teamfortress.com/">Team Fortress 2</a><br />
                    <a href="https://www.minecraft.net">Minecraft</a><br />
                    <a href="https://www.ubisoft.com/en-us/game/trackmania/trackmania">Trackmania</a><br />
                    <a href="https://zelda.nintendo.com/breath-of-the-wild/">The Legend of Zelda: Breath of the Wild</a><br />
                    <a href="https://gmod.facepunch.com/">Garry's Mod</a><br />
                    <a href="https://ninjakiwi.com/Games/Mobile/Bloons-TD-6.html">Bloons TD 6</a><br />
                    <a href="https://www.valheimgame.com/">Valheim</a><br />
                    <a href="https://store.steampowered.com/app/49520/">Borderlands 2</a><br />
                    <a href="https://overwatch.blizzard.com/">Overwatch 2</a><br />
                    <a href="https://store.steampowered.com/app/548430/Deep_Rock_Galactic/">Deep Rock Galactic</a><br />
                </span>
            </slot:fragment>
        </TitleCard>
    </div>
</div>

<div class="w-full h-32" />
