import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Pagination from "./components/Pagination";

function App() {
  const [search, setSearch] = useState(() => {    //state for search bar
    return localStorage.getItem("search") || "";
  });

  const [view, setView] = useState(() => {     //state for view toggle (active/saved)
    return localStorage.getItem("view") || "all";
  });

  const [savedJobs, setSavedJobs] = useState(() => {    //state for saved jobs
    const data = localStorage.getItem("savedJobs");
    return data ? JSON.parse(data) : [];
  });

  const [jobs, setJobs] = useState([]);     //state for API data
  const [loading, setLoading] = useState(true);    //state for loading condition

  const [currentPage, setCurrentPage] = useState(1);   //state for pagination
  const jobsPerPage = 10;

  useEffect(() => {     //side effect (store saved jobs in local storage)
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  useEffect(() => {    //side effect (store view)
    localStorage.setItem("view", view);
  }, [view]);

  useEffect(() => {   //side effect (store searched input)
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    const url = search
      ? `https://remotive.com/api/remote-jobs?search=${search}`
      : `https://remotive.com/api/remote-jobs`;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs || []);   // ✅ IMPORTANT
        setLoading(false);
      });
  }, [search]);


  const handleSave = (job) => {   //event handling: save/unsave jobs
    if (savedJobs.find((j) => j.id === job.id)) {
      setSavedJobs(savedJobs.filter((j) => j.id !== job.id));   //removing jobs: immutability using filter
    } else {
      setSavedJobs([...savedJobs, job]);   //adding jobs: immutability using spread operator
    }
  };

  const handleRemove = (id) => {     //event handling: remove job
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  const displayedJobs = view === "all" ? jobs : savedJobs;    //derived state: choosing which job to show

  const filteredJobs = displayedJobs;

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);   //pagination

  const startIndex = (currentPage - 1) * jobsPerPage;  //calculates from where data should start for current page

  const paginatedJobs = filteredJobs.slice(   //array slicing to display subset of data based on current page
    startIndex,
    startIndex + jobsPerPage
  );

  useEffect(() => {    //whenever search or view changes, reset page to avoid invalid page number
    setCurrentPage(1);
  }, [search, view]);

  { loading && <p style={{ textAlign: "center" }}>Loading...</p> }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "30px 0",
        fontFamily: "Arial",
        background: "linear-gradient(to right, #2e69a7e8, #5730c1ce)",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "48px",
          }}
        >
          💼 Job Portal
        </h1>


        <div style={{ marginBottom: "25px" }}>
          <SearchBar search={search} setSearch={setSearch} />
        </div>


        <div style={{ marginBottom: "35px" }}>
          <Header view={view} setView={setView} savedJobs={savedJobs} />
        </div>


        <div style={{ marginTop: "10px" }}>
          <JobList
            jobs={paginatedJobs}
            view={view}
            handleSave={handleSave}
            handleRemove={handleRemove}
            savedJobs={savedJobs}
          />
        </div>

        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;