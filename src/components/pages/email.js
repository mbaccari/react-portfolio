import { useRef } from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_epj9nft', 'template_cmx1shl', form.current, 'oC8xQxLdvtL6_hDxf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<div className="container">
  <div className="row">
    <div className="my-10 col align-self-center text-center">
      
            <h1 className="display-4 mb-4"> Contact me </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />


        <div className="row">

          <div className="col-3"></div>

          <form className="col-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="name" name="name" className="form-control text-center" placeholder="enter your name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" className="form-control text-center" id="email" placeholder="enter your email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" className="form-control text-center" id="subject" placeholder="enter email subject" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email_body">Message</label>
              <textarea className="form-control" id="email_body" rows={5} defaultValue={""} required/>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>

          <div className="col-3"></div>

        </div>



    </div>
  </div>
</div>

  );
};