import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const EppNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module informatique de gestion des Parties Prenantes et des Activites d Engagement (EPP)
    </p>

    <section className="cdoc-block">
      <h3>Introduction</h3>
      <p>
        La mise en oeuvre du Plan d Engagement des Parties Prenantes (PEPP) du MCA-Benin Regional,
        couvrant les projets <strong>Infrastructure Corridor (IC)</strong> et <strong>Efficacite des
        Operations du Corridor (EOC)</strong>, necessite un dispositif structure, tracable et harmonise
        de gestion des parties prenantes et des activites d engagement.
      </p>
      <p>Le module propose vise a:</p>
      <ul>
        <li>centraliser l ensemble des informations relatives aux parties prenantes;</li>
        <li>structurer la planification et la mise en oeuvre des activites d engagement;</li>
        <li>automatiser le calcul des indicateurs PEPP;</li>
        <li>faciliter le suivi, le reporting et l aide a la decision.</li>
      </ul>
      <p>
        Ce module est concu comme <strong>un module integre</strong> au SGESSS, tout en pouvant
        fonctionner de maniere autonome sur le perimetre EPP.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>1. Objectifs du module</h3>
      <h4>1.1 Objectif general</h4>
      <p>
        Mettre a disposition du MCA-Benin Regional un outil numerique integre permettant de
        planifier, suivre, analyser et rapporter l ensemble des activites d engagement des parties
        prenantes, conformement au PEPP.
      </p>
      <h4>1.2 Objectifs specifiques</h4>
      <ul>
        <li>Centraliser et structurer la base de donnees des parties prenantes du programme</li>
        <li>Standardiser la planification des activites EPP (par projet, par categorie, par zone, etc.)</li>
        <li>Documenter rigoureusement la mise en oeuvre des activites (qualitative et quantitative)</li>
        <li>Produire automatiquement les indicateurs PEPP</li>
        <li>Generer des tableaux de bord analytiques et de joindre des rapports</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>2. Architecture generale du module</h3>
      <p>Le module est structure autour de <strong>deux grandes parties complementaires</strong>:</p>
      <ol>
        <li><strong>Partie 1: Base de donnees des parties prenantes</strong></li>
        <li>
          <strong>Partie 2: Gestion des activites d engagement</strong>, subdivisee en:
          <ul>
            <li>Volet 1: Planification des activites</li>
            <li>Volet 2: Mise en oeuvre et rapportage des activites</li>
          </ul>
        </li>
      </ol>
      <p>Un <strong>dashboard transversal</strong> permet l analyse consolidee des donnees.</p>
    </section>

    <section className="cdoc-block">
      <h3>3. Partie 1 -- Base de donnees des parties prenantes</h3>
      <h4>3.1 Principe general</h4>
      <p>
        Les parties prenantes sont creees une seule fois, de maniere unique et centralisee,
        puis reutilisees dans toutes les activites d engagement. Elles peuvent faire l objet
        d actualisation.
      </p>
      <h4>3.2 Typologie des parties prenantes</h4>
      <p>Le module doit permettre de classer les parties prenantes selon:</p>
      <ul>
        <li>Categories</li>
        <li>Sous-categories si necessaire</li>
      </ul>
      <h4>3.3 Donnees a renseigner</h4>
      <p>Pour chaque partie prenante:</p>
      <ul>
        <li>Identification: nom / structure / type / categorie / sous-categorie</li>
        <li>Niveau d importance et d influence</li>
        <li>Niveau d engagement selon les criteres d implication, de consultation et d information</li>
        <li>Coordonnees completes (telephone, email, adresse, site web)</li>
        <li>Structure tutelle</li>
        <li>Point(s) focal(aux)</li>
        <li>Geolocalisation: commune, arrondissement, village/quartier</li>
      </ul>
      <p>Cette base constitue <strong>le socle du module</strong>.</p>
    </section>

    <section className="cdoc-block">
      <h3>4. Partie 2 -- Gestion des activites d engagement</h3>
      <h4>4.1 Volet 1: Planification des activites</h4>
      <p>Une activite planifiee peut:</p>
      <ul>
        <li>concerner une ou plusieurs categories de parties prenantes;</li>
        <li>etre liee a un projet specifique (IC ou EOC) et une ou plusieurs activites rattachees;</li>
        <li>etre transversale aux deux projets.</li>
      </ul>
      <p>Chaque activite d engagement planifiee comprend:</p>
      <ul>
        <li>Categorie (Action institutionnelle, Interaction communautaire)</li>
        <li>Intitule de l activite</li>
        <li>Type d activite (information, consultation, concertation, formation, dialogue institutionnel, etc.)</li>
        <li>Objectif de l activite (aligne PEPP)</li>
        <li>Projet concerne (IC, EOC, ou transversal)</li>
        <li>Zone geographique (commune, arrondissement, village/quartier)</li>
        <li>Partie prenante responsable de mise en oeuvre</li>
        <li>Les parties prenantes associees</li>
        <li>Periode prevue: date de debut, date de fin</li>
        <li>Statut initial: planifiee</li>
      </ul>

      <h4>4.2 Volet 2: Mise en oeuvre et rapportage</h4>
      <p>
        Chaque activite mise en oeuvre est automatiquement liee a une activite planifiee,
        avec un statut: Realisee ou Reportee. Ce lien permet le suivi des ecarts planification/execution.
      </p>
      <p>Avant toute donnee chiffree, le module impose une description narrative structuree, precisant:</p>
      <ul>
        <li>le deroulement de l activite</li>
        <li>les methodes utilisees</li>
        <li>les interactions avec les parties prenantes</li>
        <li>les principaux messages cles</li>
        <li>les difficultes rencontrees</li>
      </ul>
      <p>Les donnees quantitatives sont saisies selon une logique:</p>
      <ul>
        <li>Totaux agreges: nombre total de participants (somme des participants H / F)</li>
        <li>Desagregation: hommes / femmes, personnes vulnerables, type de parties prenantes, presence des autorites locales</li>
      </ul>
      <p>Possibilite de joindre: rapports narratifs, listes de presence, photos, proces-verbaux.</p>
    </section>

    <section className="cdoc-block">
      <h3>5. Gestion des indicateurs EPP</h3>
      <p>Les indicateurs sont <strong>calcules automatiquement</strong> a partir des donnees saisies.</p>

      <h4>A. Indicateurs de volume et de couverture des activites EPP</h4>
      <ol>
        <li>Nombre total d activites d engagement realisees, ventile par type d activite</li>
        <li>Nombre total d activites d engagement realisees, par commune</li>
        <li>Nombre d activites d engagement realisees, ventile par commune et par type d activite</li>
        <li>Nombre d activites d engagement realisees avec les autorites locales, ventile par commune et par type d activite</li>
      </ol>

      <h4>B. Indicateurs de participation (quantitatifs desagreges)</h4>
      <ol start={5}>
        <li>Nombre total de participants aux activites d engagement, par commune</li>
        <li>Nombre de participantes femmes aux activites d engagement, par commune</li>
        <li>Nombre de participants hommes aux activites d engagement, par commune</li>
        <li>Nombre de participants issus de groupes vulnerables, par commune</li>
      </ol>

      <h4>C. Indicateurs de parties prenantes engagees</h4>
      <ol start={9}>
        <li>Nombre total de parties prenantes identifiees et effectivement engagees</li>
        <li>Nombre de parties prenantes identifiees et engagees, par commune</li>
      </ol>

      <h4>D. Indicateurs de qualite et d intensite de l engagement</h4>
      <ol start={11}>
        <li>Taux de realisation des activites EPP planifiees (%)</li>
        <li>Nombre moyen de participants par activite EPP</li>
        <li>Taux de participation des femmes (%) aux activites EPP</li>
        <li>Taux de participation des groupes vulnerables (%) aux activites EPP</li>
      </ol>
      <p>Les indicateurs sont alignes sur le PEPP et alimentent directement le dashboard.</p>
    </section>

    <section className="cdoc-block">
      <h3>6. Dashboard et aide a la decision</h3>
      <h4>6.1 Tableau de bord standard</h4>
      <ul>
        <li>Graphiques automatiques</li>
        <li>Tableaux de synthese</li>
        <li>Indicateurs cles</li>
      </ul>
      <h4>6.2 Outil d aide a la decision</h4>
      <p>Filtres dynamiques pour les activites d engagement par:</p>
      <ul>
        <li>projet (IC / EOC)</li>
        <li>periode</li>
        <li>commune</li>
        <li>partie prenante principale</li>
        <li>categorie de parties prenantes</li>
        <li>type d activite</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>7. Gestion des utilisateurs et roles</h3>
      <p>Le module prevoit plusieurs profils:</p>
      <ul>
        <li>MCA</li>
        <li>MOSES</li>
        <li>ALC</li>
        <li>Consultants</li>
        <li>Entreprises</li>
        <li>Acces lecture seule</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Reporting</h3>
      <p>Le module permet:</p>
      <ul>
        <li>la visualisation des donnees</li>
        <li>l affichage des indicateurs</li>
      </ul>
    </section>
  </article>
);

const EppGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module EPP (Engagement des Parties Prenantes) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module EPP (Engagement des Parties Prenantes) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
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
          'L ecran d accueil du module EPP affiche un tableau de bord synthetique avec les indicateurs principaux, les derniers elements enregistres, et des filtres de recherche rapide.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Planification d activites d engagement',
        paragraphs: [
          'Depuis l ecran d accueil, cliquez sur le bouton d action correspondant. Vous etes ensuite redirige vers l ecran qui liste les activites d engagement des parties prenantes planifiees.',
          'L ecran du registre des activites d engagement presente:'
        ],
        bullets: [
          'Liste des activites d engagement planifiees',
          '+Nouvelle activite: le bouton qui permet de planifier une activite d engagement',
          'La barre des filtres: parties prenantes, type d engagement, projet, date de debut, date de fin',
          'Le bouton detail: acces aux details de l activite d engagement planifiee',
          'Menu: navigation entre les ecrans de l application'
        ]
      },
      {
        title: '4.2 Renseigner la mise en oeuvre de l activite d engagement',
        paragraphs: [
          'Pour renseigner la mise en oeuvre, accedez aux details de l activite d engagement depuis le registre.',
          'L ecran de detail presente les informations detaillees de l activite d engagement planifiee et le bouton "+Informer sur la mise en oeuvre" qui permet de renseigner les informations liees a la mise en oeuvre.',
          'Le formulaire de mise en oeuvre comprend les champs a remplir, un bouton Creer pour enregistrer et un bouton Annuler pour reinitialiser.'
        ],
        bullets: [
          'Formulaire avec les champs a remplir pour la mise en oeuvre de l activite',
          'Creer: enregistrer les informations de la mise en oeuvre',
          'Annuler: reinitialiser les informations du formulaire',
          'Note: lorsqu une activite a ete mise en oeuvre, il n y a plus de possibilite de modifier les informations. Le bouton modifier n est disponible que lorsque l activite n a pas encore ete mise en oeuvre'
        ]
      },
      {
        title: '4.3 Creation des parties prenantes',
        paragraphs: [
          'Pour creer une partie prenante, cliquez sur le bouton Partie prenantes depuis la page d accueil. Vous accedez a l ecran qui liste toutes les parties prenantes disponibles dans le systeme.',
          'L ecran des parties prenantes presente:'
        ],
        bullets: [
          'Liste des parties prenantes enregistrees dans le systeme',
          'Filtres disponibles: nom de la partie prenante, type de partie prenante, categorie',
          '+Nouveau: acces au formulaire de creation d une partie prenante'
        ]
      },
      {
        title: '4.3.1 Formulaire de creation',
        paragraphs: [
          'Lors de la creation, il faut choisir le type de partie prenante: Morale ou Physique. En fonction du type selectionne, le formulaire adapte les champs affiches.',
          'Pour une partie prenante de type Morale:'
        ],
        bullets: [
          'Formulaire: remplir les informations du formulaire',
          'Annuler: reinitialiser les informations du formulaire',
          'Enregistrer: enregistrer la partie prenante',
          'Il est possible de consulter les details d une partie prenante existante'
        ]
      },
      {
        title: '4.4 Tableau de bord',
        paragraphs: [
          'Pour acceder au tableau de bord, cliquez sur le bouton Tableau de bord depuis la page d accueil.',
          'Vous serez redirige vers l ecran qui affiche les statistiques et indicateurs du module.'
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

const EppDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module EPP (Engagement des Parties Prenantes) du SIP MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'La mise en oeuvre du Plan d Engagement des Parties Prenantes (PEPP) du MCA-Benin Regional, couvrant les projets Infrastructure Corridor (IC) et Efficacite des Operations du Corridor (EOC), necessite un dispositif structure, tracable et harmonise de gestion des parties prenantes et des activites d engagement.',
          'Le module propose vise a centraliser les informations, structurer la planification, automatiser les indicateurs PEPP et faciliter le suivi et le reporting.'
        ]
      },
      {
        title: '2. Contexte et objectifs',
        paragraphs: [
          'Le Compact MCA-Benin Regional (202 millions USD de MCC + 204,15 millions USD de contrepartie beninoise) vise a ameliorer le corridor Cotonou-Niamey via deux projets: Infrastructure du Corridor (IC) et Efficacite des Operations du Corridor (EOC).',
          'Le present module a ete concu pour digitaliser l integralite du cycle de vie des activites d engagement, garantissant ainsi que chaque interaction est documentee, geolocalisee et suivie jusqu a sa realisation effective.'
        ]
      },
      {
        title: '2.1 Problematique',
        paragraphs: ['Avant le deploiement de cette solution, la gestion des parties prenantes se heurtait a plusieurs defis:'],
        bullets: [
          'Fragmentation des donnees: informations dispersees entre differents fichiers Excel et rapports papier',
          'Defaut de suivi: difficulte a identifier les engagements planifies n ayant pas fait l objet d un compte-rendu',
          'Complexite geographique: difficulte a visualiser la couverture des activites sur les differentes communes et arrondissements du projet'
        ]
      },
      {
        title: '2.2 Objectifs du module',
        paragraphs: ['Le module poursuit quatre objectifs principaux:'],
        bullets: [
          'Centralisation et standardisation: creer un referentiel unique pour toutes les parties prenantes et standardiser les types d activites',
          'Optimisation operationnelle (Workflow): automatiser le suivi des activites depuis la planification jusqu a la mise en oeuvre, avec systeme d alertes automatiques (rappels a 72h et 96h)',
          'Inclusion et conformite PEPP: mesurer la participation par genre (Hommes/Femmes) et l inclusion des groupes vulnerables',
          'Aide a la decision (Reporting): fournir des tableaux de bord en temps reel pour visualiser la repartition geographique et thematique des engagements'
        ]
      },
      {
        title: '3. Fonctionnalites principales',
        paragraphs: ['Le module s appuie sur une architecture Dataverse robuste, utilisant des relations N:1 et N:N pour garantir l integrite des donnees.'],
        bullets: [
          'Gestion referentielle des parties prenantes: segmentation des acteurs (Personnes Morales/Physiques), navigation relationnelle 360, profilage et securite',
          'Cycle de vie des engagements: planification structuree, gestion multi-activites, suivi de mise en oeuvre avec passage automatique de statut',
          'Intelligence geographique: saisie en cascade (Commune > Arrondissement > Village), isolation des donnees par module',
          'Automatisation et alertes: relances automatiques (72h et 96h), deep linking dans les notifications email',
          'Pilotage et analyse: indicateurs visuels dynamiques, analyse de couverture geographique, gestion documentaire'
        ]
      },
      {
        title: '4. Architecture et technologie',
        paragraphs: ['L architecture du module repose sur le socle Microsoft Power Platform, utilisant un modele de conception decouple ou les donnees, l interface et les processus sont geres par des services distincts mais totalement integres.']
      },
      {
        title: '4.1 Couche de donnees (Back-end): Microsoft Dataverse',
        paragraphs: ['Le module utilise Microsoft Dataverse comme systeme de gestion de base de donnees relationnelle:'],
        bullets: [
          'Modele relationnel: relations N:1 (Lookup) pour le zonage geographique et les points focaux, relations N:N pour lier un engagement a plusieurs activites',
          'Types de donnees avances: colonnes de type Fichier pour les pieces jointes, Choix globaux pour l uniformite des statuts, Auto-numerotation',
          'Logique serveur: utilisation des metadonnees Dataverse pour gerer la cascade des zones (Communes > Arrondissements > Villages)'
        ]
      },
      {
        title: '4.2 Couche presentation (Front-end): Power Apps Canvas',
        paragraphs: ['L interface utilisateur est developpee en Power Apps Canvas:'],
        bullets: [
          'Logique applicative (Power Fx): filtrage complexe, gestion des variables de contexte (UpdateContext) et globales (Set)',
          'Composants dynamiques: fenetres modales pour la saisie contextuelle, galeries interactives avec indicateurs visuels',
          'Deep linking: utilisation de la fonction Param() pour navigation directe vers une fiche specifique via un lien URL externe'
        ]
      },
      {
        title: '4.3 Couche service et workflow: Power Automate',
        paragraphs: ['L automatisation des processus metier est assuree par des flux Power Automate Cloud Flows:'],
        bullets: [
          'Flux planifies (Scheduled Flows): analyse quotidienne de la base de donnees pour identifier les rapports non deposes',
          'Requetes OData: optimisation des performances par l utilisation de filtres cote serveur',
          'Protocole SMTP/Office 365 (Connecteur Outlook): generation de notifications HTML riches envoyees automatiquement'
        ]
      },
      {
        title: '5. Modele de donnees Dataverse',
        paragraphs: [
          'Le module repose sur un schema relationnel normalise, structure autour de plusieurs tables (entites) interconnectees.',
          'Ce modele permet une tracabilite complete, de l identification de l acteur jusqu a la mise en oeuvre terrain.'
        ]
      },
      {
        title: '5.1 Architecture des tables principales',
        paragraphs: ['Le modele comprend trois tables principales:'],
        bullets: [
          'Table Partie_Prenante_Acteurs_1 (Referentiel des Acteurs): centralise toutes les organisations et les individus, avec relation d auto-reference (Self-Lookup) pour lier une Personne Morale a son Point Focal',
          'Table ActiviteEngagements (Planification des Engagements): gere le registre des engagements avec relations N:1 vers les acteurs et projets, et relation N:N avec la table des actions pour le suivi multi-sites',
          'Table LesActions (Mise en oeuvre et Suivi): stocke les comptes-rendus d execution et les preuves de realisation, avec colonnes de type Fichier pour l archivage natif'
        ]
      },
      {
        title: '5.2 Referentiels transversaux',
        paragraphs: ['Le modele s appuie egalement sur des tables de support:'],
        bullets: [
          'Table Zones (Hierarchie Geographique): relation recursive (Zone Parente) pour modeliser la structure administrative, avec champ de filtrage par module (GLOBAL vs EPP_PROJET)',
          'Table ActeurPartiePrenants (Profilage Utilisateur): correspondance entre les comptes Utilisateurs Systeme (Dataverse SystemUser) et les structures autorisees'
        ]
      },
      {
        title: '5.3 Logique des relations et integrite',
        paragraphs: ['Le modele de donnees implemente trois types de liens critiques:'],
        bullets: [
          'Relations N:1 (Lookups): garantissent que chaque activite est rattachee a une commune et un projet existant',
          'Relations N:N (Relate/Unrelate): flexibilite pour qu un engagement global puisse etre decline en plusieurs actions locales',
          'Cascade Delete / Restrict: configuration des comportements relationnels pour empecher la suppression d une commune ou d un acteur si des activites y sont rattachees'
        ]
      },
      {
        title: '6. Couches et environnements',
        paragraphs: ['Le module est organise en couches techniques:'],
        bullets: [
          'Interface: Power Apps (Application Canvas)',
          'Donnees: Dataverse (PROD ZONE)',
          'Automatisation: Power Automate (envoi de notifications de rappel)',
          'Reporting: Power Apps (Code)',
          'Integrations: Outlook (envoi des notifications par e-mail)'
        ]
      },
      {
        title: '6.1 Environnements',
        paragraphs: ['Le module est deploye sur trois environnements:'],
        bullets: [
          'DEV: solution non-geree pour le developpement',
          'TEST: solution geree pour les tests',
          'PROD: solution geree pour la production'
        ]
      },
      {
        title: '7. Ecrans de l application',
        paragraphs: ['L application comprend les ecrans suivants:'],
        bullets: [
          'Tableau de bord: affichage des statistiques avec les donnees de l application',
          'Liste des parties prenantes (scrListePP): affichage avec options de recherche et filtrage',
          'Formulaire de creation d une partie prenante (screenFormActeur): creation avec donnees issues de Zone, Categorie_Partie_Prenantes, SousCategoriePartiePrenante',
          'Liste des activites d engagement planifiees: affichage des activites d engagement',
          'Registre des activites d engagement (screenFormActiviteEngagement): creation avec donnees issues de ActiviteEngagements, Activites, Partie_Prenante_Acteurs, Projets'
        ]
      },
      {
        title: '8. Automatisations / Flux',
        paragraphs: ['Le module utilise un flux Power Automate:'],
        bullets: [
          'Reminder_notification: declenche lors de la creation d une activite d engagement, envoie une notification de rappel par mail 72 heures apres la creation'
        ]
      },
      {
        title: '9. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production:'],
        bullets: [
          'Donnees: tables/listes creees avec colonnes correctes, index configures',
          'Application: variables d environnement configurees, Connection References OK, tests fonctionnels passes',
          'Flux: flux actives et testes',
          'Integrations: connexions externes verifiees (N/A)',
          'Securite: aucun secret en dur dans le code'
        ]
      }
    ]}
  />
);

const eppPages: Record<SectionId, React.ComponentType> = {
  'note-technique': EppNoteTechniquePage,
  'guide-utilisateur': EppGuideUtilisateurPage,
  'documentation-technique': EppDocumentationTechniquePage
};

export default eppPages;
