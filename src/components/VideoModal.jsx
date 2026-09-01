import React from 'react';

export function VideoModal({ videoUrl, onClose }) {
  if (!videoUrl) return null;

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeStyle} onClick={onClose}>✕</button>
        <iframe
          width="100%"
          height="450"
          src={`${videoUrl}?autoplay=1`}
          title="Anime Stream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100vw', height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 1000,
};

const contentStyle = {
  position: 'relative',
  width: '90%', maxWidth: '800px',
  backgroundColor: '#000',
  borderRadius: '8px',
  overflow: 'hidden',
};

const closeStyle = {
  position: 'absolute',
  top: '10px', right: '10px',
  background: '#ff4d4d', color: '#fff',
  border: 'none', borderRadius: '50%',
  width: '30px', height: '30px',
  cursor: 'pointer', zIndex: 1001,
  fontWeight: 'bold',
};