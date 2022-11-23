import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";

function ButtonControl({
  children,
  onClick,
  disabled = false,
  active = false,
  text = "",
  badgeColor = null,
  ...rest
}) {
  return (
    <Tooltip title={text} aria-disabled={disabled}>
      <span>
        <IconButton
          onClick={onClick}
          disabled={disabled}
          color={active ? "primary" : "default"}
          {...rest}
        >
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            classes={{ badge: { background: badgeColor } }}
            overlap="circle"
            badgeContent=" "
            invisible={badgeColor === null}
            variant="dot"
          >
            {children}
          </Badge>
        </IconButton>
      </span>
    </Tooltip>
  );
}

ButtonControl.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  text: PropTypes.any,
  badgeColor: PropTypes.any,
  active: PropTypes.bool,
};

export default ButtonControl;
