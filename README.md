# BC Food Delivery Web Application

**WFS361 Capstone Project | Belgium Campus iTversity | 2026**

BC Food Delivery is a React website for the Belgium Campus tuck shop. It is inspired by food delivery services such as Mr D.

Students and staff can:

- View the tuck-shop menu
- Filter food by category
- Add food to a cart
- Choose a campus delivery location
- Place a practice order

This is a frontend project only. It does not have a database, login system, backend or real online payment.

## Purpose of the project

The Belgium Campus tuck shop can be busy. Students may need to wait in long queues.

This project shows how students and staff could choose food and prepare an order before collecting it or receiving it on campus.

## Main features

- View all menu items
- Filter items by category
- See food pictures, names, descriptions and prices
- Add items to the cart
- Increase or decrease quantities
- Remove items from the cart
- See the number of items in the cart
- Calculate the total price automatically
- Choose a Tshwane Campus delivery location
- Add optional delivery instructions
- Place a simulated order
- View an order-confirmation ticket
- Use Home, Menu and About navigation links
- Use the website on desktop, tablet and mobile screens

## Menu categories

The menu information is stored in `src/data/menuData.js`.

The categories are:

- Specials
- Burgers
- Toasted sandwiches
- Hot dogs
- Chips and sides
- Drinks

The food and prices are based on the Belgium Campus tuck-shop menu.

## Delivery locations

Users can choose a delivery location on the Belgium Campus Tshwane Campus.

Locations include:

- Residence Genk
- Residence Leuven
- Residence Hasselt
- Residence Antwerp
- Classrooms Alpha, Beta, Gamma, Delta, Omega and Sigma
- Classrooms Pi, Rho, Theta, Eta and Zeta
- Library
- Lecturers Offices
- Administration Offices
- Main Gate

## Design

The website uses a clean Belgium Campus design.

It has a white background, dark text and red buttons. Each food card shows a picture, name, description, price and quantity controls.

The header has the Belgium Campus logo, navigation links and a cart button. The cart opens from the side. After the user places an order, an order-confirmation ticket appears.

### Colours

| Colour      | Code      | Use                            |
| ----------- | --------- | ------------------------------ |
| Belgium red | `#E32636` | Buttons, prices and highlights |
| Dark red    | `#BD1424` | Button hover colour            |
| Charcoal    | `#17181C` | Main text and dark buttons     |
| White       | `#FFFFFF` | Background and cards           |
| Light grey  | `#F7F7F8` | Sections and inputs            |
| Grey        | `#686A72` | Secondary text                 |
| Green       | `#15875D` | Positive messages              |

### Fonts

- **Manrope** — headings
- **DM Sans** — normal text
- **Sacramento** — the “wired” footer text

## Technologies used

- Figma — wireframes and designs
- React 18 — website components
- JavaScript — website logic
- CSS — design and responsive layout
- Vite 5 — runs and builds the project
- GitHub — saves the code and commit history
- Netlify — publishes the website online

The project does not use a CSS framework or UI library.

## React knowledge used

This project uses:

- Functional components
- Props
- `useState()`
- Event handling
- Conditional rendering
- `map()` to display menu items
- `filter()` to filter categories
- `find()` to find products
- `reduce()` to calculate totals
- Reusable components
- Callback props to update state

The JavaScript and JSX use normal functions instead of arrow functions.

## State management

The main state is stored in `App.jsx`:

- `category` — selected menu category
- `cart` — selected items and quantities
- `cartOpen` — shows whether the cart is open
- `location` — selected delivery location
- `notes` — optional delivery instructions
- `order` — confirmed simulated order

Example:

```jsx
const [category, setCategory] = useState("all");
const [cart, setCart] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const [location, setLocation] = useState("");
const [notes, setNotes] = useState("");
const [order, setOrder] = useState(null);
```

## Components

| Component              | Job                                        |
| ---------------------- | ------------------------------------------ |
| `Header.jsx`           | Shows the logo, navigation and cart button |
| `Hero.jsx`             | Shows the main heading and menu button     |
| `CategoryTabs.jsx`     | Shows the category buttons                 |
| `MenuGrid.jsx`         | Displays the menu cards                    |
| `MenuItemCard.jsx`     | Displays one menu item                     |
| `CartSidebar.jsx`      | Shows the cart and checkout section        |
| `CartItem.jsx`         | Shows one item inside the cart             |
| `DeliveryLocation.jsx` | Lets the user choose a delivery location   |
| `OrderSummary.jsx`     | Shows the item count and total price       |
| `OrderTicket.jsx`      | Shows the order confirmation               |
| `Footer.jsx`           | Shows Belgium Campus information           |

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

## Run the project

### 1. Install the packages

```bash
npm install
```

### 2. Start the project

```bash
npm run dev
```

### 3. Open the local address

Vite normally shows an address like:

```text
http://localhost:5173
```

## Build the project

Run:

```bash
npm run build
```

Vite creates a `dist` folder for deployment.

To test the production build, run:

```bash
npm run preview
```

## GitHub

Create a GitHub repository and commit your work regularly.

Example commit messages:

```text
Initial React project setup
Add header and navigation
Add menu data and components
Add category filtering
Add cart functionality
Add delivery locations
Add order confirmation
Add responsive CSS
Update README
Final testing and cleanup
```

## Netlify deployment

1. Push the project to GitHub.
2. Sign in to Netlify.
3. Select **Add new site**.
4. Select **Import an existing project**.
5. Connect the GitHub repository.
6. Use these settings:

```text
Build command: npm run build
Publish directory: dist
```

7. Select **Deploy site**.
8. Test the website on desktop and mobile.

## Figma

The Figma file should have wireframes and final designs.

Desktop screens:

- Home and Menu
- Cart and Checkout
- Order Confirmation

Mobile screens:

- Home and Menu
- Cart and Checkout
- Order Confirmation

The Figma design should look similar to the React website.

## Rubric evidence

| Rubric section         | Evidence                                          |
| ---------------------- | ------------------------------------------------- |
| Component Structure    | Small reusable components                         |
| Props and State        | State stored in `App.jsx` and passed using props  |
| Dynamic Data           | Menu items loaded from `menuData.js`              |
| Cart and Interactivity | Add, decrease, remove and total functions         |
| User Experience        | Navigation, filters and clear messages            |
| Code Quality           | Clear names, normal functions and organised files |
| Responsive Design      | Desktop, tablet and mobile CSS                    |
| Appearance             | Consistent Belgium Campus design                  |
| GitHub                 | Regular commits                                   |
| Netlify                | Production website deployment                     |
| Figma                  | Responsive wireframes and final designs           |

## Project limitations

This project does not include:

- User login or registration
- Online payments
- A backend database
- A real ordering API
- Live order tracking
- Real order processing

These features are not required because this is a frontend simulation.

## Submission links

Replace the text below before submitting:

- **Figma:** Add your Figma link
- **GitHub:** Add your GitHub repository link
- **Live website:** Add your Netlify link
- **Video walkthrough:** Add your video filename or link

## Author

**Neekail Amos**  
Diploma in Information Technology  
Belgium Campus iTversity  
WFS361 — Web Frontend Scripting 361  
2026

## Disclaimer

This is a student frontend project. All orders are simulated. No real payments, deliveries or customer information are processed.
