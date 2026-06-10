<template>
  <section class="py-16 md:py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle title="品牌故事" subtitle="About" />
    <div class="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
      <div class="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000"
          alt="About"
          class="w-full h-[400px] object-cover"
        />
      </div>
      <div class="w-full md:w-1/2 space-y-6">
        <p class="text-stone-600 leading-relaxed text-lg text-justify">
          用高科技萃取天然植物精華，滋養膚質各異的嬌嫩之肌，以獨特按壓手法引導營養滲透，打通肌膚經絡，從細胞深處層層清掃，帶來由表及裡的通透；配合保健食品，以內服提升外補，標本兼顧地調養出健康美態，由內而外喚醒肌膚生命力。
        </p>
        <p class="text-stone-600 leading-relaxed text-lg text-justify">
          通過科學的皮膚及虹膜測試與追蹤，真正瞭解肌膚內在轉變，為每一種肌膚開啟與之相宜的自然美之旅。
        </p>
        <div class="pt-4">
          <RouterLink
            to="/showcase"
            class="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group transition-colors"
          >
            查看技術架構
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>
