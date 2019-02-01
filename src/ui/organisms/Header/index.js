import React from "react";
import HeaderBlock from "./css";
import Logo from "../../atoms/Logo";

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderBlock.Wrapper>
                <Logo width="60px" height="53px" />
            </HeaderBlock.Wrapper>
        </HeaderBlock>
    );
};

export default Header;
