import { styled } from "lib/css";
import { FC } from "react";

const Styles = styled('h1', {
  color: "$fg",
  fontWeight: "400",
  lineHeight: "1em",
  display: "inline-block",
  margin: 0,
  "span": {
    color: "#666",
    fontWeight: "100",
  }
});

export type Logo = {
  size?: number;
  name: string;
  tld: string;
};

export const Logo: FC<Logo> = ({ name, tld, size: fontSize = 32 }) => <Styles css={{ fontSize }}>
  {name}<span>{tld}</span>
</Styles>;