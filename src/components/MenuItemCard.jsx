import "./Styles/MenuItemCard.css";
export default function MenuItemCard({
  item,
  quantityInCart,
  onAdd,
  onRemove,
}) {
  function removeOne() {
    onRemove(item.id);
  }
  function addOne() {
    onAdd(item.id);
  }
  return (
    <article className="item-card">
      <div className="item-card__image-wrap">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>

      <div className="item-card__body">
        <div className="item-card__head">
          <h3 className="item-card__name">{item.name}</h3>
          <span className="item-card__price">R{item.price}</span>
        </div>
        <div className="item-card__description">
          <span>Description</span>
          <p>{item.description || "No description available."}</p>
        </div>

        <div className="item-card__actions">
          {quantityInCart > 0 ? (
            <div className="stepper">
              <button
                className="stepper__btn"
                onClick={removeOne}
                aria-label={`Remove one ${item.name}`}
              >
                −
              </button>
              <span className="stepper__count">{quantityInCart}</span>
              <button
                className="stepper__btn"
                onClick={addOne}
                aria-label={`Add one more ${item.name}`}
              >
                +
              </button>
            </div>
          ) : (
            <button className="item-card__add" onClick={addOne}>
              Add to order
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
