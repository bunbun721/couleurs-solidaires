import "./App.css";
import { styled } from "@mui/material/styles";
import { Grid, Stack, Paper } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <Stack
        direction="column"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Marché Solidaire</h1>
        <h2>Informations complementaires</h2>
      </Stack>
      <Grid
        container
        spacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim porttitor mauris, et commodo ex fermentum ac. Mauris ac
            justo nec elit sollicitudin viverra sit amet eget enim. Ut quis
            finibus elit. Mauris et sollicitudin erat. Aliquam in semper eros.
            Duis pharetra ipsum ut orci vehicula, vitae eleifend ante pulvinar.
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim porttitor mauris, et commodo ex fermentum ac. Mauris ac
            justo nec elit sollicitudin viverra sit amet eget enim. Ut quis
            finibus elit. Mauris et sollicitudin erat. Aliquam in semper eros.
            Duis pharetra ipsum ut orci vehicula, vitae eleifend ante pulvinar.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim porttitor mauris, et commodo ex fermentum ac. Mauris ac
            justo nec elit sollicitudin viverra sit amet eget enim. Ut quis
            finibus elit. Mauris et sollicitudin erat. Aliquam in semper eros.
            Duis pharetra ipsum ut orci vehicula, vitae eleifend ante pulvinar.
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>Association</Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dignissim porttitor mauris, et commodo ex fermentum ac. Mauris ac
            justo nec elit sollicitudin viverra sit amet eget enim. Ut quis
            finibus elit. Mauris et sollicitudin erat. Aliquam in semper eros.
            Duis pharetra ipsum ut orci vehicula, vitae eleifend ante pulvinar.
          </Item>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
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

export default App;
