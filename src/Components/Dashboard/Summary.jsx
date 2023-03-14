import { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Dashboard/InformationExtraction.module.css";
import ChartBox from "./ChartBox";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import { RotatingLines } from "react-loader-spinner";
import FileUploader from "./FileUploader";
import { IMG_FILE_UPLOAD } from "../../constants/images/images";

const Summary = ({
  summaryFile,
  setSummaryFile,
  summaryText,
  handleInformationFile,
  handleSummaryFile,
  handleFilesChosen,
}) => {

  const [fileName, setFileName] = useState();

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className={`${styles.heading}`}>Summarisation</h3>

        {/* <select>
                    <option value={"Download"}>Download</option>
                </select> */}
      </div>
      <p>Upload a document to get a summarized version </p>

      {!summaryFile ? (
        <div className="row">
          <FileUploader
            handleSummaryFile={handleSummaryFile}
            handleInformationFile={handleInformationFile}
            handleFilesChosen={handleFilesChosen}
            setFileName={setFileName}
          />
          <div className="col-7 text-center">
            <div className={styles.info_box}>
              <img
                src="images/upload-doc.png"
                alt="upload doc"
                className="img-fluid"
              />
              <p>Upload document to get a summarized version</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-5 text-center mt-4">
            <div className={styles.cv_template}>
              <img src={IMG_FILE_UPLOAD} alt="upload button icon" />
              <UploadLabel>{localStorage.getItem('fileName')}</UploadLabel>
              {/* <img
                alt="cv template"
                src="images/cv-template.png"
                className="img-fluid pt-5"
              /> */}
            </div>
          </div>
          <div className="col-7 text-center">
            <ChartBox
              heading={"Summarisation"}
              children={
                summaryText ? (
                  <div>
                    <p className="p-3">{summaryText}</p>
                    <PDFDownloadLink
                      className={`${styles.btn}`}
                      document={<MyDocument data={[summaryText]} />}
                      fileName="summary.pdf"
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
            <button className={styles.btn} onClick={() => setSummaryFile("")}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const UploadLabel = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-top: 10px;
`;

export default Summary;
