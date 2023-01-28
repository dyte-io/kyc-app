import React from 'react';
import { useNavigate } from 'react-router-dom';

const Video = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container column-centered">
        <div>Dyte video</div>
      </div>
      <div className="control-buttons">
        <button type="button" onClick={() => navigate('/documents')}>
          Previous
        </button>
        <button type="button">Finish</button>
      </div>
    </>
  );
};
export default Video;
