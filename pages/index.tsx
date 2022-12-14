import Head from "next/head";
import { useRouter } from "next/router";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";
import StyledButton from "../components/Button";

const StyledGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridTemplateRows: "min-content 1fr min-content",
  gridTemplateAreas: `
    "title title shape shape"
    "text text shape shape"
    "text text buttons buttons"
  `,
  gridGap: "24px",
});
const Grid = motion(StyledGrid);

const StyledTitle = styled("h1", {
  margin: 0,
  fontSize: 48,
  fontWeight: 700,
  gridArea: "title",
});

const Title = motion(StyledTitle);

const StyledText = styled("p", {
  margin: 0,
  color: "$sand11",
  fontSize: 18,
  lineHeight: 1.75,
  gridArea: "text",
});
const Text = motion(StyledText);

const ShapeWrapper = styled("div", {
  gridArea: "shape",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& svg": {
    stroke: "$orange9",
    //fill: "$orange9",
  },
});

const Buttons = motion(
  styled("div", {
    gridArea: "buttons",
    display: "flex",

    [`& ${StyledButton}`]: {
      flex: 1,
    },

    [`& ${StyledButton}:not(:last-child)`]: {
      marginRight: 16,
    },
  })
);

const Button = motion(StyledButton);

const gridVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const titleVariants = {
  enter: {
    x: 0,
    opacity: 1,
  },
  initial: {
    x: -20,
    opacity: 0,
  },
  exit: {
    x: -20,
    opacity: 0,
  },
};

const textVariants = {
  enter: { opacity: 1 },
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

const circleVariants = {
  enter: {
    pathLength: 1,
    transition: { duration: 3, type: "tween" },
  },
  initial: {
    pathLength: 0,
  },
  exit: {
    pathLength: 0,
    transition: { duration: 2, type: "tween" },
  },
};

const pathVariants = {
  enter: {
    pathLength: 1,
    transition: { duration: 2.5, type: "tween" },
  },
  initial: {
    pathLength: 0,
  },
  exit: {
    pathLength: 0,
    transition: { duration: 1.5, type: "tween" },
  },
};

export default function Home() {
  const router = useRouter();

  return (
    <Grid variants={gridVariants}>
      <Head>
        <title>Index | Route Transitions</title>
        <meta
          name="description"
          content="Next route transitions with React Spring"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title
        variants={titleVariants}
        animate="enter"
        initial="initial"
        exit="initial"
      >
        Title of index page
      </Title>
      <Text
        exit="initial"
        initial="initial"
        animate="enter"
        variants={textVariants}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas commodi dicta, voluptates modi aperiam quo explicabo nam
        voluptatibus, omnis, maxime doloribus numquam fugit asperiores? Rerum
        ipsam error vel recusandae obcaecati, fugiat nam harum aliquam ratione!
        Itaque velit cupiditate harum, fugiat, omnis veniam quam voluptates
        suscipit molestias tempore minus ipsam!
      </Text>
      <ShapeWrapper>
        <svg
          className="circle"
          width="288"
          height="288"
          viewBox="0 0 288 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={1000}
        >
          <motion.circle
            variants={circleVariants}
            initial="initial"
            animate="enter"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
            cx="144"
            cy="144"
            r="142"
            strokeWidth="4"
          />
          <motion.path
            variants={pathVariants}
            initial="initial"
            animate="enter"
            exit="initial"
            d="M144 4L265.244 214H22.7564L144 4Z"
            strokeWidth="4"
          />
        </svg>
      </ShapeWrapper>
      <Buttons
        variants={{
          enter: {
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          },
          exit: {
            transition: {
              when: "afterChildren",
              staggerChildren: 0.3,
              staggerDirection: -1,
            },
          },
        }}
      >
        <Button
          onClick={() => {
            router.push("/other-page");
          }}
          initial="initial"
          animate="enter"
          exit="initial"
          variants={{
            initial: {
              y: 40,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
            },
            exit: {
              y: 40,
              opacity: 1,
            },
          }}
        >
          Other page
        </Button>
        <Button
          initial="initial"
          animate="enter"
          exit="initial"
          variants={{
            initial: {
              y: 40,
              opacity: 0,
            },
            enter: {
              y: 0,
              opacity: 1,
            },
            exit: {
              y: 40,
              opacity: 1,
            },
          }}
          outlined
        >
          Fake Button
        </Button>
      </Buttons>
    </Grid>
  );
}
