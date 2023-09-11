import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Documents = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
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
        <button type="button" onClick={() => navigate('/form' + search)}>
          Previous
        </button>
        <button type="button" onClick={() => navigate('/video' + search)}>
          Next
        </button>
      </div>
    </>
  );
};
export default Documents;
