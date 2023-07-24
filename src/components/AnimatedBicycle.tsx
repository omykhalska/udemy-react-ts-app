import { useEmojiPosition } from 'hooks/useEmojiPosition';
import { CSSProperties, useMemo } from 'react';

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
  const [left, top] = useEmojiPosition(MIN_STEP, MAX_STEP);

  const style = useMemo(() => buildStyle(left, top), [left, top]);

  return (
    <>
      <p>Use ⬅️ ⬆️ ➡️ ⬇️ to move the bicycle.</p>
      <div style={CONTAINER_STYLES}>
        <div style={style}>🚴‍♀️</div>
      </div>
    </>
  );
}
