import React, { useState, useEffect } from 'react';
import { createUpdateProfile } from 'store/profile/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/commons/Loader/Loader';
import MainLayout from 'hoc/MainLayout';
import { useForm } from 'react-hook-form';
import { message } from 'antd';

const Profile = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const { hasProfile, profile, loading } = useSelector(state => state.profileUser);
  const [socialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!loading && hasProfile && profile.social) {
      const hasSocial = Object.values(profile.social).some(item => item);
      toggleSocialInputs(hasSocial);
    }
  }, [loading, profile, hasProfile]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      message.error('Please fill in all fields with an asterisk *');
    }
  }, [errors]);

  const handleSocialInput = () => {
    toggleSocialInputs((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    if (data.status.includes('noStatus')) {
      message.error('Please fill in all fields with an asterisk *');
    } else {
      dispatch(createUpdateProfile(data, '', hasProfile, 'post'));
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <MainLayout sectionName="edit-profile">
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        Let&apos;s get some information to make your profile stand out
      </p>
      <small>* = required field</small>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <select name="status" ref={register({ required: true })} defaultValue={profile.status ? profile.status : 'noStatus'}>
            <option value="noStatus" disabled selected>Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">* Give us an idea of where you are at in your career</small>
        </div>
        <div className="form-group">
          <input ref={register} defaultValue={profile.company} type="text" placeholder="Company" name="company" />
          <small className="form-text">Could be your own company or one you work for</small>
        </div>
        <div className="form-group">
          <input ref={register} defaultValue={profile.website} type="text" placeholder="Website" name="website" />
          <small className="form-text">Could be your own or a company website</small>
        </div>
        <div className="form-group">
          <input ref={register} defaultValue={profile.location} type="text" placeholder="Location" name="location" />
          <small className="form-text">City & state suggested (eg. Boston, MA)</small>
        </div>
        <div className="form-group">
          <input ref={register({ required: true })} defaultValue={profile.skills.join(', ')} type="text" placeholder="Skills" name="skills" />
          <small className="form-text">* Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</small>
        </div>
        <div className="form-group">
          <input
            ref={register}
            defaultValue={profile.githubUserName}
            type="text"
            placeholder="Github Username"
            name="githubUserName"
          />
          <small className="form-text">If you want your latest repos and a Github link, include your username</small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" />
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
              <i className="fab fa-twitter fa-2x" />
              <input
                ref={register}
                defaultValue={profile.social.twitter}
                type="text"
                placeholder="Twitter URL"
                name="twitter"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                ref={register}
                defaultValue={profile.social.facebook}
                type="text"
                placeholder="Facebook URL"
                name="facebook"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                ref={register}
                defaultValue={profile.social.youTube}
                type="text"
                placeholder="YouTube URL"
                name="youTube"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                ref={register}
                defaultValue={profile.social.linkedIn}
                type="text"
                placeholder="Linkedin URL"
                name="linkedIn"
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                ref={register}
                defaultValue={profile.social.instagram}
                type="text"
                placeholder="Instagram URL"
                name="instagram"
              />
            </div>
          </>
        )}
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </MainLayout>
  );
};

export default Profile;
