import { CSSProperties } from "react";


const button: CSSProperties = {
  padding: "8px 16px",
  marginTop: 40,
  display: "inline-block"
};

export const Install = (props) => <a style={button} className="text-primary-500 bg-primary-500/10" {...props} />;
