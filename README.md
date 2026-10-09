# BC Food Delivery Web Application

**WFS361 Capstone Project | Belgium Campus iTversity | 2026**

BC Food Delivery is a responsive React frontend application created for the Belgium Campus tuck shop. It is inspired by food-delivery platforms such as Mr D.

The application allows students and staff to browse the tuck-shop menu, filter products by category, add products to a cart, select a Tshwane Campus delivery location and place a simulated order.

This project is frontend only. It does not use a backend, database, user authentication or online payment system.

## Project purpose

The Belgium Campus tuck shop can become busy during peak times. This application demonstrates how students and staff could browse the menu and prepare a delivery order without standing in a long queue.

## Main features

- Browse all available menu items
- Filter food using menu categories
- View product images, names, descriptions and prices
- Add products to the cart
- Increase or decrease product quantities
- Remove products from the cart
- View the live cart item count
- Calculate the total order price automatically
- Select a Tshwane Campus delivery location
- Add optional room details or delivery instructions
- Place a simulated order
- View an order-confirmation ticket
- Use Home, Menu and About navigation links
- Responsive layout for desktop, tablet and mobile screens

## Menu categories

The menu data is stored in `src/data/menuData.js`.

The application includes:

- Specials
- Burgers
- Toasted sandwiches
- Hot dogs
- Chips and sides
- Drinks

The menu items and prices are based on the Belgium Campus tuck-shop menu.

## Delivery locations

Users can select delivery locations around the Belgium Campus Tshwane Campus, including:

- Residence Genck
- Residence Leuven
- Residence Hasselt
- Residence Antwerp
- Classrooms Alpha, Beta, Gamma, Delta, Omega and Sigma
- Classrooms Pi, Rho, Theta, Eta and Zeta
- Library
- Lecturers Offices
- Administration Offices
- Main Gate

## Design concept

The website uses a clean and modern Belgium Campus-inspired design.

The interface uses a white background, charcoal text and red accent colours. Food products are displayed in professional cards containing an image, name, description, price and quantity controls.

The header contains the Belgium Campus iTversity logo, navigation links and a cart button with a live item count. The cart opens as a responsive side panel. After an order is placed, the application displays a simulated confirmation ticket.

### Colour palette

| Colour | Hex value | Usage |
|---|---|---|
| Belgium red | `#E32636` | Buttons, prices and highlights |
| Dark red | `#BD1424` | Button hover colour |
| Charcoal | `#17181C` | Main text and dark buttons |
| White | `#FFFFFF` | Main background and cards |
| Light grey | `#F7F7F8` | Section and input backgrounds |
| Grey | `#686A72` | Secondary text |
| Green | `#15875D` | Positive status indicators |

### Typography

- **Manrope** — headings
- **DM Sans** — body text
- **Sacramento** — handwritten “wired” tagline style

## Technologies used

- Figma — wireframes and responsive visual designs
- React 18 — component-based user interface
- JavaScript — application logic
- CSS — styling and responsive layouts
- Vite 5 — development and production build
- GitHub — version control
- Netlify — website deployment

No CSS framework or UI library is used.

## React concepts demonstrated

The project uses React concepts covered in WFS361:

- Functional components
- Props
- `useState()`
- Event handling
- Conditional rendering
- Dynamic rendering with `map()`
- Category filtering with `filter()`
- Product searching with `find()`
- Total calculations with `reduce()`
- Reusable components
- State lifting through callback props

The JavaScript and JSX use normal functions instead of arrow functions.

## State management

The main application state is stored in `App.jsx`:

- `category` — stores the selected menu category
- `cart` — stores selected products and their quantities
- `cartOpen` — controls whether the cart panel is open
- `location` — stores the selected delivery location
- `notes` — stores optional delivery instructions
- `order` — stores the confirmed simulated order

Example:

```jsx
const [category, setCategory] = useState("all");
const [cart, setCart] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const [location, setLocation] = useState("");
const [notes, setNotes] = useState("");
const [order, setOrder] = useState(null);
```

## Component structure

Each component has one main responsibility:

| Component | Responsibility |
|---|---|
| `Header.jsx` | Logo, navigation and cart button |
| `Hero.jsx` | Main introduction and menu button |
| `CategoryTabs.jsx` | Menu category buttons |
| `MenuGrid.jsx` | Dynamically renders menu cards |
| `MenuItemCard.jsx` | Displays one menu product |
| `CartSidebar.jsx` | Cart and checkout panel |
| `CartItem.jsx` | Displays one product in the cart |
| `DeliveryLocation.jsx` | Campus delivery-location selector |
| `OrderSummary.jsx` | Item count and total price |
| `OrderTicket.jsx` | Simulated order confirmation |
| `Footer.jsx` | Belgium Campus branding and project information |

## Project structure

```text
bc-food-delivery/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── public/
│   └── images/
│       └── campus-tuckshop-hero.png
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    ├── data/
    │   └── menuData.js
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── CategoryTabs.jsx
        ├── MenuGrid.jsx
        ├── MenuItemCard.jsx
        ├── CartSidebar.jsx
        ├── CartItem.jsx
        ├── DeliveryLocation.jsx
        ├── OrderSummary.jsx
        ├── OrderTicket.jsx
        ├── Footer.jsx
        └── Styles/
            ├── Header.css
            ├── Hero.css
            ├── CategoryTabs.css
            ├── MenuGrid.css
            ├── MenuItemCard.css
            ├── CartSidebar.css
            ├── CartItem.css
            ├── DeliveryLocation.css
            ├── OrderSummary.css
            ├── OrderTicket.css
            └── Footer.css
```

## Running the project locally

### 1. Install the dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the local address

Vite normally displays an address similar to:

```text
http://localhost:5173
```

## Building for production

Run:

```bash
npm run build
```

Vite creates a production-ready `dist` folder.

To preview the production build locally, run:

```bash
npm run preview
```

## GitHub version control

Create a GitHub repository and make regular commits while developing the project.

Suggested commits:

```text
Initial React project setup
Add header and navigation
Add hero section
Add dynamic menu data
Create reusable menu components
Add category filtering
Add shopping cart functionality
Add quantity controls
Add order total calculation
Add campus delivery locations
Add checkout and order confirmation
Add responsive styling
Update README documentation
Final testing and cleanup
```

## Netlify deployment

1. Push the completed project to GitHub.
2. Sign in to Netlify.
3. Select **Add new site**.
4. Select **Import an existing project**.
5. Connect the GitHub repository.
6. Use the following settings:

```text
Build command: npm run build
Publish directory: dist
```

7. Select **Deploy site**.
8. Test the live website on desktop and mobile.

## Figma deliverable

The Figma file should include both wireframes and final visual designs.

Recommended frames:

### Desktop

- Home and Menu
- Cart and Checkout
- Order Confirmation

### Mobile

- Home and Menu
- Cart and Checkout
- Order Confirmation

The Figma colours, fonts, spacing and component layouts should match the React website.

## WFS361 rubric coverage

| Rubric section | Evidence in this project |
|---|---|
| Component Structure | Reusable components with separate responsibilities |
| Props and State Management | Central state in `App.jsx`, passed through props |
| Dynamic Data Rendering | Menu items rendered from `menuData.js` |
| Cart and Interactivity | Add, decrease, delete and live total functionality |
| User Experience | Navigation, category filters, empty states and disabled states |
| Code Quality | Clear names, normal functions and organised folders |
| Responsive Behaviour | Desktop, tablet and mobile media queries |
| Professional Appearance | Consistent Belgium Campus-inspired design |
| GitHub Usage | Regular commits required during development |
| Netlify Deployment | Production build ready for Netlify |
| Figma Design | Separate responsive Figma deliverable required |

## Project limitations

The following features are intentionally excluded because the assessment requires a frontend-only simulation:

- User login and registration
- Online payments
- Backend database
- External ordering API
- Real-time order tracking
- Real order processing

## Project links

- **Figma design:** [View the editable Figma design](https://www.figma.com/design/Ih7XA3yFAAnxIWfy0Dp9jX/BC-Food-Delivery-%E2%80%94-WFS361-Figma-Design?node-id=0-1)
- **Published Figma website:** [View the Figma website](https://dial-anchor-67011980.figma.site)
- **GitHub repository:** [View the source code on GitHub](https://github.com/NeekailAmos/BC-Food-Delivery-Web-Application)
- **Published Netlify website:** [Open the live application](https://bc-food-delivery.netlify.app/)

## Author

**Neekail Amos**  
Diploma in Information Technology  
Belgium Campus iTversity  
WFS361 — Web Frontend Scripting 361  
2026

## Disclaimer

This application is a student frontend project. All orders are simulated. No real payments, deliveries or customer information are processed.

