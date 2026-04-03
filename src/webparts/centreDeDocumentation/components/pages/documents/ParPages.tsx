import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const ParNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const ParGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module PAR (Plans d Action de Reinstallation) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module PAR (Plans d Action de Reinstallation) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
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
          'L ecran d accueil du module PAR affiche un tableau de bord synthetique avec les indicateurs principaux, les derniers elements enregistres, et des filtres de recherche rapide.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Enregistrement de dossiers PAR',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.2 Suivi de l avancement des plans',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.3 Consultation des informations PAP',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.4 Gestion des indemnisations et compensations',
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
        title: '4.6 Filtrage par statut, localisation ou type',
        paragraphs: [
          'Depuis le tableau de bord, cliquez sur le bouton d action correspondant. Remplissez les champs obligatoires du formulaire. Cliquez sur Enregistrer pour valider l operation.'
        ]
      },
      {
        title: '4.7 Coherence des donnees saisies',
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

const ParDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module PAR (Plans d Action de Reinstallation) du SIP MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module PAR (Plans d Action de Reinstallation) fait partie du Systeme d Information du Programme (SIP) deploye dans le cadre du programme MCA-Benin Regional. Ce module permet la gestion centralisee et le suivi de l ensemble des donnees relatives a la thematique plans d action de reinstallation.',
          'Architecture: Power Apps Canvas + Dataverse. Couche de donnees: Dataverse (Environnement PROD). Automatisation: Power Automate. Reporting: Power BI / Tableaux de bord integres. Notifications: Microsoft Outlook.'
        ]
      },
      {
        title: '2. Modele de donnees',
        paragraphs: ['Le module s appuie sur les entites Dataverse suivantes:'],
        bullets: [
          'Dossiers PAR: stockage et gestion des donnees de type dossiers PAR',
          'Personnes Affectees (PAP): stockage et gestion des donnees de type personnes affectees',
          'Indemnisations: stockage et gestion des donnees de type indemnisations',
          'Compensations: stockage et gestion des donnees de type compensations',
          'Parcelles: stockage et gestion des donnees de type parcelles'
        ]
      },
      {
        title: '3. Interfaces utilisateur',
        paragraphs: ['Le module propose les ecrans suivants:'],
        bullets: [
          'Tableau de bord PAR',
          'Liste des dossiers',
          'Fiche PAP',
          'Formulaire d indemnisation'
        ]
      },
      {
        title: '4. Fonctionnalites',
        paragraphs: ['Les fonctionnalites principales du module sont:'],
        bullets: [
          'Enregistrement de dossiers PAR',
          'Suivi de l avancement des plans',
          'Consultation des informations PAP',
          'Gestion des indemnisations et compensations',
          'Generation de rapports de suivi',
          'Filtrage par statut, localisation ou type',
          'Coherence des donnees saisies'
        ]
      },
      {
        title: '5. Flux d automatisation',
        paragraphs: ['Les workflows Power Automate suivants sont configures:'],
        bullets: [
          'Notification d avancement PAR',
          'Alerte d echeance d indemnisation'
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

const parPages: Record<SectionId, React.ComponentType> = {
  'note-technique': ParNoteTechniquePage,
  'guide-utilisateur': ParGuideUtilisateurPage,
  'documentation-technique': ParDocumentationTechniquePage
};

export default parPages;
