import styled from "styled-components";
import { LabelledType, Wrapper } from "./styled/Wrapper";

type LabelledInputType = LabelledType &
  Omit<React.HTMLProps<HTMLInputElement>, "children">;

const InputWrapper = styled(Wrapper)`
  .input-wrap {
    flex: 1;
    input {
      padding: 4px;
      width: 100%;
      border: none;
    }
  }
`;

function LabelledInput({
  label,
  lblSize = 100,
  ...htmlinputprops
}: LabelledInputType) {
  return (
    <InputWrapper lblSize={lblSize}>
      <div className="label-wrap">
        <label htmlFor={htmlinputprops.id}>{label}</label>
      </div>
      <div className="input-wrap">
        <input {...htmlinputprops} />
      </div>
    </InputWrapper>
  );
}

export default LabelledInput;
