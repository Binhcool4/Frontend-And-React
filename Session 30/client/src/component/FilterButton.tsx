import React from "react";
import styles from "./Layout.module.css";

type Filter = "all" | "completed" | "active";

type FilterButtonsProps = {
    filter: Filter;
    onFilter: (f: Filter) => void;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, onFilter }) => (
    <div className={styles.filter}>
        <button
            className={
                filter === "all"
                    ? `${styles.filterBtn} ${styles.active}`
                    : styles.filterBtn
            }
            onClick={() => onFilter("all")}
        >
            Tất cả
        </button>
        <button
            className={
                filter === "completed"
                    ? `${styles.filterBtn} ${styles.active}`
                    : styles.filterBtn
            }
            onClick={() => onFilter("completed")}
        >
            Hoàn thành
        </button>
        <button
            className={
                filter === "active"
                    ? `${styles.filterBtn} ${styles.active}`
                    : styles.filterBtn
            }
            onClick={() => onFilter("active")}
        >
            Đang thực hiện
        </button>
    </div>
);

export default FilterButtons;