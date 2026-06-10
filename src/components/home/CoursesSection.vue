<template>
  <section class="py-16 md:py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle title="熱門課程" subtitle="Courses" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div
        v-for="activity in ACTIVITIES"
        :key="activity.id"
        class="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 group"
      >
        <div class="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden flex-shrink-0">
          <img
            :src="activity.image"
            :alt="activity.title"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div class="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between">
          <div>
            <h3 class="text-xl md:text-2xl font-bold text-stone-800 mb-2">
              {{ activity.title }}
              <span class="text-sm text-stone-500 font-normal block mt-1">{{ activity.duration }}</span>
            </h3>
            <p class="text-emerald-600 font-medium mb-4">{{ activity.subtitle }}</p>
            <ul class="space-y-2 mb-6">
              <li
                v-for="(feature, idx) in activity.features"
                :key="idx"
                class="flex items-start text-stone-600 text-sm"
              >
                <svg class="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          <div class="mt-auto pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="text-2xl font-bold text-stone-700">
              <span v-if="activity.originalPrice" class="text-sm text-stone-400 line-through mr-2 font-normal">
                {{ activity.originalPrice }}
              </span>
              {{ activity.price }}
            </div>
            <button
              @click="$emit('book', activity)"
              class="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg text-center whitespace-nowrap"
            >
              立即預約
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { ACTIVITIES } from '@/constants/homeData'

defineEmits(['book'])
</script>
