import { Link, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Page2 = () => {
  const companyNameRef = useRef();
  const companyAddressRef = useRef();
  const companyPhoneRef = useRef();
  const companyWebsiteRef = useRef();
  const companyLinkedinRef = useRef();
  const companyFanpageRef = useRef();
  const companyCareerPageRef = useRef();
  const companyLogoRef = useRef();
  const videoLinkRef = useRef();
  const companyIntroductionRef = useRef();
  const registrationTypeRef = useRef();

  const navigate = useNavigate();
  const ref = collection(firestore, "registrations");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationType = registrationTypeRef.current.value;

    const data = {
      companyName: companyNameRef.current.value,
      companyAddress: companyAddressRef.current.value,
      companyPhone: companyPhoneRef.current.value,
      companyWebsite: companyWebsiteRef.current.value,
      companyLinkedin: companyLinkedinRef.current.value,
      companyFanpage: companyFanpageRef.current.value,
      companyCareerPage: companyCareerPageRef.current.value,
      companyLogo: companyLogoRef.current.files[0]?.name || "",
      videoLink: videoLinkRef.current.value,
      companyIntroduction: companyIntroductionRef.current.value,
      registrationType,
    };

    try {
      await addDoc(ref, data);
      console.log("Registration submitted:", data);

      // Navigate based on registration type
      switch (registrationType) {
        case "Exhibitor":
          navigate("/page31");
          break;
        case "Sponsor":
          navigate("/page32");
          break;
        case "Booth Exhibitor and Sponsor":
          navigate("/page33");
          break;
        case "Visitor":
          navigate("/page31");
          break;
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <div>
      <h1>Career Fair and Industry Exploration Day 2025</h1>
      <h2>Industry Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company's Name: </label>
          <input type="text" ref={companyNameRef} required />
        </div>
        <div>
          <label>Company's Address: </label>
          <input type="text" ref={companyAddressRef} required />
        </div>
        <div>
          <label>Company's Phone Number: </label>
          <input type="tel" ref={companyPhoneRef} required />
        </div>
        <div>
          <label>Company's Website: </label>
          <input type="url" ref={companyWebsiteRef} />
        </div>
        <div>
          <label>Company's Linkedin: </label>
          <input type="url" ref={companyLinkedinRef} />
        </div>
        <div>
          <label>Company's Fanpage: </label>
          <input type="url" ref={companyFanpageRef} />
        </div>
        <div>
          <label>Company Career Pages: </label>
          <input type="url" ref={companyCareerPageRef} />
        </div>
        <div>
          <label>Company's Logo : </label>
          <input type="file" ref={companyLogoRef} accept="image/*" required />
        </div>
        <div>
          <label>Video Link: </label>
          <input type="url" ref={videoLinkRef} required />
        </div>
        <div>
          <label>Please send us a link for a 30-60 second video introducing your company for the event.: </label>
          <textarea ref={companyIntroductionRef} required />
        </div>
        <div>
          <label>Register as: </label>
          <select ref={registrationTypeRef} defaultValue="Exhibitor">
            <option value="Exhibitor">Exhibitor</option>
            <option value="Sponsor">Sponsor</option>
            <option value="Booth Exhibitor and Sponsor">Booth Exhibitor and Sponsor</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>
        <button type="submit">Next</button>
      </form>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Page2;
