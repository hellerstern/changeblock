import styles from "../../styles/Dashboard/Chartbox.module.css";

const ChartBox = ({ heading, subheading, popout, handlePopout, children }) => {
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.top_part}>
                    <h4 className={styles.heading}>{heading}</h4>
                    <p className="m-0">{subheading}</p>
                </div>
                <div>{children}</div>
            </div>
            {popout ? (
                <div className={styles.popout}>
                    <button className={styles.popoutBtn} onClick={handlePopout}>
                        Popout
                    </button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default ChartBox;
