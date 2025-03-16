"use client";
import React from "react";

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const context = React.useContext(SoundEnabledContext);
  if (!context) {
    throw new Error(
      "useSoundEnabled must be used within a SoundEnabledProvider",
    );
  }
  return [context.soundEnabled, context.setSoundEnabled];
}

export default SoundEnabledProvider;
