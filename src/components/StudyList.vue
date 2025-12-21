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
import { useStudyStore } from '../stores/studyStore'

const store = useStudyStore()
const studies = store.studies

function addHour(id) {
  store.addStudyHours(id, 1)
}

function remove(id) {
  store.removeStudy(id)
}
</script>
