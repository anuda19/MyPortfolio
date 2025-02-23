"use client";
import { createContext, useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSContext = createContext(null);

const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return <AOSContext.Provider value={null}>{children}</AOSContext.Provider>;
};

export default AOSProvider;
