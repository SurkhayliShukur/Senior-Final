import React from "react";

export const Limit = ({ page, limit, setLimit, dataLength }) =>
 (<div className="d-flex justify-content-between align-items-center">
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {limit}
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {[5, 10, 25].map((option) => (
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              setLimit(option);
              // setPage(1);
            }}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    <div className="mx-3">
      <p className="m-0">{dataLength > page * limit ? `${(page - 1) * limit + 1} to ${page * limit} from ${dataLength}` : `${(page - 1) * limit + 1} to ${dataLength} from ${dataLength}`}</p>
    </div>
  </div>);