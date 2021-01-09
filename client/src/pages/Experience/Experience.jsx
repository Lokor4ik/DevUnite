import React, { useState, useEffect } from 'react';
import { createUpdateProfile } from 'store/profile/action';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/commons/Loader/Loader';
import MainLayout from 'hoc/MainLayout';
import { useForm } from 'react-hook-form';
import { message } from 'antd';

const Experience = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const { hasProfile, profile, loading } = useSelector(state => state.profileUser);
  const [dateInput, toggleDateInput] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length) {
      message.error('Please fill in all fields with an asterisk *');
    }
  }, [errors]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createUpdateProfile(data, '/experience', hasProfile, 'put'));
  };

  return (
    <MainLayout sectionName="add-experience">
      <h1 className="large text-primary">
        Add An Experience
      </h1>
      <p className="lead">
        <i className="fas fa-code-branch" />Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <input type="text" ref={register({ required: true })} defaultValue={profile.company} placeholder="* Job Title" name="title" />
        </div>
        <div className="form-group">
          <input type="text" ref={register({ required: true })} placeholder="* Company" name="company" />
        </div>
        <div className="form-group">
          <input type="text" ref={register} placeholder="Location" name="location" />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" ref={register} name="from" />
        </div>
        <div className="form-group">
          <p><input type="checkbox" name="current" value="" /> Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" ref={register} name="to" />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            ref={register}
            cols="30"
            rows="5"
            placeholder="Job Description"
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
    </MainLayout>
  );
};

export default Experience;
