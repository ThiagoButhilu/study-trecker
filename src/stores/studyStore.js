import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useStudyStore = defineStore('study', () => {

  // STATE
  const studies = ref([])

  // ACTIONS
  function addStudy(data) {
    console.log('Adding study:', data)
    studies.value.push({
      id: crypto.randomUUID(),
      title: data.title,
      category: data.category,
      totalHours: data.totalHours,
      studiedHours: 0,
      status: 'planned',
      createdAt: new Date().toISOString()
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

  // GETTERS
  const totalStudiedHours = computed(() =>
    studies.value.reduce((total, study) => total + study.studiedHours, 0)
  )

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
    console.log('Loading studies from localStorage:', data)
    console.log(studies)
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
