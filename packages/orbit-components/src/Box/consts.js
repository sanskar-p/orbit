// @flow
import theme from "../defaultTheme";

export const DISPLAY = ["none", "flex", "inline-flex", "block", "inline", "inline-block"];

export const WRAP = ["wrap", "nowrap"];

export const DIRECTION = ["row", "column", "row-reverse", "column-reverse"];

export const SHRINK = [0, 1];

export const GROW = [0, 1];

export const WIDTH_AND_HEIGHT = {
  FULL: "full",
  AUTO: "auto",
};

export const POSITION = ["absolute", "relative", "fixed"];

export const ALIGN = ["start", "end", "center", "stretch"];

export const JUSTIFY = ["center", "start", "end", "between", "around"];

export const TEXT_ALIGN = ["left", "right", "center"];

// TODO: "suppressed", "flat"
export const ELEVATION = ["action", "fixed", "raised", "overlay"];

export const BORDER_RADIUS = ["small", "normal", "large", "radiusCircle"];

export const OVERFLOW = ["auto", "hidden", "scroll", "visible"];

export const COLORS = [
  "productLight",
  "productLightHover",
  "productLightActive",
  "productNormal",
  "productNormalHover",
  "productNormalActive",
  "productDark",
  "productDarkHover",
  "productDarkActive",
  "productDarker",
  "white",
  "whiteHover",
  "whiteActive",
  "cloudLight",
  "cloudLightHover",
  "cloudLightActive",
  "cloudNormal",
  "cloudNormalHover",
  "cloudNormalActive",
  "cloudDark",
  "inkLighter",
  "inkLighterHover",
  "inkLighterActive",
  "inkLight",
  "inkLightHover",
  "inkLightActive",
  "inkNormal",
  "inkNormalHover",
  "inkNormalActive",
  "orangeLight",
  "orangeLightHover",
  "orangeLightActive",
  "orangeNormal",
  "orangeNormalHover",
  "orangeNormalActive",
  "orangeDark",
  "orangeDarkHover",
  "orangeDarkActive",
  "orangeDarker",
  "redLight",
  "redLightHover",
  "redLightActive",
  "redNormal",
  "redNormalHover",
  "redNormalActive",
  "redDark",
  "redDarkHover",
  "redDarkActive",
  "redDarker",
  "greenLight",
  "greenLightHover",
  "greenLightActive",
  "greenNormal",
  "greenNormalHover",
  "greenNormalActive",
  "greenDark",
  "greenDarkHover",
  "greenDarkActive",
  "greenDarker",
  "blueLight",
  "blueLightHover",
  "blueLightActive",
  "blueNormal",
  "blueNormalHover",
  "blueNormalActive",
  "blueDark",
  "blueDarkHover",
  "blueDarkActive",
  "blueDarker",
  "socialFacebook",
  "socialFacebookHover",
  "socialFacebookActive",
];

export const SPACINGS = [
  "none",
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
];

export const TOKENS = {
  none: null,
  "xx-small": theme.orbit.spaceXXSmall,
  "x-small": theme.orbit.spaceXSmall,
  small: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  "x-large": theme.orbit.spaceXLarge,
  "xx-large": theme.orbit.spaceXXLarge,
  "xxx-large": theme.orbit.spaceXXXLarge,
};
