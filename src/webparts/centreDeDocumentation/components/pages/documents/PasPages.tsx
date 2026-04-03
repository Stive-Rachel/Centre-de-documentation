import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const PasNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module de Gestion du PAAS (GPAAS) -- Plan d Analyse et d Actions Sociales
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Dans le cadre de la mise en oeuvre du Systeme de Gestion Environnementale, Sociale, de Sante
        et Securite (SGESSS) du Compact Regional de MCA Benin et du Plan d Analyse et d Actions
        Sociales (PAAS), il est necessaire de disposer d un module structure et harmonise permettant
        la mise en oeuvre du Plan d Analyse et d Actions Sociales.
      </p>
      <p>
        Ce module repond aux exigences reglementaires nationales (Code de la Securite Sociale,
        politiques sociales du Benin) ainsi qu aux normes internationales, notamment les Normes
        de Performance de la SFI et les Directives Environnementales et Sociales.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objectifs de la note technique</h3>
      <p>La presente note technique vise a:</p>
      <ul>
        <li>Decrire l architecture fonctionnelle du module de gestion du PAAS</li>
        <li>Definir les informations cles a collecter pour une gestion efficace de l analyse et des actions sociales</li>
        <li>Clarifier le processus de declaration, de traitement, de validation de cloture des donnees</li>
        <li>Garantir la tracabilite, la conformite reglementaire et la production d indicateurs fiables</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>
        Le module s applique a l ensemble des projets IC (Infrastructure du Corridor) et ECO
        (Efficacite des Operations du Corridor) du Compact MCA Benin Regional et concerne:
      </p>
      <ul>
        <li>Les entites de mise en oeuvre du Compact et Consultants</li>
        <li>Les personnes affectees par le projet (PAP)</li>
        <li>Les PAP vulnerables</li>
        <li>La communaute</li>
      </ul>
      <p>
        Les acteurs concernes sont: MCC, MCA Benin Regional, MOSES, Ingenieur, MSA, Entrepreneurs.
      </p>
      <p>Le Module PAAS est concu comme une interface qui recense toutes les donnees de l Analyse Sociale (AS) qui se trouvent dans les autres modules developpes. Cette interface comporte huit (08) axes:</p>
      <ul>
        <li>Gestion Administrative</li>
        <li>Collecte des donnees desagregees sur la participation des hommes/femmes, groupes vulnerables aux reunions, sensibilisation, formation</li>
        <li>Suivi des indicateurs AS y compris indicateurs sociaux sensibles</li>
        <li>Incident en AS (lien vers la partie AS du module des incidents)</li>
        <li>Non-conformite AS (lien vers la partie AS du module de Non-Conformite)</li>
        <li>Risques AS et Actions correctives (lien vers la partie AS du module gestion des Risques)</li>
        <li>Collaboration et communication</li>
        <li>Documentation et archivage</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>4. Definitions cles</h3>
      <p>
        <strong>Analyse sociale</strong>: demarche d observation, d etude et d evaluation des dynamiques
        humaines, des besoins et des structures au sein d une population ou d une organisation. Elle vise
        a comprendre les interactions sociales, le pouvoir et le contexte socio-economique pour eclairer
        la prise de decision, agir sur les inegalites et transformer la realite sociale.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>5. Description fonctionnelle du module</h3>
      <h4>5.1 Acces au module</h4>
      <p>
        L acces est reserve aux personnes de la Direction de l Analyse Sociale (DAS) de MCA-Benin
        Regional ainsi qu aux experts Analyse Sociale (AS) des Consultants (MOSES, MSA, Ingenieur
        et Entrepreneurs) et les personnes designees par leurs organismes respectifs disposant d un
        profil valide sur la plateforme SGESSS. L authentification se fait par un identifiant et un
        mot de passe securise.
      </p>

      <h4>5.2 Declaration</h4>
      <p>La declaration couvre trois volets:</p>
      <ul>
        <li>Des incidents/non-conformite/risques (24h maximum apres survenu de l evenement): lien vers les differents modules pour avoir les donnees AS</li>
        <li>Des Indicateurs y compris indicateurs sociaux sensibles: lien vers le module indicateur et MGP pour avoir les donnees AS</li>
        <li>Les autres aspects specifiques que doivent renseigner les Consultants: Gestion Administrative, Collecte des donnees desagregees, Suivi des indicateurs AS, Collaboration et communication, Documentation et archivage</li>
      </ul>

      <h4>5.3 Traitement</h4>
      <p>
        Pour les incidents/non-conformite/risques, le traitement est le meme que dans les modules dedies.
        Le lien permet de renvoyer a ces modules pour le traitement.
      </p>
      <p>
        Pour les indicateurs y compris les indicateurs sociaux sensibles, le depot s effectue via la
        plateforme SGESSS: acces, navigation vers Gestion des collectes des donnees AS, saisie des
        donnees obligatoires, analyse des indicateurs et definition de mesures correctives et preventives.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>6. Roles et responsabilites</h3>
      <ul>
        <li>Incidents/non-conformite/risques: lien vers les modules permettra de voir les responsabilites</li>
        <li>Indicateurs y compris les sensibles: le lien vers ces modules met l accent sur ces responsabilites</li>
        <li>Autres aspects: voir le module de Gestion du PAAS ou les responsabilites sont decrites pour chaque aspect</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>7. Resultats attendus</h3>
      <ul>
        <li>Amelioration de la prevention des incidents/non-conformites/risques</li>
        <li>Effectuer un suivi rigoureux des incidents/non-conformites/risques survenus</li>
        <li>Mieux cibler et reduire les risques</li>
        <li>Simplifier la gestion des donnees relatives aux incidents/non-conformites/risques, de la declaration a la consolidation des donnees</li>
        <li>Rendre disponible des indicateurs fiables</li>
        <li>Conformite aux exigences nationales et internationales</li>
        <li>Renforcement de la culture de l analyse sociale</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Indicateurs</h3>
      <p>Les donnees brutes a collecter sont les suivantes:</p>
      <ul>
        <li>Nombre d employabilites de jeunes garcons (18-35 ans) beneficiaires de l initiative MINIZEDAGA</li>
        <li>Nombre de livrables de la campagne de CCSC sur la securite routiere</li>
        <li>Nombre d accords signes avec les entites de mise en oeuvre integrant les principes de l analyse sociale</li>
        <li>Nombre d activites du MCVT du secteur du transport, integrant l analyse sociale</li>
        <li>Nombre d activites de renforcement des capacites sur l analyse sociale realisees a l endroit du personnel de MCA-Benin Regional</li>
        <li>Nombre d employes qualifies masculins et feminins</li>
        <li>Nombre d employes etrangers et locaux</li>
        <li>Nombre de personnes vulnerables desagregees informees, sensibilisees et consultees sur les activites du Compact</li>
        <li>Nombre de personnes vulnerables desagregees ayant beneficie des emplois et opportunites generes par le Compact</li>
        <li>Nombre de personnes ayant developpe des activites autour des chantiers, desagrege par sexe et age</li>
      </ul>
      <p>Les donnees suivantes seront calculees sur la base des donnees brutes collectees:</p>
      <ul>
        <li>Cumul des donnees de l AS sur la plateforme</li>
        <li>Pourcentage de jeunes filles (18-35 ans) beneficiaires de l initiative MINIZEDAGA</li>
        <li>Pourcentage de femmes (plus de 35 ans) beneficiaires de l initiative MINIZEDAGA</li>
        <li>Pourcentage d employes etrangers</li>
        <li>Pourcentage d employes locaux</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>9. Conclusion</h3>
      <p>
        Le module de gestion du PAAS constitue un outil central du Plan d Analyse et d Actions Sociales.
        Sa bonne utilisation permet d assurer une gestion proactive des risques, une meilleure protection
        des personnes vulnerables et une conformite durable aux exigences du Compact MCA Benin Regional.
      </p>
    </section>
  </article>
);

const PasGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module PAS (Plans d Action GESSS) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module PAS (Plans d Action GESSS) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
          'Prerequis: un compte Microsoft 365 actif avec les droits d acces au module, un navigateur web recent (Edge, Chrome, Firefox).'
        ]
      },
      {
        title: '2. Acces au module',
        paragraphs: [
          'Pour acceder au module, connectez-vous au portail SIP via votre compte Microsoft 365. Depuis le tableau de bord principal, cliquez sur la tuile correspondant au module.',
          'Vous pouvez egalement acceder directement au module via l URL fournie par l administrateur.'
        ]
      },
      {
        title: '3. Tableau de bord',
        paragraphs: [
          'L ecran d accueil du module PAS affiche un tableau de bord synthetique avec les indicateurs principaux, les derniers elements enregistres, et des filtres de recherche rapide.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Creation de plans d action',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.2 Affectation d actions a des responsables',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.3 Suivi d avancement (statut, echeances)',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.4 Definition de priorites',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.5 Generation de rapports de suivi',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.6 Notifications de rappel d echeance',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.7 Cloture d action avec justificatif',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '5. Roles et droits d acces',
        paragraphs: ['Les roles disponibles dans le module sont:'],
        bullets: [
          'Contributeur: creation, modification, consultation des donnees du module',
          'Lecteur: consultation seule des donnees du module',
          'Administrateur: toutes les permissions + configuration du module'
        ]
      },
      {
        title: '6. Bonnes pratiques',
        paragraphs: ['Pour garantir une utilisation optimale du module:'],
        bullets: [
          'Renseigner tous les champs obligatoires pour garantir la qualite des donnees',
          'Mettre a jour regulierement le statut des elements en cours',
          'Utiliser les filtres de recherche pour retrouver rapidement les informations',
          'Verifier la coherence des donnees avant validation',
          'Exporter regulierement les rapports pour le suivi',
          'Signaler tout dysfonctionnement a l equipe support'
        ]
      },
      {
        title: '7. Resolution des problemes courants',
        paragraphs: ['En cas de difficulte, consultez les solutions suivantes:'],
        bullets: [
          'Impossible d acceder au module: verifier vos droits d acces aupres de l administrateur',
          'Les donnees ne s affichent pas: rafraichir la page ou vider le cache du navigateur',
          'Erreur lors de l enregistrement: verifier que tous les champs obligatoires sont remplis',
          'Le rapport ne se genere pas: verifier la connexion internet et reessayer'
        ]
      },
      {
        title: '8. Support et assistance',
        paragraphs: [
          'Pour toute question ou difficulte, contactez l equipe technique du SIP via le canal de support dedie.',
          'Fournissez une description detaillee du probleme, accompagnee de captures d ecran si possible.'
        ]
      }
    ]}
  />
);

const PasDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module PAS (Plans d Action GESSS) du SIP MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module PAS (Plans d Action GESSS) fait partie du Systeme d Information du Programme (SIP) deploye dans le cadre du programme MCA-Benin Regional. Ce module permet la gestion centralisee et le suivi de l ensemble des donnees relatives a la thematique plans d action GESSS.',
          'Architecture: Power Apps Canvas + Dataverse. Couche de donnees: Dataverse (Environnement PROD). Automatisation: Power Automate. Reporting: Power BI / Tableaux de bord integres. Notifications: Microsoft Outlook.'
        ]
      },
      {
        title: '2. Modele de donnees',
        paragraphs: ['Le module s appuie sur les entites Dataverse suivantes:'],
        bullets: [
          'Plans d action: stockage et gestion des donnees de type plans d action',
          'Actions: stockage et gestion des donnees de type actions',
          'Responsables: stockage et gestion des donnees de type responsables',
          'Echeances: stockage et gestion des donnees de type echeances',
          'Justificatifs: stockage et gestion des donnees de type justificatifs'
        ]
      },
      {
        title: '3. Interfaces utilisateur',
        paragraphs: ['Le module propose les ecrans suivants:'],
        bullets: [
          'Tableau de bord des plans',
          'Liste des actions',
          'Formulaire de creation',
          'Fiche de suivi'
        ]
      },
      {
        title: '4. Fonctionnalites',
        paragraphs: ['Les fonctionnalites principales du module sont:'],
        bullets: [
          'Creation de plans d action',
          'Affectation d actions a des responsables',
          'Suivi d avancement (statut, echeances)',
          'Definition de priorites',
          'Generation de rapports de suivi',
          'Notifications de rappel d echeance',
          'Cloture d action avec justificatif'
        ]
      },
      {
        title: '5. Flux d automatisation',
        paragraphs: ['Les workflows Power Automate suivants sont configures:'],
        bullets: [
          'Rappel d echeance',
          'Notification d affectation',
          'Alerte de retard'
        ]
      },
      {
        title: '6. Integrations externes',
        paragraphs: [
          'Integrations actuelles: Microsoft Outlook (notifications par e-mail), Dataverse (stockage centralise), Power BI (reporting).'
        ]
      },
      {
        title: '7. Environnements de deploiement',
        paragraphs: ['Le module est deploye sur trois environnements:'],
        bullets: [
          'DEV: solution non-geree (Unmanaged) -- Application + Tableau de bord',
          'TEST: solution geree (Managed) -- Application + Tableau de bord',
          'PROD: solution geree (Managed) -- Application + Tableau de bord'
        ]
      },
      {
        title: '8. Checklist de deploiement',
        paragraphs: ['Verifications avant mise en production:'],
        bullets: [
          'Donnees: tables avec colonnes correctes, index configures, permissions et roles configures',
          'Application: variables d environnement configurees, references de connexion verifiees, tests fonctionnels passes',
          'Workflows: flux actives et testes',
          'Securite: aucun secret en dur dans le code'
        ]
      }
    ]}
  />
);

const pasPages: Record<SectionId, React.ComponentType> = {
  'note-technique': PasNoteTechniquePage,
  'guide-utilisateur': PasGuideUtilisateurPage,
  'documentation-technique': PasDocumentationTechniquePage
};

export default pasPages;
