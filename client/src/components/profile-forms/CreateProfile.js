import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    bio: '',
    status: '',
    githubUserName: '',
    skills: '',
    youTube: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedIn: '',
  });

  const [socialInputs, toggleSocialInputs] = useState(false);

  const handleSocialInput = () => {
    toggleSocialInputs(!socialInputs);
  };

  const handleData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pages-wrapper">
      <section className="dashboard">
        <div className="container">
          <h1 className="large text-primary">
            Create Your Profile
          </h1>
          <p className="lead">
            <i className="fas fa-user"></i>
            Let's get some information to make your profile stand out
          </p>
          <small>* = required field</small>
          <form className="form">
            <div className="form-group">
              <select name="status" value={formData.status} onChange={handleData}>
                <option value="0">* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </select>
              <small className="form-text">Give us an idea of where you are at in your career</small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company" name="company" value={formData.company} onChange={handleData} />
              <small className="form-text">Could be your own company or one you work for</small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Website" name="website" value={formData.website} onChange={handleData} />
              <small className="form-text">Could be your own or a company website</small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Location" name="location" value={formData.location} onChange={handleData} />
              <small className="form-text">City & state suggested (eg. Boston, MA)</small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="* Skills" name="skills" value={formData.skills} onChange={handleData} />
              <small className="form-text">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Github Username"
                name="githubUserName"
                value={formData.githubUserName}
                onChange={handleData}
              />
              <small className="form-text">If you want your latest repos and a Github link, include your username</small>
            </div>
            <div className="form-group">
              <textarea placeholder="A short bio of yourself" name="bio"></textarea>
              <small className="form-text">Tell us a little about yourself</small>
            </div>

            <div className="my-2">
              <button onClick={handleSocialInput} type="button" className="btn btn-light">
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>

            {socialInputs && (
              <>
                <div className="form-group social-input">
                  <i className="fab fa-twitter fa-2x"></i>
                  <input type="text" placeholder="Twitter URL" name="twitter" value={formData.twitter}
                    onChange={handleData} />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-facebook fa-2x"></i>
                  <input type="text" placeholder="Facebook URL" name="facebook" value={formData.facebook}
                    onChange={handleData} />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-youtube fa-2x"></i>
                  <input type="text" placeholder="YouTube URL" name="youTube" value={formData.youTube}
                    onChange={handleData} />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-linkedin fa-2x"></i>
                  <input type="text" placeholder="Linkedin URL" name="linkedIn" value={formData.linkedIn}
                    onChange={handleData} />
                </div>

                <div className="form-group social-input">
                  <i className="fab fa-instagram fa-2x"></i>
                  <input type="text" placeholder="Instagram URL" name="instagram" value={formData.instagram}
                    onChange={handleData} />
                </div>
              </>
            )}
            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateProfile;
