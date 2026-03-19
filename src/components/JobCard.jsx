function JobCard({ job, view, handleSave, handleRemove, savedJobs }) {

  const isSaved = savedJobs.some((item) => item.id === job.id);   //derived state (checks if current job is already saved)

  return (
    <div
      style={{
        position: "relative",
        background: isSaved
          ? "rgba(76, 175, 80, 0.12)"
          : "rgba(255, 255, 255, 0.15)",
        borderRadius: "15px",
        padding: "16px",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: isSaved
          ? "0 8px 25px rgba(211, 240, 81, 0.61)"
          : "0 8px 25px rgba(0,0,0,0.2)",
        border: isSaved
          ? "2px solid rgba(175, 237, 87, 0.68)"
          : "2px solid rgba(130, 80, 80, 0.23)",
        transition: "all 0.4s ease",
        cursor: "pointer",
        width: "100%",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = isSaved
          ? "0 15px 35px rgba(76, 175, 80, 0.5)"
          : "0 15px 35px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = isSaved
          ? "0 8px 25px rgba(76, 175, 80, 0.35)"
          : "0 8px 25px rgba(0,0,0,0.2)";
      }}
    >

      {isSaved && (    //conditional rendering
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            borderRadius: "50%",
            padding: "6px",
            fontSize: "21px",
            opacity: isSaved ? 1 : 0,
            transition: "opacity 0.4s ease",
            pointerEvents: "none",
          }}
        >
          ⭐
        </div>
      )}

      {/*rendering dynamic data using props*/}

      <div>
        <h3 style={{ color: "white", marginBottom: "10px" }}>
          💼 Job #{job.id}
        </h3>

        <p style={{ color: "#f5f5f5", lineHeight: "1.5" }}>
          {job.body}
        </p>
      </div>

      {view === "all" ? (    //conditional rendering
        <button
          onClick={() => handleSave(job)}      //event handling
          style={{
            marginTop: "12px",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            background: isSaved
              ? "linear-gradient(45deg, #2ecc71, #27ae60)"
              : "linear-gradient(45deg, #4CAF50, #2ecc71)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
            width: "30%",
            alignSelf: "center",
            fontSize:"18px"
          }}
        >
          {isSaved ? "Saved ✅" : "Save Job"}    {/*conditional text rendering*/}
        </button>
      ) : (
        <button
          onClick={() => handleRemove(job.id)}      //event handling
          style={{
            marginTop: "12px",
            padding: "10px 20px",
            borderRadius: "25px",
            border: "none",
            background: "linear-gradient(45deg, #ff4d4d, #ff6b6b)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
            width: "30%",
            alignSelf: "center",
            fontSize:"18px"
          }}
        >
          Remove ❌
        </button>
      )}
    </div>
  );
}

export default JobCard;