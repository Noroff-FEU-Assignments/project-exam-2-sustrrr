import Details from "./Details";

import Footer from "../../layout/footer/Footer";
import HeadingTwo from "../../layout/headings/HeadingTwo";

import FeaturedHotel from "../featured/FeaturedHotel";
import FeaturedGuesthouse from "../featured/FeaturedGuesthouse";
import FeaturedBB from "../featured/FeaturedBB";

function DetailPage() {
  return (
    <>
      <div className="detailpage">
        <div className="wrapper">
          <div class="item-container">
            <Details />
          </div>
        </div>
        <div class="item-container wrapper">
          <HeadingTwo>Most popular bookings</HeadingTwo>
          <div class="accomodations">
            <FeaturedHotel />
            <FeaturedBB />
            <FeaturedGuesthouse />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailPage;
