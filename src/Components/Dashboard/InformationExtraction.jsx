import styles from "../../styles/Dashboard/InformationExtraction.module.css";
import ChartBox from "./ChartBox";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import { RotatingLines } from "react-loader-spinner";
import FileUploader from "./FileUploader";

const InformationExtraction = ({
  informationFile,
  setInformationFile,
  informationText,
  handleInformationFile,
  handleSummaryFile,
  handleFilesChosen,
}) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className={`${styles.heading}`}>Information Extraction</h3>

        {/* <select>
          <option value={"Download"}>Download</option>
        </select> */}
      </div>
      <p>Upload a document to get a information extracted </p>

      {!informationFile ? (
        <div className="row">
          <FileUploader
            handleInformationFile={handleInformationFile}
            handleSummaryFile={handleSummaryFile}
            handleFilesChosen={handleFilesChosen}
          />
          <div className="col-7 text-center">
            <div className={styles.info_box}>
              <img
                src="images/upload-doc.png"
                alt="upload doc"
                className="img-fluid"
              />
              <p>Upload document to get information text</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-5 text-center mt-4">
            <div className={styles.cv_template}>
              <img
                alt="cv template"
                src="images/cv-template.png"
                className="img-fluid pt-5"
              />
            </div>
          </div>
          <div className="col-7 text-center">
            <ChartBox
              heading={"Information Extraction"}
              children={
                informationText ? (
                  <div>
                    <p className="p-3">{informationText}</p>
                    <PDFDownloadLink
                      className={`${styles.btn}`}
                      document={<MyDocument data={[informationText]} />}
                      fileName="information-extraction.pdf"
                    >
                      Download PDF
                    </PDFDownloadLink>
                  </div>
                ) : (
                  <div
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <RotatingLines
                      strokeColor="#4fa94d"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="60"
                      wrapperClassName=""
                      visible={true}
                    />
                  </div>
                )
              }
            />
          </div>
          <div className="d-flex">
            <button
              className={styles.btn}
              onClick={() => setInformationFile("")}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformationExtraction;
