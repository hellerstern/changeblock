import styles from "../../styles/CompaniesSection.module.css";

const CompaniesSection = () => {
    return (
        <div className="container my-5">
            <h1 className={`${styles.companies_heading} text-center mb-4`}>
                Over 32 Companies Growing with ChangeBlock Data Platform
            </h1>
            <div className={styles.horizontal_line}></div>
            <div className="d-flex justify-content-between flex-wrap">
                <img
                    src="images/glo-icon.png"
                    alt="glo"
                    width={50}
                    height={50}
                    className="my-auto ms-5"
                />
                <img
                    src="images/british-logo.png"
                    width={200}
                    height={50}
                    alt="british airways"
                    className="my-auto"
                />
                <img
                    src="images/eagle-icon.png"
                    width={150}
                    height={50}
                    alt="eagle"
                    className="my-auto"
                />
                <img
                    src="images/aero-logo.png"
                    width={200}
                    height={50}
                    alt="aero"
                    className="my-auto"
                />
                <img src="images/oracle-logo.png" alt="oracle" />
            </div>
            <div className={styles.horizontal_line}></div>
        </div>
    );
};

export default CompaniesSection;
