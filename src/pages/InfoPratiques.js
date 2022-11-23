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
          <h4>Date & Horaires</h4>
          <p>Le samedi 3 et dimanche 4 décembre 2022 de 10h a 18h.</p>
          <h4>Adresse</h4>
          <p>Complexe sportif René Leduc</p>
          <p>2 Av. des Fossés</p>
          <p>92190 Meudon</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default InfoPratiques;
