import React from 'react'
import { Header, InfoColumn, TitleBlock } from '../components';

const HomePage = () => (
    <div className="main">
        <Header />
        <TitleBlock title="Learn Computer Science the Right Way" />
        <InfoColumn />
    </div>
);

export default HomePage;