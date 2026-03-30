# 🚀 Prept — AI-Powered Interview Preparation Platform

Prept is a full-stack web application that helps users prepare for technical interviews through **1:1 mock interviews with real experts** and **AI-powered feedback**.

---

## ✨ Features

* 🔐 Authentication using Clerk
* 👨‍💻 Role-based system (Interviewer / Interviewee)
* 📅 Book mock interview sessions
* 🤖 AI-powered feedback system
* 💳 Credit-based system for booking sessions
* 🌌 Modern UI with animated backgrounds
* ⚡ Fast and scalable architecture using Next.js + Prisma

---

## 🛠️ Tech Stack

* **Frontend:** Next.js (App Router), Tailwind CSS
* **Backend:** Prisma ORM
* **Database:** Supabase (PostgreSQL)
* **Authentication:** Clerk
* **UI Components:** Shadcn UI
* **Icons:** Lucide React

---

## 📁 Project Structure

```
prept/
│── app/                # Next.js App Router pages
│── components/         # UI components
│── lib/                # Utilities & Prisma client
│── prisma/             # Prisma schema
│── public/             # Static assets
│── .env                # Environment variables (NOT pushed)
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/prept.git
cd prept
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup database

* Create a Supabase project
* Add your `DATABASE_URL` to `.env`

---

### 4. Run the development server

```
npm run dev
```

---

### 5. Open in browser

```
http://localhost:3000
```

---

## 🔑 Key Concepts

* Uses **Server Components + Prisma** for direct DB access
* Uses **Client Components for Clerk UI**
* Clean separation of backend and frontend logic

---

## 📌 Future Improvements

* 💬 Real-time video interviews
* 🧠 Advanced AI feedback
* 📊 User performance analytics
* 🌍 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Abhigyan Prakash**

* Full Stack Developer
* Passionate about AI & scalable systems

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
