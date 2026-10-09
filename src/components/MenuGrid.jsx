import React from "react";
import "./Styles/MenuGrid.css";
import MenuItemCard from "./MenuItemCard.jsx";

function MenuGrid({ items, activeCategory, cart, onAdd, onRemove }) {
  function getQuantity(itemId) {
    const cartItem = cart.find(function (item) {
      return item.id === itemId;
    });

    if (cartItem) {
      return cartItem.qty;
    }

    return 0;
  }

  if (items.length === 0) {
    return <p className="menu-grid__empty">No items in this category yet.</p>;
  }

  return (
    <>
      <p className="menu-grid__count">
        {activeCategory === "all" ? "All menu items" : "Selected category"} —{" "}
        {items.length} items
      </p>

      <div className="menu-grid">
        {items.map(function (item) {
          return (
            <MenuItemCard
              key={item.id}
              item={item}
              quantityInCart={getQuantity(item.id)}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </>
  );
}

export default MenuGrid;
