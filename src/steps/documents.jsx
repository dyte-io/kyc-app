import React from 'react';
import { useNavigate } from 'react-router-dom';

const Documents = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container column-centered">
        <h2>Upload documents</h2>
        <div className="file-input-container">
          <div>
            <h3>1. Aadhar Card</h3>
          </div>
          <div>
            <input type="file" name="aadhar-file" id="aadhar-file" />
          </div>
        </div>
        <div className="file-input-container">
          <div>
            <h3>2. PAN Card</h3>
          </div>
          <div>
            <input type="file" name="pan-file" id="pan-file" />
          </div>
        </div>
      </div>
      <div className="control-buttons">
        <button type="button" onClick={() => navigate('/form')}>
          Previous
        </button>
        <button type="button" onClick={() => navigate('/video')}>
          Next
        </button>
      </div>
    </>
  );
};
export default Documents;
