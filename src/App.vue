<template>
  <main class="min-h-screen bg-zinc-950 text-zinc-100 flex justify-center px-4 py-10">
    <div class="w-full max-w-2xl space-y-8">

      <!-- Header -->
      <header class="text-center space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">
          📚 Study Tracker
        </h1>
        <p class="text-sm text-zinc-400">
          Controle seus estudos e acompanhe seu progresso
        </p>
      </header>

      <!-- Form -->
      <section class="bg-zinc-900 rounded-xl p-6 shadow">
        <StudyForm />
      </section>

      <!-- List -->
      <section class="bg-zinc-900 rounded-xl p-6 shadow">
        <StudyList />
      </section>

    </div>
  </main>
</template>

<script setup>
import StudyList from './components/StudyList.vue'
import StudyForm from './components/StudyForm.vue'
</script>
