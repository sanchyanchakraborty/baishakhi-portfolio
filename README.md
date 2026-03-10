# Baishakhi Mukherjee — Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org)

A **modern multi-page portfolio website** built using **Next.js, React, TypeScript, and TailwindCSS**.

This project showcases professional information including **education, work experience, skills, achievements, and contact details** in a responsive and performance-optimized layout.

🌐 **Live Website**
https://www.something

---

# ✨ Features

* Multi-page portfolio architecture
* Responsive design for all devices
* Optimized image loading with Next.js `<Image />`
* Clean component-based architecture
* TailwindCSS utility-first styling
* SEO-friendly structure
* Fast rendering using **Next.js App Router**

---

# 🛠 Tech Stack

| Category        | Technology             |
| --------------- | ---------------------- |
| Framework       | Next.js                |
| Language        | TypeScript, JavaScript |
| Styling         | TailwindCSS            |
| Runtime         | Node.js                |
| Package Manager | npm                    |

---

# 📂 Project Structure

```
src
├── app
│   ├── about
│   │   └── page.tsx
│   ├── achievements
│   │   └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── education
│   │   └── page.tsx
│   ├── experience
│   │   └── page.tsx
│   ├── skills
│   │   └── page.tsx
│   └── page.tsx
│
├── components
│   └── Navbar.tsx
│
public
└── images
```

---

# ⚙️ Requirements

Ensure the following tools are installed before running the project.

| Software | Version  |
| -------- | -------- |
| Node.js  | >= 18.17 |
| npm      | >= 9     |

---

# ⚡ Next.js Version

```
Next.js 16.x
```

---

# 🚀 Installation

### Clone the repository

```
git clone git@github.com:sanchyanchakraborty/baishakhi-portfolio.git
```

### Navigate into the project directory

```
cd baishakhi-portfolio
```

### Install dependencies

```
npm install
```

---

# 🧪 Run Development Server

```
npm run dev
```

The application will start at:

```
http://localhost:3000
```

---

# 📦 Production Build

Create an optimized production build:

```
npm run build
```

Start the production server:

```
npm start
```

---

# 🖼 Image Handling

All static images should be stored inside the **public directory**.

Example:

```
public/images/baishakhi.png
```

Usage in code:

```
<Image
  src="/images/baishakhi.png"
  width={220}
  height={220}
  alt="Profile Photo"
/>
```

---

# 🌍 Deployment

This project can be deployed on:

* Vercel
* Netlify
* AWS Amplify
* Docker environments
* Custom Node.js servers

Live deployment:

```
https://www.something
```

---

# 👩‍💻 Author

**Baishakhi Mukherjee**

B.Tech — Artificial Intelligence & Machine Learning
MCKV Institute of Engineering

---

# 📄 License

This project is intended for **personal portfolio use**.
