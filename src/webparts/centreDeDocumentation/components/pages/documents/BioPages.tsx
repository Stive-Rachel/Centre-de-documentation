import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';

const BioNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module de Gestion de la Biodiversite (GDB)
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Le Compact doit respecter les directives environnementales et sociales de MCC.
        De plus, il doit se conformer aux normes de performance environnementale de la SFI.
        La Norme de Performance Environnementale et Sociale (NPES) N 6 de la SFI met l accent
        sur la preservation de la biodiversite et la gestion durable des ressources naturelles.
      </p>
      <p>
        La prise en compte de la biodiversite dans le projet de reconstruction de la route
        de Bohicon a Dassa est une exigence fondamentale, car les travaux entraineront la
        destruction des habitats, la perturbation de la faune et la destruction de la vegetation.
      </p>
      <p>
        Afin d accroitre la transparence des actions menees et d optimiser l orientation des
        interventions afin de reduire leur impact sur la biodiversite, ce module a ete integre
        au SGESSS. Il permet un suivi structure et continu des activites sur le terrain, tout
        en generant des statistiques utiles pour evaluer les efforts deployes. Le module facilite
        l acces et l exploitation des donnees, renforce la transparence et favorise une prise
        de decision eclairee, afin de soutenir la gestion durable des ressources naturelles.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objectifs de la note technique</h3>
      <p>La presente note technique a pour ambition de clarifier et de structurer l approche adoptee pour la gestion de la biodiversite dans le cadre du projet. Elle vise a:</p>
      <ul>
        <li>Presenter de maniere claire et accessible l architecture fonctionnelle du module de gestion de la biodiversite, afin que chaque acteur comprenne son role, les mecanismes de fonctionnement et les interactions entre les differentes composantes du systeme;</li>
        <li>Assurer la tracabilite des actions, le respect des exigences reglementaires et la production d indicateurs fiables, indispensables pour mesurer les performances environnementales, appuyer la prise de decision et renforcer la transparence du dispositif.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>
        Le module s inscrit dans le cadre du projet Infrastructure du Corridor (IC) du MCA Benin
        Regional. Il accompagne l ensemble des parties prenantes mobilisees pour la preservation
        des ressources naturelles pendant les travaux de construction de la route Bohicon-Dassa-Zoume.
      </p>
      <p>
        Il concerne directement les entreprises de construction, leurs sous-traitants, les ingenieurs,
        MOSES, en tant que gestionnaire du programme, ainsi que MCC et MCA Benin Regional. Ce module
        contribuera activement a une mise en oeuvre rigoureuse, transparente et respectueuse des
        engagements lies a la Norme de Performance Environnementale (NPE) 6 de la SFI.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>4. Definitions cles</h3>
      <ul>
        <li><strong>Biodiversite:</strong> c est la diversite des especes vivantes sur la Terre, qu il s agisse de plantes, d animaux ou de micro-organismes. Elle englobe la variete des ecosystemes, des habitats et des interactions entre les etres vivants.</li>
        <li><strong>Ecosysteme:</strong> c est un ensemble vivant forme par des organismes (plantes, animaux, micro-organismes) qui interagissent entre eux et avec leur milieu physique (sol, eau, air, climat) dans un espace donne. Un ecosysteme peut etre une foret, une savane, une zone humide, etc.</li>
        <li><strong>Services ecosystemiques:</strong> c est l ensemble des benefices que les etres humains tirent des ecosystemes. Autrement dit, ce sont les services que la nature nous rend gratuitement, chaque jour, souvent sans que nous en ayons pleinement conscience.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5. Description fonctionnelle du module</h3>
      <h4>5.1 Acces au module</h4>
      <p>
        L acces est reserve aux personnes designees par leurs organismes respectifs et disposant
        d un profil valide sur la plateforme SGESSS. L authentification se fait par un identifiant
        et un mot de passe securise.
      </p>

      <h4>5.2 Recensement des especes</h4>
      <p>
        Dans un souci de preserver au maximum les ressources naturelles presentes sur l emprise
        du projet, il est indispensable de disposer d une connaissance precise et complete de
        l existant. La realisation d un recensement exhaustif permet d identifier clairement les
        especes concernees, d evaluer les impacts potentiels des travaux et d orienter les mesures
        d evitement, de reduction ou de compensation. Ce travail doit etre realise par l entreprise
        de construction ou par son sous-traitant.
      </p>

      <h4>5.2.1 Especes vegetales</h4>
      <p>Le module permet de renseigner les informations suivantes sur chaque arbre pendant le recensement:</p>
      <ul>
        <li>Identification de l arbre: nom scientifique, nom local / vernaculaire, statut de conservation</li>
        <li>Localisation: commune, arrondissement, troncon, coordonnees GPS, PK, position par rapport a l emprise, type d ecosysteme</li>
        <li>Caracteristiques dendrometriques: diametre a hauteur de poitrine (DHP), hauteur totale estimee, hauteur du fut</li>
        <li>Etat sanitaire et physiologique: etat general, presence de maladies ou parasites, stabilite mecanique, signes de regeneration naturelle</li>
        <li>Valeur ecologique et socio-economique: role ecologique, usage local</li>
        <li>Impact previsible et mesures proposees: niveau d impact attendu, possibilite de transplantation, confirmation d abattage</li>
      </ul>

      <h4>5.2.2 Especes animales</h4>
      <p>
        Lors des travaux, une attention particuliere est accordee aux animaux les plus vulnerables,
        notamment ceux qui ne peuvent pas fuir face au bruit et aux vibrations des engins. Ces especes
        sont prealablement reperees sur le terrain, puis, lorsque cela est necessaire et possible,
        deplacees vers des habitats plus surs et adaptes, afin de garantir leur protection.
      </p>
      <p>Le module permet de renseigner les informations suivantes:</p>
      <ul>
        <li>Identification de l espece: nom scientifique, nom commun, groupe taxonomique, statut de conservation</li>
        <li>Localisation et contexte: commune, arrondissement, troncon, coordonnees GPS, distance par rapport a l emprise, date et heure de l observation</li>
        <li>Donnees biologiques: stade de developpement, sexe, etat sanitaire apparent, comportement observe</li>
        <li>Risque et vulnerabilite: type de risque lie aux travaux, niveau de vulnerabilite estime, sensibilite particuliere</li>
        <li>Mesures prises: type d intervention, methode de capture, lieu de relocalisation, personnel responsable, date de l intervention</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5.3 Demande d autorisation de coupe</h3>
      <p>
        La coupe des arbres dans le cadre du projet ne peut intervenir qu apres l obtention de
        l autorisation officielle de la Direction Generale des Eaux, Forets et Chasse (DGEFC).
        Afin de garantir la transparence et la tracabilite du processus, le module integre l ensemble
        des demarches administratives liees a la coupe. Il permet d afficher la demande d autorisation
        ainsi que le repertoire detaille des arbres concernes, genere par le systeme apres la saisie
        des donnees par l entreprise.
      </p>
      <p>A ce niveau, les pieces suivantes sont obligatoirement jointes au module:</p>
      <ul>
        <li>La demande officielle de coupe, formulee par le MCA Benin Regional;</li>
        <li>Le repertoire des arbres a couper, produit automatiquement par le systeme sur la base des informations renseignees par l entreprise;</li>
        <li>L autorisation de coupe delivree par la DGEFC.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5.4 Operation d abattage / estimation du volume de bois</h3>
      <p>
        Toute operation de coupe debute par l elaboration d un mode operatoire d abattage,
        document de reference qui encadre de maniere precise les conditions techniques,
        environnementales et securitaires de l intervention. L entreprise en assure la redaction,
        sous le leadership et la supervision de l Ingenieur, garant de la conformite aux exigences
        du projet. Ce document est examine et valide avant toute intervention sur le terrain.
      </p>
      <p>
        Il vient completer l autorisation de coupe delivree par la Direction Generale des Eaux,
        Forets et Chasse (DGEFC), assurant ainsi un cadre legal et technique solide. Le mode
        operatoire d abattage figure en piece jointe.
      </p>
      <p>
        En complement de ces deux documents, chaque operation de coupe sur un troncon donne necessite
        une autorisation de travail specifique. Celle-ci est delivree par l Ingenieur apres que le
        formulaire correspondant a ete correctement renseigne dans le module Autorisation de travail
        du systeme.
      </p>
      <p>
        A l issue de chaque operation, le volume de bois exploite est estime puis enregistre dans
        le systeme afin d assurer un suivi rigoureux des quantites prelevees. Le volume de bois
        destine aux communautes est quantifie et ventile par commune. De meme, les bois d oeuvre
        convoyes vers les artisans feront l objet d un enregistrement detaille. Chaque transfert
        sera formalise par un proces-verbal (PV) de transfert, joint au systeme en piece justificative.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>5.5 Reboisement compensatoire</h3>
      <h4>5.5.1 Demarche d attribution de site et choix des especes</h4>
      <p>
        Conformement au Plan de Gestion Environnementale et Sociale (PGES) du projet, chaque arbre
        abattu donne lieu a la mise en terre de trois plants, selon un principe de compensation
        ecologique visant a restaurer durablement la couverture vegetale et les fonctions ecologiques
        impactees. L entreprise mene des demarches concertees avec les mairies et les services des
        eaux et forets pour identifier, de facon participative, les especes les plus adaptees et
        les sites appropries pour le reboisement.
      </p>
      <p>
        Chaque seance de concertation est suivie d un compte rendu formel, accompagne d une liste
        de presence, assurant la tracabilite et la transparence du processus. L Ingenieur est informe
        des reunions, pour garantir un suivi technique et institutionnel rigoureux. Les comptes rendus
        et les listes de presences sont deposes dans le systeme.
      </p>

      <h4>5.5.2 Mise en terre des plants</h4>
      <p>
        Avant toute operation de mise en terre, l entreprise elabore un plan de reboisement detaille.
        Ce document decrit precisement l ensemble du processus: selection des especes, preparation des
        sites, approvisionnement en plants, techniques de plantation, calendrier d execution et
        modalites d entretien initial.
      </p>
      <p>
        A l issue des travaux de plantation, l Ingenieur procede aux verifications necessaires et
        formalise son appreciation par un proces-verbal de reception. Ce document atteste du respect
        des exigences fixees, notamment quant au nombre de plants mis en terre et a la conformite
        des operations realisees.
      </p>

      <h4>5.5.3 Suivi des sites de reboisement</h4>
      <p>Le suivi du reboisement est realise au moins deux fois par mois. Les principales donnees a collecter sont:</p>
      <ul>
        <li>Informations generales: site de reboisement, coordonnees GPS, date de plantation, date de suivi</li>
        <li>Donnees quantitatives: nombre total de plants mis en terre, plants vivants, plants morts, plants remplaces, taux de survie (%)</li>
        <li>Donnees sur la croissance: hauteur moyenne des plants, diametre au collet, vigueur generale</li>
        <li>Etat sanitaire: presence de maladies, attaques de ravageurs, stress hydrique, degats lies aux animaux ou au paturage, degats anthropiques</li>
        <li>Entretien des plants: arrosage effectue, frequence de l arrosage, desherbage realise, protection installee</li>
        <li>Actions correctives proposees: regarnissage necessaire, renforcement de l arrosage, traitement phytosanitaire, protection supplementaire, recommandations techniques</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>6. Synthese des actions a mener</h3>
      <p>
        Le schema de processus decrit le cycle complet de gestion de la biodiversite, depuis le
        recensement des especes jusqu au suivi du reboisement compensatoire.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>7. Indicateurs</h3>
      <p>
        Les indicateurs de performance du module sont definis pour mesurer l efficacite des actions
        de preservation de la biodiversite menees dans le cadre du projet.
      </p>
    </section>
  </article>
);

const BioGuideUtilisateurPage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const BioDocumentationTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const bioPages: Record<SectionId, React.ComponentType> = {
  'note-technique': BioNoteTechniquePage,
  'guide-utilisateur': BioGuideUtilisateurPage,
  'documentation-technique': BioDocumentationTechniquePage
};

export default bioPages;
