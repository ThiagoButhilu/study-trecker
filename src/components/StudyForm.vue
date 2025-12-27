<template>
  <form @submit.prevent="submit">
    <input
      v-model="title"
      placeholder="Título do estudo"
    />

    <input
      v-model="category"
      placeholder="Categoria"
    />

    <input
      v-model.number="totalHours"
      type="number"
      placeholder="Horas totais"
    />

    <button>Adicionar</button>
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
  console.log('Submitting study:', { title: title.value, category: category.value, totalHours: totalHours.value })

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
