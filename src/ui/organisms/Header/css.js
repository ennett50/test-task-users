import styled from "styled-components";
import { Container } from "../../atoms/container";

const HeaderBlock = styled.header`
    background-color: #282c34;
    padding: 10px 0;
`;

HeaderBlock.Wrapper = styled(Container)`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export default HeaderBlock;
