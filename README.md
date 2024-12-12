
# Ecommerce Store Fall 2024

## WanderBrew 🍺

WanderBrew is a global e-commerce platform dedicated to discovering and purchasing international beers. Whether you want to explore a new lager, find a rare ale, or revisit a favorite brew, WanderBrew connects beer enthusiasts worldwide with a curated selection from different origins.

### Features

- **Global Beer Showcase:** Browse a wide array of beers with detailed brand, origin, and price information.
- **Dynamic Routing & Sliding Showcase:** Instantly navigate from an overview page to individual product pages. A responsive homepage slider highlights featured beers one by one.
- **Persistent Shopping Cart:** Cookies store the user’s cart selections, preserving items between sessions and without login.
- **Product Management:** Integrated with a PostgreSQL database to store beer details, ensuring real-time updates and robust data handling.
- **User Experience & Responsive Design:** Styled with SCSS modules, WanderBrew ensures a consistent and mobile-friendly interface for users on all devices.

### Screenshots

_Frontend Design (Example)_

*(Will be updated)*

_Database Setup (Example)_



### Tech Stack

WanderBrew is built using modern technologies to deliver a smooth and engaging shopping experience:

**Frontend**
- **Next.js & TypeScript:** For server-side rendering, modern routing, and type-safe UI development.
- **SCSS:** For modular, maintainable, and responsive styling.

**Backend**
- **Next.js API Routes:** Handle server-side logic, data fetching, and secure endpoints.
- **PostgreSQL:** Structured storage of product data, ensuring fast and reliable queries.
- **dotenv-safe:** Validating environment variables for secure, consistent configuration.

**UI & Interactivity**
- **Cookies for Cart State:** Preserves cart contents between page reloads and sessions.

### Usage

**For Visitors**
- Access the homepage and view the sliding beer showcase.
- Navigate through detailed product pages for insights into brand and origin.

**For Cart Interaction**
- Add products to the cart, remove them, or adjust quantities, all tracked via cookies.

### Challenges and Learnings

- **Server & Client Separation:** Ensuring server-only code (database access) is isolated from client components.
- **Persistent State:** Managing cart state across sessions using cookies without user login.
- **Performance & SEO:** Leveraging Next.js server-side rendering for faster load times and improved search engine visibility.
- **Scaling CSS:** Utilizing SCSS for scalable, modular, and maintainable styling practices.

### Future Features

- **User Accounts & Order History:** Introduce user login for personalized recommendations and order history.
- **Extended Filters & Search:** Implement advanced filtering, search, and sorting options for the beer catalog.
- **Reviews & Ratings:** Allow users to rate and review beers for community-driven recommendations.

## Acknowledgments
- **Database Libraries & Migrations:** For reliable schema evolution and data integrity.

### Contact

Developed by Mercedesz A. Feher. Feel free to connect:

👤[LinkedIn](www.linkedin.com/in/mercedesz-a-feher)  
👩🏼‍💻[GitHub](https://github.com/mercedeszafeher)

#### License

© 2024 Mercedesz A. Feher. All rights reserved.
