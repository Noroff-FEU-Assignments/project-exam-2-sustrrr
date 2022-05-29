import LoginForm from "./LoginForm";

import Footer from "../layout/footer/Footer";
import HeadingOne from "../layout/headings/HeadingOne";
import HeadingTwo from "../layout/headings/HeadingTwo";
import HeadingImage from "../layout/headings/HeadingImage";

export default function LoginPage() {
  return (
    <>
      <div className="contact">
        <HeadingImage style="contact__image" />
        <div class="wrapper contact">
          <div class="item-container-first flex">
            <HeadingOne titleStyle="h1__big-header" content="Login" />
            <LoginForm />
          </div>
          <div class="item-container">
            <HeadingTwo>test heading two</HeadingTwo>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
