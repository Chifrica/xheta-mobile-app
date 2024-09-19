import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const palette = {
  gray: "#434343",
  blue: "#007AFF",
  darkGray: "#38434D",
  white: "#FFFFFF",
  black: "#000000",
  purple: "#6366F1",
  primary: "#03363D",
  tertiary: "#E7F2F3",
  focus: "#57797E",
  error: "#FDA29B",
};

const theme = createTheme({
  colors: {
    ...palette,
    gray: palette.gray,
  },
  spacing: {
    xs_4: 4,
    s_8: 8,
    sm_12: 12,
    m_16: 16,
    ml_24: 24,
    l_32: 32,
    xl_64: 64,
  },
  borderRadii: {
    s_3: 3,
    m_6: 6,
    l_12: 12,
    xl_24: 24,
  },
  textVariants: {
    defaults: {
      fontFamily: "AeonikNormal",
      fontSize: 14,
      color: "gray",
      minHeight: 20,
    },
    body: {
      fontSize: 16,
      fontFamily: "AeonikNormal",
    },
    title: { fontSize: 24, fontFamily: "AeonikBold" },
    subtitle: {
      fontSize: 16,
      fontFamily: "AeonikMedium",
    },
    normal_bold: {
      fontFamily: "AeonikBold",
      fontSize: 16,
    },
    large: {
      fontSize: 36,
    },
    extra_large: {
      fontSize: 64,
      fontWeight: "bold",
    },
    sm: {
      fontSize: 12,
    },
  },
});

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T,
) => {
  return () => {
    return styles(theme);
  };
};

export type Theme = typeof theme;
export default theme;