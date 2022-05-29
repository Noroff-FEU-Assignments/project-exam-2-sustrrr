import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import MediaDropdown from "../media/MediaDropdown";
import DashboardPage from "../DashboardPage";

import Button from "../../layout/Button";

const schema = yup.object().shape({
  name: yup.string().required("Title is required"),
  regular_price: yup
    .string()
    .required("Number is required")
    .typeError("Must be a number"),
  description: yup
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
  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);

    try {
      const response = await http.post("wc/v3/products", data); /////change this to whatever
      console.log("response", response.data);
      mailFailed(true);
      mailSent(false);
    } catch (error) {
      mailFailed(false);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <DashboardPage>
      <form onSubmit={handleSubmit(onSubmit)} className="contactform">
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div className="contactform__background">
            <div className="contactform__item">
              <label for="title">Name *</label>
              <input name="name" placeholder="Name" ref={register} />
              {errors.name && <FormError>{errors.name.message}</FormError>}
            </div>

            <div className="contactform__item">
              <label for="regular_price">Price *</label>
              <input name="regular_price" placeholder="Price" ref={register} />
              {errors.regular_price && (
                <FormError>{errors.regular_price.message}</FormError>
              )}
            </div>

            <div className="contactform__item">
              <label for="title">Category *</label>
              <select name="categories.0.id" ref={register}>
                <option value="28">Hotels</option>
                <option value="30">BB</option>
                <option value="29">Guesthouse</option>
              </select>
            </div>

            <div className="contactform__item tag">
              <label for="title">Tags (optional)</label>
              <input name="tags.0.name" placeholder="Tag 1" ref={register} />
              <input name="tags.1.name" placeholder="Tag 2" ref={register} />
              <input name="tags.2.name" placeholder="Tag 3" ref={register} />
            </div>

            <div className="contactform__item">
              <label for="title">Description *</label>
              <textarea
                name="description"
                placeholder="Description"
                ref={register}
              />
              {errors.description && (
                <FormError>{errors.description.message}</FormError>
              )}
            </div>

            <div className="contactform__item">
              <label for="title">Select 3 pictures *</label>
              <MediaDropdown register={register} />
              <div className="mailfailed">
                {mailfailed ? "" : "Must set 3 pictures"}
              </div>
            </div>
          </div>

          <Button buttonstyle="contactform__button">
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </fieldset>

        <div className="mailsent">{mailsent ? "" : "Mail sent!"}</div>
      </form>
    </DashboardPage>
  );
}
