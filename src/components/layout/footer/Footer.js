import { Link } from "react-router-dom";
import {
  IoIosCloseCircleOutline,
  IoMdCard,
  IoIosChatboxes,
} from "react-icons/io";
import Logo from "../../layout/Logo";
import HeadingTwo from "../../layout/headings/HeadingTwo";

function Footer() {
  return (
    <footer>
      <div class="firststrip container-flex flex-column">
        <HeadingTwo>Why book with us?</HeadingTwo>
        <ul className="firststrip__list">
          <li className="firststrip__item">
            <IoIosChatboxes className="firststrip__icon" />
            <p>Fast customer service</p>
          </li>
          <li className="firststrip__list">
            <IoIosCloseCircleOutline className="firststrip__icon" />
            <p>Free cancellation 24 hours before arrival</p>
          </li>
          <li className="firststrip__list">
            <IoMdCard className="firststrip__icon" />
            <p>Get every 10th booking for free</p>
          </li>
        </ul>
      </div>

      <div class="secondstrip">
        <Logo />
        <p>Book your next stay in Bergen with us!</p>
      </div>
      <div className="thirdstrip container-flex flex-column">
        <div className="sitemap">
          <Link to="/hotels" className="sitemap__link">
            Hotels
          </Link>
          <Link to="/guesthouse" className="sitemap__link">
            Guesthouse
          </Link>
          <Link to="/bb" className="sitemap__link">
            B&B
          </Link>
          <Link to="/contact" className="sitemap__link">
            Contact
          </Link>
          <Link to="/login" className="sitemap__link">
            Login
          </Link>
        </div>

        <div class="thirdstrip container-flex flex-column">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
