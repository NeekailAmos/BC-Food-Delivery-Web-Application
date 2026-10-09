// Menu items and prices follow the Belgium Campus Tshwane tuck-shop menu.
export const categories = [
  { id: "all", label: "All" },
  { id: "specials", label: "Specials" },
  { id: "burgers", label: "Burgers" },
  { id: "sandwiches", label: "Toasted Sandwiches" },
  { id: "hot-dogs", label: "Hot Dogs" },
  { id: "sides", label: "Chips & Sides" },
  { id: "drinks", label: "Drinks" },
];

export const menuItems = [
  {
    id: "sp1",
    category: "specials",
    name: "Wors Roll Special",
    description:
      "Wors roll with chips and a 300ml cold drink. Includes butter and/or onions.",
    price: 62,
    image:
      "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "sp2",
    category: "specials",
    name: "Hot Dog Special",
    description:
      "Hot dog with chips and a 300ml cold drink. Includes butter and/or onions.",
    price: 47,
    image:
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "sp3",
    category: "specials",
    name: "Classic Chicken Wrap & Chips",
    description:
      "Wednesday special: classic chicken wrap served with golden chips.",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "b1",
    category: "burgers",
    name: "Chicken Burger",
    description:
      "Tender chicken burger served fresh from the campus tuck shop.",
    price: 52,
    image:
      "https://images.unsplash.com/photo-1615297928064-24977384d0da?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "b2",
    category: "burgers",
    name: "Beef Burger",
    description: "Juicy beef burger with classic fresh toppings.",
    price: 57,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t1",
    category: "sandwiches",
    name: "Cheese Toasted Sandwich",
    description: "Golden toasted bread filled with melted cheese.",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t2",
    category: "sandwiches",
    name: "Chilli Cheese Toasted Sandwich",
    description: "Melted cheese with a warm chilli kick.",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t3",
    category: "sandwiches",
    name: "Tomato & Cheese Toasted Sandwich",
    description: "Fresh tomato and melted cheese on toasted bread.",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t4",
    category: "sandwiches",
    name: "Ham & Cheese Toasted Sandwich",
    description: "A campus favourite with ham and melted cheese.",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t5",
    category: "sandwiches",
    name: "Ham, Cheese & Tomato",
    description: "Ham, melted cheese and tomato toasted until golden.",
    price: 37,
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t6",
    category: "sandwiches",
    name: "Bacon, Egg & Cheese",
    description: "Breakfast-style toasted sandwich with bacon, egg and cheese.",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "t7",
    category: "sandwiches",
    name: "Chicken Mayo",
    description: "Creamy chicken mayonnaise on golden toasted bread.",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "h1",
    category: "hot-dogs",
    name: "Chicken Hot Dog",
    description: "Classic chicken hot dog in a soft roll.",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "h2",
    category: "hot-dogs",
    name: "Pork Hot Dog",
    description: "Classic pork hot dog in a soft roll.",
    price: 27,
    image:
      "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "h3",
    category: "hot-dogs",
    name: "Pork Russian Roll",
    description: "Savoury pork Russian served in a fresh roll.",
    price: 42,
    image:
      "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "s1",
    category: "sides",
    name: "Medium Chips",
    description: "A medium portion of crisp golden chips.",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "s2",
    category: "sides",
    name: "Large Chips",
    description: "A large portion of crisp golden chips.",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "s3",
    category: "sides",
    name: "Russian & Chips",
    description: "A savoury Russian served with golden chips.",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "d1",
    category: "drinks",
    name: "Handcrafted Cappuccino",
    description: "Made fresh with your choice of sugar and milk.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "d2",
    category: "drinks",
    name: "Soft Drink 300ml",
    description: "Choose an ice-cold Coke, Coke Zero, Sprite, Stoney or Fanta.",
    price: 18,
    image:
      "https://img.postershop.me/6563/6f59e568-c44b-41f7-ba88-c7834072bf41_image.jpg",
  },
  {
    id: "d3",
    category: "drinks",
    name: "Still Water 500ml",
    description: "Chilled still water for your campus day.",
    price: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwy-i__bSmrNYW9ODtnAHu1jPnUpBeywD2a0_iGW1xg&s=10",
  },
];

export const deliveryLocations = [
  { id: "res-genk", label: "Residence Genk" },
  { id: "res-leuven", label: "Residence Leuven" },
  { id: "res-hasselt", label: "Residence Hasselt" },
  { id: "res-antwerp", label: "Residence Antwerp" },
  { id: "class-alpha", label: "Classroom Alpha" },
  { id: "class-gamma", label: "Classroom Gamma" },
  { id: "class-delta", label: "Classroom Delta" },
  { id: "class-omega", label: "Classroom Omega" },
  { id: "class-sigma", label: "Classroom Sigma" },
  { id: "class-pi", label: "Classroom Pi" },
  { id: "class-theta", label: "Classroom Theta" },
  { id: "class-eta", label: "Classroom Eta" },
  { id: "class-zeta", label: "Classroom Zeta" },
  { id: "library", label: "Library" },
  { id: "lecturers", label: "Lecturers Offices" },
  { id: "admin", label: "Administration Offices" },
  { id: "main-gate", label: "Main Gate" },
];
