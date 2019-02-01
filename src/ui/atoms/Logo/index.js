import React from "react";
import PropTypes from "prop-types";
import LogoResource from "./images/logo.png";

const Logo = (props) => <img src={LogoResource} alt="MediaTeh" {...props} />;

Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
};
export default Logo;
