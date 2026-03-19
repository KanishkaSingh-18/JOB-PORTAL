import JobCard from "./JobCard";

function JobList({ jobs, view, handleSave, handleRemove, savedJobs }) {

  if (jobs.length === 0) {     //conditional rendering
    return (
      <p style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
        No jobs found 😢
      </p>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px",
        width: "100%",
      }}
    >
      {jobs.map((job) => (    //iterating over job arrays and rendering job card for each using map
        <JobCard
          key={job.id}    //key prop (for efficient rendering in React lists)
          job={job}
          view={view}
          handleSave={handleSave}
          handleRemove={handleRemove}
          savedJobs={savedJobs}
        />
      ))}
    </div>
  );
}

export default JobList;