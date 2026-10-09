import "./Styles/Header.css";
// Presentational component — receives everything via props, renders nothing on its own.
export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="board-header">
      <div className="container board-header__inner">
        <div className="board-header__brand">
          <img
            className="board-header__logo"
            src="https://www.belgiumcampus.ac.za/wp-content/uploads/2025/12/BC-logo-header-dark-svg-1.svg"
            alt="Belgium Campus iTversity"
          />
          <div>
            <p className="board-header__title">FOOD DELIVERY</p>
          </div>
        </div>

        <nav className="board-header__nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
        </nav>

        <button
          className="board-header__cart"
          onClick={onCartClick}
          aria-label={`Open cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9.5" cy="20.5" r="1.4" fill="currentColor" />
            <circle cx="17" cy="20.5" r="1.4" fill="currentColor" />
          </svg>
          <span>My order</span>
          {cartCount > 0 && (
            <span className="board-header__badge">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
