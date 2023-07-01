import { css } from '@emotion/react';

const cssTextEllipsis = (line: number) => {
  return css`
    height: ${line}em;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `;
};

const cssUtils = {
  cssTextEllipsis,
};

export default cssUtils;
export { cssTextEllipsis };
