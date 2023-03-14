import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IMG_FILE_UPLOAD } from "../../constants/images/images";
import styles from "../../styles/Dashboard/InformationExtraction.module.css";

const FileUploader = (props) => {
  const uploader = useRef(null);

  function clickUploader() {
    uploader.current.click();
  }

  return (
    <div className="col-5 text-center">
      <div className={styles.grey}>
        <div className={styles.upload_wrapper} onClick={clickUploader}>
          <img src={IMG_FILE_UPLOAD} alt="upload button icon" />
          <br />
          <UploadLabel>Upload Document</UploadLabel>
          <input
            type="file"
            multiple={false}
            accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="ps-3 mt-1"
            onChange={(e) => {
              localStorage.setItem('fileName', e.target.files[0].name);
              props.handleInformationFile(e);
              props.handleSummaryFile(e);
              props.handleFilesChosen(e);
            }}
            style={{ display: "none" }}
            ref={uploader}
          />
        </div>
      </div>
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

export default FileUploader;
