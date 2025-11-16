import React from "react";

const useExitAnimation =(active: boolean, duration: number) => {
  const [rendered, setRendered] = React.useState(active);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    if (active) {
      setRendered(true);
      setClosing(false);
      return;
    }

    setClosing(true);

    const timer = setTimeout(() => {
      setRendered(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [active, duration]);

  return { rendered, closing };
}

export default useExitAnimation;