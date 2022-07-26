import { Badge, createStyles, Grid, Space, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  grid_2: {
    color: theme.colorScheme === "dark" ? "white" : "black",
    fontFamily: "Whitney bold",
    padding: "0",
    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      padding: "2rem",
    },
  },
  font_whitney: {
    fontFamily: "whitney bold",
    letterSpacing: ".2rem",
  },
  card: {
    outline: ".1rem solid #ffffff60",
    padding: "2rem",
    borderRadius: ".3rem",
    transition: "all .3s",
    cursor: "pointer",
    margin: " 1rem",
    maxWidth: "350px !important",
    ":hover": {
      outline: "1px solid #ffffff",
      boxShadow: "0 0 10px black",
    },
  },
  project_title: {
    textTransform: "uppercase",
    letterSpacing: ".09rem",
    fontFamily: "Whitney bold",
    color: "var(--var-introduction-color)",
  },
}));
const projects = [
  {
    id: 1,
    title: "wellnessrx",
    description:
      "Developed a website for a Homoeopathy Pharmacy located in Kerala",
    type: "work",
  },
  {
    id: 2,
    title: "vue auto deploy",
    description:
      "Implementation of CI/CD with Vue JS apps using github workflows",
    type: "personal",
  },
  {
    id: 3,
    title: " threejs-starter",
    description: "A simple starter template for three js with shaders",
    type: "personal",
  },
  {
    id: 4,
    title: "Risuto",
    description:
      "A blog build with React Js as the frontend and strapi as the headless CMS",
    type: "personal",
  },
];

function ProjectList() {
  const { classes } = useStyles();
  return (
    <>
      {projects.map((p) => {
        return (
          <Grid.Col lg={3} className={classes.card} key={p.id}>
            <Title order={3} className={classes.project_title}>
              {p.title}
            </Title>
            <Badge
              mt="2px"
              size="sm"
              variant="light"
              color={p.type === "work" ? "green" : "blue"}
            >
              {p.type}
            </Badge>
            <Space h={"md"}></Space>
            <Text size={"md"}>{p.description}</Text>
          </Grid.Col>
        );
      })}
    </>
  );
}

function Projects() {
  const { classes } = useStyles();
  return (
    <section id={"projects"}>
      <Title order={1} className={classes.font_whitney}>
        Projects
      </Title>
      <Space h={"xl"}></Space>
      <Grid grow className={classes.grid_2}>
        <ProjectList />
      </Grid>
    </section>
  );
}

export default Projects;
