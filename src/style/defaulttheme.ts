// import original module declarations
import "styled-components";
// and extend them!
type fontTypes = {
  "font-size": string;
  "line-height": string;
  "font-weight"?: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      green: string;
      grey1: string;
      grey2: string;
      grey3: string;
    };
    spacing: {
      spacing1: string;
      spacing2: string;
      spacing3: string;
      spacing4: string;
    };
    fontStyles: {
      regular: fontTypes;
      regularMedium: fontTypes;
      bold: fontTypes;
      smallBold: fontTypes;
      regularSmall: fontTypes;
    };
  }
}
