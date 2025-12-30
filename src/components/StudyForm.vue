<template>
  <form
    @submit.prevent="submit"
    class="bg-zinc-900 p-6 rounded-xl shadow space-y-4"
  >
    <h2 class="text-lg font-semibold text-zinc-100">
      Novo Estudo
    </h2>

    <input
      v-model="title"
      placeholder="Título do estudo"
      class="w-full rounded-lg px-3 py-2
             bg-zinc-800 border border-zinc-700 text-zinc-100
             placeholder-zinc-400
             focus:outline-none focus:ring-2 focus:ring-purple-600"
    />

    <input
      v-model="category"
      placeholder="Categoria"
      class="w-full rounded-lg px-3 py-2
             bg-zinc-800 border border-zinc-700 text-zinc-100
             placeholder-zinc-400
             focus:outline-none focus:ring-2 focus:ring-purple-600"
    />

    <input
      v-model.number="totalHours"
      type="number"
      placeholder="Horas totais"
      class="w-full rounded-lg px-3 py-2
             bg-zinc-800 border border-zinc-700 text-zinc-100
             placeholder-zinc-400
             focus:outline-none focus:ring-2 focus:ring-purple-600"
    />

    <button
      type="submit"
      class="w-full bg-purple-600 text-white font-medium py-2 rounded-lg
             hover:bg-purple-700 transition"
    >
      Adicionar estudo
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStudyStore } from '../stores/studyStore'

const store = useStudyStore()

const title = ref('')
const category = ref('')
const totalHours = ref(0)

function submit() {
  if (!title.value || totalHours.value <= 0) return

  store.addStudy({
    title: title.value,
    category: category.value,
    totalHours: totalHours.value
  })

  title.value = ''
  category.value = ''
  totalHours.value = 0
}
</script>
