import { generateRandomColor } from 'utils/generateRandomColor';

const COLORS_MAP = new Map<string, string>();

export const LogTagged = (tag: string, message: string) => {
  const tagColor = COLORS_MAP.get(tag) ?? generateRandomColor();

  if (!COLORS_MAP.has(tag)) {
    COLORS_MAP.set(tag, tagColor);
  }

  const styledMessage = `%c ${tag} %c ${message}`;

  const tagStyle = `
    background-color: ${tagColor}; 
    border: 1px solid #0004;
    text-shadow: 1px 1px #0008;
    border-radius: 8px;
    color: white;
  `;

  console.log(styledMessage, tagStyle, '');
};
