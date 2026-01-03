import React from "react";
import {
  MantineProvider as BaseMantineProvider,
  createTheme,
} from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  primaryColor: "blue",
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  radius: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
});

interface MantineProviderProps {
  children: React.ReactNode;
}

export const MantineProvider: React.FC<MantineProviderProps> = ({
  children,
}) => {
  return <BaseMantineProvider theme={theme}>{children}</BaseMantineProvider>;
};

export default MantineProvider;
