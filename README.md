# Aadithya Sreekaant P — Personal Developer Portfolio

> Modern, performance-focused personal portfolio website inspired by high-end developer portfolios and design systems (Linear, Vercel). Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

🌐 **Live URL**: [https://aadithyagit.github.io/](https://aadithyagit.github.io/)

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Icons
- **Resilience**: React ErrorBoundary with graceful fallback
- **CI/CD**: GitHub Actions (Lint, Build, and Automated Pages Deployment)
- **Deployment**: GitHub Pages (Domain: `aadithyagit.github.io`)

---

## 📂 Project Structure

```text
portfolio/
├── public/                  # Static assets (Photos, PDFs, Certificates)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Terminal-style nav with scroll progress bar
│   │   ├── Hero.tsx         # Headline, portrait, social links, CTAs
│   │   ├── About.tsx        # Bio, Core Areas & integrated Education
│   │   ├── Skills.tsx       # 4-tab interactive technical skills selector
│   │   ├── Projects.tsx     # 2-column showcase for GitHub repos + standard cards
│   │   ├── Experience.tsx   # Verified internships timeline with certificate viewer
│   │   ├── Achievements.tsx # Milestones with side-by-side visual proofs & modals
│   │   ├── Certificates.tsx # Direct interactive PDF certificate viewer
│   │   └── Contact.tsx      # Contact form and channels
│   ├── data/
│   │   └── portfolioData.ts # Centralized data store
│   ├── index.css            # Custom design system tokens & animations
│   ├── App.tsx              # Root component orchestrator
│   └── main.tsx             # Application entrypoint
├── vite.config.ts           # Build configuration
└── package.json             # Scripts & dependencies
```

---

## 🚀 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/aadithyagit/aadithyagit.github.io.git
   cd aadithyagit.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy updates to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## 👤 Author

**Aadithya Sreekaant P**
- GitHub: [@aadithyagit](https://github.com/aadithyagit)
- LinkedIn: [Aadithya Sreekaant](https://www.linkedin.com/in/aadithya-sreekaant-aa70662a7/)
- Email: [aadhitari@gmail.com](mailto:aadhitari@gmail.com)
