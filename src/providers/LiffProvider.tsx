"use client";
import { Liff } from "@line/liff";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type LiffContextProps = {
  liff?: Liff;
};

const LiffContext = createContext<LiffContextProps>({});

export const useLiffContext = () => {
  return useContext(LiffContext);
};

export const LiffProvider = ({ children }: PropsWithChildren) => {
  const [liff, setLiff] = useState<Liff | undefined>();

  useEffect(() => {
    void (async () => {
      try {
        const liffModule = await import("@line/liff");
        const liff = liffModule.default;

        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID ?? "" });

        setLiff(liff);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error(String(e));
        }
      }
    })();
  }, []);

  return (
    <LiffContext.Provider
      value={{
        liff,
      }}
    >
      {children}
    </LiffContext.Provider>
  );
};
