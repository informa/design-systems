import React, { ReactNode } from "react";
import { useStyles, useTheme } from "react-treat";
// import * as styleRefs from "./Button.treat";

export default ({ children }) => {
  let styles;
  // if (useTheme()) {
    // styles = useStyles(styleRefs);
  // } else {
    // styles = { button: styleRefs.buttonDefault };
  // }
  return <button className={styles.button}>{children}</button>;
};
