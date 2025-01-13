import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow_icon from '../../assets/white-arrow.png'




const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "142dc0c2-a32c-4501-bc58-7d154a723403");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult(data.message);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur consequatur quod maxime dolore nobis neque, corrupti inventore harum adipisci repellat fuga. Quasi earum distinctio vel </p>
            <ul>
                <li><img src={mail_icon}alt="" />Contactgibin@gmail.com </li>
                <li><img src={phone_icon} alt="" />+34 987654333 </li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States </li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enteryour name' required />

                <label>Phone Number</label>
                <input type="number" name='phone' placeholder='Enter your mobile number' required/>

                <label>Write your message</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow_icon} alt="" /></button>
            </form>
                <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact