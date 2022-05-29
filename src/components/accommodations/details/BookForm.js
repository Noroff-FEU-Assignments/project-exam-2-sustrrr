///adds establishmen
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import Button from "../../layout/Button";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const schema = yup.object().shape({
  title: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  adult: yup
    .number()
    .required("Number is required")
    .typeError("Must be a number"),
  children: yup
    .number()
    .required("Number is required")
    .typeError("Must be a number"),
});

export default function BookForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [mailsent, mailSent] = useState(true);
  const [mailfailed, mailFailed] = useState(true);
  const history = useHistory();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pages, setPages] = useState([]);
  const [price, setPrice] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + "wc/store/products/" + id)
      .then((res) => res.json())
      .then(
        (data) => {
          setPages(data);
          setIsLoaded(true);
          setPrice(data.prices.price); ////this
          console.log(price);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    var bodyFormData = new FormData();
    bodyFormData.append("hotelname", data.hotelname);
    bodyFormData.append("title", data.title);
    bodyFormData.append("email", data.email);
    bodyFormData.append("adult", data.adult);
    bodyFormData.append("message", data.message);

    console.log(data.message);

    axios({
      method: "post",
      url: "https://www.js111ca.one/wp-json/contact-form-7/v1/contact-forms/1111/feedback",
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
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bookform">
      <h1>Booking enquiry for {pages.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="contactform">
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div className="mailsent">
            {mailsent ? "" : "Booking enquiry sent!"}
          </div>
          <div className="mailfailed">
            {mailfailed ? "" : "Failed to submit! Contact our supporters"}
          </div>
          <div className="contactform__background">
            <div className="contactform__item hideform">
              <label for="hotelname">Hotelname</label>
              <textarea
                id="hotelname"
                name="hotelname"
                placeholder="Hotelname"
                readOnly
                value={pages.name}
                ref={register}
              />
              {errors.message && (
                <FormError>{errors.message.message}</FormError>
              )}
            </div>

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
              <input
                id="email"
                name="email"
                placeholder="Your email"
                ref={register}
              />
              {errors.email && <FormError>{errors.email.message}</FormError>}
            </div>

            <div className="datepicker">
              <div className="contactform__item">
                <label for="number">Number of adults *</label>
                <input
                  id="adult"
                  type="number"
                  name="adult"
                  placeholder="Ex. 1"
                  ref={register}
                />
                {errors.adult && <FormError>{errors.adult.message}</FormError>}
              </div>

              <div className="contactform__item">
                <label for="number">Number of children *</label>
                <input
                  id="children"
                  name="children"
                  type="number"
                  placeholder="Ex. 1"
                  ref={register}
                />
                {errors.children && (
                  <FormError>{errors.children.message}</FormError>
                )}
              </div>
            </div>

            <div className="datepicker">
              <div>
                <p>Stay from *</p>
                <DatePicker
                  class="test"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  id="datefrom"
                  name="datefrom"
                  ref={register}
                />
              </div>
              <div>
                <p>Stay to *</p>
                <DatePicker
                  class="test"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            <div className="contactform__item">
              <label for="mwssage">Message (optional)</label>
              <textarea
                id="message"
                name="message"
                ref={register}
                defaultvalue="No message"
              />
            </div>
            <p>Price: {price}$</p>
          </div>
          <Button buttonstyle="contactform__button">
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
