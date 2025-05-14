# 🌐 CrowdFund Connect

**CrowdFund Connect** হলো একটি ফ্রন্টএন্ড-অনলি ক্রাউডফান্ডিং প্ল্যাটফর্ম, যেখানে ব্যবহারকারীরা ভার্চুয়াল কয়েন ব্যবহার করে বিভিন্ন প্রজেক্টে দান করতে পারে।
> 🚀 "Empowering Change with Every Coin."

---

## 🔗 Live Preview

👉 [Visit Live on Netlify](https://crowdfundconnect.netlify.app/)

---

## 📌 Project Overview

This project is built using **React.js** with the Context API for state management and Tailwind CSS for styling. It simulates a crowdfunding experience without any backend, using `localStorage` and static `campaigns.json` data.

---

## 🛠️ Technologies Used

| Tech | Purpose |
|------|---------|
| ⚛️ React.js (Vite) | UI & component management |
| 🎯 React Router v6 | Routing |
| 🎨 Tailwind CSS | Styling |
| 🧠 Context API | State management |
| 💾 LocalStorage | Persistence |
| 🚫 No backend | Pure frontend solution |

---

## ✨ Core Features

### 🧭 Navigation
- Responsive navbar (desktop & mobile dropdown)
- Username, coin balance, profile dropdown

### 🏠 Home Page
- Hero section with animation & typewriter effect
- Filterable funding campaigns (ongoing/recent/ended)
- Progress bar animation for campaign goal
- Scroll-down interactions

### 🪙 Coin System
- Add coins via `/addcoin`
- Donate coins from `/donate/:id`
- Coin balance and username stored in `localStorage`

### 💸 Donation Logic
- Can't donate more than available coins
- Modals for errors (insufficient coins)
- Success toast notifications

### 📄 Static Pages
- `/about`, `/news`, `/contact`, `/terms` with basic content
- `/contact` includes form validation + toast feedback

### 🌓 Theme
- Dark mode toggle with persistence
- Tailwind support for both themes

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
│   │   └── Terms.jsx
│   ├── App.jsx
│   └── main.jsx
```

---

## 📥 Installation

```bash
git clone https://github.com/mfbhai10/crowdfund-connect.git
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
    "title": "Flash Flood Relief in Sylhet",
    "description": "Support families affected by recent flash floods in Sylhet with food, medicine, and shelter.",
    "status": "ongoing",
    "goal": 2000,
    "raised": 950
  }
]
```

---

## 📷 Screenshots

| Page | Preview |
|------|---------|
| Home | *(Coming Soon)* |
| Donate | *(Coming Soon)* |
| Add Coin | *(Coming Soon)* |
| Modals | *(Coming Soon)* |


---

## 📅 Project Info
	•	🕒 Duration: 1 Week (React.js Competition)
	•	👨‍💻 Built By: Mutasim Fuad Rafi
	•	🎓 CSE Student, United International University

---

## 📜 License

This project is open-source and free to use for Educational/Demo purposes.
