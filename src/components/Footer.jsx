import "./Styles/Footer.css";
export default function Footer() {
  return (
    <footer className="board-footer" id="about">
      <div className="container board-footer__inner">
        <img
          className="board-footer__logo"
          src="https://www.belgiumcampus.ac.za/wp-content/uploads/2025/12/BC-logo-white-350w.png"
          alt="Belgium Campus iTversity"
        />
        <p className="board-footer__name">BELGIUM CAMPUS iTversity</p>
        <p className="board-footer__tagline">
          It's the way we're <span className="footer-wired">wired.</span>
        </p>
        <p className="board-footer__note">
          © 2026 BC Food Delivery — Made for the Belgium Campus community.
        </p>
      </div>
    </footer>
  );
}
