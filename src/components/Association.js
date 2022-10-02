import { styled } from "@mui/material/styles";
import { Grid, Stack, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  backgroundColor: "#f9faf1",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Association({ picture, description, name, link }) {
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <a href={link} target="_blank" rel="noreferrer">
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <img src={picture} alt={name} height="100" width="100" />

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <h3>{name}</h3>
              <p>{description}</p>
            </Stack>
          </Stack>
        </a>
      </Item>
    </Grid>
  );
}

export default Association;
