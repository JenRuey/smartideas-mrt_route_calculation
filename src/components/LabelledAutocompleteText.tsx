import _, { escapeRegExp } from "lodash";
import { useState } from "react";
import styled from "styled-components";
import { LabelledType, Wrapper } from "./styled/Wrapper";

type OptionType = { label: string; value: string };
type LabelledAutocompleteTextType = LabelledType &
  Omit<React.HTMLProps<HTMLInputElement>, "value" | "onClick" | "onBlur" | "onChange" | "onFocus" | "autoComplete" | "defaultValue" | "hidden" | "readOnly"> & {
    options: Array<OptionType>;
    onChange?: (value: string) => boolean | void;
  };

const InputWrapper = styled(Wrapper)`
  .input-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    input {
      all: unset;
      padding: 4px;
      width: 100%;
      border: none;
    }
    > div[id*="-option"] {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      max-height: 120px;
      overflow: auto;
      z-index: 100;
      background: white;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      > div {
        padding: 8px;
      }
    }
  }
`;

function LabelledAutocompleteText({ label, lblColor, options, lblSize = 100, name, onChange, ...htmlinputprops }: LabelledAutocompleteTextType) {
  const [filter, setFilter] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);

  const handleValueWithFilter = (search: string, value: string) => {
    if (value) setFocus(false);

    if (onChange && value) {
      if (onChange(value)) {
        setFilter("");
        setValue("");
        return;
      }
    }

    setFilter(search);
    setValue(value);
  };

  const validateFocus = (e: React.FocusEvent<HTMLElement>) => {
    let optionctn = document.getElementById(name + "-option");
    if (!optionctn || !optionctn.contains(e.relatedTarget)) {
      setFocus(false);
    }
  };

  return (
    <InputWrapper lblSize={lblSize} lblColor={lblColor}>
      <div className="label-wrap">
        <label htmlFor={htmlinputprops.id}>{label}</label>
      </div>
      <div className="input-wrap">
        <input {...htmlinputprops} value={value} hidden name={name} readOnly />
        <input
          {...htmlinputprops}
          value={filter}
          onChange={(e) => handleValueWithFilter(e.target.value, "")}
          onClick={(e) => {
            (e.target as HTMLInputElement).setSelectionRange(0, (e.target as HTMLInputElement).value.length);
          }}
          onFocus={() => setFocus(true)}
          onBlur={validateFocus}
          autoComplete={"off"}
        />
        {focus && (
          <div id={name + "-option"}>
            {_.filter(options, (o) => new RegExp(escapeRegExp(filter), "i").test(o.label)).map((item) => {
              return (
                <div
                  key={"opt-" + name + "-" + item.value}
                  tabIndex={0}
                  onBlur={validateFocus}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleValueWithFilter(item.label, item.value);
                  }}
                  onClick={() => handleValueWithFilter(item.label, item.value)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </InputWrapper>
  );
}

export default LabelledAutocompleteText;
