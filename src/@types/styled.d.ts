// styled-components.d.ts
import 'styled-components/native'; // Importe 'styled-components/native' se você estiver usando React Native
import theme from '../theme'; // Certifique-se de que o caminho esteja correto

declare module 'styled-components/native' {
  // Use 'styled-components/native' para React Native
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      BLUE_500: string;
      RED: string;
      RED_DARK: string;
      GRAY_700: string;
      GRAY_600: string;
      GRAY_500: string;
      GRAY_400: string;
      GRAY_300: string;
      GRAY_200: string;
      GRAY_100: string;
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
    };
    // Outras propriedades do tema, se houver
  }
}
