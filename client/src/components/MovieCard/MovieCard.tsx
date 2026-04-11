import "./MovieCard.css";

interface Props {
  title: string;
  image: string;
  rating: number;
  date: string;
}

export const MovieCard = ({ title, image, rating, date }: Props) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
      <p>{date}</p>
    </div>
  );
};