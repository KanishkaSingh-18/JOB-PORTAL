function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const buttonStyle = {
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid white",
        background: "transparent",
        color: "white",
        cursor: "pointer",
    };

    const maxVisiblePages = 5;

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);  //keeps the current page in center
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {   //boundary check, prevents overflow
        endPage = totalPages;
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    const visiblePages = [];

    for (let i = startPage; i <= endPage; i++) {    //generate array of pages to display
        visiblePages.push(i);
    }

    return (
        <div
            style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
            }}
        >
            {/* Left Arrow */}
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                style={buttonStyle}
            >
                ⬅
            </button>

            {/* Page Numbers */}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                        ...buttonStyle,
                        backgroundColor: currentPage === page ? "#fff" : "transparent",
                        color: currentPage === page ? "#333" : "#fff",
                    }}
                >
                    {page}
                </button>
            ))}

            {/* Right Arrow */}
            <button
                onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                style={buttonStyle}
            >
                ➡
            </button>
        </div>
    );
}

export default Pagination;