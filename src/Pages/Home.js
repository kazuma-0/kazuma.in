import { Container, createStyles, Grid, Text } from "@mantine/core";
import Generative from "../Components/Generative";
import Projects from "../Sections/Homepage/Projects";
import DigitalArts from "../Sections/Homepage/DigitalArts";
import AboutMe from "../Sections/Homepage/AboutMe";
import { motion } from "framer-motion";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    color: "white",
    height: "64rem",
    margin: 0,
    padding: "0 2rem 1rem",
    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      padding: "0 15rem 5rem",
    },
  },
  mobile_webgl: {
    height: "30%",
    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      height: "100%",
    },
  },
  col: {
    height: "60%",
    display: "flex" /* alignItems: 'center',*/,
    flexDirection: "column",
    justifyContent: "center",
    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      height: "100%",
    },
  },
  separator: {
    height: "20px",
    textAlign: "center",
    margin: "0 10px",
    color: "#EBB66B",
  },
  small_desc: {
    display: "flex",
    alignItems: "center",
    paddingTop: ".2rem",
    fontSize: "2rem",
    color: "var(--var-introduction-color)",
  },
  name: {
    fontFamily: "Whitney bold",
    fontSize: "5rem",
    fontWeight: "bold",
    letterSpacing: ".5rem",
    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: "6rem",
    },
  },
  button: {
    marginTop: "2rem",
    display: "inline-block",
    backgroundColor: "var(--var-introduction-color)",
    transition: "all .3s",
    fontFamily: "karla",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "1rem 2rem",
    borderRadius: ".8rem",
    border: "none",
    ":hover": {
      backgroundColor: "var(--var-introduction-color)",
      boxShadow: ".2rem .2rem 1rem black",
    },
    ":active": { transform: "translateY(.2rem)" },
  },
  grid_2: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    fontFamily: "Whitney bold",
    padding: "2rem 2rem",
  },
  font_whitney: { fontFamily: "whitney bold", letterSpacing: ".2rem" },
}));

function Home() {
  const { classes } = useStyles();
  return (
    <>
      <Grid className={classes.wrapper}>
        <Grid.Col lg={6} className={classes.col}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Text size="md">Hello there 👋, I am</Text>

            <Text className={classes.name}>Anuj Sreedharan</Text>
            <Text className={classes.small_desc}>
              Fullstack web developer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={classes.separator}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    d="M13.211 3.102c-.495-1.003-1.926-1.003-2.421 0L8.432 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.19 1.104.968 1.945 1.958 1.424L12 18.862l4.716 2.48c.99.52 2.148-.32 1.959-1.423l-.9-5.251l3.815-3.72c.8-.78.359-2.141-.749-2.302L15.57 7.88L13.21 3.102zm-12.047.679a.75.75 0 0 0 .118 1.054l2.5 2a.75.75 0 1 0 .937-1.171l-2.5-2a.75.75 0 0 0-1.055.117zm21.672 14.437a.75.75 0 0 0-.117-1.054l-2.5-2a.75.75 0 0 0-.938 1.171l2.5 2a.75.75 0 0 0 1.055-.117zM1.282 17.164a.75.75 0 1 0 .937 1.171l2.5-2a.75.75 0 0 0-.937-1.171l-2.5 2zM22.836 3.78a.75.75 0 0 1-.117 1.054l-2.5 2a.75.75 0 0 1-.938-1.171l2.5-2a.75.75 0 0 1 1.055.117z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              3D Artist
            </Text>
          </motion.div>
          <div>
            <button
              className={classes.button}
              size="sm"
              onClick={() => {
                window.location = "#contact";
              }}
            >
              Contact Me
            </button>
          </div>
        </Grid.Col>
        <Grid.Col lg={6} className={classes.mobile_webgl}>
          <Generative></Generative>
        </Grid.Col>
      </Grid>
      <Container size={"lg"} className={classes.grid_2}>
        <Projects />
        <DigitalArts />
        <AboutMe />
      </Container>
    </>
  );
}

export default Home;
