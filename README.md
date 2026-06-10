# NaturalBeauty — Vue 3 前端工程展示專案

以美容 SPA 預約系統為場景，展示資深 Vue 3 前端工程師的架構設計與最佳實踐。

**線上預覽：** [GitHub Pages](https://www.nblife.com.tw/)（參考原站設計）

## 技術棧

| 類別 | 技術 |
|------|------|
| 框架 | Vue 3.4 (Composition API + `<script setup>`) |
| 路由 | Vue Router 4（懶加載、scroll behavior） |
| 狀態 | Pinia（Setup Store、localStorage 持久化） |
| 建置 | Vite 5（path alias `@/`） |
| 樣式 | Tailwind CSS 3 |

## 架構亮點

```
src/
├── components/
│   ├── auth/          # 認證相關元件
│   ├── booking/       # 預約功能元件
│   ├── home/          # 首頁區塊元件
│   ├── layout/        # Header、Footer
│   └── ui/            # 可複用 UI 元件
├── composables/       # useCarousel、useBookingForm、useToast
├── constants/         # 靜態資料與展示內容
├── layouts/           # 頁面版型
├── router/            # 路由設定
├── services/          # API 抽象層（mock）
├── stores/            # Pinia stores
└── views/             # 頁面級元件
```

### 工程實踐

- **Composables 邏輯抽離** — 輪播、表單、Toast 與元件解耦
- **Service Layer** — API 呼叫集中管理，方便替換為真實後端
- **漸進式狀態管理** — 表單用 local reactive，跨頁認證用 Pinia
- **defineModel** — 彈窗雙向綁定（Vue 3.4+）
- **Toast 通知系統** — 取代 `alert()`，提升 UX
- **路由懶加載** — 按需載入頁面，優化首屏效能

## 快速開始

```bash
npm install
npm run dev
```

開啟 `http://localhost:5173`，導覽至「技術展示」頁面查看完整說明。

## 互動體驗

### 會員登入 Demo

| 欄位 | 值 |
|------|-----|
| 帳號 | `demo` |
| 密碼 | `demo123` |
| 驗證碼 | `1234` |

登入後狀態會透過 Pinia + localStorage 持久化，重新整理頁面仍保持登入。

### 課程預約試算

選擇課程類別與項目，填寫聯絡資訊後提交，體驗 composable 表單邏輯與 Toast 回饋。

## 部署

```bash
npm run build
```

產出至 `dist/`，已設定 GitHub Pages base path `/web-price-cal/`。

## 頁面路由

| 路徑 | 頁面 |
|------|------|
| `/` | 首頁（Banner、品牌故事、課程） |
| `/calculator` | 課程預約與價格試算 |
| `/showcase` | 技術架構展示 |
