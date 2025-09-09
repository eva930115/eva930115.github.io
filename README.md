```bash
my-website/
│
├─ index.html          # 首頁 (主要網頁)
├─ about.html          # (可選) 其他頁面
│
├─ /assets/            # 靜態資源
│   ├─ /images/        # 圖片、圖示 (Figma 匯出的素材)
│   ├─ /fonts/         # (可選) 自訂字體
│   └─ /icons/         # (可選) SVG icon
│
├─ /css/               # 樣式 (CSS)
│   ├─ reset.css       # Reset/Normalize，讓各瀏覽器預設樣式一致
│   ├─ variables.css   # 設計代碼：顏色、字級、間距 (Figma tokens)
│   ├─ components.css  # 元件樣式：按鈕、卡片、導覽列、表單
│   ├─ layout.css      # 網頁排版：Grid、Flex、header/footer、容器
│   └─ main.css        # 主入口 (import 以上所有 CSS)
│
├─ /js/                # (可選) JavaScript 功能
│   └─ main.js         # 主程式：互動效果 (如漢堡選單、表單驗證)
│
└─ README.md           # 專案說明 (給 GitHub 看)

```