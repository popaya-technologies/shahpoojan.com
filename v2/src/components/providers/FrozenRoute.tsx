"use client";

import React from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
  children: React.ReactNode;
};

export default function FrozenRoute({ children }: Props) {
  const context = React.useContext(LayoutRouterContext);
  const frozen = React.useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}
