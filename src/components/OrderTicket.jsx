import "./Styles/OrderTicket.css";
export default function OrderTicket({ order, onClose, onNewOrder }) {
  if (!order) return null;

  return (
    <div
      className="ticket-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Order confirmation ticket"
    >
      <div className="ticket">
        <div
          className="ticket__perforation ticket__perforation--top"
          aria-hidden="true"
        />

        <p className="ticket__eyebrow">Campus Canteen · Order Docket</p>
        <p className="ticket__number">#{order.number}</p>

        <div className="ticket__divider" aria-hidden="true" />

        <ul className="ticket__lines">
          {order.lines.map(function (line) {
            return (
              <li key={line.id} className="ticket__line">
                <span>
                  {line.qty}× {line.name}
                </span>
                <span>R{line.qty * line.price}</span>
              </li>
            );
          })}
        </ul>

        <div className="ticket__divider" aria-hidden="true" />

        <div className="ticket__line ticket__line--total">
          <span>Total due</span>
          <span>R{order.total}</span>
        </div>

        <p className="ticket__location">
          Deliver to: <strong>{order.locationLabel}</strong>
        </p>
        {order.deliveryNotes && (
          <p className="ticket__location">
            Notes: <strong>{order.deliveryNotes}</strong>
          </p>
        )}

        <p className="ticket__note">
          This is a simulated order for demonstration purposes only — no payment
          has been taken.
        </p>

        <div className="ticket__actions">
          <button className="ticket__btn ticket__btn--ghost" onClick={onClose}>
            Back to menu
          </button>
          <button className="ticket__btn" onClick={onNewOrder}>
            Start new order
          </button>
        </div>

        <div
          className="ticket__perforation ticket__perforation--bottom"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
