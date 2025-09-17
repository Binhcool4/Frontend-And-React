import React, { useRef } from "react";
import styles from "./Layout.module.css";

type AddTodoFormProps = {
    input: string;
    addError: string;
    onInputChange: (value: string) => void;
    onAdd: () => void;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({
    input,
    addError,
    onInputChange,
    onAdd,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={styles.form}>
            <input
                className={styles.input}
                placeholder="Nhập tên công việc"
                value={input}
                onChange={(e) => {
                    onInputChange(e.target.value);
                }}
                onKeyDown={(e) => e.key === "Enter" && onAdd()}
                ref={inputRef}
            />
            {addError && (
                <div style={{ color: "#ef4444", marginBottom: 6, fontSize: 15 }}>
                    {addError}
                </div>
            )}
            <button className={styles.addBtn} onClick={onAdd}>
                Thêm công việc
            </button>
        </div>
    );
};

export default AddTodoForm;