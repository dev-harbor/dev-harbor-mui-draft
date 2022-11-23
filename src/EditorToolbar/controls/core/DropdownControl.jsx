import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import useEditor from "../../../hooks/useEditor";
import { translateLiteralWithPrefix } from "../../../utils/translateUtils";
import styled from "styled-components";

function DropdownControl({
  value,
  onChange,
  options,
  minWidth = 120,
  ...rest
}) {
  const editor = useEditor();

  return (
    <StyledSelect
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      style={{ minWidth }}
      {...rest}
    >
      {options.map((option) => (
        <MenuItem key={option.value || "empty"} value={option.value}>
          {option.text
            ? translateLiteralWithPrefix(option.text, editor.translate)
            : ""}
        </MenuItem>
      ))}
    </StyledSelect>
  );
}

DropdownControl.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  minWidth: PropTypes.number,
};

export default DropdownControl;

const StyledSelect = styled(Select)`
  margin: "8px";
`;
