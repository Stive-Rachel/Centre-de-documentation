import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const SigNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const SigGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module SIG (Systeme d Information Geographique) integre au Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Novembre 2025."
    blocks={[
      {
        title: '1. Introduction et contexte',
        paragraphs: [
          'Le present document decrit comment utiliser le SIG sur le SIP et constitue le manuel d utilisation du volet SIG sur le SIP.',
          'Le SIG a ete mis en place dans le cadre de la mission MOSES d appui a la gestion du programme MCA Benin Regional. Il permet la visualisation de toutes les representations spatiales de toutes les composantes de la supervision environnementale et sociale.'
        ]
      },
      {
        title: '2. Objectifs du SIP et du SIG',
        paragraphs: [
          'Le SIP est construit avec pour objectif la gestion unifiee des documents et des donnees selon un referentiel de normalisation adapte au programme du MCA Benin Regional.',
          'Le volet SIG a pour but de permettre la visualisation de toutes les representations spatiales des composantes de la supervision environnementale et sociale.'
        ],
        bullets: [
          'Evenements de sante et securite : evenements pour lesquels sont enregistres des dommages corporels ou materiels',
          'Rapports d observation : observations faites lors des visites de site par MCA-Benin Regional et/ou le Consultant',
          'Registres des plaintes : toute plainte par une partie prenante sera enregistree',
          'Recensements, evaluation des biens, inventaire des biens et autres donnees relatives a la procedure de reinstallation',
          'Suivi de reportage en temps reel'
        ]
      },
      {
        title: '3. Architecture du SIP',
        paragraphs: [
          'La construction de la plateforme repose sur l utilisation de technologies modernes de gestion de programme et de projets. Le choix a ete porte sur la plateforme Microsoft 365 et Microsoft Project.',
          'La solution integre les composants suivants :'
        ],
        bullets: [
          'Microsoft Project Online : gestion des portefeuilles et des projets',
          'SharePoint Online : gestion documentaire et collaboration entre les equipes',
          'Power BI : production des tableaux de bord analytiques',
          'ArcGIS for Microsoft 365 et ArcGIS Online : gestion des donnees geospatiales et creation de cartes interactives'
        ]
      },
      {
        title: '4. Interface du SIG sur le SIP',
        paragraphs: [
          'Le SIG sur le SIP permet de visualiser diverses donnees : conception routiere, PAR-PRMS, plaintes, incidents/accidents et l evolution de la construction.',
          'L environnement cartographique offre un ensemble d outils pour interagir avec les couches de donnees geographiques.'
        ]
      },
      {
        title: '5. Gestion des couches',
        paragraphs: [
          'Dans le SIG, vous pouvez utiliser la fenetre Couches (Layers) pour ajouter des couches, leur appliquer un style et reorganiser l ordre dans lequel elles sont affichees.',
          'Pour afficher la fenetre Couches, cliquez sur le bouton Couches dans les outils cartographiques. Chaque couche dans une carte est representee dans l onglet Couches.'
        ],
        bullets: [
          'Developper le contenu de la couche : developper ou reduire la legende de la couche',
          'Indicateur de couche active : identifier la couche active',
          'Symbologie : ouvrir les options de symbologie et selectionner le type de symbole',
          'Nom de la couche : afficher le nom de la couche',
          'Options de style : acceder aux options de style des symboles, activer l agregation et ajuster la transparence',
          'Proprietes de la couche : activer les fenetres contextuelles, la plage visible, les etiquettes et la transparence',
          'Editeur : acceder a l outil Editeur pour modifier les couches editables',
          'Ajouter : ajouter des bibliotheques de documents et listes SharePoint geocodees ou du contenu ArcGIS Online',
          'Partager la couche : partager la couche avec votre organisation ArcGIS',
          'Masquer la couche : cliquer pour masquer ou afficher la couche'
        ]
      },
      {
        title: '6. Roles et droits d acces',
        paragraphs: ['Les roles disponibles dans le module sont :'],
        bullets: [
          'Administrateur : gestion complete de la plateforme et des permissions',
          'Contributeur SIG : ajout et modification des couches de donnees geographiques',
          'Lecteur : consultation seule des cartes et des donnees geographiques'
        ]
      },
      {
        title: '7. Bonnes pratiques',
        paragraphs: ['Pour garantir une utilisation optimale du module :'],
        bullets: [
          'Verifier la qualite des donnees de geolocalisation avant l integration',
          'Utiliser les filtres de couches pour afficher uniquement les donnees pertinentes',
          'Exporter les cartes pour le reporting et la communication',
          'Signaler tout dysfonctionnement a l equipe support'
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

const SigDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module SIG (Systeme d Information Geographique) du SIP MCA-Benin Regional, son architecture, ses fonctionnalites et ses donnees. Version 1.0 -- Novembre 2025."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module SIG est le composant du Systeme d Information du Programme (SIP) dedie a la gestion des donnees geographiques et a la cartographie. Il s appuie sur ArcGIS Online et ArcGIS for Microsoft 365 pour la visualisation des representations spatiales des activites du programme.',
          'Le SIG integre toutes les couches disponibles pour localiser les zones d habitation, les routes, les communes, les arrondissements, les villages, les zones forestieres, les reseaux de distribution et les aires protegees.'
        ]
      },
      {
        title: '2. Contexte et objectifs',
        paragraphs: [
          'Dans le cadre de la mission MOSES d appui a la gestion du programme MCA Benin Regional, SOFRECO met en place un ensemble d outils informatiques pour le suivi et la gestion des activites de realisation du programme.',
          'L integration du SIG au SIP permet d afficher la representation spatiale des operations relevant de la realisation des activites du programme, que cela soit avant ou lors de l execution des travaux de construction routiere ou des travaux ayant un impact sur l environnement ou sur les Personnes Affectees par le Programme (PAP).'
        ],
        bullets: [
          'Normaliser et faciliter l acquisition des donnees de geolocalisation',
          'Stocker les donnees relatives aux objets a geolocaliser',
          'Verifier la qualite des donnees',
          'Permettre la visualisation des couches relatives aux etudes et a la supervision environnementale et sociale',
          'Aider a la decision pour la resolution des plaintes, problemes et incidents',
          'Favoriser la communication avec les acteurs et les parties prenantes'
        ]
      },
      {
        title: '3. Identification des donnees',
        paragraphs: ['Les donnees relatives aux couches a integrer dans le SIG proviennent principalement des sources suivantes :'],
        bullets: [
          'Etudes et enquetes des intervenants directs du programme MCA-Benin Regional (donnees PAR/PRMS de MSA, donnees de conception routiere de STUDI)',
          'Donnees de l IGN Benin : limites des communes, localites impactees, zones ou aires protegees',
          'Donnees des concessionnaires de reseaux de distribution (SBIN, ANAEPMR, SONEB, SBEE et CEB)',
          'Donnees concernant les couches geologiques couvrant la zone du projet',
          'Fonds cartographiques d ESRI (basemap)'
        ]
      },
      {
        title: '4. Donnees de conception routiere',
        paragraphs: ['Les differentes couches creees a partir des donnees de conception routiere montrent les elements constitutifs d une route :'],
        bullets: [
          'Emprise et accotement',
          'Chaussee et marquages au sol',
          'Voie de stationnement et trottoir',
          'Ouvrages hydrauliques et ouvrages d art',
          'Voie cyclable et terre-plein central'
        ]
      },
      {
        title: '5. Donnees PAR/PRMS',
        paragraphs: [
          'Les donnees du PAR/PRMS produites par le cabinet MS et Associes representent spatialement les biens des Personnes potentiellement Affectees par le Projet (PAP) sous deux formes :'],
        bullets: [
          'Les biens ponctuels : arbres, plantations, etalages mobiles, divinites',
          'Les biens surfaciques : terres agricoles, terres, maisons, terrasses'
        ]
      },
      {
        title: '6. Architecture et technologie',
        paragraphs: ['Le module SIG repose sur les technologies suivantes :'],
        bullets: [
          'ArcGIS Online : plateforme SaaS pour la gestion des donnees geospatiales',
          'ArcGIS for Microsoft 365 : integration avec la plateforme Microsoft 365',
          'Composants principaux : couches thematiques, cartes interactives, outils d analyse spatiale',
          'Integration avec les modules Power Apps via les coordonnees de geolocalisation'
        ]
      },
      {
        title: '7. Metadonnees',
        paragraphs: [
          'Le systeme de gestion du SIG est documente avec les metadonnees en utilisant le format US federal, comme decrit dans la Circulaire 16-A OMB18 du Federal Geographic Data Committee (FGDC).',
          'Les metadonnees permettent de decrire les ensembles de donnees des cartes thematiques et de garantir leur qualite et leur tracabilite.'
        ]
      },
      {
        title: '8. Procedure d echange des donnees',
        paragraphs: ['Le module prevoit des procedures d echange et de mise a jour des donnees :'],
        bullets: [
          'Procedures d echange des donnees entre les differents intervenants du programme',
          'Regles pour le maintien et l ajout des donnees dans le SIG',
          'Verification de la qualite des donnees avant integration',
          'Validation des couches thematiques par les responsables de modules'
        ]
      },
      {
        title: '9. Configuration et licences',
        paragraphs: ['Le module SIG necessite les licences et configurations suivantes :'],
        bullets: [
          'Licence ArcGIS Online pour l acces aux fonctionnalites de cartographie',
          'Licence ArcGIS for Microsoft 365 pour l integration avec SharePoint et Teams',
          'Configuration du compte d organisation ArcGIS sur le tenant mosesmcareg'
        ]
      },
      {
        title: '10. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production :'],
        bullets: [
          'Donnees : couches thematiques creees et validees, metadonnees renseignees',
          'Application : compte d organisation ArcGIS configure, licences attribuees',
          'Integration : liens vers le SIG accessibles depuis le portail SIP',
          'Securite : permissions configurees par groupe dans ArcGIS Online',
          'Formation : sessions utilisateurs realisees'
        ]
      }
    ]}
  />
);

const sigPages: Record<SectionId, React.ComponentType> = {
  'note-technique': SigNoteTechniquePage,
  'guide-utilisateur': SigGuideUtilisateurPage,
  'documentation-technique': SigDocumentationTechniquePage
};

export default sigPages;
