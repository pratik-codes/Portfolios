'use client';

import AnalyticsProvider from "./AnalyticsProvider";
import { ReactNode } from "react";

export default function ClientAnalytics({
     children
}: {
     children: ReactNode
}) {
     return (
          <AnalyticsProvider>
               {children}
          </AnalyticsProvider>
     );
}
