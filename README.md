This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 新增事件資料步驟 (How to Add New Events)

本專案採用資料驅動架構，新增事件需完成以下兩個步驟：

### 1. 建立詳細內容檔案 (Markdown)
在 `resource/` 目錄下建立一個新的 `.md` 檔案，命名建議遵循 `YYYY-MM-DD_event_name.md` 格式。

**範例檔名：** `2026-03-16_new_event.md`
**內容範例：**
```markdown
# 事件標題

這裡是事件的詳細描述內容...
```

### 2. 更新索引檔案 (events.json)
編輯 `resource/events.json`，在陣列中加入新的物件。

**欄位說明：**
- `id`: 格式為 `YYYYMMDD-序號` (如 `20260316-001`)
- `date`: 事件日期 (YYYY-MM-DD)
- `time`: 事件時間 (HH:MM)
- `title`: 事件簡短標題
- `location`: 地點
- `people`: 參與人員清單 (Array)
- `event`: 事件簡述
- `object`: 標的物或案件類型
- `category`: 分類
- `tags`: 標籤 (Array)
- `source_file`: 對應步驟 1 建立的 Markdown 檔名

**JSON 範例：**
```json
{
  "id": "20260316-001",
  "date": "2026-03-16",
  "time": "17:30",
  "title": "範例事件標題",
  "location": "台北",
  "people": ["相關人物A", "相關人物B"],
  "event": "這裡填寫事件的具體摘要內容。",
  "object": "案件類別",
  "category": "分類名稱",
  "tags": ["標籤1", "標籤2"],
  "source_file": "2026-03-16_new_event.md"
}
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
