import { Grid } from "@mui/material";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

function InfoPratiques() {
  return (
    <>
      <Header />
      <div className="page">
        <div
          style={{
            backgroundColor: "white",
            minHeight: 50 + "vh",
          }}
        >
          <h3>Informations Pratiques</h3>
          <p></p>
          <Grid
            container
            style={{
              borderLeft: "5px solid #A62123",
              borderRadius: "10px",
              padding: 10,
              marginBottom: 15,
            }}
          >
            <Grid item xs={12} md={6}>
              <h4>Date & Horaires</h4>
              <p>Le samedi 3 et dimanche 4 décembre 2022 de 10h a 18h.</p>
            </Grid>
            <Grid item xs={12} md={6}>
              <h4>Activités</h4>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <h5>Samedi</h5>
                  <ul>
                    <li>xxh - Activité</li>
                    <li>xxh - Activité</li>
                    <li>xxh - Activité</li>
                  </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                  <h5>Dimanche</h5>
                  <ul>
                    <li>xxh - Activité</li>
                    <li>xxh - Activité</li>
                    <li>xxh - Activité</li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            style={{
              borderLeft: "5px solid #A62123",
              borderRadius: "10px",
              padding: 10,
            }}
          >
            <Grid item xs={12} md={6}>
              <h4>Adresse</h4>
              <p>Complexe Sportif René Leduc</p>
              <p>2 Av. des Fossés</p>
              <p>92190 Meudon</p>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                height: 33 + "vh",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.6993280422034!2d2.2438683160143054!3d48.80671687928257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67a576d719e7b%3A0x1de315d4847ca71f!2sRen%C3%A9%20Leduc%20Sports%20Complex!5e0!3m2!1sen!2sfr!4v1669217194394!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
                style={{
                  border: 1 + "px solid #ccc",
                  borderRadius: 10 + "px",
                }}
              ></iframe>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InfoPratiques;
