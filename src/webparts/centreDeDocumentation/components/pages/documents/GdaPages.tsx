import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const GdaNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module informatique de Gestion des Accidents (GDA)
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Dans le cadre de la mise en oeuvre du Systeme de Gestion Environnementale, Sociale,
        de Sante et Securite (SGESSS) du Compact Regional de MCA Benin, il est necessaire de
        disposer d un module structure et harmonise permettant la <strong>declaration</strong>,
        le <strong>suivi</strong> et le <strong>traitement</strong> des accidents.
      </p>
      <p>
        Ce module repond aux exigences reglementaires nationales (Code de la Securite Sociale
        du Benin) ainsi qu aux normes internationales, notamment les <strong>Normes de Performance
        de la SFI</strong> et les <strong>Directives Environnementales, Sanitaires et Securitaires
        (EHS)</strong>.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objectifs de la note technique</h3>
      <p>La presente note technique vise a:</p>
      <ul>
        <li>Decrire l architecture fonctionnelle du module de declaration et de traitement des accidents</li>
        <li>Definir les informations cles a collecter pour une gestion efficace des evenements indesirables portant atteinte a l integrite physique des personnes impliquees</li>
        <li>Clarifier le processus de declaration, de traitement, de validation et de cloture</li>
        <li>Garantir la tracabilite, la conformite reglementaire et la production d indicateurs fiables</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>
        Le module s applique a l ensemble des projets IC (Infrastructure du Corridor) et EOC
        (Efficacite des Operations du Corridor) du Compact MCA Benin Regional et concerne:
      </p>
      <ul>
        <li>Les travailleurs du Compact et des entreprises sous-traitantes</li>
        <li>Les usagers de la route</li>
        <li>Les riverains (avec mention speciale sur les membres des communautes affectees)</li>
      </ul>
      <p>Les acteurs concernes sont: MCC, MCA Benin Regional, MOSES, Ingenieur, Entrepreneurs.</p>
    </section>

    <section className="cdoc-block">
      <h3>4. Definitions cles</h3>
      <p>
        <strong>Accident</strong>: Evenement soudain et imprevu survenu par le fait ou a l occasion
        du travail, ou dans le cadre des activites du projet, entrainant une atteinte a l integrite
        physique d une ou plusieurs personnes.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>5. Description fonctionnelle du module</h3>
      <h4>5.1 Acces au module</h4>
      <p>
        L acces est reserve aux personnes designees par leurs organismes respectifs et disposant
        d un profil valide sur la plateforme SGESSS. L authentification se fait par un identifiant
        et un mot de passe securise.
      </p>

      <h4>5.2 Declaration des accidents (24h maximum apres survenu de l accident)</h4>
      <p>Le module permet:</p>
      <ul>
        <li>La saisie des informations generales sur le declarant</li>
        <li>La localisation geographique precise de l accident (adresse et carte)</li>
        <li>L identification de la ou des victimes (travailleurs, usagers, riverains)</li>
        <li>La classification de la gravite (mineure a catastrophique)</li>
        <li>La description des circonstances, causes et actions correctives immediates</li>
        <li>Le telechargement des preuves (photos, rapports, certificats medicaux)</li>
      </ul>
      <p>
        Toute declaration validee est automatiquement enregistree dans le <strong>registre des
        accidents</strong> et genere des notifications par courriel aux parties concernees.
      </p>

      <h4>5.3 Traitement des accidents</h4>
      <p>Le traitement comprend:</p>
      <ul>
        <li>Une phase d enquete et de complement d informations (delai 48h maximales apres survenu de l accident, une notification de rappel sera generee par la plateforme toutes les 48h a l endroit des parties prenantes concernees jusqu a la cloture de l accident)</li>
        <li>La verification des declarations reglementaires (CNSS, assurance, certificat medical)</li>
        <li>L analyse de l accident et la definition de mesures correctives et preventives</li>
        <li>La validation par l Ingenieur et la cloture par MOSES</li>
      </ul>
      <p>En cas de non-respect des delais ou procedures, des non-conformites peuvent etre emises.</p>
    </section>

    <section className="cdoc-block">
      <h3>6. Roles et responsabilites</h3>
      <ul>
        <li><strong>Declarants</strong> (Entrepreneur, Ingenieur, MOSES, MCA Ben Reg, MCC): saisie fidele et rapide des informations; investigation et fourniture des preuves</li>
        <li><strong>Ingenieur</strong>: analyse, validation ou demande de complements, ou emission de Non-conformite (pour les accidents declares par une entreprise)</li>
        <li><strong>MOSES</strong>: controle de conformite, emission de NC, cloture</li>
        <li><strong>MCA Benin Regional</strong>: suivi et avis en general; analyse, validation ou demande de complements (pour les accidents declares par MOSES ou MCC)</li>
        <li><strong>MCC</strong>: suivi et avis en general; analyse, validation ou demande de complements (pour les accidents declares par MCA)</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>7. Resultats attendus</h3>
      <ul>
        <li>Amelioration de la prevention des accidents</li>
        <li>Effectuer un suivi rigoureux des accidents survenus</li>
        <li>Mieux cibler et reduire les risques</li>
        <li>Simplifier la gestion des donnees relatives aux accidents, de la declaration a la consolidation des donnees</li>
        <li>Rendre disponible des indicateurs fiables</li>
        <li>Conformite aux exigences nationales et internationales</li>
        <li>Renforcement de la culture sante-securite</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Indicateurs</h3>
      <ul>
        <li>Cumul des accidents pour tout le compact</li>
        <li>Nombre d accident par projet</li>
        <li>Nombre d accident par lot</li>
        <li>Nombre d accident par troncon</li>
        <li>Nombre d accident par PK</li>
        <li>Nombre d accident par organisme</li>
        <li>Nombre d accident par commune</li>
        <li>Nombre d accident de trajet par organisme</li>
        <li>Nombre d accident de trajet pour le compact</li>
        <li>Nombre d accident de travail par organisme</li>
        <li>Nombre d accident de travail par commune</li>
        <li>Nombre d accident de travail pour le compact</li>
        <li>Nombre d accident ayant implique des usagers de la route par projet</li>
        <li>Nombre d accident ayant implique des usagers de la route par lot</li>
        <li>Nombre d accident ayant implique des usagers de la route par troncon</li>
        <li>Nombre d accident ayant implique des usagers de la route par PK</li>
        <li>Nombre d accident ayant implique des riverains par projet</li>
        <li>Nombre d accident ayant implique des riverains par lot</li>
        <li>Nombre d accident ayant implique des riverains par troncon</li>
        <li>Nombre d accident ayant implique des riverains par PK</li>
        <li>Nombre d accident avec arret de travail pour le compact</li>
        <li>Nombre d accident avec arret de travail par projet</li>
        <li>Nombre d accident avec arret de travail par organisme</li>
        <li>Cumul des jours d arret de travail par projet</li>
        <li>Cumul des jours d arret de travail pour le compact</li>
        <li>Cumul des jours d arret de travail par organisme</li>
        <li>Nombre d accidents de travail (hommes / femmes) pour le compact</li>
        <li>Nombre d accidents de travail (hommes / femmes) par projet, par lot</li>
        <li>Nombre d accidents de travail (hommes / femmes) par organisme</li>
        <li>Nombre d accidents ayant implique des mineurs par organisme</li>
        <li>Nombre d accidents ayant implique des mineurs par commune</li>
        <li>Nombre d accident ayant implique des PAP simples par lot</li>
        <li>Nombre d accident ayant implique des PAP vulnerables par lot</li>
        <li>Nombre d accident par echelle de gravite</li>
        <li>Nombre d accident par Norme de Performance</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>9. Conclusion</h3>
      <p>
        Le module de declaration et de traitement des accidents constitue un outil central du
        SGESSS. Sa bonne utilisation permet d assurer une gestion proactive des risques, une
        meilleure protection des personnes et une conformite durable aux exigences du Compact
        MCA Benin Regional.
      </p>
    </section>
  </article>
);

const GdaGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module GDA (Gestion des Accidents) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module GDA (Gestion des Accidents) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
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
          'Le tableau de bord du module GDA affiche les indicateurs principaux.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Enregistrement de nouveaux accidents (etape 1)',
        paragraphs: [
          'Depuis l ecran d accueil, cliquez sur le bouton "+ Accident". Remplissez les champs du formulaire puis cliquez sur "Enregistrer" pour valider l operation.'
        ]
      },
      {
        title: '4.2 Saisie des informations complementaires (etape 2)',
        paragraphs: [
          'Depuis le formulaire, cliquez sur le bouton "Informations complementaires". Remplissez les champs obligatoires du formulaire, cliquez sur "Confirmer" et joignez les fichiers necessaires.',
          'Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.3 Premiere validation par l ingenieur (etape 3)',
        paragraphs: [
          'Ouvrir la declaration depuis le lien recu par mail. Examiner les informations et si les informations sont validees, cliquer sur "Valider".',
          'Sinon s il manque des informations, ecrire un commentaire dans l espace commentaires puis cliquer sur "Demande Actualisation".'
        ]
      },
      {
        title: '4.4 Validation finale par MOSES',
        paragraphs: [
          'Ouvrir la declaration depuis le lien recu par mail. Examiner les informations et si les informations sont conformes, cliquer sur "Cloturer".',
          'Sinon cliquer sur "Rejeter" pour emettre la non-conformite.'
        ]
      },
      {
        title: '5. Roles et droits d acces',
        paragraphs: ['Les roles disponibles dans le module sont:'],
        bullets: [
          'Entrepreneur: creation, modification, consultation des accidents',
          'Ingenieur: modification des etats et consultation des accidents',
          'MOSES: modification des etats et consultation des accidents',
          'MCA: consultation des accidents'
        ]
      },
      {
        title: '6. Bonnes pratiques',
        paragraphs: ['Pour garantir une utilisation optimale du module:'],
        bullets: [
          'Renseigner tous les champs obligatoires pour garantir la qualite des donnees',
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
          'Erreur lors de l enregistrement: verifier que tous les champs obligatoires sont remplis'
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

const GdaDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module GDA (Gestion des Accidents) du SGESSS MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Vue d ensemble',
        paragraphs: [
          'Le module Gestion des Accidents et Incidents est integre au SGESSS dans le cadre du Compact MCA-Benin Regional (Projet Infrastructure du Corridor -- IC). Il centralise la declaration, le suivi et la cloture de tout accident ou incident survenant sur les chantiers et leurs abords.',
          'Trois cibles sont couvertes: les travailleurs du Compact (Entrepreneur, Ingenieur, MOSES, MCA, MCC), les riverains des localites traversees par les projets, et les usagers de la route.'
        ]
      },
      {
        title: '1.1 Definitions',
        paragraphs: ['Les termes cles du module sont:'],
        bullets: [
          'Accident: evenement soudain et imprevu survenu par le fait ou a l occasion du travail, entrainant une lesion corporelle immediate ou differee. Dans le cadre du Compact: accident de travail / de trajet, accident impliquant des riverains ou des usagers de la route',
          'Incident: evenement indesirable n ayant pas entraine de dommage corporel mais susceptible de le provoquer; peut egalement designer un impact sur le materiel ou l environnement',
          'Declarant: personne habilitee a saisir une declaration (responsable S&S ou Coordonnateur ESSS de chaque organisme)',
          'Non-Conformite (N-C): signalement emis par MOSES en cas de non-respect du delai de completude ou de la procedure de declaration'
        ]
      },
      {
        title: '1.2 Architecture du module',
        paragraphs: ['Le module repose sur l architecture suivante:'],
        bullets: [
          'Interface: Power Apps (Application Canvas)',
          'Donnees: Dataverse (PROD ZONE)',
          'Automatisation: Power Automate -- Upload des documents',
          'Reporting: Power Apps (Code)',
          'Integrations: Outlook (envoi des notifications par e-mail)'
        ]
      },
      {
        title: '1.3 Environnements',
        paragraphs: ['Le module est deploye sur trois environnements:'],
        bullets: [
          'DEV: solution non-geree pour le developpement',
          'TEST: solution geree pour les tests',
          'PROD: solution geree pour la production'
        ]
      },
      {
        title: '2. Modele de Donnees',
        paragraphs: ['Le modele de donnees repose sur plusieurs tables Dataverse interconnectees:'],
        bullets: [
          'Accidents: enregistrement central de chaque declaration d accident ou incident (cle: ID Accident auto)',
          'Victimes: detail de chaque victime liee a un accident, 1 accident vers N victimes (cle: ID Victime auto)',
          'Temoins: temoins declares pour un accident donne (cle: ID Temoin auto)',
          'PiecesJointes: documents joints (photos, rapports, certificats medicaux) (cle: ID PJ auto)',
          'Commentaires: historique des commentaires et echanges sur un dossier (cle: ID Commentaire auto)',
          'UtilisateursSolution: profils des declarants habilites par organisme (cle: ID Utilisateur)',
          'Zone: referentiel geographique partage (Commune, Arrondissement, Village) (cle: ID Zone)'
        ]
      },
      {
        title: '2.1 Relations entre tables',
        paragraphs: ['Les relations entre tables sont les suivantes:'],
        bullets: [
          'Accidents vers Victimes (1:N): un accident peut impliquer plusieurs victimes',
          'Accidents vers Temoins (1:N): un accident peut avoir plusieurs temoins',
          'Accidents vers PiecesJointes (1:N): photos, rapports, certificats joints au dossier',
          'Accidents vers Commentaires (1:N): historique des echanges et mises a jour',
          'Accidents vers UtilisateursSolution (N:1): chaque accident est lie au declarant habilite',
          'Accidents vers Zone (N:1): localisation geographique via le referentiel Zone'
        ]
      },
      {
        title: '3. Interface - Ecrans',
        paragraphs: ['L application comprend les ecrans suivants:'],
        bullets: [
          'Tableau de bord: affichage des statistiques avec les donnees de l application (sources: Accidents, Victimes, UtilisateursSolution, Zone)',
          'Page d accueil: affichage des accidents avec des options de recherche et filtrage (sources: Accidents, UtilisateursSolution, Zone)',
          'Formulaire de gestion: depot et gestion des accidents (sources: Accidents, Victimes, Temoins, UtilisateursSolution, Zone, Commentaires, PiecesJointes)'
        ]
      },
      {
        title: '4. Automatisations / Flux',
        paragraphs: ['Le module utilise un flux Power Automate:'],
        bullets: [
          'Upload accident file: declenche par l Entrepreneur, permet l attachement de fichiers a un accident'
        ]
      },
      {
        title: '5. Integrations externes',
        paragraphs: ['N/A']
      },
      {
        title: '6. Variables de configuration',
        paragraphs: ['Le module utilise les variables suivantes:'],
        bullets: [
          'Accidents_App_url: URL de l application, utilisee pour l envoi des liens dans les e-mails',
          'Accidents_Environment_url: URL de l environnement Dynamics 365, utilisee pour le telechargement des fichiers'
        ]
      },
      {
        title: '7. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production:'],
        bullets: [
          'Donnees: tables/listes creees avec colonnes correctes, index configures',
          'Application: variables d environnement configurees, Connection References OK, tests fonctionnels passes',
          'Flux: flux actives et testes',
          'Integrations: connexions externes verifiees (N/A)',
          'Securite: aucun secret en dur dans le code'
        ]
      },
      {
        title: '8. Detail du Tableau de bord -- Indicateurs cles',
        paragraphs: ['Le tableau de bord presente les compteurs suivants, actualises en temps reel:'],
        bullets: [
          'Nombre d accidents impliquant des travailleurs du Compact',
          'Nombre d accidents impliquant des riverains',
          'Nombre d accidents impliquant des usagers de la route',
          'Nombre d accidents par niveau de gravite (Mineur, Moyen, Serieux, Majeur, Catastrophique / Deces)',
          'Nombre d accidents impliquant des femmes -- travailleurs, riveraines, usageres de la route',
          'Nombre de jours d arret de travail par organisme et par mois',
          'Nombre de jours d arret de travail cumule (tous organismes confondus) par mois'
        ]
      }
    ]}
  />
);

const gdaPages: Record<SectionId, React.ComponentType> = {
  'note-technique': GdaNoteTechniquePage,
  'guide-utilisateur': GdaGuideUtilisateurPage,
  'documentation-technique': GdaDocumentationTechniquePage
};

export default gdaPages;
