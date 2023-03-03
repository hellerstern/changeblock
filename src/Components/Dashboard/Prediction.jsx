// import styles from "../../styles/Dashboard/Prediction.module.css";

const Prediction = ({ randomIndex, prediction, piechart }) => {
    function getPlotDiv(chart) {
        return (
            <div className="text-center">
                <iframe srcdoc={chart} height={280}></iframe>
            </div>
        );
    }

    function strip(number) {
        return parseFloat(number).toPrecision(4);
    }

    return (
        <div className="p-3">
            <label>Select project</label>
            <br />
            <input placeholder={randomIndex} size={40} disabled={true} />
            <table class="table my-3">
                <thead>
                    <tr>
                        <th scope="col" className="d-none">
                            #
                        </th>
                        <th scope="col">Label</th>
                        <th scope="col">Probability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="d-none">
                            1
                        </th>
                        <td>Success</td>
                        <td>{strip(prediction[0] * 100)}%</td>
                    </tr>
                    <tr>
                        <th scope="row" className="d-none">
                            2
                        </th>
                        <td>Failure</td>
                        <td>{strip(prediction[1] * 100)}%</td>
                    </tr>
                </tbody>
            </table>
            {getPlotDiv(piechart)}
        </div>
    );
};

export default Prediction;
