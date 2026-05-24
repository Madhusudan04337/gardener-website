# InnovateGardens 🌿

A modern, responsive website built for an innovative garden design agency. InnovateGardens specializes in creating vibrant, eco-friendly, and inspiring outdoor environments for colleges, public spaces, and private residences.

## Features

- **Modern UI/UX**: Built with React, Tailwind CSS, and beautifully animated UI components.
- **Responsive Design**: Fully mobile-responsive layouts, including a custom mobile sliding menu.
- **Service & Portfolio Pages**: Showcasing services, past projects, and client testimonials.
- **Admin Dashboard**: A secure area to manage projects, services, inquiries, and team members (`/admin/dashboard`).
- **Contact Integration**: Easy-to-use forms for potential clients to get a quote or send an inquiry.

## Tech Stack

This project is built using modern web development standards:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) & Radix UI Primitives
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (if you haven't already).
2. Install the dependencies:

```bash
npm install
```
*(Note: If you run into peer dependency issues during installation, use `npm install --legacy-peer-deps`)*

### Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the main website.

To view the admin dashboard, navigate to [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard).

## Project Structure

- `/app`: Contains all the Next.js routes (`/about`, `/contact`, `/services`, `/portfolio`, `/admin`).
- `/components`: Contains reusable UI components, layout sections, and shadcn/ui components (`/components/ui`).
- `/public`: Static assets like images and icons.
- `/styles`: Global CSS and utility styles.

## License

Private Project - All Rights Reserved.
