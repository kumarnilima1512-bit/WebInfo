# 🌐 WebInfo

A modern **Website Health Checker** built with **Nuxt 4** that analyzes websites and generates a detailed SEO and technical health report.

WebInfo provides instant insights into a website's health by checking its HTTP status, response time, SEO metadata, heading structure, image accessibility, and content statistics.

---

## ✨ Features

- 🔍 HTTP Status Checker
- ⚡ Response Time Analysis
- 📝 Page Title Detection
- 📄 Meta Description Analysis
- 🏷️ H1 Heading Detection
- 🖼️ Missing Alt Image Detection
- 📊 Word Count Analysis
- 📈 Website Health Report Dashboard
- ❌ Invalid URL Validation
- ⏱️ Request Timeout Handling
- 🌐 Non-HTML Response Detection

---

## 🛠️ Tech Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Nitro Server
- Cheerio

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/kumarnilima1512-bit/WebInfo.git
```

## Navigate into the project

```bash
cd WebInfo
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# 📡 API Contract

## Endpoint

```http
POST /api/audit
```

### Request Body

```json
{
  "url": "https://example.com"
}
```

### Success Response

```json
{
  "success": true,
  "status": 200,
  "responseTime": 31,
  "title": "Example Domain",
  "metaDescription": "Example website description",
  "h1Count": 1,
  "missingAltImages": 0,
  "wordCount": 17
}
```

### Error Responses

| Status Code | Description                       |
|-------------|-----------------------------------|
| 400         | Invalid or missing URL            |
| 400         | URL does not contain an HTML page |
| 408         | Request timed out                 |
| 500         | Internal server error             |

---

# 🧠 Design Decisions

### 1. Nuxt + Nitro

The project uses Nuxt 4 with Nitro server routes so both the frontend and backend can be maintained in a single codebase.

### 2. Cheerio for HTML Parsing

Cheerio was chosen because it is lightweight, fast, and ideal for extracting SEO and content information from HTML without requiring a browser.

### 3. Request Timeout Handling

An `AbortController` with a 10-second timeout prevents long-running requests from hanging the server and improves reliability.

---

# 📁 Project Structure

```text
WebInfo/
│
├── components/
│   ├── UserInput.vue
│   └── ReportCard.vue
│
├── pages/
│   └── index.vue
│
├── server/
│   ├── api/
│   │   └── audit.post.ts
│   └── utils/
│       └── parser.ts
│
├── public/
├── assets/
├── package.json
└── README.md
```

---

# 🌍 Deployment

### GitHub Repository

https://github.com/kumarnilima1512-bit/WebInfo

### Live Demo

The live demo is available at the following: https://web-info-sage.vercel.app/

---

# 🚀 Future Improvements

- Lighthouse-style Website Health Score
- AI-powered SEO Recommendations
- PDF Report Export
- Broken Link Checker
- Sitemap.xml Detection
- robots.txt Analysis
- Accessibility Audit
- Open Graph & Twitter Card Validation

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👩‍💻 Author

**Nilima Kumar**

Built as part of the **Digital Heroes Software Development Internship Assignment**.