<template>
  <footer class="bg-stone-900 text-stone-400 py-12 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-white font-bold text-lg mb-3">
          <span class="text-emerald-500">N</span>atural<span class="text-emerald-500">B</span>eauty
        </h3>
        <p class="text-sm leading-relaxed">
          Vue 3 前端工程展示專案 — 以真實商業場景呈現現代化前端架構與最佳實踐。
        </p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3">技術棧</h4>
        <ul class="text-sm space-y-1">
          <li>Vue 3 · Vue Router · Pinia</li>
          <li>Vite · Tailwind CSS</li>
          <li>Composition API · Composables</li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3">導覽</h4>
        <ul class="text-sm space-y-1">
          <li><RouterLink to="/" class="hover:text-emerald-400 transition-colors">首頁</RouterLink></li>
          <li><RouterLink to="/calculator" class="hover:text-emerald-400 transition-colors">預約試算</RouterLink></li>
          <li><RouterLink to="/showcase" class="hover:text-emerald-400 transition-colors">技術展示</RouterLink></li>
        </ul>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-800 text-center text-xs">
      © {{ year }} NaturalBeauty Demo · Built with Vue 3
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>
