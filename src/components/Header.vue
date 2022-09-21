<script lang="ts">
    let height = 10
    export default {
        methods: {
            visMobilMeny() {
                var dropD = Array.from(document.getElementsByClassName('MobilValg') as HTMLCollectionOf<HTMLElement>)[0];
                var hoved = Array.from(document.getElementsByClassName('outerH') as HTMLCollectionOf<HTMLElement>)[0];
                var meny = Array.from(document.getElementsByClassName('Hamburger') as HTMLCollectionOf<HTMLElement>)[0];
                var logo = Array.from(document.getElementsByClassName('DagenL') as HTMLCollectionOf<HTMLElement>)[0];

                if (window.getComputedStyle(dropD).display === "none") {
                    dropD.setAttribute("style", "visibility: visible");
                    dropD.setAttribute("style", "display: inline");
                    hoved.setAttribute("style", "border-bottom-width: 1px");
                    hoved.setAttribute("style", "height: 30rem");
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
        <div class="bannerBg">
            <div class="MobilMeny">
                <div class="DagenL">
                    <button @click="$router.push({ name: 'home' })"><img src="../../public/dagen_all_trans_white.png" alt="Dagenatifi logo"></button>
                </div>
                <div class="Hamburger">
                    <button @click="visMobilMeny()"><h1 class="rotate-[90deg] hover:scale-110">|||</h1></button>
                </div>
                <div class="MobilValg">
                    <ul class="text-white text-bold font-mono text-lg py-12">
                      <div class="border-b-2 w-4/5 mx-auto py-2 pt-8"><li><button @click="$router.push({ name: 'competition 1' })" class="hover:underline hover:scale-105 transition ease-in-out text-2xl">Dagens farger</button></li></div>
                      <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'competition 2' })" class="hover:underline hover:scale-105 transition ease-in-out text-2xl">Hovedsponsors teknologer</button></li></div>
                      <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'competition 3' })" class="hover:underline hover:scale-110 transition ease-in-out text-2xl">Insta-konkurransen</button></li></div>
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
    sticky top-0
    w-screen
    bg-color2
    rounded-b-2xl
    shadow-lg
    shadow-color2
}



.bannerBg{
    @apply
    h-full
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

    .MobilMeny{
        @apply
        text-5xl
    }
}

@media only screen and (min-width: 800px){
    .DagenL{
        @apply
        scale-[80%]
    }

    .outerH{
        @apply
        h-[10rem]
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

@media only screen and (max-width: 800px) {
    .outerH{
        @apply
        h-[8rem]
    }
}
</style>