import { useRef, useEffect } from 'react';

const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleHorizontalScroll = (e: Event) => {
    e.preventDefault();

    if (!scrollRef.current) return;

    (e as WheelEvent).deltaY < 0
      ? (scrollRef.current.scrollLeft -= 50)
      : (scrollRef.current.scrollLeft += 50);
  };

  useEffect(() => {
    const imageListElement = scrollRef.current;

    imageListElement?.addEventListener('wheel', handleHorizontalScroll);

    return () =>
      imageListElement?.removeEventListener('wheel', handleHorizontalScroll);
  }, []);

  return scrollRef;
};

export default useHorizontalScroll;
