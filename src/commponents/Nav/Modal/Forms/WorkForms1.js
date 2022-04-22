import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './workForms.css'


const Result = () => {
    return(
        <p>Your message has been successfully!</p>
    )
}

const WorkForms1 = () => {
    // const [firstName,lastName,phone,email,message]=useState("")
    const [firstName, setFirstName]=useState('');

    const [lastName, setlastName]=useState('');
    const [phone, setPhone]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');


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
        // this.setState({ e.target.name : e.target.value})

    }
    // const bluHandler = (e) = {
    //     switch (e.target.name) {
    //     case firstName
    // }
    // }

    const submitCheck = (e) => {
        setFirstName(e.target.value)
        setlastName(e.target.value)
        if(!e.target.value || !e.target.value){
            alert("A name field is empty.")
            console.log(e.target.value)
            setPhone(e.target.value)
        } else if(e.target.value.length < 10 || !e.target.value){
            alert("Phone number is not long enough.")
            setEmail(e.target.value)
        } else if (!e.target.value.match(/@./g)) {
            alert("Email is in the wrong format.")
            setMessage(e.target.value)
        } else if (e.target.value.length>15) {
            alert("Message min 15 symbol.")
        } else {
            sendEmail()


        }
    }


            return (
            <form>
                <label>First Name</label>
                <input filter="[^a-zA-Z ]" value={firstName} name="firstName" placeholder="First Name" type="firstName"
                     onChange={inputCheck}  />

                <label>Last Name</label>
                <input filter="[^a-zA-Z ]" value={lastName} name="lastName" placeholder="Last Name" type="lastName"
                       onChange={inputCheck}    />
                <label>Email</label>
                <input value={email} placeholder="Email Address" type="email" name="email"  />
                <label>Phone</label>
                <input value={phone} filter="[^0-9]" maxLength="10" placeholder="Phone" type="phone" name="phone"
                       onChange={inputCheck}  />
                <label>Message</label>
                <textarea value={message} filter="[^a-zA-Z ]" name="message" onChange={inputCheck} /><br/>
                <button className="btn8" type="submit" value="Send" onClick={submitCheck}>Send</button>
                <div className="">{result ? <Result/>:null} </div>
            </form>

                 );

            }
export default WorkForms1;