<template>
  <section v-if="studies.length">
    <h2>Meus Estudos</h2>

    <ul>
      <li v-for="study in studies" :key="study.id">
        <strong>{{ study.title }}</strong>
        <span> — {{ study.studiedHours }}/{{ study.totalHours }}h</span>

        <button @click="addHour(study.id)">+1h</button>
        <button @click="remove(study.id)">Remover</button>
      </li>
    </ul>
  </section>

  <p v-else>Nenhum estudo cadastrado.</p>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStudyStore } from '../stores/studyStore'
import { storeToRefs } from 'pinia'

const store = useStudyStore()

// ✅ forma correta
const { studies } = storeToRefs(store)

onMounted(() => {
  store.loadStudies()
})

function addHour(id) {
  store.addStudyHours(id, 1)
}

function remove(id) {
  store.removeStudy(id)
}
</script>
