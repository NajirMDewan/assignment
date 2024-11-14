# Practical Assignment - Pre-Employment Process (PEP)

This project is a basic web application built with **Next.js** for the Pre-Employment Process (PEP) assignment. The application consists of multiple pages, including Home, About Us, Contact Us, and Login, with links in the header and footer for easy navigation.

# Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages and Features](#pages-and-features)
- [Styling](#styling)
- [License](#license)

# Technologies Used

- **Next.js** - React-based framework for building web applications with server-side rendering and static site generation.
- **React** - JavaScript library for building user interfaces.
- **CSS** - Used for basic styling in `globals.css`.

### Getting Started

To run this project locally, follow these steps.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

1. Clone this repository:
   ```bash```
   ```git clone https://github.com/NajirMDewan/practical-assignment.git```

2. Navigate to the project directory
   > ```cd assignment```

3. Install dependencies
   > ```npm install```
4. Run the development server
   > ```npm run dev```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application


## Pages and features
### Home page(```/```):
- Displays a welcome message and navigation Links

### About Us Page(```/about```):
- Contains information about ABC India and its products and services.

### Contact Us Page(```/contact```):
- Displays the contact address for ABC India.

### Login Page(```/login```):
- Contains a login form with fields for User ID and Password.
- Includes a link with signup(placeholder)

### Layout Component:
- The ```Layout.js``` component contains the header and footer, which are shared across all pages.
- The header and footer include links to the Home, About Us, Contact Us, and Login pages.
