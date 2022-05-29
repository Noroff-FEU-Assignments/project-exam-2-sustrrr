import { useContext, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import { IoMdSearch } from "react-icons/io";
import { IoIosMenu, IoIosClose } from "react-icons/io";

import Logo from "../layout/Logo";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  const [open, toggleOpen] = useState(false);

  function toggle() {
    toggleOpen(!open);
  }

  return (
    <>
      <nav>
        <div className="navdesktop container">
          <div>
            <NavLink activeClassName="active" to="/hotels">
              Hotels
            </NavLink>
            <NavLink activeClassName="active" to="/bb">
              BB
            </NavLink>
            <NavLink activeClassName="active" to="/guesthouse">
              Guesthouse
            </NavLink>
          </div>

          <Logo />

          <div>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>

            {auth ? (
              <>
                <NavLink activeClassName="active" to="/dashboard">
                  Dashboard
                </NavLink>
                <Link activeClassName="active" onClick={logout}>
                  Log out
                </Link>
              </>
            ) : (
              <NavLink
                activeClassName="active"
                class="navdesktop__link"
                to="/login"
              >
                Login
              </NavLink>
            )}

            <NavLink activeClassName="active" className="searchicon" to="/">
              <IoMdSearch />
            </NavLink>
          </div>
        </div>

        <div className="mobilemenu container">
          <Logo />

          <button onClick={toggle}>
            {open ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>

        <div
          className={`mobilemenu__menu ${open ? "" : "closed"}`}
          open={open}
          onClick={() => toggleOpen(!open)}
        >
          <Link className="mobilemenu__link" to="/hotels">
            Hotels
          </Link>
          <Link className="mobilemenu__link" to="/guesthouse">
            Guesthouse
          </Link>
          <Link className="mobilemenu__link" to="/bb">
            B&B
          </Link>
          <Link className="mobilemenu__link" to="/contact">
            Contact
          </Link>
          {auth ? (
            <>
              <Link className="mobilemenu__link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="mobilemenu__link" onClick={logout}>
                Log out
              </Link>
            </>
          ) : (
            <Link className="mobilemenu__link" to="/login">
              Login
            </Link>
          )}
          <Link className="mobilemenu__link" to="/">
            <IoMdSearch className="searchmobile" />
          </Link>
        </div>

        <div className="ribbon">
          Use code <span>holidaze</span> for 20% on all bookings
        </div>
      </nav>
    </>
  );
}

export default Nav;
