# React Shop Store

This project is kind of E-commerce front-end web application built with modern technologies like React, Tailwind CSS, and Webpack. It integrates with Fake Store APIs to provide a dynamic shopping experience. The application is responsive, features light and dark modes, and includes essential functionalities like product searching. sorting, filtering, cart management, and more.

## Technologies Used

- **React JS:** - A powerful JavaScript library for building user interfaces.
- **Tailwind CSS:** - Utility-first CSS framework for styling and responsiveness.
- **Webpack :** - Bundler to optimize and compile code.
- **Redux Toolkit:** - Efficient state management for global application states.
- **React Router DOM:** - For managing routes within the application.
- **React Hook Form with Zod:** - For form validation and handling form submissions.

## Features

### Product Listing & Search

- **Integration with Fake Store APIs**: Fetch and display products.
- **Sorting by Price**: Users can sort products from low to high and high to low prices.
- **Filtering by Categories**: Dynamic category filtering using API data.
- **Quick Search**: Real-time keyword search with instant product filtering.

### Cart Management

- **Add to Cart**: Easily add items to the cart and update the quantity from the cart page.
- **Cart State Reset**: Cart state resets after a dummy order is placed.
- **Toast Notifications**: Display error messages for disabled payment methods.

### Order Placement

- **Dummy Order**: Simulated order placement with cart reset after completion.
- **Route Protection**: Prevent access order complete page if order is not placed yet.

### User Experience

- **Shimmer UI**: Loading skeleton for a smoother user experience while data is being fetched.
- **Responsive Design**: Ensures optimal viewing on various devices, including mobile and desktop.

### Themes

- **Dark and Light Mode**: Users can toggle between dark and light themes for an enhanced browsing experience.

### Offline Handling

- Gracefully handles offline status by notifying users and maintaining data integrity when reconnected.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbdulRehman2236/shop-store.git
   cd shop-store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start
   ```
   Visit the app at [http://localhost:3000](http://localhost:3000).

### Build for Production

To create an optimized production build:

```bash
npm run build

```

### Available Scripts

- `npm run start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs the linter to check code quality.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any feature requests or bugs.

## Contact Information

- Email: abdulrehmanfayyaz3083@gmail.com
- LinkedIn: https://www.linkedin.com/in/abdul-rehman-fayyaz/

Feel free to reach out to me if you have any questions or feedback about my project. I'm always happy to help!
