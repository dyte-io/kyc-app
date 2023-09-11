import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomInput = ({ label }) => (
  <div>
    <input className="custom-input" type="text" placeholder={label} />
  </div>
);
CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};

const Form = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  return (
    <>
      <div className="container column-centered">
        <h2>Form</h2>
        <CustomInput label="First name" />
        <CustomInput label="Last name" />
        <CustomInput label="Contact number" />
      </div>
      <div className="control-buttons">
        <button type="button" onClick={() => navigate('/documents' + search)}>
          Next
        </button>
      </div>
    </>
  );
};
export default Form;
