import "./rating.scss";

export const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating_apartment">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? "#FF6060" : "#E3E3E3",
          }}
        >
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
};
