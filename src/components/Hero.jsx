import "./Styles/Hero.css";
export default function Hero() {
  function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Belgium Campus tuckshop</p>
          <h1 className="hero__title">
            Campus cravings,
            <br />
            <span>delivered fast.</span>
          </h1>
          <p className="hero__sub">
            Skip the queue, choose your favourites and get your order delivered
            anywhere on campus.
          </p>
          <button className="hero__button" onClick={scrollToMenu}>
            Explore the menu <span>→</span>
          </button>
          <div className="hero__facts">
            <span>Fresh daily</span>
            <span>Campus delivery</span>
            <span>Easy ordering</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-card">
            <img
              src="/images/campus-tuckshop-hero.png"
              alt="Belgium Campus tuck-shop favourites"
            />
          </div>
          <div className="hero__rating">
            <strong>4.9</strong>
            <span>★ campus favourite</span>
          </div>
          <div className="hero__delivery">
            <span>●</span>
            <div>
              <strong>Open now</strong>
              <small>25–35 min delivery</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
