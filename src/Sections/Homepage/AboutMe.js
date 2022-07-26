import {
  ActionIcon,
  Avatar,
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from "@mantine/core";

import img from "../../Assets/kaz.jpg";
import Skills from "../../Components/Home/Skills";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons";
const useStyle = createStyles(() => ({
  font_whitney: {
    fontFamily: "whitney bold",
    letterSpacing: ".2rem",
  },
  section: {
    paddingTop: "5rem",
  },
  font_karla: {
    fontFamily: "karla",
  },
  name: {
    color: "var(--var-introduction-color)",
    fontSize: "inherit",
    fontFamily: "whitney bold",
    letterSpacing: ".1rem",
  },
  intro_desc: {
    fontFamily: "Karla",
    fontSize: "1.7rem",
  },
  avatar_center: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    boxShadow: "0 0 10px #00000080",
  },
  group: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

function Socials(props) {
  return (
    <Group className={props.classes.group} py={"xl"} id={"contact"}>
      <ActionIcon
        component={"a"}
        size={"xl"}
        href={"https://github.com/kazuma-0"}
        target={"_blank"}
      >
        <IconBrandGithub size={"42"} />
      </ActionIcon>
      <ActionIcon
        component={"a"}
        size={"xl"}
        href={"https://linkedin.com/in/anujsreedharan"}
        target={"_blank"}
      >
        <IconBrandLinkedin size={"64"} />
      </ActionIcon>
      <ActionIcon
        component={"a"}
        size={"xl"}
        href={"https://www.instagram.com/_._kazuma/"}
        target={"_blank"}
      >
        <IconBrandInstagram size={"64"} />
      </ActionIcon>
      <ActionIcon
        component={"a"}
        size={"xl"}
        href={"mailto:hello@kazuma.in"}
        target={"_blank"}
      >
        <IconMail size={"64"} />
      </ActionIcon>
    </Group>
  );
}

function AboutMe() {
  const { classes } = useStyle();
  return (
    <section id={"aboutMe"} className={classes.section}>
      <Container size={"md"} pt="lg">
        <div className={classes.avatar_center}>
          <Avatar
            size={"12rem"}
            radius={"99000px"}
            src={img}
            my={"lg"}
            className={classes.avatar}
          ></Avatar>
        </div>
        <Title order={2} align={"center"} className={classes.font_karla}>
          Hi, I'm <span className={classes.name}>Anuj</span>. Nice to meet you
        </Title>
        <Text pt={"lg"} className={classes.intro_desc}>
          I'm a full-stack developer and a 3d artist from India. I love
          developing things for the web and making digital arts. I'm currently
          doing my undergraduate degree at Karpagam academy of higher education
          (B.E Computer Science and design). P.s kazuma is an alias that I use
          online.
        </Text>
        <Skills />
        <div>
          <Title pt={"lg"} order={3} className={classes.font_whitney}>
            Hobbies/Interests
          </Title>
          <Text pl={"md"} pt={"lg"} className={classes.intro_desc}>
            I spend my leisure time listening to J-pop and english music,
            reading manga and light novels. I also love to teach other about the
            stuff that I know.
          </Text>
        </div>
        <div>
          <Title pt={"xl"} order={3} className={classes.font_whitney}>
            Socials
          </Title>
          <Socials classes={classes} />
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
