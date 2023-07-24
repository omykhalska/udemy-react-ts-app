import { useEmojiPosition } from 'hooks/useEmojiPosition';
import { CSSProperties, useEffect, useRef, useState } from 'react';

const CONTAINER_STYLES: CSSProperties = {
  marginBottom: '32px',
  width: '100%',
  height: '75vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  border: 'dashed 2px blue',
};

const MIN_STEP = 10;
const MAX_STEP = 100;

function buildStyle(left: number, top: number): CSSProperties {
  return {
    position: 'absolute',
    height: 80,
    fontSize: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.5s ease-in-out',
    left,
    top,
  };
}

export function AnimatedBicycle(): JSX.Element {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [left, top] = useEmojiPosition(MIN_STEP, MAX_STEP, containerWidth, containerHeight);

  const style = buildStyle(left, top);
  // const style = useMemo(() => buildStyle(left, top), [left, top]);  -> in such case a window resizing is not taken into account

  useEffect(() => {
    setContainerWidth(containerRef.current?.offsetWidth ?? 0);
    setContainerHeight(containerRef.current?.offsetHeight ?? 0);
  }, []);

  return (
    <>
      <p>Use ⬅️ ⬆️ ➡️ ⬇️ to move the bicycle.</p>
      <div ref={containerRef} style={CONTAINER_STYLES}>
        <div style={style}>🚴‍♀️</div>
      </div>
    </>
  );
}
