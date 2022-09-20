<script setup lang ="ts">
import type router from "@/router";
import AnswerBox from "../components/AnswerBox.vue"
import Header from "../components/Header.vue"

function goToInsta(){
    window.open("https://www.instagram.com/dagenatifi/", "_blank");
}


</script>

<template>
    <div><Header></Header></div>
    <div class="bg-gray-400 bg-opacity-30 mt-2 pb-12 rounded-md">
        <div class="konkTekst"><h1>Instagram konkurransen</h1></div>
        <div>
            <div class="forklaring">
                <p>Del ditt dagen@ifi bilde med oss på pm, via
                    <a class="underline" href="https://www.instagram.com/dagenatifi/">instagrammen vår!</a>
                    Vi trekker én heldig vinner som vil dra med seg hjem en splitter ny Nintendo Switch Lite!
                </p>
            </div>
            <div class="gaaHit">
                <h1>
                    Trykk her for å komme til dagen@ifi sin instagram <br>      
                    V
                </h1>
            </div>
            <div class="pt-2 h-1/5 w-1/5 mx-auto">
                <div><button @click="goToInsta()" ><img src="../../public/insta2.png" alt=""/></button></div>
            </div>
        </div>
    </div>
</template>

<style>
.konkTekst{
    text-shadow: 0 0 0px #ffffff, 0 2px 2px #000;
    @apply
    text-3xl
    font-bold
    text-white
    text-center
    pt-3
}

.forklaring{
    text-shadow: 0 0 0px #ffffff, 0 2px 2px #000;
    @apply
    text-xl text-center mt-4 font-semibold text-white mx-3
}

.gaaHit{
    text-shadow: 1px 0 0px #ffffff, 0 4px 2px #000;
    @apply
    text-white
    mt-8 text-center
    font-extrabold
    text-3xl mx-3
}
</style>