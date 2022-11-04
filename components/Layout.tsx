import { ReactNode } from "react";
import { styled } from "../stitches.config";
import { useRouter } from "next/router";

const Link = styled("a", {
  all: "unset",
  padding: "8px 24px",
  minWidth: 80,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 16,
  fontWeight: 500,
  borderRadius: 4,
  border: `1px solid $sand7`,
  cursor: "pointer",
  userSelect: "none",

  "&:hover": {
    background: "$sand3",
  },

  variants: {
    active: {
      true: {
        color: "$orange9",
        borderColor: "$orange9",
      },
    },
  },
});

const Main = styled("div", {
  paddingLeft: 24,
  paddingRight: 24,
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
  maxWidth: 960,
  paddingTop: 64,
  paddingBottom: 64,
  zIndex: 1,
});

const Header = styled("header", {
  paddingTop: 12,
  paddingBottom: 12,
  display: "flex",
  justifyContent: "center",
});

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <div>
      <Header>
        <Link
          css={{ marginRight: 16 }}
          onClick={() => {
            router.push("/");
          }}
          active={router.pathname === "/"}
        >
          Index
        </Link>
        <Link
          onClick={() => {
            router.push("/other-page");
          }}
          active={router.pathname === "/other-page"}
        >
          Other page
        </Link>
      </Header>
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
