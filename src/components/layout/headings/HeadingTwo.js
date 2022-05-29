function HeadingTwo({ titleStyle, children }) {
  return (
    <div className="h2">
      <h2 className={titleStyle}>
        <span>{children}</span>
      </h2>
    </div>
  );
}

export default HeadingTwo;
