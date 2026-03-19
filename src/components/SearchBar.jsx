function SearchBar({ search, setSearch }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "25px" }}>
      <input
        type="text"
        placeholder="🔍 Search jobs..."
        value={search}     //controlled component (input value is controlled by React state "search")
        onChange={(e) => setSearch(e.target.value)}    //event handling
        style={{
          padding: "12px 20px",
          width: "320px",
          borderRadius: "25px",
          border: "1px solid rgba(255,255,255,0.3)",
          outline: "none",
          fontSize: "14px",

          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",

          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          color: "#333",
        }}
      />
    </div>
  );
}

export default SearchBar;