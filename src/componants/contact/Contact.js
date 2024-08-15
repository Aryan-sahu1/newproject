import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b3708bb7-4c50-4647-a752-b7df40246535");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setResult(data.message)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="contact">
         <div className="contact-col">
            <h3>
                Send us a message <img src={msg_icon} alt="" />
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis molestias id! Repellat, id praesentium? Unde accusamus porro iure. Iste excepturi quisquam aliquam eveniet explicabo quaerat nulla cupiditate repellat expedita?</p>
            <ul>
                <li> <img src={mail_icon} alt="" />  abc@gmail.com </li>
                <li><img src={phone_icon} alt="" />  123 456 789 </li>
                <li> <img src={location_icon} alt="" />kanpur nagar, barra kanpur </li>
            </ul>
         </div>
         <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" placeholder='enter name' required />
            <label htmlFor="p_number">Phone number</label>
            <input type="text" name="phone" id="p_number" placeholder='enter phone Number' required />
            <label htmlFor="message">Write your Message</label>
            <textarea name="message" id="message" cols="30" rows="6" placeholder='enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>

          </form>
        <span>{result}</span>
         </div>
      </div>
    </>
  )
}

export default Contact
