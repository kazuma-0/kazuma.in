import { createStyles, Grid, List, ThemeIcon, Title } from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons";
const useStyle = createStyles(() => ({
  font_whitney: {
    fontFamily: "whitney bold",
    letterSpacing: ".2rem",
  },
  listText: {
    fontSize: "1.6rem !important",
  },
}));

function Frameworks(props) {
  return (
    <Grid.Col lg={4}>
      <Title pt="md" pl={"md"} order={5} className={props.classes.font_whitney}>
        Frameworks/Libraries
      </Title>
      <List
        withPadding
        spacing={"xs"}
        icon={
          <ThemeIcon color={"teal"} size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item pt="xs">
          <span className={props.classes.listText}>Vue JS</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>React JS</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Node JS</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>FastApi</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Bootstrap</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Mantine</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Tailwind</span>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} color={"blue"} radius={"xl"}>
              <IconCircleDashed size={16}></IconCircleDashed>
            </ThemeIcon>
          }
        >
          <span className={props.classes.listText}>Next JS</span>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} color={"blue"} radius={"xl"}>
              <IconCircleDashed size={16}></IconCircleDashed>
            </ThemeIcon>
          }
        >
          <span className={props.classes.listText}>Nuxt JS</span>
        </List.Item>
      </List>
    </Grid.Col>
  );
}

function Tools(props) {
  return (
    <Grid.Col lg={4}>
      <Title pt="md" pl={"md"} order={5} className={props.classes.font_whitney}>
        Tools
      </Title>
      <List
        withPadding
        spacing={"xs"}
        icon={
          <ThemeIcon color={"teal"} size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item pt={"xs"}>
          <span className={props.classes.listText}>Github</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Visual studio code</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Webstorm</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Webpack</span>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} color={"blue"} radius={"xl"}>
              <IconCircleDashed size={16}></IconCircleDashed>
            </ThemeIcon>
          }
        >
          <span className={props.classes.listText}>Blender</span>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} color={"blue"} radius={"xl"}>
              <IconCircleDashed size={16}></IconCircleDashed>
            </ThemeIcon>
          }
        >
          <span className={props.classes.listText}>Photoshop</span>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} color={"blue"} radius={"xl"}>
              <IconCircleDashed size={16}></IconCircleDashed>
            </ThemeIcon>
          }
        >
          <span className={props.classes.listText}>Lightroom</span>
        </List.Item>
      </List>
    </Grid.Col>
  );
}

function Languages(props) {
  return (
    <Grid.Col lg={4}>
      <Title pt="md" pl={"md"} order={5} className={props.classes.font_whitney}>
        Programming Languages
      </Title>
      <List
        withPadding
        spacing={"xs"}
        icon={
          <ThemeIcon color={"teal"} size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        <List.Item pt={"xs"}>
          <span className={props.classes.listText}>Python</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>C Sharp</span>
        </List.Item>
        <List.Item>
          <span className={props.classes.listText}>Javascript</span>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={24} color={"blue"} radius={"xl"}>
              <IconCircleDashed size={16}></IconCircleDashed>
            </ThemeIcon>
          }
        >
          <span className={props.classes.listText}>Rust</span>
        </List.Item>
      </List>
    </Grid.Col>
  );
}

function Skills() {
  const { classes } = useStyle();
  return (
    <>
      <Title order={3} pt={"lg"} className={classes.font_whitney}>
        Skills
      </Title>
      <Grid grow>
        <Languages classes={classes} />
        <Frameworks classes={classes} />
        <Tools classes={classes} />
      </Grid>
    </>
  );
}

export default Skills;
