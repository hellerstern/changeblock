import axios from "axios";

import { ApiUrls } from "./ApiConfig.jsx";

export default class Api {
  GetRandomIndex() {
    return new Promise(function (resolve, reject) {
      // const data = {
      //     user_id: sessionStorage.getItem("username"),
      //     article_id: id,
      // };
      axios
        .get(ApiUrls.GetRandomIndex)
        .then(function (response) {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  GetPredictionProba(index) {
    return new Promise(function (resolve, reject) {
      if (typeof index === "number") {
        const data = {
          index: index,
        };
        axios
          .post(ApiUrls.GetPrediction, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        const data = {
          features: index,
        };
        axios
          .post(ApiUrls.GetPrediction, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  GetPieChart(index) {
    return new Promise(function (resolve, reject) {
      if (typeof index === "number") {
        const data = {
          index: index,
        };
        axios
          .post(ApiUrls.GetPieChart, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        const data = {
          features: index,
        };
        axios
          .post(ApiUrls.GetPieChart, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  GetFeaturesInput(index) {
    return new Promise(function (resolve, reject) {
      const data = {
        index: index,
      };
      axios
        .post(ApiUrls.GetFeaturesInput, data)
        .then(function (response) {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  GetContributionPlot(index) {
    return new Promise(function (resolve, reject) {
      if (typeof index === "number") {
        const data = {
          index: index,
        };
        axios
          .post(ApiUrls.GetContributionPlot, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        const data = {
          features: index,
        };
        axios
          .post(ApiUrls.GetContributionPlot, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  GetContribSummary(index) {
    return new Promise(function (resolve, reject) {
      if (typeof index === "number") {
        const data = {
          index: index,
        };
        axios
          .post(ApiUrls.GetContribSummary, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        const data = {
          features: index,
        };
        axios
          .post(ApiUrls.GetContribSummary, data)
          .then(function (response) {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  }

  GetNer(formData) {
    return new Promise(function (resolve, reject) {
      axios
        .post(ApiUrls.GetNer, formData)
        .then(function (response) {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  GetSummary(formData) {
    return new Promise(function (resolve,  reject) {
      axios 
        .post(ApiUrls.GetSummary, formData)
        .then(function (response) {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  GetFeatureSummary(features, success, failure) {
    return new Promise(function (resolve, reject) {
      const data = {
        features: features,
        success: success,
        failure: failure,
      };
      axios
        .post(ApiUrls.GetFeatureSummary, data)
        .then(function (response) {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  GetExpertAdvice(explanation) {
    return new Promise(function (resolve, reject) {
      const data = {
        feature_explanation: explanation,
      };
      axios
        .post(ApiUrls.GetExpertAdvice, data)
        .then(function (response) {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
