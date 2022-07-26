import { createStyles, Container } from "@mantine/core";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor:
      theme.colorScheme === "dark" ? "#1A1B1E" : theme.colors.gray[1],
  },
}));

function Layout() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="about" element={<About />} />*/}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
