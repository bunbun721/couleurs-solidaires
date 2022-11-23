import { Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

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
          </a>
        </p>
        <a
          href="https://www.buymeacoffee.com/georgiab"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black" }}
        >
          <FreeBreakfastIcon />
        </a>
      </Stack>
    </>
  );
}

export default Footer;
