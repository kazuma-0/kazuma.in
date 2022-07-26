import { Anchor, Burger, createStyles, Menu } from "@mantine/core";
import { useState } from "react";

const navLinks = [
  {
    name: "Projects",
    el: "#projects",
    id: 1,
  },
  {
    name: "About me",
    el: "#aboutMe",
    id: 2,
  },
  {
    name: "Resume",
    el: "#",
    disabled: true,
    id: 3,
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "9.5rem",
    padding: ".3rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      padding: ".3rem 8rem",
    },
    // width:  '100%'
  },
  brand: {
    fontFamily: "Whitney",
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "inherit",
    textDecoration: "none",
  },
  links: {
    display: "none",
    color: "white",
    [`@media (min-width:${theme.breakpoints.lg}px)`]: {
      display: "flex",
    },
  },
  links__items: {
    position: "relative",
    margin: "0 1rem",
    fontSize: "1.6rem",
    fontFamily: "karla",
    letterSpacing: ".1rem",
    overflow: "hidden",
    padding: "0 .3rem",
    textDecoration: "none !important",
    color: "white",
    "::before, ::after": {
      content: "''",
      position: "absolute",
      height: "100%",
      width: "100%",
      top: "0",
      borderRadius: "99px",
      transition: "all .5s",
    },
    "::before": {
      transformOrigin: "left",
      transform: "translateX(-101%)",
      background:
        "linear-gradient(90deg, var(--var-body-background-color), transparent, transparent);",
      left: "0",
    },
    "::after": {
      transformOrigin: "left",
      transform: "translateX(101%)",
      background:
        "linear-gradient(90deg, transparent, transparent, var(--var-body-background-color));",
      right: "0",
    },
    ":hover::before": {
      transform: "translateX(101%)",
    },
    ":hover::after": {
      transform: "translateX(-101%)",
    },
  },
  mobile: {
    [`@media (min-width:${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },
}));

function MobileLink(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={props.classes.mobile}>
      <Menu
        shadow="md"
        width={200}
        withArrow
        position="bottom-end"
        opened={isOpen}
        onChange={setOpen}
      >
        <Menu.Target>
          <Burger
            opened={isOpen}
            onClick={() => {
              setOpen(!isOpen);
            }}
          ></Burger>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={"a"} href={"#aboutMe"}>
            Projects
          </Menu.Item>
          <Menu.Item component={"a"} href={"#aboutMe"}>
            About
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

function NavBar() {
  const { classes } = useStyles();
  return (
    <nav className={classes.wrapper}>
      <Anchor href="#" className={classes.brand}>
        Kazuma.in
      </Anchor>
      <div className={classes.links}>
        {navLinks.map((x) => {
          if (!x.disabled) {
            return (
              <Anchor href={x.el} className={classes.links__items}>
                {x.name}
              </Anchor>
            );
          }
          return null;
        })}
      </div>
      <MobileLink classes={classes}></MobileLink>
    </nav>
  );
}

export default NavBar;
