import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormError from "../common/FormError";
import Button from "../layout/Button";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "The message must be at least 10 characters"),
});

export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const [mailsent, mailSent] = useState(true);
  const [mailfailed, mailFailed] = useState(true);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    var bodyFormData = new FormData();
    bodyFormData.append("title", data.title);
    bodyFormData.append("email", data.email);
    bodyFormData.append("message", data.message);

    console.log(data.message);

    axios({
      method: "post",
      url: "https://www.js111ca.one/wp-json/contact-form-7/v1/contact-forms/870/feedback",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log("mail sent");
        mailSent(false);
        console.log(response);
        window.scrollTo(0, 0);
      })
      .catch(function (response) {
        console.log("mail failed");
        mailFailed(false);
        console.log(response);
      })
      .finally(function (response) {
        setSubmitting(false);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactform">
      {serverError && <FormError>{serverError}</FormError>}
      <fieldset disabled={submitting}>
        <div className="mailsent">{mailsent ? "" : "Mail sent!"}</div>
        <div className="mailfailed">
          {mailfailed ? "" : "Mail failed! Contact our supporters"}
        </div>
        <div className="contactform__background">
          <div className="contactform__item">
            <label for="title">Name *</label>
            <input
              id="title"
              name="title"
              placeholder="First and last name"
              ref={register}
            />
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </div>

          <div className="contactform__item">
            <label for="title">Email *</label>
            <input id="email" name="email" placeholder="Email" ref={register} />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>

          <div className="contactform__item">
            <label for="title">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              ref={register}
            />
            {errors.message && <FormError>{errors.message.message}</FormError>}
          </div>
        </div>

        <Button buttonstyle="contactform__button">
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </fieldset>
    </form>
  );
}
