# 🧭 Tourist Hub

A responsive and full-featured travel-focused web application built with **React.js**, **Tailwind CSS**, **SwiperJS**, and **Node.js** with **MongoDB** as the backend. Tourist Hub allows users to explore popular tourist destinations, add new spots, and manage their own list with secure authentication via **Firebase**.

**🔗 Live Demo:** [https://tourist-hub-1389f.web.app](https://tourist-hub-1389f.web.app)

---

## 🚀 Features

### 🌟 Home Page Layout
- **Responsive Navbar:**
  - Shows `Login` and `Register` if the user is not logged in.
  - Displays user's profile picture if logged in.
  - Hovering over the image shows the user's display name.
  - Includes a `Logout` button for logged-in users.

- **Banner Slider:**
  - Built using **SwiperJS** for a smooth user experience.

- **About Us Section**

- **Most Popular Destinations:**
  - Interactive slider with coverflow effect.
  - Clicking a slide filters and navigates to the All Tourist Spot page by country.
  - `Explore All` button shows all available tourist spots.

- **Tourist Spot Section:**
  - Cards displaying key details.
  - `More Details` button:
    - Redirects to spot details if logged in.
    - Redirects to login page if not authenticated.

- **Tour Gallery & Footer**

---

### 🧳 Add Tourist Spot Page
- Protected route – only accessible to logged-in users.
- Allows users to submit new tourist spot information.
- Data is saved in **MongoDB** using **Node.js** and **Express** backend.

---

### 🌍 All Tourist Spots Page
- Displays all tourist spots from the database.
- Includes filter buttons to sort spots by country.

---

### 🔍 Spot Details Page
- A protected route.
- Displays full details of the selected tourist spot.
- Redirects unauthenticated users to the login page.

---

### 📋 My List Page
- Displays a table of tourist spots added by the logged-in user.
- Each row includes:
  - **Edit** button – update the spot.
  - **Delete** button – remove the spot.

---

## 🔐 Authentication

### ✅ Firebase Authentication
- Email & password-based registration and login.
- Password validation includes:
  - At least 6 characters
  - One uppercase letter
  - One special character (`@, $, !, %, *, ?, &`)
- Stores user's `displayName` and `photoURL` in Firebase during registration.

### 🔄 Dynamic Navbar Login/Logout
- Login/logout state is dynamically handled.
- Displays appropriate buttons based on user session state.

### 🚪 Private Routes
- Unauthenticated users are redirected to the **Login page** when trying to access:
  - Add Tourist Spot
  - Spot Details
  - My List Page

---

## 🛠 Technologies Used

### 🔧 Frontend:
- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **SwiperJS** – Interactive sliders and carousels

### 🧠 Backend:
- **Node.js** – Backend runtime
- **Express.js** – REST API for handling data
- **MongoDB** – NoSQL database

### 🔐 Authentication:
- **Firebase Authentication** – Secure and reliable login system

---

## 📥 Installation Guide

### Prerequisites:
- Node.js (v14 or above)
- MongoDB (local or MongoDB Atlas)
- Firebase project

## 📫 Contact

- **Developer:** Md Mojahidul Islam  
- **Email:** mojahidulislamt17@gmail.com 
- **LinkedIn:** [linkedin.com/in/md-mojahidulislam](https://www.linkedin.com/in/md-mojahidulislam)




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
