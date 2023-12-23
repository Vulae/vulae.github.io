<script lang="ts">
    import MediaCard from "$components/MediaCard.svelte";

</script>

<style lang="scss">

    .youtube-list {
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
        <MediaCard class="bg-zinc-950 row-span-2">
            <slot:fragment slot="title">
                YouTube
            </slot:fragment>
            <slot:fragment slot="description">
                <span>
                    Tech channels that are awesome —
                </span>
                <div class="youtube-list">
                    <a href="https://www.youtube.com/@Bismuth9" title="World record and tool-assisted speedrun explanations.">
                        <img src="https://yt3.googleusercontent.com/SSREcpreiHTyS3kTfBIOCOUNByeVb-3gvQoekzwZiVJMlY24_NqeTOZggIEI5UwyljSDurmP8w=s24" alt="@Bismuth9 Avatar" />
                        Bismuth
                    </a>
                    <a href="https://www.youtube.com/@RGMechEx" title="A YouTube channel about video games & programming.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZTgonpqvirGHQ5joSfxra8_5TVq5En1Qvk3ir6xFA=s24" alt="@RGMechEx Avatar" />
                        Retro Game Mechanics Explained
                    </a>
                    <a href="https://www.youtube.com/@MollyRocket" title="This is the official YouTube channel of https://mollyrocket.com, home of Star Code Galaxy, Handmade Hero, Meow the Infinite, and 1935.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQYxNrp39Nz0unYiMMe_FXX1vvRJCtFcNU1h3mWwQ=s24" alt="@MollyRocket Avatar" />
                        Molly Rocket
                    </a>
                    <a href="https://www.youtube.com/@acegikmo" title="I do videos on tech art, math, game dev, and whatever else I want to project to your screens.">
                        <img src="https://yt3.googleusercontent.com/fRuGUY-F28mPwio41AQwnvnikF2Yy3oFOWoBxK9Xlpri2QhGgCUmy3XoAkJgEGeBdNLaen6SkGo=s24" alt="@acegikmo Avatar" />
                        Freya Holmér
                    </a>
                    <a href="https://www.youtube.com/@BranchEducation" title="How do Microchips work?  How does your smartphone camera work?  How does Bluetooth work?  At Branch Education, we dive deep into the science, engineering, and technology in our modern world using 3D animation and incredibly detailed models. ">
                        <img src="https://yt3.googleusercontent.com/4toKBJKPsAfwxy2xfr_EQJ7CuHpLvZa4eux6T2TAf8EU25uH_G9gbUA9djqaCrTjkIESnPjzww=s24" alt="@BranchEducation Avatar" />
                        Branch Education
                    </a>
                </div>
                <span>
                    Awesome documentary channels —
                </span>
                <div class="youtube-list">
                    <a href="https://www.youtube.com/@XboxAhoy" title="Insightful gaming videos.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRskEAIr9p8xDjGVZZKxZrlaVOqr-mBZFxSycdlKg=s24" alt="@XboxAhoy Avatar" />
                        Ahoy
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
                    <a href="https://www.youtube.com/@BobbyBroccoli" title="Howdy, I do deep dive broccumentaries into science scandals and controversies. Currently I animate in Blender, and previously dabbled in Google Earth for a bit. Studied engineering physics and photonics in school.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZR9dOg25858-j6LnltCep-FbyzJRjWTksnNzG0o4g=s24" alt="@BobbyBroccoli Avatar" />
                        BobbyBroccoli
                    </a>
                </div>
                <span>
                    Some other amazing channels —
                </span>
                <div class="youtube-list">
                    <a href="https://www.youtube.com/@redshell907" title="Im just a guy who got lucky, not special.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQHptNuhp3zaXSTm1Ugk2ueYXLHeOTmYY0jJoAW=s24" alt="@redshell907 Avatar" />
                        Redshell
                    </a>
                    <a href="https://www.youtube.com/@Profussy" title="Professor Lando is educating the masses on every single subject and discipline imaginable.">
                        <img src="https://yt3.googleusercontent.com/PoKfZtEUZ5bgHUAMkXFWbAkg6whjTujwwq4hScDPk-GlTtfvpg2HVUzD48hx2jYwNsBm4Sq9=s24" alt="@Profussy Avatar" />
                        Professor Lando
                    </a>
                    <a href="https://www.youtube.com/@Aliensrock" title="Hi I'm Tyler, and I have a puzzle game addiction.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZTf3JO5neXj3mEeQ7sibbIZSHXM8dH5bi9ktsJM=s24" alt="@Aliensrock Avatar" />
                        Aliensrock
                    </a>
                    <a href="https://www.youtube.com/@CarlSagan42" title="CarlSagan42 plays Mario games.">
                        <img src="https://yt3.googleusercontent.com/5ZIyqBQuo2aMTrbNEWCDx8d6AUzLu4rGTnQ6KLApaVDRWpQxg1GpQnzz8eEbJfvHRwk2-HvUSw=s24" alt="@CarlSagan42 Avatar" />
                        CarlSagan42 
                    </a>
                    <a href="https://www.youtube.com/@CDawgVA " title="This guy is hilarious, his acting is on point and he's just a great guy. He also likes talking about himself in the third person, he thinks third person means 3 times as many people like his stuff. Oh you.">
                        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQrhG8raM7U3ZUHTZ1qlVZpZTVkxJPkVINJQPIL_Q=s24" alt="@CDawgVA Avatar" />
                        CDawgVA 
                    </a>
                </div>
            </slot:fragment>
        </MediaCard>
        <MediaCard class="bg-zinc-950 col-span-1">
            <slot:fragment slot="title">
                Anime
            </slot:fragment>
            <slot:fragment slot="description">
                <span>
                    My favorite animes are:
                    <br />
                    <a href="https://www.crunchyroll.com/series/G79H2307W">Mobile Suit Gundam: The Witch from Mercury</a>
                    <br />
                    <a href="https://www.crunchyroll.com/series/GYGG99WDY">Charlotte</a>
                    <br />
                    <a href="https://www.crunchyroll.com/series/G6NVG970Y">Welcome to Demon School! Iruma-kun</a>
                    <br />
                    <br />
                    I usually watch whatever Gundam anime is currently airing on
                    <a href="https://www.youtube.com/@GundamInfo/playlists">GundamInfo</a> YouTube channel.
                </span>
            </slot:fragment>
        </MediaCard>
        <MediaCard class="bg-zinc-950 col-span-1">
            <slot:fragment slot="title">
                Gaming
            </slot:fragment>
            <slot:fragment slot="description">
                <span>
                    <a href="www.minecraft.net">Minecraft</a>
                    <br />
                    <a href="https://www.teamfortress.com/">Team Fortress 2</a>
                    <br />
                    <a href="https://zelda.nintendo.com/breath-of-the-wild/">The Legend of Zelda: Breath of the Wild</a>
                    <br />
                    <a href="https://www.ubisoft.com/en-us/game/trackmania/trackmania">Trackmania</a>
                    <br />
                    <a href="https://store.steampowered.com/app/49520/">Borderlands 2</a>
                    <br />
                    <a href="https://www.valheimgame.com/">Valheim</a>
                </span>
            </slot:fragment>
        </MediaCard>
    </div>
</div>

<div class="w-full h-32" />
