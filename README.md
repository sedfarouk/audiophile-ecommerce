# Audiophile E-commerce

Audiophile is a fully featured e-commerce web application for premium audio products. Built as a modern multi-page site, the project showcases detailed product pages, an interactive cart, and a secure checkout process with client-side form validation. It was built as a submission for an assessment to the Azubi Africa Talent Mobility Program (TMP).

## Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing with Tailwind CSS.
- **Dynamic Routing:** Uses React Router (with a proper `basename`) so that pages work correctly when deployed under a subpath.
- **Product Detail & Gallery:** Products are loaded from local JSON data and include multiple image resolutions.
- **Interactive Cart & Checkout:** Manage product quantities, form validation using Formik and Yup, and order summary details.
- **Reusable Components:** Includes several modular UI components (buttons, forms, modals, typography, etc.) for a consistent look and feel.

## Technologies Used

- **React** with **TypeScript**
- **Vite** for fast builds and hot module replacement
- **Tailwind CSS** for styling
- **React Router** for client-side routing
- **Formik** and **Yup** for handling checkout form validations

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/audiophile-ecommerce.git
   cd audiophile-ecommerce
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

## Production Build & Deployment

This project is configured with a custom base path (`/audiophile-ecommerce/`) in `vite.config.ts`. When deploying to GitHub Pages or a similar platform, ensure you:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy the contents of the output folder (usually `dist`).**

   For GitHub Pages, consider using a deployment tool (e.g., the `gh-pages` package or GitHub Actions) to automatically publish your build without adding the `dist` folder to your repository.

**Note:** All asset URLs in the source code (for example in components like `HeroSection.tsx`) use `import.meta.env.BASE_URL` for consistent resolution in both development and production modes.

