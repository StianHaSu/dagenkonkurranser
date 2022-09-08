<script setup lang ="ts">
import AnswerBox from "../components/AnswerBox.vue"
import Header from "../components/Header.vue"
</script>

<template>
    <div><Header></Header></div>
    <div class="konkTekst"><h1>Konkurranse nr. 1</h1></div>
    <div class="flex justify-center">
        <AnswerBox/>
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

</style>