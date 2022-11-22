import { Grid, Stack } from "@mui/material";

// images
import GitHubIcon from "@mui/icons-material/GitHub";
import couleurs_solidaires from "../assets/couleurs_solidaires.png";

// components
import Snowfall from "react-snowfall";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function InfoPratiques() {
  return (
    <>
      <Stack
        direction="column"
        style={{
          minHeight: "50vh",
          width: "100vw",
          backgroundColor: "#a62123",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Snowfall
          style={{
            width: "100vw",
            height: "50vh",
          }}
        />
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={0.5} sm={6} md={6} lg={6} xl={6}>
            <div
              style={
                {
                  // alignItems: "center",
                  // justifyContent: "center",
                }
              }
            >
              <img
                src={couleurs_solidaires}
                alt={"couleurs solidaires"}
                width={300}
                style={{
                  float: "right",
                  maxWidth: 33 + "vw",
                }}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{
              textAlign: "left",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0}
            >
              <h1>Marché Solidaire</h1>
              <h2>
                Organisé par l'association <i>Couleurs Solidaires</i>
              </h2>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <ResponsiveAppBar />
      <div
        style={{
          backgroundColor: "white",
          minHeight: 50 + "vh",
        }}
      >
        <h3>Informations Pratiques</h3>
        <h4>Date & Horaires</h4>
        <p>Le samedi 3 et dimanche 4 décembre 2022 de 10h a 18h.</p>
        <h4>Adresse</h4>
        <p>Complexe sportif René Leduc</p>
        <p>2 Av. des Fossés</p>
        <p>92190 Meudon</p>
      </div>
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

export default InfoPratiques;
