import CartItem from "./CartItem.jsx";
import "./Styles/CartSidebar.css";
import DeliveryLocation from "./DeliveryLocation.jsx";
import OrderSummary from "./OrderSummary.jsx";
import { deliveryLocations } from "../data/menuData.js";

export default function CartSidebar({
  isOpen,
  onClose,
  cartLines,
  itemCount,
  total,
  selectedLocation,
  deliveryNotes,
  onLocationChange,
  onNotesChange,
  onAdd,
  onRemove,
  onDelete,
  onPlaceOrder,
}) {
  return (
    <>
      <div
        className={`cart-scrim ${isOpen ? "cart-scrim--visible" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        className={`cart-panel ${isOpen ? "cart-panel--open" : ""}`}
        aria-label="Your order"
      >
        <div className="cart-panel__head">
          <div>
            <p className="cart-panel__eyebrow">Checkout</p>
            <h2>Your order</h2>
          </div>
          <button
            className="cart-panel__close"
            onClick={onClose}
            aria-label="Close order panel"
          >
            ×
          </button>
        </div>

        <div className="cart-panel__body">
          {cartLines.length === 0 ? (
            <p className="cart-panel__empty">
              Your order is empty. Add something from the menu.
            </p>
          ) : (
            cartLines.map(function (line) {
              return (
                <CartItem
                  key={line.id}
                  item={line}
                  quantity={line.qty}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onDelete={onDelete}
                />
              );
            })
          )}
        </div>

        {cartLines.length > 0 && (
          <div className="cart-panel__footer">
            <DeliveryLocation
              locations={deliveryLocations}
              selectedLocation={selectedLocation}
              onChange={onLocationChange}
            />
            <div className="order-notes">
              <label htmlFor="delivery-notes">
                Delivery notes <span>Optional</span>
              </label>
              <textarea
                id="delivery-notes"
                value={deliveryNotes}
                onChange={function (event) {
                  onNotesChange(event.target.value);
                }}
                placeholder="Room number or clear delivery instructions"
                maxLength="120"
              />
            </div>
            <OrderSummary itemCount={itemCount} total={total} />
            <p className="cart-panel__payment">
              No online payment required — this is a simulated order.
            </p>
            <button
              className="cart-panel__checkout"
              onClick={onPlaceOrder}
              disabled={!selectedLocation}
            >
              {selectedLocation
                ? "Place simulated order"
                : "Choose a delivery location"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
