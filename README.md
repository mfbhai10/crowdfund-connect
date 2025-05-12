// ✅ README.md

# 🌐 CrowdFund Connect

**CrowdFund Connect** হলো একটি ফ্রন্টএন্ড-অনলি ক্রাউডফান্ডিং প্ল্যাটফর্ম, যেখানে ব্যবহারকারীরা ভার্চুয়াল কয়েন ব্যবহার করে বিভিন্ন প্রজেক্টে দান করতে পারে।

---

## 🚀 Live Preview

👉 [Live Demo Link (if hosted)](https://your-site-url.com)

---

## 🧩 Project Overview

CrowdFund Connect is built with **React.js**, using local JSON for data and Context API for state management. It's a **backend-free** platform perfect for demonstrating user interaction and UI logic.

---

## 🛠️ Technologies Used

- ✅ React.js (Vite)
- ✅ React Router v6
- ✅ Tailwind CSS
- ✅ React Context API
- ✅ LocalStorage
- ✅ No backend / no database

---

## ✨ Features

### 🔹 Navigation Bar
- Home, About, News, Contact links
- Profile icon showing username and coin balance
- "Add Coins" button

### 🔹 Home Page
- 📘 How It Works section
- 📊 Funding campaigns loaded from `campaigns.json`
- 🎯 Filter by Ongoing, Recent, Ended
- 💬 Contact form & Footer

### 🔹 Coin System
- Add coins from `/addcoin` page
- Donate coins to campaigns from `/donate/:id`
- Coins update live via Context API

### 🔹 Donation Logic
- Can't donate more coins than balance
- Modals for success & error
- Coin state persisted using LocalStorage

### 🔹 Static Pages
- `/about`, `/news`, `/contact` with dummy content

### 🔹 Optional Enhancements
- ✅ Coin Added Modal
- ✅ Not Enough Coins Modal
- ✅ Dark Mode Toggle 🌙
- ✅ Responsive UI

---

## 📁 Project Structure

```
crowdfund-connect/
├── public/
│   └── campaigns.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FundingEvents.jsx
│   │   ├── FilterTabs.jsx
│   │   ├── ProfileMenu.jsx
│   │   ├── CoinModal.jsx
│   │   ├── NotEnoughCoinsModal.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── DarkModeToggle.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AddCoin.jsx
│   │   ├── Donate.jsx
│   │   ├── Contact.jsx
│   │   ├── About.jsx
│   │   └── News.jsx
│   ├── App.jsx
│   └── main.jsx
```

---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/crowdfund-connect.git
cd crowdfund-connect
npm install
npm run dev
```

---

## 🧪 Example Campaign JSON (in `public/campaigns.json`)

```json
[
  {
    "id": 1,
    "title": "Clean Water for All",
    "description": "Help build clean water systems in rural areas.",
    "status": "ongoing",
    "goal": 1000,
    "raised": 450
  }
]
```

---

## 📸 Screenshots

(Add screenshots of Home Page, Donate Page, Modals, Dark Mode here)

---

## 📅 Duration

🕒 1 Week Project for React.js Competition  
🎓 Built by: **Rafi**, CSE Student, United International University

---

## 📜 License

This project is open-source and free to use for educational/demo purposes.