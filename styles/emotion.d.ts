import '@emotion/react';

interface ColorsType {
  [key: string]: string;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
  }
}
