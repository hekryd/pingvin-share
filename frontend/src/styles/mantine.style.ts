import { MantineThemeOverride } from "@mantine/core";

export default <MantineThemeOverride>{
  colors: {
    victoria: [
      "#F5F5F5",
      "#E0E0E0",
      "#CCCCCC",
      "#B8B8B8",
      "#A3A3A3",
      "#8f8f8f",
      "#7a7a7a",
      "#666666",
      "#525252",
      "#3d3d3d",
    ],
  },
  primaryColor: "victoria",
  components: {
    Modal: {
      styles: (theme) => ({
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 700,
        },
      }),
    },
  },
};
