import { createElement } from 'react';

export function WithoutJSX() {
  return createElement(
    'div',
    null,
    createElement(
      'p',
      { style: { color: 'red', fontSize: '24px' } },
      'It is not JSX',
      ' 🔆. hello',
    ),
  );
}
