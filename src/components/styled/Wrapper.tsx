import styled from "styled-components";
import { CSSProperties } from "react";

export type LabelledType = {
  label: string;
  lblSize?: number;
  lblColor?: CSSProperties["background"];
};

export const Wrapper = styled.div<Pick<LabelledType, "lblSize" | "lblColor">>`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: stretch;
  margin-bottom: 8px;
  div[class*="-wrap"] {
    display: flex;
    align-items: center;
    padding: 4px 8px;
  }
  .label-wrap {
    background: ${(props) => props.lblColor || "#d0ff00"};
    width: ${(props) => (props.lblSize ? props.lblSize + "px" : "undefined")};
  }
`;
