import { useEffect, useRef } from "react";
import styles from "../../styles/Dashboard/ContributionPlot.module.css";

const ContributionPlot = ({ contributionPlot }) => {
    const iframeRef = useRef(null);

    // setTimeout(() => {
    //     const frame = iframeRef.current;
    //     const frameDoc = frame.contentDocument;
    //     const divElement = frameDoc.getElementsByClassName("modebar--hover");
    //     divElement[0].style.top = "24px";
    // }, 3000)

    function getPlotDiv(chart) {
        return (
            <div className="d-flex flex-grow text-center">
                <iframe srcdoc={chart} height={500} width={"100%"} ref={iframeRef}></iframe>
            </div>
        );
    }
    return <div className="">{getPlotDiv(contributionPlot)}</div>;
};

export default ContributionPlot;
