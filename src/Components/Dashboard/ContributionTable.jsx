import styles from "../../styles/Dashboard/ContributionTable.module.css";

const ContributionTable = ({ summary }) => {
    const Data = () => {
        return summary.Reason.map((item, idx) => {
            return (
                <tr>
                    <td>{item}</td>
                    <td>{summary.Effect[idx]}</td>
                </tr>
            );
        });
    };

    return (
        <div className={`${styles.max_height} p-3`}>
            <table className={`table table-striped my-3`}>
                <thead>
                    <tr>
                        <th>Reasons</th>
                        <th>Effects</th>
                    </tr>
                </thead>
                <tbody>{Data()}</tbody>
            </table>
        </div>
    );
};

export default ContributionTable;
