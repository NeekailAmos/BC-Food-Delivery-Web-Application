import "./Styles/CartItem.css";
export default function CartItem({
  item,
  quantity,
  onAdd,
  onRemove,
  onDelete,
}) {
  function removeOne() {
    onRemove(item.id);
  }
  function addOne() {
    onAdd(item.id);
  }
  function deleteItem() {
    onDelete(item.id);
  }
  return (
    <div className="cart-row">
      <div className="cart-row__info">
        <p className="cart-row__name">{item.name}</p>
        <p className="cart-row__unit">R{item.price} each</p>
      </div>

      <div className="cart-row__controls">
        <div className="stepper stepper--sm">
          <button
            className="stepper__btn"
            onClick={removeOne}
            aria-label={`Remove one ${item.name}`}
          >
            −
          </button>
          <span className="stepper__count">{quantity}</span>
          <button
            className="stepper__btn"
            onClick={addOne}
            aria-label={`Add one more ${item.name}`}
          >
            +
          </button>
        </div>
        <p className="cart-row__line-total">R{item.price * quantity}</p>
        <button
          className="cart-row__delete"
          onClick={deleteItem}
          aria-label={`Remove ${item.name} from cart`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
