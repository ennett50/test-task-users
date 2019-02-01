import React from "react";
import PropTypes from "prop-types";
import ButtonDefault from "./css";

const Button = (props) => {
    const { children } = props;
    return (
        <ButtonDefault {...props} aria-label="Button">
            {children}
        </ButtonDefault>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.oneOf(["big", "small"]),
    kind: PropTypes.oneOf(["default", "edit", "remove"])
};

export default Button;
