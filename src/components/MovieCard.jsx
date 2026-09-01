export const MovieCard = ({ title, image, rating, trailerUrl }) => {
  const handleClick = () => {
    if (trailerUrl) window.open(trailerUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="card-image-container">
        <img src={image} alt={title} />
        <span className="rating-badge">⭐ {rating}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

const styles = {
  cardImage: { width: '100%', height: '250px', objectFit: 'cover' },
  cardBody: { padding: '1rem' },
  cardTitle: { fontSize: '1rem', margin: '0 0 0.5rem 0' },
  cardRating: { fontSize: '0.9rem', color: '#f1c40f' },
};