<template>
  <div class="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-2">
    <h3 class="text-lg font-semibold">{{ study.title }}</h3>

    <p class="text-sm text-gray-400">
      {{ study.studiedHours }} / {{ study.totalHours }} horas
    </p>

    <p class="text-sm">
      Status:
      <span
        class="font-medium"
        :class="{
          'text-yellow-400': study.status === 'studying',
          'text-green-400': study.status === 'completed',
          'text-gray-400': study.status === 'planned'
        }"
      >
        {{ study.status }}
      </span>
    </p>

    <div class="flex gap-2 pt-2">
      <button
        @click="addHour"
        class="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500 text-sm"
      >
        +1h
      </button>

      <button
        @click="remove"
        class="px-3 py-1 rounded-md bg-red-600 hover:bg-red-500 text-sm"
      >
        Remover
      </button>
    </div>
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
