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
        }}
      >
        <a
          href="https://www.georgiabjarstal.com/"
          target="_blank"
          rel="noreferrer"
        >
          <p>Made by Georgia Bjärstål</p>
        </a>
        <p>{"\u22C5"}</p>
        <a href="https://github.com/bunbun721" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
      </Stack>
    </>
  );
}

export default Footer;
