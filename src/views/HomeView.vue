<template>
  <div class="home-page w-full bg-stone-50 font-sans">
    <HeroBanner />
    <AboutSection />
    <NewsSection />
    <CoursesSection @book="navigateToCalculator" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroBanner from '@/components/home/HeroBanner.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import CoursesSection from '@/components/home/CoursesSection.vue'

const router = useRouter()

const navigateToCalculator = () => {
  router.push({ name: 'calculator' })
}
</script>
