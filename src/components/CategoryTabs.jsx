import "./Styles/CategoryTabs.css";
export default function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <nav className="tabs" aria-label="Menu categories" id="menu">
      <div className="container tabs__row">
        <div className="tabs__heading">
          <p className="eyebrow">Made fresh today</p>
          <h2>Choose your favourite</h2>
        </div>
        <div className="tabs__buttons">
          {categories.map(function (cat) {
            return (
              <button
                key={cat.id}
                className={`tabs__item ${activeCategory === cat.id ? "tabs__item--active" : ""}`}
                onClick={function () {
                  onSelect(cat.id);
                }}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
