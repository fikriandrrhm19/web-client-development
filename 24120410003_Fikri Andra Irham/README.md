# Fikri Andra Irham - Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

![Portfolio Screenshot](https://fai.my.id/images/projects/personal-portfolio.png)

This is the source code for my personal portfolio website, designed and built to showcase my projects, skills, and professional journey.

**Live Site:** [**fai.my.id**](https://fai.my.id)

---

## About This Project

This portfolio is built from the ground up using a modern tech stack, focusing on performance, responsive design, and an interactive user experience. It serves as a central hub for my work, from web applications to infrastructure projects, and reflects my dedication to clean code and user-centric design. The entire development process, from component creation to E2E flows, is validated through comprehensive testing with Cypress.

---

## Key Features

* **Responsive First**: Fully optimized viewing experience across all devices, from large desktops to mobile phones.
* **Light & Dark Mode**: A user-friendly theme toggle that respects and saves user preferences in `localStorage`.
* **Interactive Animations**: Built with **Framer Motion** to provide a more dynamic and engaging user experience.
* **Dynamic Filtering & Sorting**: Functionality to dynamically filter and sort content on the Projects and Certificates pages.
* **Contact Form**: Integrated with **Resend** for direct email submissions from the site, validated with Zod.
* **Comprehensive Testing**: Includes Component and End-to-End tests with **Cypress** to ensure quality and reliability.
* **SEO Optimized**: Dynamic metadata generation for each page to improve search engine visibility.

---

## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

Make sure you have Node.js (version 20.x or higher) and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/fikriandrrhm19/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the project root and add your API key from [Resend](https://resend.com).
    ```env
    RESEND_API_KEY=your_resend_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Running Tests

This project is equipped with a suite of tests using Cypress.

* To open the Cypress Test Runner for interactive testing:
    ```bash
    npm run cypress:open
    ```
* To run all End-to-End tests in the terminal (headless mode):
    ```bash
    npm run cypress:run
    ```

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.