import React from 'react';
import './workForms.css'
import emailjs from "emailjs-com";


class WorkForms extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            display: false,
            firstName : "",
            lastName : "",
            phone : 0,
            email : "",
        };
    }

    sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('Clean_work2022', 'Work-clean2022', e.target, 'Cxj2CJsSA6YsCGguN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }

    inputCheck = (e) => {
        let filter = e.target.getAttribute('filter')
        e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')
        this.setState({[e.target.name]: e.target.value})

    }



    submitCheck = () => {

        // if(this.state.firstName.length === 0 ) {
        //     alert('error')


        // }else if(this.state.firstName.length > 0 || this.state.lastName.length > 0 || this.state.phone.length > 0){

            // this.setState({display: true})
         if(!this.state.firstName || !this.state.lastName){
            alert("A name field is empty.")
             this.sendEmail(false)
        } else if(this.state.phone.length < 10 || !this.state.phone){
            alert("Phone number is not long enough.")
        } else if (!this.state.email.match(/@./g)) {
            alert("Email is in the wrong format.")
        } else {
            // this.sendEmail()
            this.setState({display: true})

        }
    }

    resetForm = () => {
        this.setState({
            display: !this.state.display,
            firstName: '',
            lastName: '',
            phone: 0,
            email: ''
        })
    }



    displayForm() {
        return (
            <div className="form--2">
                <form onSubmit={this.sendEmail } >
                <div className="header">
                    <h1>Welcome!<br/>
                    Join our team</h1>
                    <p>Please provide your information below.</p>
                </div>
                <div className="inputcontainer">

                    <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name" onChange={this.inputCheck} />
                    <input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name" onChange={this.inputCheck} />
                    <input filter="[^0-9]" maxLength="10" name="phone" placeholder="Phone Number" onChange={this.inputCheck} />
                    <input placeholder="Email Address" name="email" onChange={(e) =>
                    {this.setState({email:e.target.value})}} />


                    <button className="btn8" type="submit" onClick={this.submitCheck}>Submit</button>
                </div>
            </form>
            </div>
        );
    }


    displayData() {
        return (
            <div className="form">
                <h1>Ну красавчик епт иди посри!!</h1>
                <button onClick={this.resetForm}>Sent, thank you!</button>
            </div>
        )
    }
    render() {

        return this.state.display ? this.displayData() : this.displayForm();
    }
}


export default WorkForms;