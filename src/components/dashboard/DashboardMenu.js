import { Link, NavLink } from "react-router-dom";
import HeadingOne from "../layout/headings/HeadingOne";

export default function DashboardMenu() {
  return (
    <div className="dashboard__menu">
      <div>
        <NavLink to="/dashboard/posts/add">Create accomodation</NavLink>
      </div>
      <div>
        <NavLink to="/dashboard/posts/bookingenquiry">Booking enquiry</NavLink>
      </div>
      <div>
        <NavLink to="/dashboard/posts/contactmessage">Contact messages</NavLink>
      </div>
    </div>
  );
}
