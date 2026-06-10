<template>
  <section class="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-stone-200">
    <div
      class="absolute inset-0 flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(banner, index) in BANNERS"
        :key="index"
        class="w-full h-full flex-shrink-0 relative"
      >
        <img :src="banner.img" class="w-full h-full object-cover" alt="Banner" />
        <div class="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-6 text-center">
          <RouterLink
            :to="banner.link.startsWith('/') ? banner.link : '/calculator'"
            class="mt-6 px-8 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-full font-bold tracking-wide shadow-lg backdrop-blur-sm transition-all transform hover:scale-105"
          >
            {{ banner.btnText || '立即體驗' }}
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
      <button
        v-for="(_, index) in BANNERS"
        :key="index"
        @click="goTo(index)"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-emerald-500 w-8' : 'bg-white/60 hover:bg-white'"
        :aria-label="`切換至第 ${index + 1} 張 Banner`"
      />
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { BANNERS } from '@/constants/homeData'
import { useCarousel } from '@/composables/useCarousel'

const { currentIndex, goTo } = useCarousel(BANNERS.length)
</script>
