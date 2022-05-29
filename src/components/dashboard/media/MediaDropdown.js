import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../hooks/useAxios";

export default function MediaDropdown({ register }) {
  const [media, setMedia] = useState([]);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/media");
        console.log("response", response);
        setMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMedia();
  }, []);

  return (
    <>
      <select name="images.0.id" ref={register} class="selectmedia">
        <option value="">Select picture</option>
        {media.slice(0, 3).map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </select>

      <select name="images.1.id" ref={register} class="selectmedia">
        <option value="">Select picture</option>
        {media.slice(4, 7).map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </select>

      <select name="images.2.id" ref={register} class="selectmedia">
        <option value="">Select picture</option>
        {media.slice(7, 10).map((media) => {
          return (
            <option key={media.id} value={media.id}>
              {media.title.rendered}
            </option>
          );
        })}
      </select>
    </>
  );
}

MediaDropdown.propTypes = {
  register: PropTypes.func,
};

MediaDropdown.defaultProps = {
  register: () => {},
};
