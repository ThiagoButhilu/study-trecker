<template>
  <main class="app">
    <h1>📚 Study Tracker</h1>

    <StudyForm />
    <StudyList />
  </main>
</template>

<script setup>
import StudyList from './components/StudyList.vue'
import StudyForm from './components/StudyForm.vue'
</script>
