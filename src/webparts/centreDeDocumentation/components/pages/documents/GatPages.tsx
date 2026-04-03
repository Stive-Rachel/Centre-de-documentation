import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const GatNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module informatique de Gestion des Autorisations de Travail (GAT)
    </p>

    <section className="cdoc-block">
      <h3>Contexte et justification</h3>
      <p>
        Dans le cadre de la mise en oeuvre du Systeme de Gestion Environnementale, Sociale,
        de Sante et Securite (SGESSS) du Compact Regional de MCA Benin, il est necessaire de
        disposer d un module structure et harmonise permettant la <strong>declaration</strong>,
        le <strong>suivi</strong> et le <strong>traitement</strong> des autorisations de travail.
      </p>
      <p>
        Ce module repond aux exigences reglementaires nationales (Code de la Securite Sociale
        du Benin, Code du travail) ainsi qu aux normes internationales, notamment les <strong>Normes
        de Performance de la SFI</strong> et les <strong>Directives Environnementales, Sanitaires
        et Securitaires (EHS)</strong>.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>Objet et Domaine d application</h3>
      <p>
        L objectif de cette note est de formaliser le processus de transfert numerique des
        formulaires d autorisation de travail une fois ces derniers clotures. Ce processus
        s adresse specifiquement au personnel de l Entrepreneur.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>Procedure Operationnelle sur le SGESSS</h3>
      <p>Le depot s effectue via la plateforme SGESSS en suivant le cheminement suivant:</p>
      <ul>
        <li>Acces: Se connecter a la plateforme, puis acceder a la composante SGESSS du systeme d information.</li>
        <li>Navigation: Cliquer sur &quot;Gestion des autorisations de travail (GAT)&quot;</li>
        <li>Saisie des donnees: Renseigner les champs obligatoires qui s affichent a l ecran.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>Informations requises pour le depot</h3>
      <p>Pour valider le depot, l utilisateur doit completer trois sections distinctes:</p>

      <h4>A. Identification du Demandeur</h4>
      <ul>
        <li>Nom de l entreprise</li>
        <li>Nom et fonction de la personne effectuant le depot numerique</li>
        <li>Le projet, le lot, le troncon, le PK, la commune, l arrondissement, village/quartier</li>
      </ul>

      <h4>B. Details du Formulaire (cloture)</h4>
      <ul>
        <li>Type d autorisation: Selectionner dans la liste deroulante (Excavation, Echafaudage, Elagage/Abattage, Travaux en hauteur, Travaux a chaud, ou Travaux sur l eau)</li>
        <li>Numero de l autorisation: Doit correspondre au numero inscrit physiquement sur le formulaire</li>
      </ul>

      <h4>C. Validation de l Ingenieur</h4>
      <ul>
        <li>Nom de l entreprise de l Ingenieur</li>
        <li>Nom de la personne ayant approuve l autorisation</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>References et Validation</h3>
      <p>
        Cette procedure technique est associee a la note explicative relative a la demande,
        l approbation et la cloture des autorisations de travail.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>Indicateurs</h3>
      <ul>
        <li>Nombre d autorisations de travail pour travaux d excavation deposes par l entreprise</li>
        <li>Nombre d autorisations de travail pour travaux d elagage/abattage deposes par l entreprise (a sortir pour toutes les categories d autorisation identifiees ou a identifier)</li>
        <li>Nombre d autorisations d un type donne par projet</li>
        <li>Nombre d autorisations d un type donne par lot</li>
        <li>Nombre d autorisations d un type donne par troncon</li>
        <li>Nombre d autorisations d un type donne par PK</li>
        <li>Nombre d autorisations par periode specifiee</li>
      </ul>
    </section>
  </article>
);

const GatGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module GAT (Gestion des Autorisations de Travail) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module GAT (Gestion des Autorisations de Travail) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
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
          'Le tableau de bord du module GAT affiche les indicateurs principaux.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Enregistrement de nouvelles autorisations',
        paragraphs: [
          'Depuis l ecran d accueil, cliquez sur le bouton "Depot d autorisation de travail". Remplissez les champs du formulaire puis cliquez sur "Depot d autorisation de travail" pour valider l operation.'
        ]
      },
      {
        title: '4.3 Consultation des autorisations',
        paragraphs: [
          'Selectionnez l un des filtres affiches ou cherchez directement avec la barre de recherche.',
          'Selectionnez l option de filtre souhaitee pour affiner les resultats.'
        ]
      },
      {
        title: '5. Roles et droits d acces',
        paragraphs: ['Les roles disponibles dans le module sont:'],
        bullets: [
          'Entrepreneur: creation, consultation des fiches d autorisation',
          'Autres: consultation des fiches d autorisation'
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

const GatDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module GAT (Gestion des Autorisations de Travail) du SGESSS MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Vue d ensemble',
        paragraphs: [
          'Le module Gestion des Autorisations de Travail est integre au SGESSS dans le cadre du Compact MCA-Benin Regional. Il permet le depot numerique des formulaires d autorisation de travail une fois clotures, assurant ainsi la tracabilite et le suivi des autorisations.'
        ]
      },
      {
        title: '1.1 Architecture du module',
        paragraphs: ['Le module repose sur l architecture suivante:'],
        bullets: [
          'Interface: Power Apps / SharePoint -- Formulaire PowerApps + vues SharePoint',
          'Donnees: SharePoint',
          'Automatisation: Power Automate -- Insertion d autorisation',
          'Reporting: Power Apps (Code)'
        ]
      },
      {
        title: '1.2 Environnements',
        paragraphs: ['Le module est deploye sur l environnement suivant:'],
        bullets: [
          'PROD: Page d accueil et Tableau de bord'
        ]
      },
      {
        title: '2. Modele de Donnees',
        paragraphs: [
          'Le modele de donnees repose sur des listes SharePoint structurees pour stocker les autorisations de travail et les referentiels associes (Entreprises, Communes, Arrondissements, Villages/Quartiers, PK).'
        ]
      },
      {
        title: '3. Interface - Ecrans',
        paragraphs: ['L application comprend les ecrans suivants:'],
        bullets: [
          'Tableau de bord: affichage des statistiques avec les donnees de l application (sources: Autorisationsdetravail, Entreprises, Communes, Arrondissements, Village_quartiers, PK)',
          'Page d accueil: affichage des autorisations avec des options de recherche et filtrage',
          'Formulaire de gestion: depot des fiches d autorisation'
        ]
      },
      {
        title: '4. Automatisations / Flux',
        paragraphs: ['Le module utilise un flux Power Automate:'],
        bullets: [
          'Upload file: declenche par l Entreprise, permet l ajout de la fiche d autorisation a la liste'
        ]
      },
      {
        title: '5. Integrations externes',
        paragraphs: ['N/A']
      },
      {
        title: '6. Variables de configuration',
        paragraphs: ['N/A']
      },
      {
        title: '7. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production:'],
        bullets: [
          'Donnees: tables/listes creees avec colonnes correctes, index configures, permissions/roles configures',
          'Application: variables d environnement configurees (N/A), Connection References OK, tests fonctionnels passes',
          'Flux: flux actives et testes',
          'Integrations: connexions externes verifiees (N/A)',
          'Securite: aucun secret en dur dans le code'
        ]
      }
    ]}
  />
);

const gatPages: Record<SectionId, React.ComponentType> = {
  'note-technique': GatNoteTechniquePage,
  'guide-utilisateur': GatGuideUtilisateurPage,
  'documentation-technique': GatDocumentationTechniquePage
};

export default gatPages;
