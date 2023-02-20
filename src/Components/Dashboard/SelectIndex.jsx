import styles from "../../styles/Dashboard/SelectIndex.module.css";

const SelectIndex = ({ randomIndex, handleIndexChange }) => {
    return (
        <div className="p-3">
            <input placeholder={randomIndex} size={40} disabled={true} />
            <button
                className={styles.btn}
                onClick={() => {
                    handleIndexChange();
                }}
            >
                Random Index
            </button>
        </div>
    );
};

export default SelectIndex;
