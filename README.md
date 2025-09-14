# 🤖 WhatsApp AI Bot - Samay Verma

A personal WhatsApp AI assistant that replies like **Samay Verma** in a casual, Hindi-English mixed tone using **Google Gemini API** and **WhatsApp Web.js**.

---

## 📂 Project Structure

backend/
├── src/
│ └── whatsab.js # WhatsApp logic + Gemini AI integration
├── index.js # Entry point of the server
├── package.json
└── .env # Environment variables (e.g. Gemini API key)

yaml
Copy
Edit

---

## 🚀 Features

- 📱 WhatsApp bot using `whatsapp-web.js`
- 🧠 Smart replies using Google **Gemini 2.5 Flash**
- 🗣 Casual, short Hindi-English responses like Samay
- 🔐 Secrets are stored in `.env` file (e.g. `GEMINI_API_KEY`)

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Samay2006/whatsapp-ai.git
   cd whatsapp-ai/backend
Install dependencies

bash
Copy
Edit
npm install
Create .env file

env
Copy
Edit
GEMINI_API_KEY=your_google_gemini_api_key_here
Start the server

bash
Copy
Edit
node index.js
Scan the QR code on terminal using your WhatsApp.

🧠 AI Prompt Style
Your assistant will reply like:

"Main theek hoon, aap batao?"

"Main Samay hoon."

"Abhi pata nahi, dekhte hain."

Avoids long intros unless asked directly.

🛡️ .gitignore Recommendation
Make sure your .gitignore contains:

bash
Copy
Edit
node_modules/
.wwebjs_cache/
.env
🧑‍💻 Developed by
Samay Verma
BCA Student | AI Enthusiast | Web Developer
GitHub
