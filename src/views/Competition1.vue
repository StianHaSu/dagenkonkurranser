<script setup lang ="ts">
import AnswerBox from "../components/AnswerBoxButtons.vue"
import Header from "../components/Header.vue"
</script>

<template>
    <div>
        <Header></Header>
    </div>
    <div class="konkTekst"><h1>Hvilken farge har dagen@ifi ikke hatt?</h1></div>
    <div class="flex justify-center">
        <AnswerBox/>
    </div>
    <div class="mx-2 mt-3 text-center text-xl rounded-md">
        <p class="tekstBoks">Vinneren av denne konkurransen vil få en splitter ny Moccamaster!</p>
    </div>
</template>

<style>
    .konkTekst{
        @apply
        text-3xl
        font-bold
        text-white
        text-center
        pt-6
    }

    .tekstBoks{
        text-shadow: 0 0 0px #ffffff, 0 2px 2px #000;
        @apply
        mt-4
        mx-2
        text-center
      text-white
      bg-gray-400 bg-opacity-30 py-4
    }

</style>