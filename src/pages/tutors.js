import React from 'react';
import { Header, TutorInfoBlock, TitleBlock }from '../components/';

const TutorPage = () => (
    <div class="main">
        <Header />
        <TitleBlock title="Tutors" />
        <TutorInfoBlock imgsrc="http://eecs.umich.edu/eecs/about/articles/2016/paoletti200.jpg" name="dave" description="hi" />
    </div>
);

export default TutorPage;