import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";

import Button from "../../layout/Button";
import { IoIosCheckmark } from "react-icons/io";

const GetBB = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + "wc/store/products?featured=true")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPages(data.filter((page) => page.categories[0].id === 29));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(pages);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {pages.map((page) => (
          <Link to={`../detail/${page.id}`} key={page.id}>
            <div className="card">
              <img src={page.images[0].src} alt={page.images[0].alt} />
              <div className="cardbody-one">
                <h3>{page.name}</h3>
                <div class="cardbody-one__reviews">
                  <span>rated</span> <p>{page.average_rating} / 5.00</p>
                </div>
                <ul class="cardbody-one__tags">
                  {page.tags.map((tag) => (
                    <li key={tag.name}>
                      <IoIosCheckmark class="cardbody-one__icon" />
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cardbody-two">
                <p className="cardbody-two__price">
                  Starts at: <span>{page.prices.price}$</span>
                </p>
                <Button buttonstyle="cardbody-two__booknow">View more</Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
};
export default GetBB;
