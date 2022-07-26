import { createStyles, Grid, Image, Space, Title } from "@mantine/core";
import img from "../../Assets/scifi-artstation.png";

const useStyle = createStyles((theme) => ({
  font_whitney: {
    fontFamily: "whitney bold",
    letterSpacing: ".2rem",
  },
  section: {
    paddingTop: "5rem",
  },
  maxImg: {
    [`@media screen and (min-width:${theme.breakpoints.lg}px)`]: {
      maxWidth: "260px",
    },
  },
}));

function DigitalArts() {
  const { classes } = useStyle();

  return (
    <section className={classes.section}>
      <Title order={1} className={classes.font_whitney}>
        Digital Arts
      </Title>
      <Space h={"xl"}></Space>
      <Grid grow>
        <Grid.Col lg={3}>
          <Image
            src={img}
            className={classes.maxImg}
            caption={"The silent space"}
            alt={"The silent space"}
            withPlaceholder
            radius={"sm"}
          ></Image>
        </Grid.Col>
      </Grid>
    </section>
  );
}

export default DigitalArts;
