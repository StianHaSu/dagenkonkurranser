<script lang="ts">
import { submitAnswer } from '@/firebase';
import { reactive } from 'vue'

export default{
    setup() {
        const form = reactive({ name: '', email: '', answer: '', })

        const onSubmit = async () => {
            console.log("bra 2")
            await submitAnswer( 1, { ...form })
            console.log("bra 3")
            form.name = ''
            form.email = ''
            form.answer = ''
        }

        return {form, onSubmit}
    },

    methods: {
        test(){
            console.log("bra");
        }       
    }
}

</script>

<template>
    <div class="w-[450px]">
        <div>
            <form @submit.prevent="onSubmit">
                <div class="grid grid-cols-1 py-3 px-3 shadow-sm shadow-black grid-rows-4 text-center w-full bg-color2 bg-opacity-70 mt-4 space-y-4 rounded-2xl">
                    <div class="grid row-start-1">  
                        <input v-model="form.name" class="shadow-inner text-center shadow-black form-control rounded-md placeholder:font-bold placeholder:text-center" placeholder ="Navn" required/>
                    </div>
                    <div class="grid row-start-2">
                        <input v-model="form.email" class="shadow-inner text-center shadow-black form-control rounded-md placeholder:font-bold placeholder:text-center" placeholder="E-post" required/>
                    </div>
                    <div class="grid row-start-3">
                        <select v-model="form.answer" class="text-center" required>
                            <option disabled value="">Trykk her for å velge farge</option>
                            <option>Blå</option>
                            <option>Rosa</option>
                            <option>Grønn</option>
                            <option>Turkis</option>
                        </select>
                    </div>
                    <div class="grid row-start-4 my-4 py-2 rounded-xl text-2xl font-semibold bg-color3 border border-black border-opacity-60 border-x-2 border-y-2">
                        <button  type="submit" >Avgi svar</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<style>

</style>