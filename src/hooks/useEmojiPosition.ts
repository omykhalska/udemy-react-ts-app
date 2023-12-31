import { generateRandomNumber } from 'utils/generateRandomNumber';
import { useEffect, useState } from 'react';

type LeftTop = [number, number];

const INITIAL_VALUE: LeftTop = [0, 0];

export function useEmojiPosition(
  minStep: number,
  maxStep: number,
  containerWidth: number,
  containerHeight: number,
): LeftTop {
  const [leftTop, setLeftTop] = useState<LeftTop>(INITIAL_VALUE);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const step = generateRandomNumber(minStep, maxStep);

      switch (event.key) {
        case 'ArrowLeft':
          setLeftTop(([left, top]) => [Math.max(left - step, 0), top]);
          break;
        case 'ArrowRight':
          setLeftTop(([left, top]) => [Math.min(left + step, containerWidth - 80), top]);
          break;
        case 'ArrowUp':
          setLeftTop(([left, top]) => [left, Math.max(top - step, 0)]);
          break;
        case 'ArrowDown':
          setLeftTop(([left, top]) => [left, Math.min(top + step, containerHeight - 80)]);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [minStep, maxStep, containerWidth, containerHeight]);

  return leftTop;
}
