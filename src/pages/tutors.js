import React from 'react';
import { Header, TutorInfoBlock, TitleBlock }from '../components/';

const TutorPage = () => (
    <div class="main">
        <Header />
        <TitleBlock title="Tutors" />
        <TutorInfoBlock 
            imgsrc="http://eecs.umich.edu/eecs/about/articles/2016/paoletti200.jpg"
            name="Dave"
            description="Beast"
        />
        <TutorInfoBlock
            imgsrc="https://www.biography.com/.image/t_share/MTIwNjA4NjMzODg2NTc0MDky/abraham-lincoln-9382540-2-402.jpg "
            name="Abraham"
            description="Also a beast"
        />
    </div>
);

export default TutorPage;