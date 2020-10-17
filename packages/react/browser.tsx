import type { ReactNode } from "react";
import React from "react";
import type { BrowserHistory, Update } from "history";
import { createBrowserHistory } from "history";
import type { EntryContext } from "@remix-run/core";

import { RemixEntry } from "./components";

declare global {
  var __remixContext: EntryContext;
}

// if ("scrollRestoration" in window.history) {
//   window.history.scrollRestoration = "manual";
// }

const entryContext = window.__remixContext;

export interface RemixBrowserProps {
  children: ReactNode;
}

export default function RemixBrowser({ children }: RemixBrowserProps) {
  let historyRef = React.useRef<BrowserHistory>();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window });
  }

  let history = historyRef.current;
  let [state, dispatch] = React.useReducer(
    (_: Update, update: Update) => update,
    {
      action: history.action,
      location: history.location
    }
  );

  React.useLayoutEffect(() => history.listen(dispatch), [history]);

  return (
    <RemixEntry
      children={children}
      context={entryContext}
      action={state.action}
      location={state.location}
      navigator={history}
    />
  );
}
