function Header({ view, setView, savedJobs }) {     //props from parent
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        
        <button
          onClick={() => setView("all")}   //event handling (onClick updates state in parent)
          style={{
            padding: "10px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            backgroundColor: view === "all" ? "#f65286e2" : "#ddd",
            color: view === "all" ? "white" : "black",
            fontSize:"18px"
          }}
        >
          All Jobs
        </button>

        <div style={{ position: "relative" }}>
          <button
            onClick={() => setView("saved")}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              backgroundColor: view === "saved" ? "#ff9800" : "#ddd",
              color: view === "saved" ? "white" : "black",
              fontSize:"18px"
            }}
          >
            Saved Jobs
          </button>

          {savedJobs.length > 0 && (     //coniditonal rendering
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                background: "linear-gradient(45deg, #ff6b81, #ff4d6d)", // 🔥 pink-red
                color: "white",
                borderRadius: "50%",
                padding: "4px 7px",
                fontSize: "11px",
                fontWeight: "bold",
                minWidth: "20px",
                textAlign: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              }}
            >
              {savedJobs.length}        {/*dynamic data rendering using props*/}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}

export default Header;