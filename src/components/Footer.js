import { Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
        style={{
          backgroundColor: "white",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <p>
          Made by{" "}
          <a
            href="https://www.georgiabjarstal.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            Georgia Bjärstål
          </a>
        </p>
        <p>{"\u22C5"}</p>
        <a
          href="https://github.com/bunbun721"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <GitHubIcon />
        </a>
        <p>{"\u22C5"}</p>
        <p>
          <a
            href="https://www.buymeacoffee.com/georgiab"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            Offrir un café
            {" \u2615"}
          </a>
        </p>
      </Stack>
    </>
  );
}

export default Footer;
