import SearchHome from "../search/SearchHome";
import HeadingOne from "../layout/headings/HeadingOne";

function Welcome() {
  return (
    <div className="hero">
      <HeadingOne
        titleStyle="h1__smaller-header"
        content="Book your next stay in Bergen here!"
      />
      <SearchHome />
    </div>
  );
}

export default Welcome;
