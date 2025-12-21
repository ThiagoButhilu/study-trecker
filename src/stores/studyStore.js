import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useStudyStore = defineStore('study', () => {

  // STATE
  const studies = ref([])

  // ACTIONS
  function addStudy(data) {
    studies.value.push({
      id: Date.now().toString(),
      title: data.title,
      category: data.category,
      totalHours: data.totalHours,
      studiedHours: 0,
      status: 'planned',
      createdAt: new Date()
    })
  }

  function removeStudy(id) {
    studies.value = studies.value.filter(study => study.id !== id)
  }

  function addStudyHours(id, hours) {
    const study = studies.value.find(study => study.id === id)
    if (!study) return

    study.studiedHours += hours

    if (study.studiedHours >= study.totalHours) {
      study.studiedHours = study.totalHours
      study.status = 'completed'
    } else {
      study.status = 'studying'
    }
  }

  // GETTERS (computed)
  const totalStudiedHours = computed(() => {
    return studies.value.reduce((total, study) => {
      return total + study.studiedHours
    }, 0)
  })

  // PERSISTÊNCIA
  watch(
    studies,
    (value) => {
      localStorage.setItem('studies', JSON.stringify(value))
    },
    { deep: true }
  )

  function loadStudies() {
    const data = localStorage.getItem('studies')
    if (data) {
      studies.value = JSON.parse(data)
    }
  }

  return {
    studies,
    addStudy,
    removeStudy,
    addStudyHours,
    totalStudiedHours,
    loadStudies
  }
})
