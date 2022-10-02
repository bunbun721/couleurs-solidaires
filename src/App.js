import "./App.css";
import { Grid, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

// components
import Association from "./components/Association";

// assets
import logo from "./assets/logo192.png";

function App() {
  return (
    <>
      <Stack
        direction="column"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#c5d377",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Marché Solidaire</h1>
        <h2>
          Organisé par l'association <i>Couleur Solidaire</i>
        </h2>
      </Stack>
      <Grid
        container
        spacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          minWidth: "100vw",
          padding: "4vw",
        }}
      >
        <Association
          picture={logo}
          name="Couleur Solidaire"
          description="Organisation d'évènements solidaires, le soutien ou la participation à toute opération à caractère solidaire."
          link="https://www.net1901.org/association/COULEURS-SOLIDAIRES,1278004.html"
        />
        <Association
          picture={logo}
          name="Un nom d'association long. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          description="Une description longue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={logo}
          name="Association"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit orci eu nunc condimentum tincidunt. Donec et diam id turpis finibus aliquam et eu urna. Aliquam varius eu nulla a lacinia. Aenean maximus quam erat. Nulla ut bibendum felis. Ut biam."
          link="https://www.georgiabjarstal.com"
        />
      </Grid>
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

export default App;
