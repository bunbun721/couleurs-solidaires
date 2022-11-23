import { Grid, Stack } from "@mui/material";

// components
import Snowfall from "react-snowfall";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

// assets
import couleurs_solidaires from "../assets/couleurs_solidaires.png";

function Header() {
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
    </>
  );
}

export default Header;
