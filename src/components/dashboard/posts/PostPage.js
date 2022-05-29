import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import ContactMessages from "./ContactMessages";

export default function PostPage() {
  return (
    <DashboardPage>
      <Heading size="3" content="Posts" />
      <p>
        <Link to="/dashboard/posts/add">Add post</Link>
      </p>
      <ContactMessages />
    </DashboardPage>
  );
}
