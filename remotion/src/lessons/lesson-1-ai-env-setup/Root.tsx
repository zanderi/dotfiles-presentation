import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { calculateMetadata } from "./calculateMetadata";
import { TOTAL_FRAMES, VOICEOVER_SCENES } from "./voiceover-config";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AIEnvSetup"
      component={MainVideo}
      calculateMetadata={calculateMetadata}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        sceneDurations: VOICEOVER_SCENES.map((s) => s.estimatedFrames),
      }}
    />
  );
};
