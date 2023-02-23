let env = "production";
// let env = "local";
export let origin = env === "production" ? "" : "https://18.221.164.63/";
// export let origin = process.env.REACT_APP_MAIN_END_POINT;

export const ApiUrls = {
  GetRandomIndex: origin + "/api/random-index",
  GetPrediction: origin + "/api/get-pred-proba",
  GetPieChart: origin + "/api/pie-chart",
  GetFeaturesInput: origin + "/api/get-features-input",
  GetContributionPlot: origin + "/api/get-contribution-plot",
  GetContribSummary: origin + "/api/get-contrib-summary",
  GetNer: origin + "/api/ner",
  GetSummary: origin + "/api/get-summary",
  GetFeatureSummary: origin + "/api/get-feature-importance",
  GetExpertAdvice: origin + "/api/get-expert-advice",
};
