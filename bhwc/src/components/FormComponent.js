import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addSubscriber } from "../redux/actions/subscriberActions";

class FormHelp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            date: ''
        }
    }

    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
        // console.log(this.state);
    };

    handleSubmit = async e => {
        e.preventDefault();
        await this.props.addSubscriber(this.state);



        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            date: ''
        })
    };


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" value={this.state.email}
                        onChange={(event) => this.handleChange(event, 'email')} />
                    <Form.Text className="text-muted" >yourmail123@example.com</Form.Text>
                </Form.Group>

                <Form.Group controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control required type="text" placeholder="First name" value={this.state.firstname}
                        onChange={(event) => this.handleChange(event, 'firstname')} />
                    <Form.Text className="text-muted">required</Form.Text>

                </Form.Group>
                <Form.Group controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control required type="text" placeholder="Last name" value={this.state.lastname}
                        onChange={(event) => this.handleChange(event, 'lastname')} />
                    <Form.Text className="text-muted">required</Form.Text>
                </Form.Group>
                <Form.Group controlId="formDate">
                    <Form.Label>Event date</Form.Label><br />
                    <input required type='date' value={this.state.date}
                        onChange={(event) => this.handleChange(event, 'date')}></input><br />
                    <Form.Text className="text-muted">required</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit"  >Submit</Button>
                <div className='answerFromApi'>
                    {this.props.message}
                </div>
            </Form>
        );
    }
}


const mapStateToProps = (state) => ({
    message: state.subscriberReducer.message
});

const mapDispatchToProps = {
    addSubscriber
};

export default connect(mapStateToProps, mapDispatchToProps)(FormHelp);