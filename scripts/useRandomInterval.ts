import * as React from "react";
import { random } from "scripts";

export const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = React.useRef<number>(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    let isEnabled =
      typeof minDelay === "number" && typeof maxDelay === "number";
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };
      handleTick();
    }
    return () => window.clearTimeout(timeoutId.current);
  }, [minDelay, maxDelay]);

  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current);
  }, []);

  return cancel;
};
