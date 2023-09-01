<script setup>
import Header from '@/components/sections/Header/Header.vue'
import StorySection from '@/components/sections/StorySection/StorySection.vue'
import CountersSection from '@/components/sections/CountersSection/CountersSection.vue'
import AmazingSection from '@/components/sections/AmazingSection/AmazingSection.vue'
import AllDevSection from '@/components/sections/AllDevSection/AllDevSection.vue'
import TeamSection from '@/components/sections/TeamSection/TeamSection.vue'
import LogosSection from '@/components/sections/LogosSection/LogosSection.vue'
import SomeworksSection from '@/components/sections/SomeworksSection/SomeworksSection.vue'
import PeopleSaySection from '@/components/sections/PeopleSaySection/PeopleSaySection.vue'
import BlogSection from '@/components/sections/BlogSection/BlogSection.vue'
import MapSection from '@/components/sections/MapSection/MapSection.vue'
import Footer from '@/components/sections/Footer/Footer.vue'
import SliderOneSection from '@/components/sections/SliderOneSection/SliderOneSection.vue'
import SliderTwoSection from '@/components/sections/SliderTwoSection/SliderTwoSection.vue'
import DoSection from '@/components/sections/DoSection/DoSection.vue'
import { useMogoStore } from '@/stores/mogo'
import { onBeforeMount, ref, } from 'vue'
const store = useMogoStore()
const isLoading = ref(false)
onBeforeMount(() => {
  isLoading.value = true
  store.fetchTasks()
    .finally(() => {
      isLoading.value = false
    })
})
</script>

<template>
  <Header v-if="!isLoading" />
  <main v-if="!isLoading">
    <StorySection />
    <CountersSection />
    <AmazingSection />
    <AllDevSection />
    <DoSection />
    <SliderOneSection />
    <TeamSection />
    <LogosSection />
    <SomeworksSection />
    <SliderTwoSection />
    <PeopleSaySection />
    <BlogSection />
    <MapSection />
  </main>
  <Footer v-if="!isLoading" />
</template>

<style lang="scss" scoped>

</style>
