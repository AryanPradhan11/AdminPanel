import './homepage.css'
import { useNavigate } from 'react-router-dom'
function Homepage () {
  const nav = useNavigate();
    return (
        <>
        <div className="ums-container">
          <header className="header">
            <h1>User Management System</h1>
            <nav className="nav">
              <button onClick={() => nav('/')}>Home</button>
              <button onClick={() => nav('/messages')}>Messages</button>
              <button onClick={() => nav('/map')}>Map</button>
              <button onClick={() => nav('/chabot')}>Chatbot</button>
              <button onClick={() => nav('/user-login')}>Login</button>
              <button onClick={() => nav("/user-register")}>Register</button>
            </nav>
          </header>

          <section className="hero">
            <div className="profile">
              <div className="profile-pic"></div>
              <div className="profile-info">
                <h2>John Doe</h2>
                <p>Managing your healthcare needs</p>
              </div>
            </div>
            <button className="edit-btn">Edit Profile</button>
          </section>

          <section className="services">
            <h2>Services Offered</h2>
            <p>Explore our range of healthcare services</p>
            <div className="service-cards">
              <div className="service-card">
                <h3>Emergency</h3>
                <p>Inpatient Care</p>
                <span>24/7 support</span>
              </div>
              <div className="service-card">
                <h3>Transportation</h3>
                <p>Ambulatory Services</p>
                <span>Quick response</span>
              </div>
              <div className="service-card">
                <h3>Pharmacy</h3>
                <p>Medication Dispensary</p>
                <span>Convenient access</span>
              </div>
            </div>
          </section>

          <section className="appointment">
            <h2>Schedule Appointment</h2>
            <p>Book a meeting with the doctor</p>
            <form className="appointment-form">
              <input type="date" placeholder="Select Date" />
              <div className="doctor-options">
                <label><input type="radio" name="doctor" /> Dr. Smith</label>
                <label><input type="radio" name="doctor" /> Dr. Johnson</label>
                <label><input type="radio" name="doctor" /> Dr. Lee</label>
              </div>
              <button className="confirm-btn">Confirm Appointment</button>
            </form>
          </section>

          <section className="testimonials">
            <h2>Patient Testimonials</h2>
            <p>Read what our patients say</p>
            <div className="testimonial-cards">
              <div className="testimonial-card">
                <h3>Sarah L.</h3>
                <p>Excellent care and service</p>
                <span>★★★★★</span>
              </div>
              <div className="testimonial-card">
                <h3>Michael T.</h3>
                <p>Highly recommended hospital</p>
                <span>★★★★★</span>
              </div>
              <div className="testimonial-card">
                <h3>Emily R.</h3>
                <p>Professional and friendly staff!</p>
                <span>★★★★★</span>
              </div>
            </div>
          </section>

          <section className="doctors">
            <h2>Doctors List</h2>
            <p>Meet our dedicated medical team</p>
            <div className="doctor-cards">
              <div className="doctor-card">
                <h3>Dr. Smith</h3>
                <p>Cardiologist</p>
              </div>
              <div className="doctor-card">
                <h3>Dr. Johnson</h3>
                <p>Pediatrician</p>
              </div>
              <div className="doctor-card">
                <h3>Dr. Lee</h3>
                <p>Neurologist</p>
              </div>
            </div>
          </section>

          <section className="community-updates">
            <h2>Community Updates</h2>
            <p>Engage with our community</p>
            <div className="community-card">
              <h3>Jane A.</h3>
              <p>Exciting event coming up!</p>
              <span>Event | Healthcare</span>
            </div>
          </section>

          <footer className="footer">
            <p>Contact Us: xxx-xxx-xxxx</p>
            <p>Follow Us on Social Media</p>
          </footer>
      </div>
        </>
    )
}

export default Homepage;