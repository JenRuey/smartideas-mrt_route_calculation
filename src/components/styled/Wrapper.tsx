import styled from "styled-components";

export type LabelledType = {
  label: string;
  lblSize?: number;
};

export const Wrapper = styled.div<Pick<LabelledType, "lblSize">>`
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
    background: #d0ff00;
    width: ${(props) => (props.lblSize ? props.lblSize + "px" : "undefined")};
  }
`;
