import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import DashboardPage from "../DashboardPage";

export default function BookingEnquiryPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/pages?status=draft");

        console.log("response", response);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getMedia();
  }, []);

  if (loading) return <div>Loading posts...</div>;

  if (error) return <div>{}</div>;

  return (
    <DashboardPage>
      <div className="item-container">
        {posts.map((media) => {
          return (
            <div className="enquiry" key={media.id}>
              <div key={media.id} className="enquiry__card">
                <h3>
                  For: <span>{media.excerpt.rendered}</span>
                </h3>
                <p>
                  Booked by: <span>{media.slug}</span>
                </p>
                <p>
                  Number of adults: <span>{media.title.rendered}</span>
                </p>
                <p>
                  Number of children: <span>1</span>
                </p>
                <p>
                  Staying from: <span>12/01/2022</span>
                </p>
                <p>
                  Staying to: <span>20/01/2022</span>
                </p>
                <p className="enquiry__message">
                  Message: <span>{media.content.rendered}</span>
                </p>
                <div className="smaller">
                  <p>Sent: {media.date}</p>
                  <p>Message id: {media.id}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardPage>
  );
}
