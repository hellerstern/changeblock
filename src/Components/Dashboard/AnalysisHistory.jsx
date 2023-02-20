import styles from "../../styles/Dashboard/AnalysisHistory.module.css";

const AnalysisHistory = () => {
  return (
    <div className={styles.box}>
      <h3 className={styles.heaidng}>Analysis History</h3>
      <table className={`table my-3`}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Analysis Type</th>
            <th>File Size</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>07-12-2022</td>
            <td>What if analysis</td>
            <td>5kb</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
          <tr>
            <td>07-12-2022</td>
            <td>Information Extraction</td>
            <td>5kb</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
          <tr>
            <td>07-12-2022</td>
            <td>Summarisation</td>
            <td>5kb</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
          <tr>
            <td>07-12-2022</td>
            <td>Entity Extraction</td>
            <td>5kb</td>
            <td>
              <button>Download</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AnalysisHistory;
