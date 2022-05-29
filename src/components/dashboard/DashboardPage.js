import PropTypes from "prop-types";
import HeadingOne from "../layout/headings/HeadingOne";
import DashboardMenu from "./DashboardMenu";

import HeadingImage from "../layout/headings/HeadingImage";

import Footer from "../layout/footer/Footer";

export default function DashboardPage({ children }) {
  return (
    <div className="dashboard">
      <HeadingImage style="dashboard__image" />
      <div class="wrapper">
        <HeadingOne content="Dashboard" />
        <DashboardMenu />
        {children ? children : <p></p>}
      </div>
      <Footer />
    </div>
  );
}

DashboardPage.propTypes = {
  children: PropTypes.node,
};
