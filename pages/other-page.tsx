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

export default function OtherPage() {
  const router = useRouter();

  return (
    <Grid variants={gridVariants}>
      <Head>
        <title>Other page | Route Transitions</title>
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
        exit="exit"
      >
        Title of other page
      </Title>
      <Text
        exit="exit"
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
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={1000}
        >
          <motion.path
            d="M9.20322 97.5016L140 2.47213L270.797 97.5016L220.837 251.262H59.1632L9.20322 97.5016Z"
            strokeWidth="4"
            variants={pathVariants}
            initial="initial"
            animate="enter"
            exit="exit"
          />
          <motion.circle
            cx="140"
            cy="140"
            r="138"
            strokeWidth="4"
            variants={circleVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      </ShapeWrapper>
      <Buttons>
        <Button
          onClick={() => {
            router.back();
          }}
          initial="initial"
          animate="enter"
          exit="exit"
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
              opacity: 0,
            },
          }}
        >
          Go back
        </Button>
      </Buttons>
    </Grid>
  );
}
