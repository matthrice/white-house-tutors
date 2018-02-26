import React, { Component } from 'react';

class ContactColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', availability: '', message: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div class="contact-column">
                <div class="content">
                    <form action="https://formspree.io/mattrice@umich.com" method="POST">
                        <p>Name:</p>
                        <input class="text-input"
                               type="text"
                               name="name"
                               value={this.state.name}
                               onChange={this.handleChange}
                        />
                        <p>Email:</p>
                        <input class="text-input"
                               type="text"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange}
                        />
                        <p>Availability:</p>
                        <input class="text-input"
                               type="text"
                               name="availability"
                               value={this.state.availability}
                               onChange={this.handleChange}
                        />
                        <p>Message:</p>
                        <textarea name="message"
                                  value={this.state.message}
                                  onChange={this.handleChange}
                        />
                        <br></br>
                        <input class="submit-input" type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactColumn;
