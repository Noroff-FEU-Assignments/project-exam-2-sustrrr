import GetHotel from "./GetHotel";

import Footer from "../../layout/footer/Footer";
import HeadingOne from "../../layout/headings/HeadingOne";
import HeadingTwo from "../../layout/headings/HeadingTwo";
import HeadingImage from "../../layout/headings/HeadingImage";

import SearchHotel from "../../search/SearchHotel";

function HotelPage() {
  return (
    <>
      <div className="hotels">
        <HeadingImage style="hotels__image" />
        <div class="wrapper">
          <div className="item-container-first">
            <HeadingOne titleStyle="h1__big-header" content="Hotels" />
            <SearchHotel />
          </div>
          <div class="accomodations">
            <GetHotel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HotelPage;
