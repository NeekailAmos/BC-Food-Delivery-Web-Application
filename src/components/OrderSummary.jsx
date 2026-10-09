import "./Styles/OrderSummary.css";
export default function OrderSummary({ itemCount, total }) {
  return (
    <div className="summary">
      <div className="summary__row">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>
      <div className="summary__row summary__row--total">
        <span>Total</span>
        <span>R{total}</span>
      </div>
    </div>
  );
}
