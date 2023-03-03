let env = "production";
// let env = "local";
export let origin = env === "production" ? "http://18.221.164.63" : "http://localhost:8000";
// export let origin = process.env.REACT_APP_MAIN_END_POINT;

export const ApiUrls = {
    GetRandomIndex: origin + "/api/random-index",
    GetPrediction: origin + "/api/get-pred-proba",
    GetPieChart: origin + "/api/pie-chart",
    GetFeaturesInput: "http://174.138.188.39:8000/api/get-features-input",
    GetContributionPlot: "http://174.138.188.39:8000/api/get-contribution-plot",
    GetContribSummary: "http://174.138.188.39:8000/api/get-contrib-summary",
    // GetFeaturesInput: origin + "/api/get-features-input",
    // GetContributionPlot: origin + "/api/get-contribution-plot",
    // GetContribSummary: origin + "/api/get-contrib-summary",
    GetNer: origin + "/api/ner",
    GetSummary: "http://174.138.188.39:8000/api/get-summary",
    GetFeatureSummary: "http://174.138.188.39:8000/api/get-feature-importance",
    GetExpertAdvice: "http://174.138.188.39:8000/api/get-expert-advice",
};

// "mongodb+srv://cluster0.ghvicx9.mongodb.net/myFirstDatabase"