<script lang="ts">
    export default {
        methods: {
            visMobilMeny() {
                var dropD = Array.from(document.getElementsByClassName('MobilValg') as HTMLCollectionOf<HTMLElement>)[0];
                var hoved = Array.from(document.getElementsByClassName('bannerBg') as HTMLCollectionOf<HTMLElement>)[0];
                if (window.getComputedStyle(dropD).display === "none") {
                    dropD.setAttribute("style", "visibility: visible");
                    dropD.setAttribute("style", "display: inline");
                    hoved.setAttribute("style", "border-bottom-width: 1px");
                    hoved.setAttribute("style", "height: 60%")
                    
                } else {
                    dropD.setAttribute("style", "visibility: invisible");
                    dropD.setAttribute("style", "display: none");
                    hoved.setAttribute("style", "border-bottom-width: 0px");
                }
            },
        },
    };
    
</script>

<template>
    <div class="outerH">
        <div class="outer2">
            <div class="bannerBg">
                <div class="MobilMeny">
                    <div class="col-start-5 row-start-2">
                        <div><button @click="visMobilMeny()"><h1 class="rotate-[90deg]">|||</h1></button></div>
                    </div>
                </div>
                <div class="MobilValg">
                  <ul class="text-white text-bold font-mono text-lg py-2">
                    <div class="border-b-2 w-4/5 mx-auto py-2 pt-8"><li><button @click="$router.push({ name: 'Prosjektskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out text-2xl">Konkurranse 1</button></li></div>
                    <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'Kontaktskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out text-2xl">Konkurranse 2</button></li></div>
                    <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'Omskjerm' })" class="hover:underline hover:scale-110 transition ease-in-out text-2xl">Konkurranse 3</button></li></div>
                    <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'CvSkjerm' })" class="hover:underline hover:scale-110 transition ease-in-out text-2xl">Konkurranse 4</button></li></div>
                    <div class="pb-4"></div>
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.outerH{
    @apply
    h-screen
    w-screen
}

.outer2{
    @apply
    h-2/3
}

.bannerBg{
    @apply
    h-1/5
    bg-color2
    rounded-b-2xl
    sticky top-0
    
}

.MobilValg {
    @apply
    hidden
    shadow-md
    rounded-3xl
    w-screen
    text-center
    
}

.MobilMeny {
    @apply
    text-3xl
    font-sans
    font-bold
    text-white
    hover:scale-110
    self-center
    grid columns-7
    grid-rows-3
    
}
</style>