import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: 20,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Association({
  picture,
  pic,
  description,
  name,
  link,
  site = null,
  tel = null,
  email = null,
}) {
  const width = 200;
  return (
    <Grid item xs={12} md={6}>
      <Item>
        <div
          className="main"
          style={{
            minHeight: width * 1.4,
            paddingRight: 15,
            paddingLeft: 10,
          }}
        >
          <div className="asso">
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
            {pic && (
              <img
                src={pic}
                alt={name}
                width={width}
                style={{
                  maxWidth: width,
                  maxHeight: width,
                }}
              />
            )}
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            {tel ? (
              <p>
                Numéro : <a href={"tel:" + tel}>{tel}</a>
              </p>
            ) : null}

            {email ? (
              <p>
                <a href={"mailto:" + email}>{email}</a>
              </p>
            ) : null}

            {site ? (
              <p>
                Site Internet :{" "}
                <a href={site} target="_blank" rel="noreferrer">
                  {site}
                </a>
              </p>
            ) : null}
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <VolunteerActivismIcon />
            {"  "}
            Faire un don
          </a>
        </div>
      </Item>
    </Grid>
  );
}

export default Association;
