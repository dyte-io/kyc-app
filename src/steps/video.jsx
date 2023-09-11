import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate , useSearchParams } from 'react-router-dom';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import { DyteGrid, DyteCameraToggle, DyteMicToggle, generateConfig, provideDyteDesignSystem } from '@dytesdk/react-ui-kit';

const Video = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [, initClient] = useDyteClient();
  const [meeting, setMeeting] = useState();
  const [config, setConfig] = useState();
  const [inProgress, setInProgress] = useState(false);
  let [searchParams] = useSearchParams();


  useEffect(() => {
    if (inProgress || meeting) return;
    setInProgress(true);
    initClient({
      authToken: searchParams.get('authToken'),
      defaults: {
        video: false,
        audio: false,
      },
    }).then(async (meet) => {
      setMeeting(meet);
      const presetConfig = meet.self.suggestedTheme;
      const uiConfig = generateConfig(presetConfig, meet).config;

      provideDyteDesignSystem(document.body, uiConfig.designTokens);
      setConfig(uiConfig);
      await meet.joinRoom();
    });
  }, []);

  if (!meeting && !config) return null;

  return (
    <>
      <DyteProvider value={meeting}>
        <div className="container column-centered">
          <DyteGrid meeting={meeting} config={config} />
        </div>
        <div className="control-buttons">
          <DyteCameraToggle meeting={meeting} size='sm' />
          <DyteMicToggle meeting={meeting} size='sm' />
          <button type="button" onClick={() => navigate('/documents' + search)}>
            Previous
          </button>
          <button type="button">Finish</button>
        </div>
      </DyteProvider>
    </>
  );
};
export default Video;
