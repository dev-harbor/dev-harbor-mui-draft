import React from "react";
import PropTypes from "prop-types";
import ButtonControl from "../ButtonControl";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";
import FormatColorResetIcon from "@mui/icons-material/FormatColorReset";
import CheckIcon from "@mui/icons-material/Check";
import { isLightOrDark } from "../../../../utils/colorUtils";
import Button from "@mui/material/Button";
import styled from "styled-components";

function ColorSelectorControl({
  selectedColor,
  onSelectColor,
  colors,
  colorsPerRow = 10,
  children,
  ...rest
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = Math.random().toString(36).substring(8);
  const colorRows = [[]];
  for (let i = 0, rowI = 0; i < colors.length; i++) {
    if (i % colorsPerRow === 0) {
      rowI++;
      colorRows[rowI] = [];
    }
    colorRows[rowI].push(colors[i]);
  }

  const handleOpen = (ev) => {
    setAnchorEl(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <ButtonControl
        onClick={handleOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        badgeColor={selectedColor ? selectedColor.color : null}
        {...rest}
      >
        {children}
      </ButtonControl>
      <Popover
        id={menuId}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <React.Fragment>
          <Button
            startIcon={<FormatColorResetIcon />}
            fullWidth
            color="secondary"
            onClick={() => {
              handleClose();
              onSelectColor(null);
            }}
          >
            None
          </Button>
          {colorRows.map((colorRow, colorRowI) => (
            <ColorRow key={`color-row-${colorRowI}`}>
              {colorRow.map((colorData) => (
                <Tooltip key={colorData.value} title={colorData.text}>
                  <ColorItem
                    onClick={() => {
                      handleClose();
                      onSelectColor(colorData);
                    }}
                    style={{
                      backgroundColor: colorData.color,
                    }}
                  >
                    {selectedColor &&
                    colorData.value === selectedColor.value ? (
                      <CheckIcon
                        style={{
                          color:
                            isLightOrDark(colorData.color) === "dark"
                              ? "#fff"
                              : "#000",
                        }}
                      />
                    ) : null}
                  </ColorItem>
                </Tooltip>
              ))}
            </ColorRow>
          ))}
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
}

ColorSelectorControl.propTypes = {
  selectedColor: PropTypes.object,
  onSelectColor: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  colorsPerRow: PropTypes.number,
  children: PropTypes.any,
};

export default ColorSelectorControl;

const ColorRow = styled.div`
  display: "flex";
  align-content: "center";
  align-items: "center";
  padding: 5;
`;

const ColorItem = styled.div`
  height: 25;
  width: 25;
  border-radius: "50%";
  margin: 3;
  border: "solid 1px #c4c4c4";
  cursor: "pointer";
  display: "flex";
  align-content: "center";
  align-items: "center";
`;
