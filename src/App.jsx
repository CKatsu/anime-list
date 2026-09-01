import { useState } from 'react';
import { MOVIES_DATA } from './data/movies.js';
import { Navbar } from './components/navbar';
import { MovieCard } from './components/MovieCard'; // Derapikan double slash-nya
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  // 1. Tambahkan state untuk menyimpan URL video yang dipilih
  const [selectedVideo, setSelectedVideo] = useState(null);

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
              // 2. Oper fungsi untuk set URL video saat tombol/card diklik
              onWatch={() => setSelectedVideo(movie.trailerUrl)}
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            Anime tidak ditemukan.
          </p>
        )}
      </main>

      {/* 3. Panggil VideoModal di luar main */}
      <VideoModal 
        videoUrl={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </div>
  );
}

const styles = {
  container: { fontFamily: 'sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem', padding: '2rem' },
};