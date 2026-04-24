import "./MovieCard.css";

interface Props {
  title: string;
  image: string;
  rating: number;
  date: string;
  onClick: () => void; 
}

export const MovieCard = ({ title, image, rating, date, onClick }: Props) => {
  return (
    <div className="movie-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
      <p>{date}</p>
    </div>
  );
};