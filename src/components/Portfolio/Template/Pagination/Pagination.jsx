import react from "react";

import style from "../../Template/Pagination/Pagination.module.css";

function Pagination(){
    return (
        <div className={style.pagination}>
            <button>{'<'}</button>
            {[1, 2, 3, 4].map((page) => (
                <button key={page} className={page === 1 ? "active" : ""}>{page}</button>
            ))}
            <span>...</span>
            <button>10</button>
            <button>{'>'}</button>
        </div>
    );
}
export default Pagination;