import styles from "../../styles/Dashboard/ContributionPlot.module.css";

const ContributionPlot = ({ contributionPlot }) => {
    function getPlotDiv(chart) {
        return (
            <div className="d-flex flex-grow text-center">
                <iframe srcdoc={chart} height={500} width={"100%"}></iframe>
            </div>
        );
    }
    return <div className="">{getPlotDiv(contributionPlot)}</div>;
};

export default ContributionPlot;
