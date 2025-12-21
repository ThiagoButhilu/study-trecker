<template>
  <div>
    <h3>{{ study.title }}</h3>
    <p>{{ study.studiedHours }} / {{ study.totalHours }} horas</p>
    <p>Status: {{ study.status }}</p>

    <button @click="addHour">+1h</button>
    <button @click="remove">Remover</button>
  </div>
</template>

<script setup>
import { useStudyStore } from '../stores/studyStore'

const props = defineProps({
  study: Object
})

const store = useStudyStore()

function addHour() {
  store.addStudyHours(props.study.id, 1)
}

function remove() {
  store.removeStudy(props.study.id)
}
</script>
