import styled from "styled-components";
import { LabelledType, Wrapper } from "./styled/Wrapper";

type LabelledSelectType = LabelledType & React.HTMLProps<HTMLSelectElement>;

const SelectWrapper = styled(Wrapper)`
  .select-wrap {
    flex: 1;
    select {
      padding: 4px;
      width: 100%;
      border: none;
    }
  }
`;

function LabelledSelect({ label, lblColor, lblSize = 100, ...htmlselectprops }: LabelledSelectType) {
  return (
    <SelectWrapper lblSize={lblSize} lblColor={lblColor}>
      <div className="label-wrap">
        <label htmlFor={htmlselectprops.id}>{label}</label>
      </div>
      <div className="select-wrap">
        <select {...htmlselectprops} />
      </div>
    </SelectWrapper>
  );
}

export default LabelledSelect;
