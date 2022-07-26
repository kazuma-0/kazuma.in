import { Container, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "10rem",
    padding: "10rem 2rem",
    color: theme.colorScheme == "dark" ? "white" : "black",
  },
}));
function Footer() {
  const { classes } = useStyles();
  return <div></div>;
}

export default Footer;
