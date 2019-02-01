import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "../atoms/container";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

const RootContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-flow: column nowrap;
`;

const PageContainer = styled.main`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    overflow: hidden;
`;

const CommonTemplate = (props) => {
    const { children } = props;
    return (
        <RootContainer>
            <Header />
            <PageContainer>
                <Container>{children}</Container>
            </PageContainer>
            <Footer />
        </RootContainer>
    );
};

CommonTemplate.propTypes = {
    children: PropTypes.node.isRequired
};

export default CommonTemplate;
