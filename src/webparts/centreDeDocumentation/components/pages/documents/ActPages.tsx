import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const ActNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const ActGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module ACT (Gestion des Acteurs) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module ACT (Gestion des Acteurs) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
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
          'L ecran d accueil du module ACT affiche un tableau de bord synthetique avec les indicateurs principaux, les derniers elements enregistres, et des filtres de recherche rapide.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Enregistrement de nouveaux acteurs',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant.',
          'Remplissez les champs obligatoires du formulaire.',
          'Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.2 Recherche par nom, organisation ou role',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant.',
          'Remplissez les champs obligatoires du formulaire.',
          'Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.3 Consultation de la fiche detaillee',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant.',
          'Remplissez les champs obligatoires du formulaire.',
          'Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.4 Modification des informations',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant.',
          'Remplissez les champs obligatoires du formulaire.',
          'Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.5 Categorisation par type',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant.',
          'Remplissez les champs obligatoires du formulaire.',
          'Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.6 Export de la liste des acteurs',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant.',
          'Remplissez les champs obligatoires du formulaire.',
          'Cliquez sur Enregistrer pour valider l operation.'
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

const ActDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module ACT (Gestion des Acteurs) du SIP MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module ACT (Gestion des Acteurs) fait partie du Systeme d Information du Programme (SIP) deploye dans le cadre du programme MCA-Benin Regional. Ce module permet la gestion centralisee et le suivi de l ensemble des donnees relatives a la thematique gestion des acteurs.'
        ]
      },
      {
        title: '2. Architecture technique',
        paragraphs: ['Le module repose sur les composants suivants:'],
        bullets: [
          'Architecture: Power Apps Canvas + Dataverse',
          'Couche de donnees: Dataverse (Environnement PROD)',
          'Automatisation: Power Automate',
          'Reporting: Power BI / Tableaux de bord integres',
          'Notifications: Microsoft Outlook'
        ]
      },
      {
        title: '3. Modele de donnees',
        paragraphs: ['Le module s appuie sur les entites Dataverse suivantes:'],
        bullets: [
          'Acteurs: stockage et gestion des donnees de type acteurs',
          'Organisations: stockage et gestion des donnees de type organisations',
          'Roles: stockage et gestion des donnees de type roles',
          'Types d acteurs: stockage et gestion des donnees de type types d acteurs',
          'Contacts: stockage et gestion des donnees de type contacts'
        ]
      },
      {
        title: '4. Interfaces utilisateur',
        paragraphs: ['Le module propose les ecrans suivants:'],
        bullets: [
          'Tableau de bord acteurs',
          'Liste des acteurs',
          'Fiche detaillee',
          'Formulaire d enregistrement'
        ]
      },
      {
        title: '5. Fonctionnalites',
        paragraphs: ['Les fonctionnalites principales du module sont:'],
        bullets: [
          'Enregistrement de nouveaux acteurs',
          'Recherche par nom, organisation ou role',
          'Consultation de la fiche detaillee',
          'Modification des informations',
          'Categorisation par type',
          'Export de la liste des acteurs'
        ]
      },
      {
        title: '6. Flux d automatisation',
        paragraphs: ['Les workflows Power Automate suivants sont configures:'],
        bullets: [
          'Notification de nouvel acteur enregistre'
        ]
      },
      {
        title: '7. Integrations externes',
        paragraphs: [
          'Integrations actuelles: Microsoft Outlook (notifications par e-mail), Dataverse (stockage centralise), Power BI (reporting).'
        ]
      },
      {
        title: '8. Environnements de deploiement',
        paragraphs: ['Le module est deploye sur trois environnements:'],
        bullets: [
          'DEV: solution non-geree (Unmanaged) -- Application + Tableau de bord',
          'TEST: solution geree (Managed) -- Application + Tableau de bord',
          'PROD: solution geree (Managed) -- Application + Tableau de bord'
        ]
      },
      {
        title: '9. Checklist de deploiement',
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

const actPages: Record<SectionId, React.ComponentType> = {
  'note-technique': ActNoteTechniquePage,
  'guide-utilisateur': ActGuideUtilisateurPage,
  'documentation-technique': ActDocumentationTechniquePage
};

export default actPages;
