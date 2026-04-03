import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const GdiNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module informatique de Gestion des Incidents (GDI)
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Dans le cadre de la mise en oeuvre du Systeme de Gestion Environnementale, Sociale,
        de Sante et Securite (SGESSS) du Compact Regional de MCA Benin, il est necessaire de
        disposer d un module structure et harmonise permettant la <strong>declaration</strong>,
        le <strong>suivi</strong> et le <strong>traitement</strong> des incidents.
      </p>
      <p>
        Ce module repond aux exigences reglementaires nationales (Code de la Securite Sociale
        du Benin) ainsi qu aux normes internationales, notamment les <strong>Normes de Performance
        de la SFI</strong> et les <strong>Directives Environnementales, Sanitaires et Securitaires
        (EHS)</strong>.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objet de la note</h3>
      <p>La presente note technique a pour objectif de definir les modalites de declaration, d enregistrement, de traitement et de cloture des incidents sur la plateforme SGESSS, afin de:</p>
      <ul>
        <li>Prevenir les incidents futurs</li>
        <li>Ameliorer la performance Environnementale, Sociale, Sante et Securite (ESSS)</li>
        <li>Assurer la tracabilite et le suivi des incidents</li>
        <li>Produire des statistiques fiables pour la prise de decision</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Domaine d application</h3>
      <p>Cette procedure s applique a tous les organismes impliques dans le Compact MCA Benin Regional, notamment:</p>
      <ul>
        <li>MCA Benin Regional</li>
        <li>MCC</li>
        <li>MOSES</li>
        <li>Ingenieurs</li>
        <li>Entrepreneurs (y compris sous-traitants)</li>
        <li>MSA</li>
      </ul>
      <p>Elle concerne toute personne habilitee a declarer un incident sur la plateforme SGESSS.</p>
    </section>

    <section className="cdoc-block">
      <h3>4. Definition d un incident</h3>
      <p>
        Selon l INRS, un incident est un evenement indesirable qui n a pas entraine de dommages
        corporels, mais qui aurait pu en causer.
      </p>
      <p>Dans le cadre du projet, un incident peut avoir des impacts sur:</p>
      <ul>
        <li>Le materiel</li>
        <li>L environnement</li>
        <li>L organisation du travail</li>
        <li>La securite des personnes</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5. Objectifs specifiques</h3>
      <ul>
        <li>Identifier rapidement les situations dangereuses</li>
        <li>Mettre en place des actions correctives et preventives</li>
        <li>Eviter la repetition des evenements</li>
        <li>Renforcer la culture securite</li>
        <li>Respecter les exigences reglementaires et celles de la SFI</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>6. Procedure de declaration des incidents</h3>
      <h4>6.1 Acces au module</h4>
      <ul>
        <li>L utilisateur doit disposer d un profil SGESSS actif</li>
        <li>Acces via identifiant et mot de passe</li>
        <li>Changement du mot de passe obligatoire a la premiere connexion</li>
        <li>Acceder au module de gestion des incidents</li>
      </ul>

      <h4>6.2 Etapes de declaration d un incident</h4>
      <p>Etape 1: Informations generales</p>
      <ul>
        <li>Organisme du declarant</li>
        <li>Nom et prenoms du declarant</li>
        <li>Date de la declaration (calendrier)</li>
        <li>Heure de la declaration (horloge)</li>
      </ul>
      <p>Etape 2: Informations specifiques a l incident</p>
      <ul>
        <li>Lieu exact de l incident</li>
        <li>Date de survenue</li>
        <li>Heure de survenue</li>
        <li>Description claire et precise des circonstances</li>
        <li>Causes probables de l incident</li>
        <li>NP SFI concernee (liste deroulante)</li>
        <li>Actions prises immediatement</li>
        <li>Recommandations proposees</li>
      </ul>
      <p>Etape 3: Pieces jointes</p>
      <ul>
        <li>Photos</li>
        <li>Rapports</li>
        <li>Tout document utile a la comprehension de l incident</li>
      </ul>
      <p>Etape 4: Enregistrement</p>
      <ul>
        <li>Validation de la declaration</li>
        <li>Enregistrement automatique dans le registre des incidents</li>
        <li>Notification automatique par courriel aux responsables concernes</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>7. Traitement des incidents</h3>
      <h4>7.1 Traitement par l Ingenieur si declaration faite par l entreprise</h4>
      <ul>
        <li>Investigation sur l incident</li>
        <li>Organisation de reunions si necessaire</li>
        <li>Verification de la declaration</li>
        <li>Validation ou demande de mise a jour avec preuves</li>
      </ul>
      <p>MCA, MCC ou MOSES peuvent laisser des commentaires pour prise en compte par l Ingenieur. Dans le cadre du suivi, des alertes seront emises toutes les 24h vers les parties concernees (MCA, MOSES et Ingenieur) pour rappeler le delai de reaction et les commentaires.</p>

      <h4>7.2 Traitement par MOSES</h4>
      <ul>
        <li>Verification finale des informations</li>
        <li>Cloture de l incident apres validation de l Ingenieur ou MCA selon le cas</li>
        <li>Archivage dans le registre des incidents</li>
      </ul>

      <h4>7.3 Autre traitement</h4>
      <p>
        Si declaration faite par l Ingenieur, MOSES jouera le role de l Ingenieur en matiere de traitement.
        Si declaration faite par MOSES, MCA jouera le role de l Ingenieur en matiere de traitement.
        Si declaration faite par MCA, MCC jouera le role de l Ingenieur en matiere de traitement.
        Si declaration faite par MCC, MCA jouera le meme role que l Ingenieur en matiere de traitement.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>8. Indicateurs de performance</h3>
      <p>Les indicateurs suivants seront generes automatiquement:</p>
      <ul>
        <li>Nombre total d incidents declares par projet</li>
        <li>Nombre total d incidents par lot, troncon, PK, commune</li>
        <li>Cumul des incidents pour le compact</li>
        <li>Nombre d incidents par NP de la SFI (NP1, NP2, etc.)</li>
        <li>Nombre d incidents par organisme</li>
        <li>Nombre d incidents par domaine</li>
        <li>Nombre d incidents environnementaux</li>
        <li>Nombre d incidents sante et securite</li>
        <li>Nombre d incidents surete</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>9. Responsabilites</h3>
      <ul>
        <li><strong>Declarant</strong>: declarer tout incident sans delai</li>
        <li><strong>Ingenieur</strong>: analyser et valider techniquement les declarations de l entreprise</li>
        <li><strong>MOSES</strong>: controler, assurer le suivi ESSS et cloturer toute declaration</li>
      </ul>
      <p>
        Si declaration faite par l Ingenieur, MOSES va analyser et valider techniquement les declarations et faire la cloture avec avis de MCA/MCC au besoin dans l espace commentaire.
        Si declaration faite par MOSES, le suivi et la cloture seront faits par MCA avec avis de MCC.
        Si declaration faite par MCA, MOSES analysera et validera techniquement les declarations, il procedera au suivi et la cloture.
        Si declaration faite par MCC, MCA analysera et validera techniquement les declarations, MOSES procedera au suivi et la cloture.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>10. Conclusion</h3>
      <p>
        La declaration et le traitement efficaces des incidents constituent un outil essentiel de
        prevention. Le respect strict de cette procedure permet d ameliorer la securite, de reduire
        les risques et d assurer la conformite aux exigences nationales et internationales.
      </p>
    </section>
  </article>
);

const GdiGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module GDI (Gestion des Incidents) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module GDI (Gestion des Incidents) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
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
          'Le tableau de bord du module GDI affiche les indicateurs principaux.',
          'Les donnees sont actualisees en temps reel.'
        ]
      },
      {
        title: '4.1 Enregistrement de nouveaux incidents (etape 1)',
        paragraphs: [
          'Depuis l ecran d accueil, cliquez sur le bouton "+ Ajouter Incident". Remplissez les champs du formulaire puis cliquez sur "Transmettre" pour valider l operation.'
        ]
      },
      {
        title: '4.3 Premiere validation par l ingenieur (etape 2)',
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
          'Entrepreneur: creation, modification, consultation des incidents',
          'Ingenieur: modification des etats et consultation des incidents',
          'MOSES: modification des etats et consultation des incidents',
          'MCA: consultation des incidents'
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

const GdiDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module GDI (Gestion des Incidents) du SGESSS MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Vue d ensemble',
        paragraphs: [
          'Le module Gestion des Incidents est integre au SGESSS dans le cadre du Compact MCA-Benin Regional. Il centralise la declaration, le suivi et la cloture de tout incident survenant sur les chantiers et leurs abords.',
          'Le module couvre les organismes suivants: MCA Benin Regional, MCC, MOSES, Ingenieurs, Entrepreneurs (y compris sous-traitants) et MSA.'
        ]
      },
      {
        title: '1.1 Architecture du module',
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
        title: '1.2 Environnements',
        paragraphs: ['Le module est deploye sur trois environnements:'],
        bullets: [
          'DEV: solution non-geree pour le developpement',
          'TEST: solution geree pour les tests',
          'PROD: solution geree pour la production'
        ]
      },
      {
        title: '2. Modele de Donnees',
        paragraphs: [
          'Le modele de donnees repose sur des tables Dataverse structurees pour stocker les incidents et les referentiels associes (Incidents, UtilisateursSolution, Zone, Commentaires, PiecesJointes).'
        ]
      },
      {
        title: '3. Interface - Ecrans',
        paragraphs: ['L application comprend les ecrans suivants:'],
        bullets: [
          'Tableau de bord: affichage des statistiques avec les donnees de l application (sources: Incidents, UtilisateursSolution, Zone)',
          'Page d accueil: affichage des incidents avec des options de recherche et filtrage (sources: Incidents, UtilisateursSolution, Zone)',
          'Formulaire de gestion: depot et gestion des incidents (sources: Incidents, UtilisateursSolution, Zone, Commentaires, PiecesJointes)'
        ]
      },
      {
        title: '4. Automatisations / Flux',
        paragraphs: ['Le module utilise un flux Power Automate:'],
        bullets: [
          'Upload incident File: declenche par l Entrepreneur, permet l attachement de fichiers a un incident'
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
          'Incidents_App_url: URL de l application, utilisee pour l envoi des liens dans les e-mails',
          'Incidents_Environment_url: URL de l environnement Dynamics 365, utilisee pour le telechargement des fichiers'
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
      }
    ]}
  />
);

const gdiPages: Record<SectionId, React.ComponentType> = {
  'note-technique': GdiNoteTechniquePage,
  'guide-utilisateur': GdiGuideUtilisateurPage,
  'documentation-technique': GdiDocumentationTechniquePage
};

export default gdiPages;
