export const Navbar = ({ searchTerm, onSearchChange }) => (
  <nav style={styles.navbar}>
    <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Aniverse</h1>
    <input
      type="text"
      placeholder="Cari anime..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={styles.searchInput}
    />
  </nav>
);

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#1f1f1f' },
  searchInput: { padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#2a2a2a', color: '#fff' },
};