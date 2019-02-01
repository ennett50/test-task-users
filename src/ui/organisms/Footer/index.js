import React from "react";
import FooterBlock from "./css";

const Footer = () => (
    <FooterBlock>
        <FooterBlock.Copyright>
            Test task MediaTeh
            <br />© {new Date().getFullYear()}
        </FooterBlock.Copyright>
    </FooterBlock>
);

export default Footer;
