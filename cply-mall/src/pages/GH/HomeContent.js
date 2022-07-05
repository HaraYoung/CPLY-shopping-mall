import React from "react";
import Banner from './Banner';
import styled from "styled-components";
import TodayPopularity from "./TodayPopularity";
import NewProduct from './NewProduct';
const HomeContentCss = styled.div`
    padding: 100px;
`;
const HomeContent = () => {
    return (
    <HomeContentCss>
        <Banner/>
        <TodayPopularity/>
        <NewProduct/>
    </HomeContentCss>
    );
};

export default HomeContent;