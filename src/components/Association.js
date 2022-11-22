import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: 20,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Association({ picture, description, name, link }) {
  const width = 200;
  return (
    <Grid item xs={12} md={6}>
      <a href={link} target="_blank" rel="noreferrer">
        <Item>
          <div
            style={{
              minHeight: width * 1.25,
              paddingRight: 15,
              paddingLeft: 10,
            }}
          >
            <h3>{name}</h3>
            <img
              src={picture}
              alt={name}
              width={width}
              style={{
                maxWidth: width,
                maxHeight: width,
              }}
            />
            <p>{description}</p>
          </div>
        </Item>
      </a>
    </Grid>
  );
}

export default Association;
