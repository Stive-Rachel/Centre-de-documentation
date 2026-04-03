import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const MgpNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const MgpGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module MGP (Gestion des Plaintes) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Contexte',
        paragraphs: [
          'Pour conduire la mise en oeuvre du Programme, le Gouvernement du Benin et le MCC ont mis en place le MCA-Benin Regional. Le MCA-Benin Regional a requis les services specialises d assistance au Maitre d Ouvrage, cumulant l ensemble des competences necessaires pour assurer la gestion de programme et la gestion environnementale et sociale (MOSES).',
          'Le present document decrit comment utiliser le module de gestion des plaintes sur le SIP et constitue ainsi le manuel d utilisation du volet gestion des plaintes.'
        ]
      },
      {
        title: '2. Objectifs du SIP',
        paragraphs: [
          'Les objectifs du systeme d information integre de gestion de projets et de documents sont multiples et visent a ameliorer la performance, l efficacite et la collaboration au sein des equipes de projet.'
        ],
        bullets: [
          'Centralisation des informations et leur diffusion: gestion unifiee des documents et des donnees selon un referentiel de normalisation adapte au programme',
          'Amelioration de la collaboration entre les membres de l equipe de projet: collaboration en temps reel sur des documents et des fichiers',
          'Gestion efficace des projets et des activites: suivi de la realisation des activites et de la production des livrables',
          'Gestion des risques, des problemes, des incidents et des plaintes: prise en charge de ces cas et suivi de leur traitement',
          'Automatisation des processus et des workflows de validation',
          'Visibilite et transparence: situation d avancement dans l execution des activites',
          'Amelioration de la productivite: reduction des erreurs humaines',
          'Acces securise et controle aux donnees et aux documents'
        ]
      },
      {
        title: '3. Objectifs du module de gestion des plaintes (MGP)',
        paragraphs: [
          'Sur le SIP, le volet gestion des plaintes a pour but de permettre l enregistrement, le suivi et le traitement des plaintes liees au programme MCA-Benin Regional.'
        ]
      },
      {
        title: '4. Architecture du SIP',
        paragraphs: [
          'La construction de la plateforme repose sur l utilisation de technologies modernes de gestion de programme et de projets. Le choix a ete porte sur la plateforme Microsoft 365 et Microsoft Project, pour sa completude et son aptitude a mettre en oeuvre les preceptes du PMI pour une gestion optimale du programme.'
        ],
        bullets: [
          'Microsoft Project Online: gestion des portefeuilles et des projets',
          'SharePoint Online: gestion documentaire et collaboration entre les equipes',
          'Power Automate: automatisation des workflows, notifications et processus d approbation',
          'Power BI: production des tableaux de bord analytiques et visualisation des performances',
          'ArcGIS for Microsoft 365 et ArcGIS Online: gestion des donnees geospatiales et creation de cartes interactives'
        ]
      },
      {
        title: '5. Utilisation du module gestion des plaintes (MGP)',
        paragraphs: [
          'Le module permet le depot, l enregistrement et le suivi des plaintes via les procedures suivantes.'
        ]
      },
      {
        title: '5.1 Depot de plainte',
        paragraphs: [
          'Droits utilisateurs: ALC. Executer sur: Liste des plaintes, Formulaire de depot.'
        ],
        bullets: [
          'Etape 1: Acces au formulaire de depot depuis la liste des plaintes',
          'Etape 2: Saisie et depot de la plainte via le formulaire de depot'
        ]
      },
      {
        title: '5.2 Enregistrement de la plainte',
        paragraphs: [
          'Droits utilisateurs: ALC. Executer sur: Formulaire de depot.'
        ],
        bullets: [
          'Ajout d informations supplementaires et de fichiers',
          'Enregistrement de la plainte dans le systeme'
        ]
      },
      {
        title: '5.3 Gestion et suivi de la plainte',
        paragraphs: [
          'Droits utilisateurs: ALC, Expert EPP Moses, Expert Moses, Verification, Responsable d Entreprise. Executer sur: Email, Formulaire de depot.'
        ],
        bullets: [
          'Acces a la plainte par e-mail via la notification de la plainte',
          'Ajout des commentaires et choix d une action pour le traitement de la plainte'
        ]
      },
      {
        title: '6. Bonnes pratiques',
        paragraphs: ['Pour garantir une utilisation optimale du module:'],
        bullets: [
          'Renseigner tous les champs obligatoires pour garantir la qualite des donnees',
          'Mettre a jour regulierement le statut des plaintes en cours',
          'Utiliser les filtres de recherche pour retrouver rapidement les informations',
          'Verifier la coherence des donnees avant validation',
          'Signaler tout dysfonctionnement a l equipe support'
        ]
      },
      {
        title: '7. Support et assistance',
        paragraphs: [
          'Pour toute question ou difficulte, contactez l equipe technique du SIP via le canal de support dedie.',
          'Fournissez une description detaillee du probleme, accompagnee de captures d ecran si possible.'
        ]
      }
    ]}
  />
);

const MgpDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module MGP (Module de Gestion des Plaintes) du SIP MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 2.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Contexte',
        paragraphs: [
          'Dans le cadre de la mission MOSES d appui a la gestion du programme MCA Benin Regional, SOFRECO se doit de mettre en place un ensemble d outils informatiques pour le suivi et la gestion des activites de realisation du programme.',
          'Il est prevu que l ensemble de ces outils forment un systeme d information integre parmi lesquels il est explicitement indique la mise en place d un module de gestion des plaintes designe par le vocable MGP.'
        ]
      },
      {
        title: '2. Objectif',
        paragraphs: [
          'Presenter le module informatique developpe pour la gestion des plaintes dans le cadre du Compact MCA-Benin Regional, base sur le document decrivant le mecanisme de gestion des plaintes, annexe au Plan de Gestion Environnementale, Sociale et de Securite du programme.'
        ]
      },
      {
        title: '3. Introduction',
        paragraphs: [
          'Ce rapport decrit le module informatique de Gestion des Plaintes (MGP), integre au Systeme de Gestion Environnementale et Sociale, de Sante et Securite (SGESSS). Developpe pour MCA-Benin Regional, il automatise les procedures de reception, traitement et suivi des plaintes liees au Compact finance par le Millennium Challenge Corporation (MCC).',
          'Le module repose sur les directives des normes de performance de la Societe Financiere Internationale (SFI), les politiques MCC et les lois beninoises. Il remplace les processus manuels interimaires (e-mails, fiches Excel) utilises jusqu a fin 2025, en assurant confidentialite, tracabilite et efficacite.'
        ]
      },
      {
        title: '4. Contexte et objectifs',
        paragraphs: [
          'Le Compact MCA-Benin Regional (202 millions USD de MCC + 204,15 millions USD de contrepartie beninoise) vise a ameliorer le corridor Cotonou-Niamey via deux projets: Infrastructure du Corridor (IC) et Efficacite des Operations du Corridor (EOC). Les activites respectent les normes environnementales et sociales, avec une duree de 5 ans a partir de janvier 2025.'
        ],
        bullets: [
          'Faciliter l enregistrement anonyme ou nominatif des plaintes via telephone (7191), SMS, e-mail ou physique',
          'Assurer un traitement structure en 4 stades et 11 etapes pour les plaintes generales, et 5 etapes pour les sensibles',
          'Gerer la classification, l assignation et le suivi, avec notifications automatisees',
          'Produire des rapports pour le suivi (316 plaintes traitees de septembre 2024 a decembre 2025, dont 51% fermees)'
        ]
      },
      {
        title: '5. Fonctionnalites principales du module',
        paragraphs: ['Le MGP offre les fonctionnalites suivantes, automatisant les processus manuels:'],
        bullets: [
          'Enregistrement gratuit et anonyme des plaintes (telephone, SMS, e-mail, physique)',
          'Attribution automatique d un ID unique (format PL-YY/MM-NNNNN)',
          'Classification par priorite (1: urgent, 2: prioritaire, 3: normal), type (selon normes SFI) et zone de projet',
          'Assignation et notifications par e-mail/SMS aux intervenants, avec rappels bases sur la priorite',
          'Suivi des actions, pieces jointes (photos, videos, documents) et historique des modifications',
          'Gestion des revisions externes (CLM, CC, justice) et cloture avec verification de satisfaction',
          'Rapports en temps reel: mensuels, annuels, desagreges par genre, commune et type',
          'Integration SIG pour geolocalisation et reporting cartographique',
          'Support pour plaintes sensibles avec confidentialite renforcee et assignation a structures dediees (GUPS, INF, CIPeC/VBG, PR)'
        ]
      },
      {
        title: '6. Architecture et technologies',
        paragraphs: [
          'Le module MGP est concu sur une architecture low-code/no-code, inspiree des processus de developpement best practice de Microsoft 2025 selon des processus ALM. Cette approche s appuie sur l ecosysteme Microsoft Power Platform, integre a Microsoft 365.'
        ],
        bullets: [
          'Stockage des donnees: utilisation de listes et tables SharePoint ou Dataverse pour la modelisation des entites',
          'Interface utilisateur (UI/UX): developpement responsive avec Power Apps pour les formulaires et interfaces',
          'Automatisation des flux: Power Automate gere les workflows, incluant les notifications automatisees et les rappels',
          'Integrations supplementaires: lien avec ArcGIS pour le composant SIG (geolocalisation et reporting cartographique)',
          'Securite et conformite: chiffrement des donnees, logs d audits, conformite aux normes SFI/MCC'
        ]
      },
      {
        title: '6.1 Modele de donnees Dataverse',
        paragraphs: [
          'Le modele de donnees est implemente dans Microsoft Dataverse et suit les principes ALM: modularite, tracabilite, evolutivite et securite.'
        ],
        bullets: [
          'Plainte: entite centrale representant chaque plainte ou reclamation recue',
          'Personne: represente le plaignant ou la personne agissant pour lui, supporte l anonymat',
          'TypePlainte: referentiel des types de plaintes (aligne sur normes SFI + VBG + corruption)',
          'Zone: hierarchie administrative (commune, arrondissement, quartier) pour localisation',
          'UtilisateurPlainte: tracabilite des assignations successives',
          'Note: historique des commentaires, echanges et decisions au fil du traitement',
          'PieceJointe: stockage des preuves (photos, PV, courriers, etc.)'
        ]
      },
      {
        title: '6.2 Interfaces utilisateur',
        paragraphs: ['L application comprend les ecrans suivants:'],
        bullets: [
          'Ecran principal (liste des plaintes): affichage pagine avec filtres dynamiques, colonnes triables et filtrables',
          'Ecran de depot / enregistrement de la plainte (Etape 0 -- ALC): formulaire comprenant informations generales sur la plainte, le plaignant et le projet',
          'Ecran de validation interne et assignation externe (Etape 3): classification de la plainte avec categorie, priorite, verificateur MOSES / ingenieur de supervision'
        ]
      },
      {
        title: '7. Processus de gestion des plaintes',
        paragraphs: ['Le module structure le traitement en 4 stades:'],
        bullets: [
          'Stade 1 -- Enregistrement et assignation (Responsable: MOSES): depot de plainte par ALC, enregistrement, classification interne, validation interne et assignation externe',
          'Stade 2 -- Examen et preparation de la reponse: examen du fondement, preparation de la reponse, analyse et approbation des actions proposees',
          'Stade 3 -- Mise en oeuvre et fermeture: mise en oeuvre de la reponse a la plainte, verification de l acceptation du plaignant',
          'Stade 4 -- Revision externe: comite local de mediation, comite de conciliation, transmission a la justice, cloture'
        ]
      },
      {
        title: '8. Intervenants et roles',
        paragraphs: [
          'Les roles sont assignes par entite liee a la plainte. Les acteurs principaux incluent:'
        ],
        bullets: [
          'ALC (Agent Local de Communication): depot et enregistrement des plaintes, saisine des instances externes',
          'Expert EPP Moses: classification interne, gestion des plaintes sensibles, cloture',
          'Expert MOSES / Verificateur: validation interne, examen du fondement, approbation des reponses',
          'Responsable de la plainte (MSA ou entreprise): identification et mise en oeuvre de la reponse',
          'MCA: suivi et commentaires a differentes etapes du processus'
        ]
      },
      {
        title: '9. Delais de traitement',
        paragraphs: [
          'Total de 15 jours ouvrables pour la gestion d une plainte a sa fermeture s il n y a pas de recours au processus de revision externe. En cas de recours, des delais supplementaires de 10 jours sont prevus pour chaque instance (CLM, CC, justice).'
        ]
      },
      {
        title: '10. Conclusion',
        paragraphs: [
          'Le module de Gestion des Plaintes (MGP), integre au SGESSS, represente une avancee significative dans la gestion des preoccupations environnementales et sociales au sein du Compact MCA-Benin Regional. En automatisant les processus de reception, de classification, d assignation et de suivi des plaintes, il garantit une conformite stricte aux normes de performance de la SFI, aux directives du MCC et aux reglementations beninoises.',
          'Les performances observees entre septembre 2024 et decembre 2025 avec 316 plaintes traitees, dont 51% fermees et un taux de satisfaction de 87% pour les demandes de renseignements, demontrent sa capacite operationnelle. A la date du 26 janvier 2026, le module a enregistre un total de 339 plaintes recues.'
        ]
      }
    ]}
  />
);

const mgpPages: Record<SectionId, React.ComponentType> = {
  'note-technique': MgpNoteTechniquePage,
  'guide-utilisateur': MgpGuideUtilisateurPage,
  'documentation-technique': MgpDocumentationTechniquePage
};

export default mgpPages;
