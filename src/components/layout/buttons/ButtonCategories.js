import { Link } from "react-router-dom";

function ButtonCategories() {
  return (
    <div className="button-categories">
      <Link className="button-categories__button" to="/hotels">
        Hotels
      </Link>
      <Link className="button-categories__button" to="/bb">
        B&B
      </Link>
      <Link className="button-categories__button" to="/guesthouse">
        Guesthouse
      </Link>
    </div>
  );
}

export default ButtonCategories;
