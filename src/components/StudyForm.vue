<template>
  <form
    @submit.prevent="submit"
    class="bg-white p-4 rounded-lg shadow-md mb-6 space-y-4"
  >
    <h2 class="text-lg font-semibold text-gray-800">
      Novo Estudo
    </h2>

    <input
      v-model="title"
      placeholder="Título do estudo"
      class="w-full border border-gray-300 rounded px-3 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      v-model="category"
      placeholder="Categoria"
      class="w-full border border-gray-300 rounded px-3 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      v-model.number="totalHours"
      type="number"
      placeholder="Horas totais"
      class="w-full border border-gray-300 rounded px-3 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      class="w-full bg-blue-600 text-white font-medium py-2 rounded
             hover:bg-blue-700 transition"
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
