import React from 'react'
import {
    TitleBlock,
    Header,
    ContactColumn
} from '../components';

const ContactPage = () => (
    <div class="main">
        <Header />
        <TitleBlock title="Contact Us"/>
        <ContactColumn />
    </div>
);

export default ContactPage;