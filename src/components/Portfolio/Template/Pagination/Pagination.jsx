import react from "react";

import style from "../../Template/Pagination/Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
    const maxVisible = 3;

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage === 1) {
        endPage = Math.min(3, totalPages - 1);
    } else if (currentPage === totalPages) {
        startPage = Math.max(totalPages - 2, 2);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (page) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    return (
        <div className={style.pagination}>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                &lt;
            </button>

            <button className={currentPage === 1 ? style.active : ""} onClick={() => handlePageClick(1)}>
                1
            </button>

            {startPage > 2 && <span className={style.ellipsis}>...</span>}

            {pageNumbers.map((num) => (
                <button
                    key={num}
                    className={currentPage === num ? style.active : ""}
                    onClick={() => handlePageClick(num)}
                >
                    {num}
                </button>
            ))}

            {endPage < totalPages - 1 && <span className={style.ellipsis}>...</span>}

            {totalPages > 1 && (
                <button className={currentPage === totalPages ? style.active : ""} onClick={() => handlePageClick(totalPages)}>
                    {totalPages}
                </button>
            )}

            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
}

export default Pagination;