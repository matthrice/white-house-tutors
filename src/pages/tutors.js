import React from 'react';
import { Header, TutorInfoBlock, TitleBlock }from '../components/';

const TutorPage = () => (
    <div class="main">
        <Header />
        <TitleBlock title="Tutors" />
        <TutorInfoBlock
            imgsrc="https://media.licdn.com/media/AAEAAQAAAAAAAAfxAAAAJDAzZTU3YzJmLWVjYmYtNGJlYi04ZDdkLTMzZDJlM2YyMmE4Nw.jpg"
            name="Lloyd Shatkin"
            description="Senior studying Data Science and Philosophy. Interning at XLP Capital this summer."
            languages="C++, Python, R, SQL, J"
        />
        <TutorInfoBlock 
            imgsrc="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAiUAAAAJGNiYmJhYTMzLTE5ZTctNDZiYS04YzkyLWRkYjE4OWNhOTg3Yw.jpg"
            name="Matt Rice"
            description="Junior studying Computer Science. Interning at Uber ATG this summer."
            languages="C++, Javascript, Python, SQL"
        />
    </div>
);

export default TutorPage;