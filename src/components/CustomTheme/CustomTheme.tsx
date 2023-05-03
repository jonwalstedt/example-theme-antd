import { ConfigProvider, ThemeConfig } from "antd";
import React, { ReactNode } from "react";

export const customTheme: ThemeConfig = {
  token: {
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    colorPrimary: "#37B4B1",
    colorInfo: "#5480C4",
    colorSuccess: "#56C454",
    colorError: "#C45454",
  },
};

export const CustomTheme = ({ children }: { children: ReactNode }) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
};
