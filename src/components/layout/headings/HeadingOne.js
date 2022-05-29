import PropTypes from "prop-types";

function HeadingOne({ titleStyle, content }) {
  return (
    <div className="h1">
      <h1 className={titleStyle}>{content}</h1>
    </div>
  );
}

HeadingOne.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HeadingOne;
