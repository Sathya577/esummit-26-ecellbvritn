
import { useState, useEffect } from "react";
import Galaxy from '../components/Galaxy';

import "./Events.css";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const events = [
{
  slug: "Panel Discussion",
  club: "Esummit'26",
  title: "Panel Discussion",
  desc1: "Industry Insights: Navigating Trends, Challenges, and Opportunities",
  desc: "A panel discussion featuring industry professionals and experts sharing insights on current trends, challenges and opportunities in their respective fields. The session will be moderated through engaging questions and aims to provide practical knowledge, real-world experiences and valuable takeaways from the panelists.",
  team: "All",
  dates: "Date:26th March",
  price: "Free",
   whatsapp: "https://chat.whatsapp.com/IdUZ6kzgZLcFfKHmJ3fJHK",
  paymentRequired: false,
  prize: "",

  form: [
    { label: "Name", type: "text" },
    //{ label: "Team Size", type: "text" },
    //{ label: "Team Leader Name", type: "text" },
    { label: " College Name", type: "text" },
     { label: " year & branch", type: "text" },
    { label: " Email", type: "email" },
    { label: " Phone Number", type: "tel" },
    //{ label: "Transaction ID", type: "text" },
    //{ label: "Team member details", type: "textarea" ,placeholder:"name1-email1-phone1-college-year&branch\nname2-email2-phone2-college-year&branch\n..."},
     { label: "Queries", type: "textarea" }
  ]
},


/* {
  slug: "Ad Arena",
  club: "Esummit'26",
  title: "Ad Arena",
  dates: "Dates: 25th March",
  desc1: "Create compelling ad campaigns and outbid competitors in this thrilling marketing battle. ",
  desc:"This event focuses on promoting women entrepreneurship and innovation. Participants will create a concept or advertisement for a women-led brand, product, or startup idea, highlighting its impact and message. The objective is to showcase creativity, marketing strategy, and storytelling while empowering and supporting women in business. Judging will be based on creativity, clarity of message, and relevance to the theme",
  team: "4-6",
  whatsapp:"https://chat.whatsapp.com/G5q9GdeXWDw3xIorGwYeZr?mode=gi_t",
  price: "₹400",
  paymentRequired: true,
  prize: "₹5K",

  form: [
    { label: "Team Name", type: "text" },
    { label: "Team Size", type: "text" },
    { label: "Team Leader Name", type: "text" },
    { label: "Team Leader's College Name", type: "text" },
     { label: "Team Leader's year&branch", type: "text" },
    { label: "Team Leader's Email", type: "email" },
    { label: "Team Leader's Phone Number", type: "tel" },
    { label: "Transaction ID", type: "text" },
   {
    label: "Team Member 1 Name",
    type: "text"
  },

  {
    label: "Team Member 1 Email",
    type: "email"
  },

  {
    label: "Team Member 1 Phone",
    type: "tel"
  },

  {
    label: "Team Member 1 College",
    type: "text"
  },

  {
    label: "Team Member 1 Branch",
    type: "text"
  },

  {
    label: "Team Member 1 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },

  {
    label: "Team Member 2 Name",
    type: "text"
  },

  {
    label: "Team Member 2 Email",
    type: "email"
  },

  {
    label: "Team Member 2 Phone",
    type: "tel"
  },

  {
    label: "Team Member 2 College",
    type: "text"
  },

  {
    label: "Team Member 2 Branch",
    type: "text"
  },

  {
    label: "Team Member 2 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  {
    label: "Team Member 3 Name",
    type: "text"
  },

  {
    label: "Team Member 3 Email",
    type: "email"
  },

  {
    label: "Team Member 3 Phone",
    type: "tel"
  },

  {
    label: "Team Member 3 College",
    type: "text"
  },

  {
    label: "Team Member 3 Branch",
    type: "text"
  },

  {
    label: "Team Member 3 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  {
    label: "Team Member 4 Name",
    type: "text"
  },

  {
    label: "Team Member 4 Email",
    type: "email"
  },

  {
    label: "Team Member 4 Phone",
    type: "tel"
  },

  {
    label: "Team Member 4 College",
    type: "text"
  },

  {
    label: "Team Member 4 Branch",
    type: "text"
  },

  {
    label: "Team Member 4 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  {
    label: "Team Member 5 Name",
    type: "text"
  },

  {
    label: "Team Member 5 Email",
    type: "email"
  },

  {
    label: "Team Member 5 Phone",
    type: "tel"
  },

  {
    label: "Team Member 5 College",
    type: "text"
  },

  {
    label: "Team Member 5 Branch",
    type: "text"
  },

  {
    label: "Team Member 5 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  {
    label: "Team Member 6 Name",
    type: "text"
  },

  {
    label: "Team Member 6  Email",
    type: "email"
  },

  {
    label: "Team Member 6 Phone",
    type: "tel"
  },

  {
    label: "Team Member 6 College",
    type: "text"
  },

  {
    label: "Team Member 6 Branch",
    type: "text"
  },

  {
    label: "Team Member 6 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  
  {
    label: "Transaction ID",
    type: "text"
  },

  {
    label: "Payment Screenshot",
    type: "file",
    accept: "image/*"
  },
     { label: "Queries", type: "textarea" }
  ]
},
 */


/* {
  slug: "Investment Arena",
  club: "Esummit'26",
  title: "Investment Arena",
  desc1: "Investment Arena is an interactive business simulation where participants step into the role of investors and strategic decision-makers.",
  desc: "Investment Arena is an interactive business simulation where participants step into the role of investors and strategic decision-makers. Teams analyze market clues, evaluate companies, and make informed investment choices in a competitive environment. The event also includes negotiation rounds where teams interact, compete, and form strategies against rival companies. It encourages critical thinking, teamwork, and adaptability. The objective is to develop analytical, strategic, and negotiation skills in a simulated market setting.",
  team: "3-4",
  price: "₹300",
  whatsapp:"https://chat.whatsapp.com/BQKTkODBJH24GlPst51mhu?mode=gi_t",
  dates: "Dates: 26th March",
  paymentRequired: true,
  prize: "₹5K",

  
  form: [
    { label: "Team Name", type: "text" },
    { label: "Team Size", type: "text" },
    { label: "Team Leader Name", type: "text" },
    { label: "Team Leader's College Name", type: "text" },
     { label: "Team Leader's year&branch", type: "text" },
    { label: "Team Leader's Email", type: "email" },
    { label: "Team Leader's Phone Number", type: "tel" },
    { label: "Transaction ID", type: "text" },
    {
    label: "Team Member 1 Name",
    type: "text"
  },

  {
    label: "Team Member 1 Email",
    type: "email"
  },

  {
    label: "Team Member 1 Phone",
    type: "tel"
  },

  {
    label: "Team Member 1 College",
    type: "text"
  },

  {
    label: "Team Member 1 Branch",
    type: "text"
  },

  {
    label: "Team Member 1 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },

  {
    label: "Team Member 2 Name",
    type: "text"
  },

  {
    label: "Team Member 2 Email",
    type: "email"
  },

  {
    label: "Team Member 2 Phone",
    type: "tel"
  },

  {
    label: "Team Member 2 College",
    type: "text"
  },

  {
    label: "Team Member 2 Branch",
    type: "text"
  },

  {
    label: "Team Member 2 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  {
    label: "Team Member 3 Name",
    type: "text"
  },

  {
    label: "Team Member 3 Email",
    type: "email"
  },

  {
    label: "Team Member 3 Phone",
    type: "tel"
  },

  {
    label: "Team Member 3 College",
    type: "text"
  },

  {
    label: "Team Member 3 Branch",
    type: "text"
  },

  {
    label: "Team Member 3 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
   {
    label: "Team Member 4 Name",
    type: "text"
  },

  {
    label: "Team Member 4 Email",
    type: "email"
  },

  {
    label: "Team Member 4 Phone",
    type: "tel"
  },

  {
    label: "Team Member 4 College",
    type: "text"
  },

  {
    label: "Team Member 4 Branch",
    type: "text"
  },

  {
    label: "Team Member 4 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  
  
  {
    label: "Transaction ID",
    type: "text"
  },

  {
    label: "Payment Screenshot",
    type: "file",
    accept: "image/*"
  },
     { label: "Queries", type: "textarea" }
  ]
}, */

/* {
  slug: "Brand Wars",
  club: "Esummit'26",
  title: "Brand Wars",
  desc1: "Brand Wars is an exciting debate-style competition where teams represent rival brands from the same industry.",
  desc: "Brand Wars is an exciting debate-style competition where teams represent rival brands from the same industry. Participants research their assigned brand, develop compelling arguments, and engage in a structured debate against the opposing team. The event encourages critical thinking, persuasive communication, and strategic analysis of brand positioning. Teams will be judged on the strength of their arguments, creativity, and ability to effectively represent their brand's unique value proposition.",
  team: "3-4",
  dates: "Dates: 25th & 26th March",
  whatsapp:"https://chat.whatsapp.com/ILQH6RsscvAEpzmj5x5GwH?mode=gi_t",
  price: "₹400",
  paymentRequired: true,
  prize: "₹5K",

  
  form: [
    { label: "Team Name", type: "text" },
    { label: "Team Size", type: "text" },
    { label: "Team Leader Name", type: "text" },
    { label: "Team Leader's College Name", type: "text" },
     { label: "Team Leader's year&branch", type: "text" },
    { label: "Team Leader's Email", type: "email" },
    { label: "Team Leader's Phone Number", type: "tel" },
    { label: "Transaction ID", type: "text" },
   {
    label: "Team Member 1 Name",
    type: "text"
  },

  {
    label: "Team Member 1 Email",
    type: "email"
  },

  {
    label: "Team Member 1 Phone",
    type: "tel"
  },

  {
    label: "Team Member 1 College",
    type: "text"
  },

  {
    label: "Team Member 1 Branch",
    type: "text"
  },

  {
    label: "Team Member 1 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },

  {
    label: "Team Member 2 Name",
    type: "text"
  },

  {
    label: "Team Member 2 Email",
    type: "email"
  },

  {
    label: "Team Member 2 Phone",
    type: "tel"
  },

  {
    label: "Team Member 2 College",
    type: "text"
  },

  {
    label: "Team Member 2 Branch",
    type: "text"
  },

  {
    label: "Team Member 2 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  {
    label: "Team Member 3 Name",
    type: "text"
  },

  {
    label: "Team Member 3 Email",
    type: "email"
  },

  {
    label: "Team Member 3 Phone",
    type: "tel"
  },

  {
    label: "Team Member 3 College",
    type: "text"
  },

  {
    label: "Team Member 3 Branch",
    type: "text"
  },

  {
    label: "Team Member 3 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
   {
    label: "Team Member 4 Name",
    type: "text"
  },

  {
    label: "Team Member 4 Email",
    type: "email"
  },

  {
    label: "Team Member 4 Phone",
    type: "tel"
  },

  {
    label: "Team Member 4 College",
    type: "text"
  },

  {
    label: "Team Member 4 Branch",
    type: "text"
  },

  {
    label: "Team Member 4 Year",
    type: "select",
    options: ["1", "2", "3", "4"]
  },
  
  
  {
    label: "Transaction ID",
    type: "text"
  },

  {
    label: "Payment Screenshot",
    type: "file",
    accept: "image/*"
  },
     { label: "Queries", type: "textarea" }
  ]
} */
];
function Events() {
const [searchParams, setSearchParams] = useSearchParams();

const selectedSlug = searchParams.get("event");

const selectedEvent = events.find(
  (event) => event.slug === selectedSlug
);

  const [searchOpen, setSearchOpen] = useState(false);
 
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  

  useEffect(() => {

    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);

  }, []);
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    event: selectedEvent.title,
    club: selectedEvent.club
  };

  selectedEvent.form.forEach((field) => {
    const key = field.label.replace(/\s+/g, "_").toLowerCase();
    data[key] = formData.get(key);
  });

  try {
  await fetch("https://script.google.com/macros/s/AKfycbxstKFGAtH9mlN8Qy76gpegmM89m5jObzmykGTFNIPIg3HuScvNLLzG5swQ4jx0vsj9/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Registration submitted successfully!");

  // 👉 OPEN WHATSAPP GROUP HERE
  window.open(selectedEvent.whatsapp, "_blank");

  setShowForm(false);

} catch (err) {
  alert("Submission failed");
}
};
  const filtered = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
    
    <div className="events-wrapper">

      {/* PARTICLES BACKGROUND */}
      <Galaxy 
    mouseRepulsion
    mouseInteraction
    density={0.5}
    glowIntensity={0.3}
    saturation={0}
    hueShift={40}
    twinkleIntensity={0.3}
    rotationSpeed={0.1}
    repulsionStrength={2}
    autoCenterRepulsion={0}
    starSpeed={0.5}
    speed={1}
    transparent={false}
/>


      <div className="events-content">
        <br />
        <h1 className="events-title">Events</h1>

        {/* SEARCH BUTTON */}

        {/* EVENTS GRID */}
        <div className="events-grid">

          {filtered.map((event, i) => (

            <div
              key={i}
              className="event-card"
             onClick={() => setSearchParams({ event: event.slug })}
            >

              <span className="club">{event.club}</span>

              <h3>{event.title}</h3>

              <p>{event.desc1}</p>

              <div className="event-info">
                <span>👥 {event.team}</span>
                <span>{event.price}</span>
              </div>

              <div className="prize">🏆 {event.prize}</div>

            </div>

          ))}

        </div>
      </div>

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div className="search-modal">
          <input
            placeholder="Search events..."
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setSearchOpen(false)}>Close</button>
        </div>
      )}

      {/* EVENT MODAL */}
      {selectedEvent && (
  <div
    className="event-modal"
    onClick={() => setSearchParams({})}   // close when clicking outside
  >

    <div
      className="modal-card"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >

      {/* CLOSE BUTTON */}
      <button
        className="close-btn"
        onClick={() => setSearchParams({})}
      >
        ✕
      </button>


      {/* HEADER */}
      <div className="modal-header">

        <div>
          <h2>{selectedEvent.title}</h2>

          <br />
        </div>

        {/* PRIZE POOL */}
        

      </div>


      {/* REGISTRATION */}
      <div className="modal-info">

        <div className="info-box">
          <span>Registration</span>
          <h3>{selectedEvent.price}</h3>
         
        </div>

      </div>


      {/* DESCRIPTION */}
      <div className="modal-body">

        <p>{selectedEvent.desc}</p>
        <p>{selectedEvent.dates}</p>

        <p>
          Team Size: <strong>{selectedEvent.team}</strong>
        </p>

      </div>


      {/* BUTTON */}
      <button
  className="modal-register"
  onClick={() => setShowForm(true)}
>
  Register
</button>
    </div>
  </div>
)}
/* REGISTRATION FORM MODAL */
{showForm && (
  <div className="form-overlay" onClick={() => setShowForm(false)}>

    <div
      className="form-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="form-close"
        onClick={() => setShowForm(false)}
      >
        ✕
      </button>

      <h2 className="form-title">
Register for {selectedEvent?.title}
</h2>

<p className="form-sub">
{selectedEvent?.desc1}
</p>


     

      <form className="event-form" onSubmit={handleSubmit}>
{selectedEvent?.paymentRequired && (
  <div className="payment-box">

    <p className="payment-title">Scan QR to Pay</p>

    <img
      src="/qr1.png"
      alt="Payment QR"
      className="payment-qr"
    />

    <p className="payment-note">
      After payment enter the Transaction ID below
    </p>

  </div>
)}
<div className="form-grid">

{selectedEvent?.form.map((field, index) => {

  const fieldName = field.label.replace(/\s+/g, "_").toLowerCase();

  return (
    <div className="input-group" key={index}>

      <label>{field.label}</label>

      {field.type === "textarea" ? (
        <textarea
          name={fieldName}
          placeholder={field.placeholder || field.label}
          required
        />
      ) : (
        <input
          type={field.type}
          name={fieldName}
          placeholder={field.label}
          required
        />
      )}

    </div>
  );
})}

</div>

<button className="submit-btn">
Submit Registration
</button>

</form>

    </div>

  </div>
)}

    </div>
    </>
  );
}


export default Events;