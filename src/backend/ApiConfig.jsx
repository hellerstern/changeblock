let env = "production";
// let env = "local";
export let origin = "http://174.138.188.39:8000/api/";
// export let origin = process.env.REACT_APP_MAIN_END_POINT;

export const ApiUrls = {
    GetRandomIndex: origin + "random-index",
    GetPrediction: origin + "get-pred-proba",
    GetPieChart: origin + "pie-chart",
    GetFeaturesInput: origin + "get-features-input",
    GetContributionPlot: origin + "get-contribution-plot",
    GetContribSummary: origin + "get-contrib-summary",
    GetNer: origin + "ner",
    GetSummary: origin + "get-summary",
    GetFeatureSummary: origin + "get-feature-importance",
    GetExpertAdvice: origin + "get-expert-advice",
};

// "mongodb+srv://cluster0.ghvicx9.mongodb.net/myFirstDatabase"