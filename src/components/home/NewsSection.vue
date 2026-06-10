<template>
  <section class="py-16 md:py-24 bg-white px-6">
    <div class="max-w-7xl mx-auto">
      <SectionTitle title="美麗看板" subtitle="News" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="news in NEWS"
          :key="news.id"
          class="group bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 flex flex-col"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="news.image"
              :alt="news.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-stone-800 mb-3 line-clamp-1 group-hover:text-emerald-700 transition-colors">
              {{ news.title }}
            </h3>
            <p class="text-stone-500 mb-6 line-clamp-2 flex-grow">{{ news.description }}</p>
            <a :href="news.link" class="inline-block mt-auto text-emerald-600 font-medium hover:text-emerald-800 transition-colors">
              View more <span class="ml-1">→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { NEWS } from '@/constants/homeData'
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
