import React from "react";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CategoryTabs from "./components/CategoryTabs.jsx";
import MenuGrid from "./components/MenuGrid.jsx";
import CartSidebar from "./components/CartSidebar.jsx";
import OrderTicket from "./components/OrderTicket.jsx";
import Footer from "./components/Footer.jsx";
import { categories, menuItems, deliveryLocations } from "./data/menuData.js";
import "./App.css";

function App() {
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [order, setOrder] = useState(null);

  // Show all items or only the selected category.
  const filteredItems = menuItems.filter(function (item) {
    if (category === "all") {
      return true;
    }

    return item.category === category;
  });

  function changeCategory(categoryId) {
    setCategory(categoryId);
  }

  function addToCart(id) {
    const itemInCart = cart.find(function (item) {
      return item.id === id;
    });

    if (itemInCart) {
      const updatedCart = cart.map(function (item) {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      const menuItem = menuItems.find(function (item) {
        return item.id === id;
      });

      setCart([
        ...cart,
        {
          ...menuItem,
          qty: 1,
        },
      ]);
    }
  }

  function removeFromCart(id) {
    const itemInCart = cart.find(function (item) {
      return item.id === id;
    });

    if (itemInCart.qty === 1) {
      deleteFromCart(id);
    } else {
      const updatedCart = cart.map(function (item) {
        if (item.id === id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }

        return item;
      });

      setCart(updatedCart);
    }
  }

  function deleteFromCart(id) {
    const updatedCart = cart.filter(function (item) {
      return item.id !== id;
    });

    setCart(updatedCart);
  }

  const itemCount = cart.reduce(function (total, item) {
    return total + item.qty;
  }, 0);

  const totalPrice = cart.reduce(function (total, item) {
    return total + item.price * item.qty;
  }, 0);

  function openCart() {
    setCartOpen(true);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function changeLocation(locationId) {
    setLocation(locationId);
  }

  function changeNotes(newNotes) {
    setNotes(newNotes);
  }

  function placeOrder() {
    const selectedLocation = deliveryLocations.find(function (item) {
      return item.id === location;
    });

    setOrder({
      number: Math.floor(1000 + Math.random() * 9000),
      lines: cart,
      total: totalPrice,
      locationLabel: selectedLocation.label,
      deliveryNotes: notes,
    });

    closeCart();
  }

  function closeOrder() {
    setOrder(null);
  }

  function startNewOrder() {
    setCart([]);
    setLocation("");
    setNotes("");
    setOrder(null);
  }

  return (
    <>
      <Header cartCount={itemCount} onCartClick={openCart} />

      <Hero />

      <CategoryTabs
        categories={categories}
        activeCategory={category}
        onSelect={changeCategory}
      />

      <main className="container">
        <MenuGrid
          items={filteredItems}
          activeCategory={category}
          cart={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
        />
      </main>

      <Footer />

      <CartSidebar
        isOpen={cartOpen}
        onClose={closeCart}
        cartLines={cart}
        itemCount={itemCount}
        total={totalPrice}
        selectedLocation={location}
        deliveryNotes={notes}
        onLocationChange={changeLocation}
        onNotesChange={changeNotes}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onDelete={deleteFromCart}
        onPlaceOrder={placeOrder}
      />

      <OrderTicket
        order={order}
        onClose={closeOrder}
        onNewOrder={startNewOrder}
      />
    </>
  );
}

export default App;
