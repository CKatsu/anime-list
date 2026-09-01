import { useState } from 'react';
import { MOVIES_DATA } from './data/movies.js';
import { Navbar } from './components/navbar';
import { MovieCard } from './components/MovieCard';
import { VideoModal } from './components/VideoModal';
import { DetailPage } from './components/DetailPage';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAnime, setSelectedAnime] = useState(null); // Menyimpan objek anime yang dipilih
  const [activeVideoUrl, setActiveVideoUrl] = useState(null); // Menyimpan URL modal trailer

  const filteredMovies = MOVIES_DATA.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Jika ada anime yang dipilih, tampilkan Halaman Detail. Jika tidak, tampilkan Grid Utama */}
      {selectedAnime ? (
        <DetailPage 
          anime={selectedAnime} 
          onBack={() => setSelectedAnime(null)}
          onWatchTrailer={(url) => setActiveVideoUrl(url)}
        />
      ) : (
        <main style={styles.grid}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                trailerUrl={movie.trailerUrl}
                onWatch={() => setSelectedAnime(movie)} // Klik card -> Masuk ke Halaman Detail
              />
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              Anime tidak ditemukan.
            </p>
          )}
        </main>
      )}

      {/* Modal Player Tetap Siap Menerima Trigger */}
      <VideoModal 
        videoUrl={activeVideoUrl} 
        onClose={() => setActiveVideoUrl(null)} 
      />
    </div>
  );
}

const styles = {
  container: { fontFamily: 'sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem', padding: '2rem' },
};