import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const isLoading = ref(false)

export const useMogoStore = defineStore('mogo', () => {
  const mogoApi = ref({})
  async function fetchTasks() {
    isLoading.value = true
    return axios.get('https://mogo-vue-fullstack-pet-api.onrender.com/mogo-api/')
      .then((response) => {
        mogoApi.value = response.data
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        isLoading.value = false
      })
  }
  return { mogoApi, fetchTasks }
})
