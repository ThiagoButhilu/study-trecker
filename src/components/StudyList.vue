<template>
  <section v-if="studies.length" class="mt-8">
    <h2 class="text-xl font-semibold mb-4 text-zinc-200">
      Meus Estudos
    </h2>

    <ul class="space-y-4">
      <li
        v-for="study in studies"
        :key="study.id"
        class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow flex flex-col gap-3"
      >
        <!-- Título -->
        <div class="flex justify-between items-start">
          <strong class="text-lg text-zinc-100">
            {{ study.title }}
          </strong>

          <span
            class="text-xs px-2 py-1 rounded-full font-medium"
            :class="{
              'bg-zinc-800 text-zinc-400': study.status === 'planned',
              'bg-indigo-500/20 text-indigo-400': study.status === 'studying',
              'bg-emerald-500/20 text-emerald-400': study.status === 'completed'
            }"
          >
            {{ study.status }}
          </span>
        </div>

        <!-- Progresso -->
        <div class="text-sm text-zinc-400">
          {{ study.studiedHours }} / {{ study.totalHours }} horas
        </div>

        <!-- Barra de progresso -->
        <div class="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
          <div
            class="h-full bg-indigo-500 transition-all"
            :style="{ width: `${(study.studiedHours / study.totalHours) * 100}%` }"
          />
        </div>

        <!-- Ações -->
        <div class="flex gap-2 pt-2">
          <button
            @click="addHour(study.id)"
            class="px-3 py-1 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            +1h
          </button>

          <button
            @click="remove(study.id)"
            class="px-3 py-1 text-sm rounded bg-rose-600 text-white hover:bg-rose-700 transition"
          >
            Remover
          </button>
        </div>
      </li>
    </ul>
  </section>

  <p v-else class="mt-8 text-zinc-500 text-center">
    Nenhum estudo cadastrado.
  </p>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStudyStore } from '../stores/studyStore'
import { storeToRefs } from 'pinia'

const store = useStudyStore()
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
