import { keyframes } from '@emotion/react';

const expand = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export { expand, spinner };
