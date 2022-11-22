import "./App.css";
import { Grid, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

// components
import Association from "./components/Association";
import Snowfall from "react-snowfall";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

// assets
import couleurs_solidaires from "./assets/couleurs_solidaires.png";
import apprentis from "./assets/apprentis.png";
import asasoa from "./assets/asasoa.png";
import asf from "./assets/asf.jpg";
import blouses from "./assets/blouses.png";
import breaktime from "./assets/breaktime.png";
import cancer from "./assets/cancer.png";
import carmeudon from "./assets/carmeudon.png";
import conf from "./assets/conf.png";
import frat from "./assets/frat.png";
import haiti from "./assets/haiti.png";
import impulso from "./assets/impulso.jpg";
import manthoc from "./assets/manthoc.jpg";
import musique from "./assets/musique.jpg";
import sem from "./assets/sem.png";
import sipar from "./assets/sipar.png";
import slovensko from "./assets/slovensko.png";
import vsd from "./assets/vsd.jpg";

function App() {
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
          picture={apprentis}
          name="Apprentis d'Auteuil"
          description="Le site du Village Educatif Saint-Philippe de Meudon existe depuis le XIXe siècle. Le site accueil environ 600 jeunes élèves, dans un collège et un lycée professionnel (avec pour spécialités les métiers de la menuiserie l'électrotechnique et l'horticulture). Plus de 90 jeunes sont également accueillis dans 2 MECS (Maison d'enfants à Caractère Social) et un Service d'Accueil d'Urgence au titre de la protection de l'enfance."
          link="https://www.net1901.org/association/COULEURS-SOLIDAIRES,1278004.html"
        />
        <Association
          picture={asasoa}
          name="ASASOA-Madagascar"
          description="ASASOA France Madagascar a créé un centre de formation informatique pour des jeunes à Antananarivo, qui propose aux jeunes des cours d'informatique, de langues et une formation de guide écotouristique. Pour promouvoir le chocolat d'exception malgache (sacré meilleur chocolat du monde en 2017, mais gravement menacé en raison de sa trop faible production face aux besoins internationaux et concurrents de Côte d'Ivoire, de Colombie et surtout des pays asiatiques, La Route du Chocolat invite les touristes à venir découvrir Madagascar."
          link="https://www.georgiabjarstal.com"
        />
        <Association
          picture={asf}
          name="ASF + SSNAM"
          description="ASF (Aviation Sans Frontières), organisation non gouvernementale créée en 1980, utilise le réseau aérien et sa propre flotte pour venir en aide aux plus démunis (première organisation non gouvernementale titulaire d'un Certificat de Transporteur Aérien européen). SSNAM (Service Social des Navigants de l'Aviation Marchande) a été créé en 1962 par un groupe de navigants pour les orphelins de leurs collègues. Elle aide les orphelins des navigants (techniques et commerciaux) par ses conseils, son appui moral et matériel. Près de 250 orphelins sont à ce jour aidés par une attribution trimestrielle afin de poursuivre leur études. Cette attribution est versée sur justificatif de scolarité jusqu'à leur 25 ans."
          link=""
        />
        <Association
          picture={blouses}
          name="Les Blouses Roses"
          description="D'envergure nationale et reconnue d'utilité publique, Les Blouses Roses est une association de terrain composée de 5.000 bénévoles qui œuvrent quotidiennement pour apporter sourire et soutien à plus d'un million de bénéficiaires (enfants, adultes et personnes âgées, à l'hôpital ou en EHPAD) depuis plus de 70 ans."
          link=""
        />
        <Association
          picture={breaktime}
          name="Breaktime"
          description="BREAKTIME a pour vocation depuis 2016 de promouvoir la culture anglaise et d'entretenir ses connaissances en anglais. Elle prodigue conseils et accompagnement, développe des liens amicaux, culturels, entrepreneurials et sportifs entre Meudon et sa ville jumelle anglaise Rushmoor (communauté d'agglomération). Sont proposés divers ateliers de conversation pour adultes (Tea Time / Happy Time), de conversation pour les lycéens et de danse écossaise ; des stages intensifs pour les lycéens et les étudiants ; des voyages à Rushmoor ; des conférences et des concerts."
          link=""
        />
        <Association
          picture={carmeudon}
          name="CAR Meudon"
          description="CarMeudon accueille des réfugiés de toutes origines (nationalité, religion, milieu social) et les aider à s'insérer, en s'appuyant sur le réseau des organisations caritatives présentes sur le secteur. Depuis 2015, elle comprend 250 membres (dont 50 bénévoles actifs). En toute indépendance, elle est partenaire de la mairie, des organismes publics et des organisations caritatives (les paroisses comme Saint-Martin, ou le diocèse). Une vingtaine de réfugiés originaires du Moyen-Orient (Syrie, Irak), du Tibet et d'Ukraine ont été accueillis en 7 ans ; l'aide porte sur le logement, le soutien amical et linguistique ; les enfants et adolescents scolarisés bénéficient d'un soutien scolaire en français et en sciences ; certains des réfugiés ont d'ores et déjà trouvé un travail. Les ressources proviennent des cotisations des membres (déductibles d'impôts) et de dons. Un large réseau de générosité matérielle pourvoit à la mise à disposition de logements, de matériel divers, etc.) et morale (soutien scolaire, soutien amical, accompagnement administratif, aide à la recherche d'emploi, etc.). En 2017 le CCAS de la Ville a décerné le 1er Prix des « Meudonnais ont du cœur ». Depuis mars 2022, une soixantaine d'Ukrainiens ont été provisoirement « mis à l'abris » dans l'urgence en partenariat avec la Préfecture et la Ville."
          link=""
        />
        <Association
          picture={conf}
          name="Conférence Saint-Vincent de Paul"
          description="La Société de Saint-Vincent-de-Paul est un réseau caritatif de proximité, au service des personnes isolées ou démunies Les ateliers 'Tricots et Crochet' (créés en novembre 2022) ont pour vocation de créer du lien amical et de transmettre un savoir-faire. Les participants réalisent des modèles en tricot ou en crochet (layette, couverture, doudou) tous les jeudis de 14h à 16h30 (hors vacances scolaires) à la salle des Tybilles. Contact : 07 71 75 95 39"
          link=""
        />
        <Association
          picture={cancer}
          name="Enfance et Cancer-Hubert Gouin"
          description="Hubert Gouin-Enfance et Cancer soutient depuis près de 20 ans la recherche en oncologie pédiatrique, pour que des enfants aient accès à des traitements mieux ciblés, moins invasifs et mieux différenciés. L'association qui soutint financièrement différents projets sélectionnés par son comité scientifique, a été associée à 3 découvertes majeures dans la compréhension du neuroblastome, cancer du jeune enfant présentant un faible pronostic vital de l'ordre de 40%. En 2017, elle a renouvelé son soutien à l'Institut Curie pour 3 projets de recherche prometteurs pour mieux comprendre la genèse des cancers de l'enfant. L'association sensibilise aussi le grand public et les pouvoirs publics sur la nécessité de proposer de nouvelles molécules ou association de molécules, pour apporter un espoir de guérison à tous les petits malades atteints de cancer. Si 80% des jeunes enfants atteints de cancers guériront, 20% ne survivront pas, faisant du cancer la première cause de mortalité chez les enfants après les accidents domestiques. www.asso-hubert-gouin.org"
          link=""
        />
        <Association
          picture={frat}
          name="Fraternité Dogon"
          description="Fraternité Dogon intervenant en Pays Dogon au Mali. L'association aide l'Ecole de Bongo et le Collège de Sangha du Bas, dans le maintien de deux instituteurs pour l'école, dans l'approvisionnement en fournitures scolaires et dans l'entretien de deux bâtiments. Elle suit également le Centre de Petite enfance de Barapireli. Elle réalise des puits dans la plaine, au pied des falaises, pour les hameaux de culture. Elle gère des micro-crédits pour des associations de femmes. Elle finance des réserves alimentaires d'urgence. Elle aide à l'amélioration de retenues d'eau sur le plateau."
          link=""
        />
        <Association
          picture={haiti}
          name="Haïti Futur"
          description="Fondée en 1994, l'association franco-haïtienne a pour objectif de développer une éducation de qualité et de promouvoir l'entreprenariat sur place, tout en faisant connaître la culture haïtienne. Depuis août 2010, la priorité est donnée au programme d'éducation numérique qui vise le déploiement de 500 classes numériques, la formation des enseignants et la fabrique de contenus en créole et français. Haïti Futur comprend 3 organisations (en Haïti, aux États-Unis et en France)."
          link=""
        />
        <Association
          picture={impulso}
          name="IMPULSO"
          description="De jeunes diplômés prêts à se former sur le terrain en mettant en pratique les connaissances de leur cursus, apportent leurs connaissances en matière de soutien entrepreneurial pour améliorer les conditions de vie des populations latino-américaines porteuses de projets (commerçantes mexicaines) et faire rayonner leur action, afin de lutter contre la pauvreté. "
          link=""
        />
        <Association
          picture={manthoc}
          name="Le Manthoc"
          description="Le MANTHOC est une organisation péruvienne créée il y a plus de 30 ans pour améliorer la qualité de vie des enfants et adolescents travailleurs (de 6 à 17 ans) et encourager l'exercice de leurs droits. La plupart d'entre eux aident leurs parents à vendre ou à fabriquer des produits. D'autres viennent seuls de province pour travailler dans un des nombreux magasins de Lima ou comme marchands ambulants. Le mouvement propose aux jeunes une alternative à ces travaux, grâce à des ateliers de fabrication qui leur permettent de se former, d'avoir un travail digne et stable, tout en ayant la possibilité d'aller à l'école. https://www.manthoc.org.pe . Les enfants sont appelés NATs, « ninas, ninos y adolescentes trabajadores »."
          link=""
        />
        <Association
          picture={musique}
          name="Musique Sans Frontières"
          description="Musique Sans Frontières Paris a apporté des instruments de musique à Calais dès 2015, organisé des ateliers et des temps musicaux, et distribué des instruments de musique récoltés à Meudon. Un 1er concert de solidarité organisé à Meudon en juin 2016 a rassemblé 150 spectateurs (musiciens et artistes d'Afghanistan, des Balkans, des USA, de France, d'Irlande et du Soudan) pour reverser une partie des recettes à l'Auberge des Migrants à Calais, et monter des projets avec les réfugiés basés en région parisienne. Pour la 1ère fois en France, une partie du SEPO (Syrian Expatriate Philarmonic Orchestra) s'est produit à Meudon en 2017. Une formation d'Orpheus XXI (orcheste de Jordi Savall) se produira en novembre 2022. Ces concerts solidaires ont 3 objectifs : partage culturel des musiques du monde, dialogue entre musiciens et spectateurs, récolte de fonds pour les associations partenaires, organisation d'ateliers de musique dans les centres d'accueil en région parisienne. Des ateliers-concerts pédagogiques auprès des élèves (4ème et CM2) de Meudon sont mis en place en partenariat avec la Ville."
          link=""
        />
        <Association
          picture={sem}
          name="SEM"
          description="Soutien de l'Enfant Malade (SEM) a été créée en 2001 par des soignants du service de réanimation infantile et rééducation neuro-respiratoire de l'Hôpital Raymond Poincaré de Garches. Conscients des spécificités du service, de la durée d'hospitalisation des enfants (certains enfants y passent toute leur enfance et leur adolescence), et surtout de la lourdeur des pathologies prises en charge, l'équipe s'attache à améliorer le cadre de vie à l'hôpital, pour un meilleur moral des jeunes patients et de leur famille. L'association a étendu son action à tout le service de pédiatrie de l'hôpital (hôpital de jour, école au sein de l'hôpital…). Les fonds proviennent des ventes de Noël, dons d'entreprise et d'associations diverses. Les actions permettent de financer divers projets : amélioration de la qualité de vie au quotidien des enfants (goûters festifs, décorations du service, sorties à l'extérieur) ; soutien à toutes les manifestations organisées par le personnel (« Garches Circus »), achats de tablettes, etc. ; acquisition de mobilier adapté (table réglable pour les fauteuils roulants et chaises réglables) ; fourniture de matériel de puériculture (couverture chauffante, etc.) ; achat d'un fauteuil roulant électrique avec commande buccale, mis à la disposition des patients www.la-sem.com "
          link=""
        />
        <Association
          picture={sipar}
          name="SIPAR"
          description="SIPAR a été créée en 1982 pour accueillir des réfugiés cambodgiens en France. Et depuis 26 ans, un réseau national de 440 lieux de lecture a été mis en place au Cambodge (dans des écoles, des villages, des hôpitaux, des prisons ou des usines) avec plus de 640.000 bénéficiaires. Lire et instruire pour construire l'avenir. www.sipar.org "
          link=""
        />
        <Association
          picture={slovensko}
          name="Slovensko"
          description="Slovensko promeut la culture slovaque en France, mène des actions de jumelage avec la ville slovaque de Brezno et organise des animations folkloriques (l'ensemble Nadeje participe chaque année à divers festivals folkloriques et évènements culturels, en France et en Slovaquie."
          link=""
        />
        <Association
          picture={vsd}
          name="VSD"
          description="VSD intervient en Afrique de l'Ouest, notamment au Burkina-Faso, depuis près de 20 ans.  Elle aide au développement des populations rurales précaires (alphabétisation, cantines scolaires, parrainages, microcrédits, groupements paysans, fonçage de puits). Elle gère un centre d'exploitation agricole pilote et un collège (à Kokologho).
Consciente que les intégrismes prospèrent sur la misère et le manque d'éducation, l'association VSD concentre actuellement ses efforts sur l'accueil d'élèves déplacés qui ont dû fuir leurs villages dévastés par l'insécurité et les dérives djihadistes, en leurs fournissant logement, nourriture, soins, fournitures et inscriptions dans des établissements scolaires en zones préservées.
"
          link=""
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
