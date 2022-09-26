<script setup lang="ts">
import Header from '../components/Header.vue';
import AnswerBox from '../components/AnswerBox.vue';

</script>

<template>
    <div>
        <Header></Header>
    </div>
    <div>
        <div class="tekstBoks">
            <h1 class="font-bold text-3xl">Nå er dagen her!</h1>
            <div class="mx-4 mt-3 text-center text-xl">
                <p class="text">
                    Dette er konkurransesiden for alle konkurransene på dagen@ifi
                    2022! Oppe i høyre hjørne kan du trykke på hamburgermenyen og 
                    gå gjennom årets konkurranser!
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.tekstBoks{
    text-shadow: 0 0 0px #ffffff, 0 2px 0px #000;
    @apply
    mt-4
    text-center
    text-white
    
    

}
</style>