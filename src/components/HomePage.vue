<template>
  <div class="home-page w-full min-h-screen bg-stone-50 font-sans">
    
    <!-- 1. 首頁 Banner ( Hero Section ) -->
    <section class="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-stone-200">
      <div 
        class="absolute inset-0 flex transition-transform duration-700 ease-in-out" 
        :style="{ transform: `translateX(-${currentBannerIndex * 100}%)` }"
      >
        <div 
          v-for="(banner, index) in mockBanners" 
          :key="index"
          class="w-full h-full flex-shrink-0 relative"
        >
          <img :src="banner.img" class="w-full h-full object-cover" alt="Banner" />
          <!-- 疊加漸層與內容 -->
          <div class="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-6 text-center">
             <!-- 如果有副標題圖片或文字可以放這 -->
             <div v-if="banner.titleImg" class="mb-8">
               <img :src="banner.titleImg" alt="title" class="max-w-[80%] md:max-w-md mx-auto" />
             </div>
             
             <a 
               :href="banner.link" 
               class="mt-6 px-8 py-3.5 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-full font-bold tracking-wide shadow-lg backdrop-blur-sm transition-all transform hover:scale-105"
             >
               {{ banner.btnText || '立即體驗' }}
             </a>
          </div>
        </div>
      </div>

      <!-- 輪播控制點 -->
      <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        <button 
          v-for="(_, index) in mockBanners" 
          :key="index"
          @click="currentBannerIndex = index"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="currentBannerIndex === index ? 'bg-emerald-500 w-8' : 'bg-white/60 hover:bg-white'"
          aria-label="切換 Banner"
        ></button>
      </div>
    </section>

    <!-- 2. 品牌故事 ( About Section ) -->
    <section class="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 tracking-wider">品牌故事 <span class="text-xl md:text-2xl text-emerald-600/60 font-light ml-2">About</span></h2>
        <div class="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div class="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        <div class="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-transform duration-500">
          <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000" alt="About" class="w-full h-[400px] object-cover" />
        </div>
        <div class="w-full md:w-1/2 space-y-6">
          <p class="text-stone-600 leading-relaxed text-lg text-justify">
            用高科技萃取天然植物精華，滋養膚質各異的嬌嫩之肌，以獨特按壓手法引導營養滲透，打通肌膚經絡，從細胞深處層層清掃，帶來由表及裡的通透；配合保健食品，以內服提升外補，標本兼顧地調養出健康美態，由內而外喚醒肌膚生命力。
          </p>
          <p class="text-stone-600 leading-relaxed text-lg text-justify">
            通過科學的皮膚及虹膜測試與追蹤，真正瞭解肌膚內在轉變，為每一種肌膚開啟與之相宜的自然美之旅。
          </p>
          <div class="pt-4">
            <a href="#" class="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group transition-colors">
              了解更多 
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 美麗看板 ( News Section ) -->
    <section class="py-16 md:py-24 bg-white px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-stone-800 tracking-wider">美麗看板 <span class="text-xl md:text-2xl text-emerald-600/60 font-light ml-2">News</span></h2>
          <div class="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 新聞卡片 (v-for 渲染) -->
          <article 
            v-for="news in mockNews" 
            :key="news.id"
            class="group bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 flex flex-col"
          >
            <div class="relative h-64 overflow-hidden">
              <img :src="news.image" :alt="news.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold text-stone-800 mb-3 line-clamp-1 group-hover:text-emerald-700 transition-colors">{{ news.title }}</h3>
              <p class="text-stone-500 mb-6 line-clamp-2 flex-grow">{{ news.description }}</p>
              <a :href="news.link" class="inline-block mt-auto text-emerald-600 font-medium hover:text-emerald-800 transition-colors">
                View more <span class="ml-1">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 4. 預約課程 ( Activity Section ) -->
    <section class="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 tracking-wider">熱門課程 <span class="text-xl md:text-2xl text-emerald-600/60 font-light ml-2">Courses</span></h2>
        <div class="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <!-- 這裡簡化 Swiper，改用 Grid 排版展示多張卡片 -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div 
          v-for="activity in mockActivities" 
          :key="activity.id"
          class="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 group"
        >
          <!-- 左側圖片 -->
          <div class="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden flex-shrink-0">
             <img :src="activity.image" :alt="activity.title" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          
          <!-- 右側內容 -->
          <div class="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between">
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-stone-800 mb-2">
                {{ activity.title }} <span class="text-sm text-stone-500 font-normal block mt-1">{{ activity.duration }}</span>
              </h3>
              <p class="text-emerald-600 font-medium mb-4">{{ activity.subtitle }}</p>
              
              <ul class="space-y-2 mb-6">
                <li v-for="(feature, idx) in activity.features" :key="idx" class="flex items-start text-stone-600 text-sm">
                  <svg class="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div class="mt-auto pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="text-2xl font-bold text-stone-700">
                <span v-if="activity.originalPrice" class="text-sm text-stone-400 line-through mr-2 font-normal">{{ activity.originalPrice }}</span>
                {{ activity.price }}
              </div>
              <button 
                @click="openBooking(activity)"
                class="px-6 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg text-center whitespace-nowrap"
              >
                立即預約
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Banner 輪播狀態與資料
const currentBannerIndex = ref(0)
const mockBanners = [
  { img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000', link: '#', btnText: 'PDRN水光體驗價$1,980' },
  { img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2000', link: '#', btnText: '新客體驗價$3,480起' },
  { img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000', link: '#', btnText: '立即預約體驗' }
]

// 簡單的自動輪播邏輯
let bannerInterval
onMounted(() => {
  bannerInterval = setInterval(() => {
    currentBannerIndex.value = (currentBannerIndex.value + 1) % mockBanners.length
  }, 5000)
})
onUnmounted(() => {
  clearInterval(bannerInterval)
})

// 2. 新聞列表假資料
const mockNews = [
  {
    id: 1,
    title: '東森自然美 疫起守護',
    description: '全民同心，徹底防疫。東森自然美呵護您的健康與美麗！',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 2,
    title: '全台最美頂級SPA',
    description: '東森麗格薈旗艦館。享受五星級的微渡假體驗',
    image: 'https://images.unsplash.com/photo-1600334129128-685054110de4?auto=format&fit=crop&q=80&w=600',
    link: '#'
  },
  {
    id: 3,
    title: '找回美胸支撐力',
    description: '筋膜舒放概念結合推撥溫柔手技。溫柔推開僵硬肌肉與筋膜沾黏',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600',
    link: '#'
  }
]

// 3. 課程活動假資料
const mockActivities = [
  {
    id: 1,
    title: '胜肽水光護理課程',
    duration: '（90分鐘）',
    subtitle: '星級療程，時光逆轉的神奇境界',
    features: [
      '好萊塢紅地毯明星療程，美麗容顏一直是女人們夢寐以求的渴望。',
      '突破全球多項專利，領先發明、獨創技術活化緊緻、青春無痕。'
    ],
    price: '$6,600~$10,200',
    originalPrice: '',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'NB-1活膚護理課程',
    duration: '（90分鐘）',
    subtitle: '煥顏緊緻、透亮白皙、呵護敏肌',
    features: [
      '專利生技技術，煥活肌底。',
      '專為東方女性設計的護理流程和按摩手法，恢復肌膚代謝機制。'
    ],
    price: '$2,400~$2,700',
    originalPrice: '',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: '水光洋娃娃護理課程',
    duration: '（60分鐘）',
    subtitle: '雙倍修護、全面澎潤、逆齡無瑕',
    features: [
      '「立提娃娃水光護理」KO細紋、感受臉部立體感',
      '課程皆搭配頂級保養系列產品，秒變少女水嫩娃娃肌'
    ],
    price: '$1,499起',
    originalPrice: '$3,080',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: '4D膠原極緻澎亮護理',
    duration: '（90分鐘）',
    subtitle: '一生一定要享受一次的護膚儀式',
    features: [
      '突破性技術解鎖肌膚潛能，拒絕暗沉，散發充盈彈性與緊緻。',
      '透過最純粹手技，重新塑造飽滿、柔滑的臉部輪廓。'
    ],
    price: '$1,799',
    originalPrice: '$3,800',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  }
]

// 互動方法
const openBooking = (activity) => {
  alert(`準備預約: ${activity.title}\n系統導向預約頁面...`)
  // 實際應用可以 router.push({ name: 'booking', query: { id: activity.id } })
}
</script>

<style scoped>
/* 隱藏原生滾動條，保持頁面乾淨 */
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