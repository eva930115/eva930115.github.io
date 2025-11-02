## Eva 個人網站（靜態作品集）

一個以 HTML、CSS、JavaScript 打造的個人介紹／履歷／作品集網站。專案結構清晰，樣式以設計 Token 與元件化方式管理，並提供簡易的滾動顯示動畫與表單投遞。

- **線上預覽**: `https://eva930115.github.io`
- **主要頁面**: `index.html`（首頁）、`resume.html`（履歷）、`projects.html`（專案）、`contact.html`（聯絡）

### 功能特點
- **響應式版面**：採用自訂容器與網格系統（`layout.css`）與設計 Token（`tokens.css`）。
- **設計 Token**：集中管理顏色、字級、間距等設計語彙，便於快速調整主題。
- **元件化樣式**：按鈕、卡片、導覽列等統一於 `components.css`。
- **簡易入場動畫**：`js/main.js` 會在載入後為帶有 `.reveal` 的元素新增 `--delay` 與 `.animate`，搭配 CSS 實現漸進顯示。
- **聯絡表單**：`contact.html` 透過 Formspree（`action="https://formspree.io/f/xblavrzk"`）提交，無需自架後端。
- **資產管理**：圖片與圖示集中於 `assets/`，含 favicon 與頁面插圖。

### 目錄結構
```text
eva930115.github.io/
│
├── 📄 index.html          # 首頁
├── 📄 contact.html        # 聯絡頁面
├── 📄 project.html        # 專案頁面
├── 📄 resume.html         # 履歷頁面
├── 📄 README.md           # 說明文件
│
├── 📁 assets/             # 靜態資源
│   ├── 📁 icons/
│   │   └── favicon.png
│   └── 📁 images/
│       ├── bear.png
│       ├── favicon.png
│       ├── fb.png
│       ├── github.png
│       ├── info_line.png
│       ├── Instagram.png
│       ├── line.png
│       ├── line2.png
│       ├── my.jpg
│       ├── rectangle.png
│       └── 📁 project/
│           └── my web.png
│
├── 📁 scss/               # SCSS 原始檔
│   ├── _animations.scss   # 動畫樣式
│   ├── _base.scss         # 基礎樣式
│   ├── _components.scss   # 元件樣式
│   ├── _layout.scss       # 版面樣式
│   ├── _mixin.scss        # Mixins
│   ├── _variables.scss    # 變數定義
│   ├── main.scss          # 主樣式檔
│   ├── style.scss         # 樣式入口檔
│   └── 📁 pages/          # 頁面樣式
│       ├── _contact.scss  # 聯絡頁樣式
│       ├── _home.scss     # 首頁樣式
│       ├── _project.scss  # 專案頁樣式
│       └── _resume.scss   # 履歷頁樣式
│
├── 📁 style/              # 編譯後的 CSS
│   ├── style.css
│   └── style.css.map      # Source map
│
└── 📁 dist/               # 生產環境檔案（壓縮版）
    └── 📁 style/
        ├── style.min.css      # 壓縮的 CSS
        └── style.min.css.map  # Source map
```

### 技術棧
- HTML5 / CSS3（自訂 RWD、設計 Token、元件化樣式）
- 原生 JavaScript（載入後為 `.reveal` 元素添加動畫類名）
- Google Fonts（`Inter`、`Vollkorn`）
- Formspree（表單託管）(未來自架後端更新)

# 學習 / 開發 / 製作紀錄

## 時間軸
- **2025/9/3 ~ 2025/9/4**  
  Figma 繪製  
  [設計連結](https://www.figma.com/design/MZHKH8DihZ0Xw4rJHYdPUs/My-Websit?node-id=39-994&t=JPUrIUPiBVfaGOvd-1)

- **2025/9/5 ~ 2025/9/15**  
  網頁實作流程：
  1. 確認架構  
  2. 依照 Figma 完成 token  
  3. 完成 layout  
  4. 逐頁完成 (Home, Resume, Project, Contact)

- **2025/11/3 更新為SASS**  

---

## 學習收穫
- 起初花了很多時間查各種 **HTML 標籤、CSS 屬性與規則**。  
- 完成 Home Page 後，明顯感覺其他頁面的設計速度提升許多。  
- 達到熟悉 HTML / CSS 的目的後，後期為了趕快練習框架，整體就比較隨意。希望未來能回頭把這份作品修改得更完整、更有系統。
- 花費的時間比預期的久，希望之後不要再拖延ㄌ。
- 更：已在更新為SASS的地方將不足的部分修正。 並因為使用SASS所以將原先寫在js得動畫改為用SASS完成。
