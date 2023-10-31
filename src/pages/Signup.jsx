import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Signup successful');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mt-4">
      <h2 className='text-center'>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number:</label>
          <input type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div className='text-center'>
        <button type="submit" style={{ fontSize: '1.6rem' }} className="btn w-50 btn-primary">Sign Up</button>
        </div>
      </form>
      {isSubmitted && (
        <p className="mt-3">Signup successful! Please check your email for further instructions.</p>
      )}
    </div>
  );
};

export default Signup;