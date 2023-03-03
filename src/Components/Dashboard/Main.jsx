import styled from "styled-components";
import styles from "../../styles/Dashboard/Main.module.css";
import ChartBox from "./ChartBox";
import Prediction from "./Prediction";
import SelectIndex from "./SelectIndex";
import Api from "../../backend/backend";
import { useEffect } from "react";
import { useState } from "react";
import FeatureInput from "./FeatureInput";
import ContributionPlot from "./ContributionPlot";
import ContributionTable from "./ContributionTable";
import InformationExtraction from "./InformationExtraction";
import Summary from "./Summary";
import { RotatingLines } from "react-loader-spinner";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import { IMG_FILE_UPLOAD } from "../../constants/images/images";
import { CSVLink } from "react-csv";
import Modal from "react-modal";
import FileUploader from "./FileUploader";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Main = ({ selectedTab, setSelectedTab }) => {
    const backend = new Api();

    const [randomIndex, setRandomIndex] = useState(0);
    const [prediction, setPrediction] = useState("");
    const [piechart, setPiechart] = useState("");
    const [featuresInput, setFeaturesInput] = useState({});
    const [contributionPlot, setContributionPlot] = useState("");
    const [contributionSummary, setContributionSummary] = useState({
        Reason: [],
        Effect: [],
    });
    const [entityFile, setEntityFile] = useState("");
    const [entityData, setEntityData] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [informationFile, setInformationFile] = useState("");
    const [informationText, setInformationText] = useState("");
    const [summaryFile, setSummaryFile] = useState("");
    const [summaryText, setSummaryText] = useState("");
    const [featureSummary, setFeatureSummary] = useState(
        "Click below to generate summary"
    );
    const [adviseSummary, setAdviseSummary] = useState("");
    const [loadingFeatureSummary, setLoadingFeatureSummary] = useState(false);
    const [featuresDescription, setFeaturesDescription] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function openModal() {
        setIsOpenModal(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = "#f00";
    }

    function closeModal() {
        setIsOpenModal(false);
    }

    function getPlotDiv(chart) {
        return (
            <div className="d-flex flex-grow text-center">
                <iframe srcdoc={chart} height={500} width={1000}></iframe>
            </div>
        );
    }

    const handleIndexChange = () => {
        backend
            .GetRandomIndex()
            .then((res) => {
                setRandomIndex(res.data.index);
            })
            .then(() => {
                getPredictions();
                getPieChart();
                getFeaturesInput();
                getContributionPlot();
                getContributionSummary();
            });
        return Promise.resolve("Success");
    };

    const handleFeaturesChange = () => {
        getPieChart(false);
        getPredictions(false);
        getContributionPlot(false);
        getContributionSummary(false);
        return Promise.resolve("Success");
    };

    const getPredictions = (isIndex = true) => {
        if (isIndex) {
            backend.GetPredictionProba(randomIndex).then((res) => {
                var result = res.data["prediction"]["probability"];
                setPrediction(result);
            });
        } else {
            backend.GetPredictionProba(featuresInput).then((res) => {
                var result = res.data["prediction"]["probability"];
                setPrediction(result);
            });
        }
    };

    const getPieChart = (isIndex = true) => {
        if (isIndex) {
            backend.GetPieChart(randomIndex).then((res) => {
                setPiechart(res.data["chart"]);
            });
        } else {
            backend.GetPieChart(featuresInput).then((res) => {
                setPiechart(res.data["chart"]);
            });
        }
    };

    const getFeaturesInput = () => {
        backend.GetFeaturesInput(randomIndex).then((res) => {
            console.log("features: ", res.data["features"]);
            console.log("descp: ", res.data["features_description"]);
            setFeaturesInput(res.data["features"]);
            setFeaturesDescription(res.data["features_description"]);
        });
    };

    const getContributionPlot = (isIndex = true) => {
        if (isIndex) {
            backend.GetContributionPlot(randomIndex).then((res) => {
                setContributionPlot(res.data["html"]);
            });
        } else {
            backend.GetContributionPlot(featuresInput).then((res) => {
                setContributionPlot(res.data["html"]);
            });
        }
    };

    const getContributionSummary = (isIndex = true) => {
        if (isIndex) {
            backend.GetContribSummary(randomIndex).then((res) => {
                setContributionSummary(res.data["data"]);
            });
        } else {
            backend.GetContribSummary(featuresInput).then((res) => {
                setContributionSummary(res.data["data"]);
            });
        }
    };

    const handleFilesChosen = (event) => {
        setEntityFile(event.target.files[0]);
        if (event.target.files[0].size > 0) {
            const formData = new FormData();
            formData.append("file", event.target.files[0]);
            backend.GetNer(formData).then((res) => {
                console.log(res.data);
                setEntityData(res.data.entities);
            });
        }
    };

    const handleInformationFile = (event) => {
        setInformationFile(event.target.files[0]);
        if (event.target.files[0].size > 0) {
            const formData = new FormData();
            formData.append("file", event.target.files[0]);
            backend.GetNer(formData).then((res) => {
                setInformationText(res.data.text);
            });
        }
    };

    const handleSummaryFile = (event) => {
        setSummaryFile(event.target.files[0]);
        if (event.target.files[0].size > 0) {
            const formData = new FormData();
            formData.append("file", event.target.files[0]);
            backend.GetSummary(formData).then((res) => {
                setSummaryText(res.data.text);
            });
        }
    };

    const handleSummaryOutput = () => {
        setLoadingFeatureSummary(true);
        backend
            .GetFeatureSummary(featuresInput, prediction[0], prediction[1])
            .then((res) => {
              let str = res.data.feature_explanation.toString();
              console.log('summary: ', str);
              const matches = str.match(/\d+\.\d+/g);
              debugger;
              const rounds = [];
              for (let i = 0; i < matches?.length; i++) {
                rounds.push(Number(matches[i]).toFixed(1));
              }
              for (let i = 0; i < matches?.length; i++) {
                str = str.replace(matches[i], rounds[i].toString());
              }
              setFeatureSummary(str);
            })
            .then((res) => {
                handleExpertAdviseOutput(featureSummary);
            })
    };

    const handleExpertAdviseOutput = (explanation) => {
        backend.GetExpertAdvice(explanation).then((res) => {
            setAdviseSummary(res.data.expert_advise);
            debugger;
            setLoadingFeatureSummary(false);
        });
    };

    const handleOpenModal = () => {};

    const Data = () => {
        return entityData.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                </tr>
            );
        });
    };

    useEffect(() => {
        handleIndexChange().then(() => {
            getPredictions();
            getPieChart();
            getFeaturesInput();
            getContributionPlot();
            getContributionSummary();
        });
    }, []);

    return (
        <div className={styles.box}>
            <div className="d-flex justify-content-evenly">
                <button
                    className={
                        selectedTab === "WhatIf"
                            ? styles.btn_selected
                            : styles.btn_unselected
                    }
                    onClick={() => {
                        setSelectedTab("WhatIf");
                    }}
                >
                    What-If
                </button>
                <button
                    className={
                        selectedTab === "InformationExtraction"
                            ? styles.btn_selected
                            : styles.btn_unselected
                    }
                    onClick={() => {
                        setSelectedTab("InformationExtraction");
                    }}
                >
                    Information Extraction
                </button>
                <button
                    className={
                        selectedTab === "Summary"
                            ? styles.btn_selected
                            : styles.btn_unselected
                    }
                    onClick={() => {
                        setSelectedTab("Summary");
                    }}
                >
                    Summarisation
                </button>
                <button
                    className={
                        selectedTab === "EntityExtraction"
                            ? styles.btn_selected
                            : styles.btn_unselected
                    }
                    onClick={() => {
                        setSelectedTab("EntityExtraction");
                    }}
                >
                    Aspect Based Sentiment
                </button>
            </div>
            <div className={styles.v1}></div>

            {(() => {
                if (selectedTab === "WhatIf") {
                    return (
                        <div>
                            <div className="d-flex justify-content-between">
                                <h3 className={`${styles.heading}`}>
                                    What-If Analysis
                                </h3>
                                {/* <select>
                                    <option value={"Download"}>Download</option>
                                </select> */}
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <ChartBox
                                        heading={"Select project"}
                                        subheading={
                                            ""
                                        }
                                        children={
                                            <SelectIndex
                                                randomIndex={randomIndex}
                                                handleIndexChange={
                                                    handleIndexChange
                                                }
                                            />
                                        }
                                    />
                                    <ChartBox
                                        heading={"Feature Input"}
                                        subheading={
                                            "Adjust the feature values to change the prediction"
                                        }
                                        children={
                                            <FeatureInput
                                                randomIndex={randomIndex}
                                                featuresInput={featuresInput}
                                                setFeaturesInput={
                                                    setFeaturesInput
                                                }
                                                handleFeaturesChange={
                                                    handleFeaturesChange
                                                }
                                                featuresDescription={
                                                    featuresDescription
                                                }
                                            />
                                        }
                                    />
                                    <ChartBox
                                        heading={"Contribution Plot"}
                                        subheading={
                                            "How has each feature contributed to the prediction?"
                                        }
                                        children={
                                            <ContributionPlot
                                                randomIndex={randomIndex}
                                                contributionPlot={
                                                    contributionPlot
                                                }
                                            />
                                        }
                                        popout={true}
                                        handlePopout={openModal}
                                    />
                                    <ChartBox
                                        heading={"Contribution Table"}
                                        subheading={
                                            "How has each feature contributed to the prediction?"
                                        }
                                        children={
                                            <ContributionTable
                                                summary={contributionSummary}
                                            />
                                        }
                                    />
                                    <ChartBox
                                        heading={"Summary of Output"}
                                        subheading={
                                            "Outcome of each feature prediction"
                                        }
                                        children={
                                            loadingFeatureSummary ? (
                                                <div className="d-flex justify-content-center flex-column p-3 text-center">
                                                    <p
                                                        style={{
                                                            fontStyle: "normal",
                                                            fontWeight: "700",
                                                            fontSize: "17px",
                                                            lineHeight: "24px",
                                                        }}
                                                    >
                                                        <strong>
                                                            Summarising
                                                            Prediction
                                                        </strong>
                                                    </p>
                                                    <div
                                                        style={{
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <RotatingLines
                                                            strokeColor="#4fa94d"
                                                            strokeWidth="5"
                                                            animationDuration="0.75"
                                                            width="60"
                                                            wrapperClassName=""
                                                            visible={
                                                                loadingFeatureSummary
                                                            }
                                                        />
                                                    </div>

                                                    <br />
                                                    <p
                                                        style={{
                                                            fontStyle: "normal",
                                                            fontWeight: "500",
                                                            fontSize: "18px",
                                                            lineHeight: "36px",
                                                            /* or 180% */

                                                            textAlign: "center",

                                                            /* Gray Text */

                                                            color: "#5C5B5B",
                                                        }}
                                                    >
                                                        We are currently
                                                        generating your summary
                                                        This can take up to a
                                                        minute
                                                    </p>
                                                </div>
                                            ) : adviseSummary.length === 0 ? (
                                                <div className="p-3">
                                                    <p>{featureSummary}</p>
                                                    <button
                                                        className={styles.btn}
                                                        onClick={
                                                            handleSummaryOutput
                                                        }
                                                    >
                                                        Generate Summary
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="p-3">
                                                    <h5>
                                                        Features Explanation
                                                    </h5>
                                                    <p>{featureSummary}</p>
                                                    <h5>Expert Advice</h5>
                                                    <p>{adviseSummary}</p>
                                                    <button
                                                        className={styles.btn}
                                                        onClick={
                                                            handleSummaryOutput
                                                        }
                                                    >
                                                        Generate Summary
                                                    </button>
                                                    <br />
                                                    <PDFDownloadLink
                                                        className={`${styles.btn}`}
                                                        document={
                                                            <MyDocument
                                                                data={[
                                                                        featureSummary,
                                                                    "\n Expert Advice \n" +
                                                                        adviseSummary,
                                                                ]}
                                                            />
                                                        }
                                                        fileName="whatif-tool-summary.pdf"
                                                    >
                                                        Download Summary
                                                    </PDFDownloadLink>
                                                </div>
                                            )
                                        }
                                    />
                                </div>
                                <div className="col-6">
                                    <div
                                        className={
                                            scrollPosition > 472
                                                ? styles.fixed
                                                : ""
                                        }
                                    >
                                        <ChartBox
                                            heading={"Prediction"}
                                            children={
                                                <Prediction
                                                    randomIndex={randomIndex}
                                                    prediction={prediction}
                                                    piechart={piechart}
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else if (selectedTab === "EntityExtraction") {
                    return (
                        <div>
                            <div className="d-flex justify-content-between">
                                <h3 className={`${styles.heading}`}>
                                    Aspect Based Sentiment
                                </h3>

                                {/* <select>
                                    <option value={"Download"}>Download</option>
                                </select> */}
                            </div>
                            <p>
                                Upload a document to get Aspect Based Sentiment{" "}
                            </p>

                            {!entityFile ? (
                                <div className="row">
                                    <div className="col-5 text-center">
                                        <div className={styles.grey}>
                                            <div
                                                className={
                                                    styles.upload_wrapper
                                                }

                                                style={{display: 'flex', alignItems: 'center', justifyContent: "center"}}
                                            >
                                              <FileUploader
                                                handleInformationFile={handleInformationFile}
                                                handleSummaryFile={handleSummaryFile}
                                                handleFilesChosen={handleFilesChosen}
                                              ></FileUploader>
                                                {/* <img
                                                    src="images/upload-button.png"
                                                    alt="upload button icon"
                                                />
                                                <br />
                                                <input
                                                    type="file"
                                                    multiple={false}
                                                    accept="application/msword, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                    className="ps-3 mt-1"
                                                    onChange={handleFilesChosen}
                                                /> */}
                                                {/* <button
                                                    className={`${styles.upload_btn}`}
                                                    onClick={() =>
                                                        setEntityFile("1")
                                                    }
                                                >
                                                    Upload Document
                                                </button> */}
                                                {/* <br />
                                                <label>or</label>
                                                <br />
                                                <label
                                                    className={styles.browse}
                                                >
                                                    Browse Files
                                                </label> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7 text-center">
                                        <div className={styles.info_box}>
                                            <img
                                                src="images/upload-doc.png"
                                                alt="upload doc"
                                                className="img-fluid"
                                            />
                                            <p>
                                                Upload document to get Aspect
                                                Based Sentiment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="row">
                                    <div className="col-5 text-center mt-4">
                                        <div className={styles.cv_template}>
                                        <img src={IMG_FILE_UPLOAD} alt="upload button icon" />
                                        <UploadLabel>Uploaded</UploadLabel>
                                        </div>
                                    </div>
                                    <div className="col-7 text-center">
                                        <ChartBox
                                            heading={"Entity Extraction"}
                                            children={
                                                <div>
                                                    <table
                                                        className={`table my-3`}
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Named Entity
                                                                </th>
                                                                <th>
                                                                    Context and
                                                                    Details
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{Data()}</tbody>
                                                    </table>
                                                    <CSVLink
                                                        data={entityData}
                                                        className={`${styles.btn} m-4`}
                                                    >
                                                        Download Extraction
                                                    </CSVLink>
                                                </div>
                                            }
                                        />
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            className={styles.btn}
                                            onClick={() => setEntityFile("")}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                } else if (selectedTab === "InformationExtraction") {
                    return (
                        <InformationExtraction
                            informationFile={informationFile}
                            setInformationFile={setInformationFile}
                            handleInformationFile={handleInformationFile}
                            handleSummaryFile={handleSummaryFile}
                            informationText={informationText}
                            handleFilesChosen={handleFilesChosen}
                        />
                    );
                } else if (selectedTab === "Summary") {
                    return (
                        <Summary
                            summaryFile={summaryFile}
                            setSummaryFile={setSummaryFile}
                            handleInformationFile={handleInformationFile}
                            handleSummaryFile={handleSummaryFile}
                            summaryText={summaryText}
                            handleFilesChosen={handleFilesChosen}
                        />
                    );
                }
            })()}
            <Modal
                isOpen={isOpenModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h4>Contribution Plot</h4>

                {getPlotDiv(contributionPlot)}
                <button onClick={closeModal} className={styles.btn}>
                    close
                </button>
            </Modal>
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

export default Main;
