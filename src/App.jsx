import { useState } from 'react';
import { movies } from './data/movies';
import { Navbar } from './navbar'; // sesuaikan path file kamu
import { MovieCard } from './MovieCard';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter anime berdasarkan teks input (ignore case sensitivity)
  const filteredMovies = MOVIES_DATA.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main style={styles.grid}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.image}
              rating={movie.rating}
              trailerUrl={movie.trailerUrl}
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Anime tidak ditemukan.
          </p>
        )}
      </main>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem', padding: '2rem' },
};