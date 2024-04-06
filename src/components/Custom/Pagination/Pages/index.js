import React, { useEffect, useState } from "react";

export const Pages = ({ page, limit, dataLength, setPage }) => {

  const pageNumbers = Array.from({ length: Math.ceil(dataLength / limit) }, (_, i) => i + 1);
  const [showPage, setShowPage] = useState([]);


  const backToFirst = () => setPage(1);
  const goToLast = () => setPage(pageNumbers.slice(-1)[0]);

  useEffect(() => {
    setShowPage(
      page > 3 && page < pageNumbers.length - 2
        ? pageNumbers.slice(page - 3, page + 2)
        : page <= 3
        ? pageNumbers.slice(0, 5)
        : pageNumbers.slice(-5)
    );
  }, [page, limit, dataLength]);

  return (
    <ul className="pagination justify-content-end mt-2">
      {page !== pageNumbers[0] && (
        <li className="page-item">
          <button onClick={backToFirst} className="page-link">
            First
          </button>
        </li>
      )}

      {showPage.map((number, index) => (
        <li className={`page-item ${page === number && "active"}`} key={index}>
          <button onClick={() => setPage(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}

      {page !== pageNumbers.slice(-1)[0] && (
        <li className="page-item">
          <button onClick={goToLast} className="page-link">
            Last
          </button>
        </li>
      )}
    </ul>
  );
};
