import './UserRegisterForm.css'

function UserRegisterForm () {
    return (
      <>
        <div className="registration-container">
        <header className="form-header">
          <h1>Registration Form</h1>
        </header>
  
        <div className="form-wrapper">
          <h2>User Details</h2>
          <p>Please enter your information below</p>
  
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" />
            </div>
  
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>
  
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
  
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
  
            <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="Enter your address" />
            </div>
  
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <label><input type="radio" name="gender" value="male" /> Male</label>
                <label><input type="radio" name="gender" value="female" /> Female</label>
                <label><input type="radio" name="gender" value="other" /> Other</label>
              </div>
            </div>
  
            <div className="form-group">
              <label>Emergency Contact</label>
              <input type="text" placeholder="Enter emergency contact details" />
            </div>
  
            <div className="form-group">
              <label>Known Allergies</label>
              <input type="text" placeholder="List any known allergies" />
            </div>
  
            <div className="form-group">
              <label>Chronic Conditions</label>
              <input type="text" placeholder="List any chronic conditions" />
            </div>
  
            <div className="form-group">
              <label> Medical History Consent </label>
              <div className="radio-group">
                <label><input type='radio' name='yes' value='yes'/> Yes</label>
                <label><input type='radio' name='no' value='no'/> No</label>
              </div>
            </div>
  
            <div className="button-group">
              <button type="reset" className="reset-btn">Clear</button>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
  
        <footer className="form-footer">
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </footer>
      </div>
      </>
    )
}

export default UserRegisterForm;