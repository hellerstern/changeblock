import {
  IMG_ANA_DARK,
  IMG_ANA_BRIGHT,
  IMG_DAS_DARK,
  IMG_DAS_BRIGHT,
  IMG_SUB_DARK,
  IMG_HELP_DARK,
  IMG_HELP_BRIGHT,
} from "../images/images";

export const SIDEBAR_DATA = {
  dashboard: {
    title: "Dashboard",
    img: {
      dark: IMG_DAS_DARK,
      bright: IMG_DAS_BRIGHT,
    },
  },
  analysis: {
    title: "Analysis History",
    img: {
      dark: IMG_ANA_DARK,
      bright: IMG_ANA_BRIGHT,
    },
  },
  subscription: {
    title: "My Subscription",
    img: {
      dark: IMG_SUB_DARK,
    },
  },
  help: {
    title: "Help & Support",
    img: {
      dark: IMG_HELP_DARK,
      bright: IMG_HELP_BRIGHT,
    },
  },
};
