import React, { useState, useEffect } from "react";

const PaginatedTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const ITEMS_PER_PAGE = 10;

  const fetchData = (page) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEMS_PER_PAGE}`)
      .then((response) => {
        const totalItems = response.headers.get("x-total-count");
        setTotalPages(Math.ceil(totalItems / ITEMS_PER_PAGE));
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Paginated Table</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="20" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>

        <select value={currentPage} onChange={handlePageChange}>
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>Page {index + 1}</option>
          ))}
        </select>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedTable;