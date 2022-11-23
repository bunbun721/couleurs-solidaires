import Header from "../components/Header";
import Footer from "../components/Footer";

function CouleursSolidaires() {
  return (
    <>
      <Header />
      <div className="page">
        <h3>Couleurs Solidaires</h3>
        <p>Ajouter la description de l'association</p>

        <h4>Membres du Bureau</h4>

        <p>Président : Arnaud SOUBELET</p>
        <p>Vice-Présidente : Sylvie CAVELIER</p>
        <p>Secrétaire-générale : Emmanuelle DECLERCK</p>
        <p>Trésorière : Anne RENARD</p>
        <p>Secrétaire générale- adjointe : Brigitte CHOTEL</p>
        <p>Trésorier-adjoint : Philippe BEAUCHAMPS</p>
        <p>Responsable Communication : Natalie VOCK-VERLEY</p>
        <p></p>
        <h4>Contact</h4>
        <p>
          Addresse email :{" "}
          <a href="mailto:couleurssolidaires.asso@gmail.com">
            couleurssolidaires.asso@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default CouleursSolidaires;
