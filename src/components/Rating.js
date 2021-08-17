const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((rate, index) => (
        <span key={index}>
          <i
            style={{ color }}
            className={
              value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#FFA41C",
};

export default Rating;
