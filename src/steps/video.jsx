import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

const Video = () => {
  const navigate = useNavigate();
  const [meeting, initClient] = useDyteClient();

  useEffect(() => {
    initClient({
      authToken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjdkMTdhNzIzLTNjMDItNGRkYy05OWNkLTY5ZmQ4MGY0YWUzYyIsIm1lZXRpbmdJZCI6IjU3MDhkZWVlLWVkZDktNGY3YS04Nzc4LTc3NmE3NWI0OTVlZiIsInBhcnRpY2lwYW50SWQiOiJmMTNhZGY4ZS1iZTJkLTQ5MWMtYjNmMi1jOTU2YjYwZDc2YTAiLCJwcmVzZXRJZCI6IjdkMmQzYjYzLTAyNzAtNDE0MC1iOTNlLWRjNDg2MmUwMWQzYSIsImlhdCI6MTY3NDkyMzc0NywiZXhwIjoxNjgzNTYzNzQ3fQ.hu4uUTBVFrrYelsNHTkkgOtGN72KjXK2B6Tx57ZvpJ4ZqjrWCqiUPCJukg3w0uybScMqibP5IYS-8wiCVtQTQmvyaHr96Be0a1ANZ6MMtO57cJie-WtAzNNDhMf5Aupn67G8HapRGMC0kYLSEMg77gsXwZKJc8zabJWj534yAqRMbhSO1cbA4Cbk3p9z-F7S8h8OP24dVY1e2jItAaCvZnf46l9HqN7jQnNNTe5MxtG1ZtyVqv5H0z5RTKTcDRSpQ6wUsDBN8xs5XsLtjsU6JOdHGY3QuEPHv-fzbopk8g340o2nZPqIF9SvTtNyVakZs77QeuDbxg32ERGH6BG8sw',
      defaults: {
        video: false,
        audio: false,
      },
    });
  }, []);

  return (
    <>
      <DyteProvider value={meeting}>
        <div className="container column-centered">
          <DyteMeeting meeting={meeting} mode="fill" showSetupScreen={false} />
        </div>
        <div className="control-buttons">
          <button type="button" onClick={() => navigate('/documents')}>
            Previous
          </button>
          <button type="button">Finish</button>
        </div>
      </DyteProvider>
    </>
  );
};
export default Video;
