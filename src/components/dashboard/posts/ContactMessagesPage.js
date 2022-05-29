import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import DashboardPage from "../DashboardPage";

export default function ContactMessagesPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/posts?status=draft");

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
            <div className="contactmessage" key={media.id}>
              <div className="contactmessage__card" key={media.id}>
                <p>
                  From <span>{media.title.rendered}</span>
                </p>
                <p>
                  Email <span>{media.excerpt.rendered}</span>
                </p>
                <p>
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
