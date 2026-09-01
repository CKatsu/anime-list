import React from 'react';

export function DetailPage({ anime, onBack, onWatchTrailer }) {
  if (!anime) return null;

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        ← Kembali ke Daftar Anime
      </button>

      <div style={styles.wrapper}>
        {/* Sisi Kiri: Poster & Tombol */}
        <div style={styles.leftColumn}>
          <img src={anime.image} alt={anime.title} style={styles.poster} />
          <button 
            style={styles.trailerBtn} 
            onClick={() => onWatchTrailer(anime.trailerUrl)}
          >
            ▶ Trailer
          </button>
          <button style={styles.bookmarkBtn}>🔖 Bookmark</button>
        </div>

        {/* Sisi Kanan: Detail & Meta Data */}
        <div style={styles.rightColumn}>
          <h1 style={styles.title}>{anime.title}</h1>
          <p style={styles.synopsis}>{anime.synopsis || 'Belum ada sinopsis.'}</p>

          <div style={styles.metaGrid}>
            <div><span style={styles.bullet}>■</span> <strong>Status:</strong> {anime.status || 'Finished'}</div>
            <div><span style={styles.bullet}>■</span> <strong>Director:</strong> {anime.director || '-'}</div>
            <div><span style={styles.bullet}>■</span> <strong>Studio:</strong> {anime.studio || '-'}</div>
            <div><span style={styles.bullet}>■</span> <strong>Season:</strong> {anime.season || '-'}</div>
            <div><span style={styles.bullet}>■</span> <strong>Type:</strong> {anime.type || 'TV'}</div>
            <div><span style={styles.bullet}>■</span> <strong>Rating:</strong> ⭐ {anime.rating}</div>
          </div>

          <div style={styles.genreContainer}>
            {anime.genres?.map((genre, index) => (
              <span key={index} style={styles.genreTag}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', maxWidth: '1000px', margin: '0 auto' },
  backButton: { backgroundColor: '#333', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', marginBottom: '1.5rem' },
  wrapper: { display: 'flex', gap: '2rem', flexWrap: 'wrap' },
  leftColumn: { flex: '0 0 220px', display: 'flex', flexDirection: 'column', gap: '10px' },
  poster: { width: '100%', borderRadius: '8px', objectFit: 'cover' },
  trailerBtn: { backgroundColor: '#e50914', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
  bookmarkBtn: { backgroundColor: '#8ea653', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' },
  rightColumn: { flex: '1', minWidth: '300px' },
  title: { marginTop: 0, fontSize: '1.8rem' },
  synopsis: { color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' },
  metaGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', margin: '1.5rem 0', color: '#ddd', fontSize: '0.9rem' },
  bullet: { color: '#8ea653', marginRight: '6px' },
  genreContainer: { display: 'flex', gap: '8px', marginTop: '1rem' },
  genreTag: { border: '1px solid #555', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85rem', color: '#aaa' }
};