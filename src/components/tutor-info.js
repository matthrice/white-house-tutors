import React from 'react';

const TutorInfoBlock = (props) => (
    <div class="tutor-info-block">
        <div class="content">
            <img class="tutor-photo" src={props.imgsrc} alt="Avatar"></img>
            <div class="tutor-description">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <p><b>Languages: </b>{props.languages}</p>
            </div>
        </div>
    </div>
)

export default TutorInfoBlock;