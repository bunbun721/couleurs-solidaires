import Header from "../components/Header";
import Footer from "../components/Footer";

function CouleursSolidaires() {
  return (
    <>
      <Header />
      <div className="page">
        <h3>Couleurs Solidaires</h3>
        <p>Ajouter la description de l'association.</p>

        <h4>Membres du Bureau</h4>
        <ul>
          <li>Président : Arnaud SOUBELET</li>
          <li>Vice-Présidente : Sylvie CAVELIER</li>
          <li>Secrétaire-générale : Emmanuelle DECLERCK</li>
          <li>Trésorière : Anne RENARD</li>
          <li>Secrétaire générale- adjointe : Brigitte CHOTEL</li>
          <li>Trésorier-adjoint : Philippe BEAUCHAMPS</li>
          <li>Responsable Communication : Natalie VOCK-VERLEY</li>
        </ul>
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
