<template>
  <div class="showcase-page bg-stone-50 min-h-[calc(100vh-4rem)]">
    <!-- Hero -->
    <section class="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 text-white py-20 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-emerald-200 text-sm font-medium tracking-widest uppercase mb-4">Vue 3 Engineering Portfolio</p>
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          資深前端工程架構展示
        </h1>
        <p class="text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
          以真實商業場景（美容 SPA 預約系統）呈現 Vue 3 生態系的現代化工程實踐：
          模組化架構、可複用邏輯、漸進式狀態管理與優雅的 UI 互動。
        </p>
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <span
            v-for="badge in badges"
            :key="badge"
            class="px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm border border-white/20"
          >
            {{ badge }}
          </span>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle title="技術棧" subtitle="Tech Stack" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="tech in TECH_STACK"
          :key="tech.name"
          class="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-200 transition-all"
        >
          <span class="text-xs font-semibold text-emerald-600 uppercase tracking-wider">{{ tech.category }}</span>
          <h3 class="text-xl font-bold text-stone-800 mt-2">{{ tech.name }}</h3>
          <p class="text-stone-500 text-sm mt-2 leading-relaxed">{{ tech.description }}</p>
        </article>
      </div>
    </section>

    <!-- Architecture -->
    <section class="py-16 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <SectionTitle title="架構模式" subtitle="Architecture" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            v-for="pattern in ARCHITECTURE_PATTERNS"
            :key="pattern.title"
            class="rounded-2xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors"
          >
            <h3 class="text-lg font-bold text-stone-800 mb-2">{{ pattern.title }}</h3>
            <p class="text-stone-600 text-sm leading-relaxed mb-4">{{ pattern.description }}</p>
            <div class="flex flex-wrap gap-2">
              <code
                v-for="file in pattern.files"
                :key="file"
                class="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md font-mono"
              >
                {{ file }}
              </code>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Code Highlights -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle title="程式碼亮點" subtitle="Code Highlights" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in CODE_HIGHLIGHTS"
          :key="item.label"
          class="bg-stone-900 rounded-xl p-5 overflow-hidden"
        >
          <p class="text-emerald-400 text-xs font-medium mb-2">{{ item.label }}</p>
          <pre class="text-stone-300 text-sm font-mono overflow-x-auto"><code>{{ item.code }}</code></pre>
        </div>
      </div>
    </section>

    <!-- Project Structure -->
    <section class="py-16 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <SectionTitle title="專案結構" subtitle="Project Structure" />
        <pre class="bg-stone-900 text-stone-300 rounded-2xl p-6 text-sm font-mono overflow-x-auto leading-relaxed"><code>{{ projectStructure }}</code></pre>
      </div>
    </section>

    <!-- Demo Credentials -->
    <section class="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle title="互動體驗" subtitle="Try It" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
          <h3 class="font-bold text-stone-800 mb-3">會員登入 Demo</h3>
          <p class="text-stone-500 text-sm mb-4">點擊右上角「會員登入」，使用以下測試帳號體驗 Pinia 認證流程與 localStorage 持久化。</p>
          <dl class="space-y-2 text-sm">
            <div class="flex gap-2"><dt class="text-stone-400 w-16">帳號</dt><dd class="font-mono text-stone-700">demo</dd></div>
            <div class="flex gap-2"><dt class="text-stone-400 w-16">密碼</dt><dd class="font-mono text-stone-700">demo123</dd></div>
            <div class="flex gap-2"><dt class="text-stone-400 w-16">驗證碼</dt><dd class="font-mono text-stone-700">1234</dd></div>
          </dl>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
          <h3 class="font-bold text-stone-800 mb-3">課程預約試算</h3>
          <p class="text-stone-500 text-sm mb-4">前往預約試算頁，體驗 composable 表單邏輯、computed 價格衍生與 Toast 通知取代 alert。</p>
          <RouterLink
            to="/calculator"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            前往試算
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { TECH_STACK, ARCHITECTURE_PATTERNS, CODE_HIGHLIGHTS } from '@/constants/showcase'

const badges = ['Composition API', 'Pinia', 'Vue Router', 'Composables', 'Service Layer']

const projectStructure = `src/
├── components/
│   ├── auth/          # 認證相關
│   ├── booking/       # 預約功能
│   ├── home/          # 首頁區塊
│   ├── layout/        # 版面配置
│   └── ui/            # 通用 UI 元件
├── composables/       # 可複用邏輯
├── constants/         # 靜態資料
├── layouts/           # 頁面版型
├── router/            # 路由設定
├── services/          # API 抽象層
├── stores/            # Pinia 狀態
└── views/             # 頁面級元件`
</script>
