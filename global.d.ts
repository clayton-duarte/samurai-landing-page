import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends DefaultTheme {
    black: string;
    white: string;
    grey: string;
    green: string;
    blue: string;
    red: string;
    shadow: string;
  }
}
