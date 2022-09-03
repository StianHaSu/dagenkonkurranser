<script lang="ts">
    export default {
        methods: {
            visMobilMeny() {
                var dropD = Array.from(document.getElementsByClassName('MobilValg') as HTMLCollectionOf<HTMLElement>)[0];
                var hoved = Array.from(document.getElementsByClassName('bannerBg') as HTMLCollectionOf<HTMLElement>)[0];
                var meny = Array.from(document.getElementsByClassName('Hamburger') as HTMLCollectionOf<HTMLElement>)[0];
                var logo = Array.from(document.getElementsByClassName('DagenL') as HTMLCollectionOf<HTMLElement>)[0];

                if (window.getComputedStyle(dropD).display === "none") {
                    dropD.setAttribute("style", "visibility: visible");
                    dropD.setAttribute("style", "display: inline");
                    hoved.setAttribute("style", "border-bottom-width: 1px");
                    hoved.setAttribute("style", "height: 90%");
                    meny.setAttribute("style", "grid-row-start: 2");
                    
                    
                } else {
                    dropD.setAttribute("style", "visibility: invisible");
                    dropD.setAttribute("style", "display: none");
                    hoved.setAttribute("style", "border-bottom-width: 0px");
                    meny.setAttribute("style", "grid-row-start: 3");
                   
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
                    <div class="DagenL">
                        <img src="../../public/dagen_all_trans_white.png" alt="Dagenatifi logo">
                    </div>
                    <div class="Hamburger">
                        <button @click="visMobilMeny()"><h1 class="rotate-[90deg] hover:scale-110">|||</h1></button>
                    </div>
                    <div class="MobilValg">
                        <ul class="text-white text-bold font-mono text-lg py-12">
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
    shadow-lg
    shadow-color2
    
}

.MobilValg {
    @apply
    hidden
    rounded-3xl
    w-screen
    text-center
    row-start-3
    
}

.MobilMeny {
    @apply
    text-4xl
    font-sans
    font-bold
    text-white
    grid
    grid-cols-10
    grid-rows-6
    h-full
    
    
}

.Hamburger{
    @apply
    col-start-9 
    row-start-3 
    col-span-1 
    row-span-1
}

.DagenL{
    @apply
    col-start-2
    row-start-2
    col-span-3
    row-span-1
}

@media only screen and (min-width: 600px) {
    .bannerBg{
        @apply
        h-[33%]
    }

    .MobilMeny{
        @apply
        text-5xl
    }

   

}

@media only screen and (min-width: 900px){
    .DagenL{
        @apply
        scale-[80%]
    }
}

@media only screen and (min-width: 1000px){
    .DagenL{
        @apply
        scale-[70%]
        
     
    }

    .Hamburger{
        @apply
        text-[4rem]
    }
}

@media only screen and (min-width: 1300px){
    .DagenL{
        @apply
        scale-[60%]
    }
}
</style>