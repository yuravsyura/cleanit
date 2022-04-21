import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './workForms.css'


const Result = () => {
    return(
        <p>Your message has been successfully!</p>
    )
}

const WorkForms1 = () => {
    const [firstName,lastName,phone,email,message]=useState("")
    const [result, showResult] =useState(false);



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Clean_work2022',
            'Work-clean2022',
            e.target, 'Cxj2CJsSA6YsCGguN')
            .then((result) => {
                console.log(result.text);
                console.log('Sent')
            }, (error) => {
                console.log(error.text);
                console.log('Error again, please')
            });
        e.target.reset()
        showResult(true);
    };
    setTimeout(() => {
        showResult(false)
    },3000)

    const inputCheck = (e) => {
        let filter = e.target.getAttribute('filter')
        e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')
        this.setState({[e.target.name]: e.target.value})

    }

    const submitCheck = () => {

        // if(this.state.firstName.length === 0 ) {
        //     alert('error')


        // }else if(this.state.firstName.length > 0 || this.state.lastName.length > 0 || this.state.phone.length > 0){

        if(!firstName || !lastName){
            alert("A name field is empty.")
        } else if(phone.length < 10 || !phone){
            alert("Phone number is not long enough.")
        } else if (!email.match(/@./g)) {
            alert("Email is in the wrong format.")
        } else if (message.length>15) {
            alert("Message min 15 symbol.")
        } else {
            sendEmail(firstName)


        }
    }


            return (
            <form onSubmit={sendEmail}>
                <label>First Name</label>
                <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name" type="firstName" value={firstName}
                     onChange={inputCheck}  />

                <label>Last Name</label>
                <input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name" type="lastName"
                       onChange={inputCheck}    />
                <label>Email</label>
                <input placeholder="Email Address" type="email" name="email"  onChange={(e) =>
                {this.setState({email:e.target.value})}}   />
                <label>Phone</label>
                <input filter="[^0-9]" maxLength="10" placeholder="Phone" type="phone" name="phone"
                       onChange={inputCheck}  />
                <label>Message</label>
                <textarea filter="[^a-zA-Z ]" name="message" onChange={inputCheck} />
                <input type="submit" value="Send" onClick={submitCheck} />
                <div className="">{
                    result ? <Result/>:null
                } </div>
            </form>

                 );

            }
export default WorkForms1;