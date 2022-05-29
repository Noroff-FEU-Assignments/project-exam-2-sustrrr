import Footer from "../layout/footer/Footer";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import HeadingImage from "../layout/headings/HeadingImage";
import ContactForm from "./ContactForm";

import ButtonCategories from "../layout/buttons/ButtonCategories";

function ContactPage() {
  return (
    <div className="contact">
      <HeadingImage style="contact__image" />
      <div className="wrapper contact">
        <div className="item-container-first flex">
          <HeadingOne titleStyle="h1__big-header" content="Contact us" />
          <ContactForm />
        </div>
        <div class="item-container wrapper">
          <HeadingTwo>Accomodations by type</HeadingTwo>
          <ButtonCategories />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
