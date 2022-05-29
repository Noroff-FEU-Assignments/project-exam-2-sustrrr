import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError"; //error messages
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

import Button from "../layout/Button";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    // console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history.push("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="contactform">
        {loginError && <FormError>{loginError}</FormError>}

        <fieldset disabled={submitting}>
          <div className="contactform__background">
            <div className="contactform__item">
              <label for="username">Username</label>
              <input name="username" placeholder="Username" ref={register} />
              {errors.username && (
                <FormError>{errors.username.message}</FormError>
              )}
            </div>

            <div className="contactform__item">
              <label for="password">Password</label>
              <input
                name="password"
                placeholder="Password"
                ref={register}
                type="password"
              />
              {errors.password && (
                <FormError>{errors.password.message}</FormError>
              )}
            </div>
          </div>
          <Button buttonstyle="contactform__button">
            {submitting ? "Loggin in..." : "Login"}
          </Button>
        </fieldset>
      </form>
    </>
  );
}
