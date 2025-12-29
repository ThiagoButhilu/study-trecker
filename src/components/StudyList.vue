<template>
  <section v-if="studies.length" class="mt-8">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">
      Meus Estudos
    </h2>

    <ul class="space-y-4">
      <li
        v-for="study in studies"
        :key="study.id"
        class="p-4 border rounded-lg bg-white shadow-sm flex flex-col gap-3"
      >
        <!-- Título -->
        <div class="flex justify-between items-start">
          <strong class="text-lg text-gray-900">
            {{ study.title }}
          </strong>

          <span
            class="text-sm px-2 py-1 rounded-full"
            :class="{
              'bg-gray-100 text-gray-600': study.status === 'planned',
              'bg-blue-100 text-blue-700': study.status === 'studying',
              'bg-green-100 text-green-700': study.status === 'completed'
            }"
          >
            {{ study.status }}
          </span>
        </div>

        <!-- Progresso -->
        <div class="text-sm text-gray-600">
          {{ study.studiedHours }} / {{ study.totalHours }} horas
        </div>

        <!-- Barra de progresso -->
        <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            class="h-full bg-blue-500 transition-all"
            :style="{ width: `${(study.studiedHours / study.totalHours) * 100}%` }"
          />
        </div>

        <!-- Ações -->
        <div class="flex gap-2 pt-2">
          <button
            @click="addHour(study.id)"
            class="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            +1h
          </button>

          <button
            @click="remove(study.id)"
            class="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600 transition"
          >
            Remover
          </button>
        </div>
      </li>
    </ul>
  </section>

  <p v-else class="mt-8 text-gray-500 text-center">
    Nenhum estudo cadastrado.
  </p>
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
