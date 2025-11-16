import { useRef, useCallback } from 'react';

const useMeasureHeight = () => {
  const ref = useRef<HTMLDivElement>(null);

  const getHeight = useCallback(() => {
    const el = ref.current;
    if (!el) return 0;
    return el.scrollHeight;
  }, []);

  return { ref, getHeight };
};

export default useMeasureHeight;
