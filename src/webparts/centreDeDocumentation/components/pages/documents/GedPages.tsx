import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const GedNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module de Gestion Electronique des Documents (GED) / MOSES
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Le programme MCA-Benin Regional, finance par le Millennium Challenge Corporation (MCC)
        et mis en oeuvre par le Millennium Challenge Account -- Benin Regional, s appuie sur le
        systeme d information MOSES pour assurer la coordination, la tracabilite et la gouvernance
        de l ensemble des activites du Compact Regional.
      </p>
      <p>
        Dans ce cadre, la <strong>gestion documentaire</strong> constitue un pilier essentiel
        de la gouvernance, compte tenu du volume important de documents produits: contrats,
        livrables techniques, rapports, correspondances, comptes rendus et pieces administratives,
        impliquant de multiples parties prenantes reparties entre le Benin, le Niger et les
        partenaires internationaux.
      </p>
      <p>Le module <strong>GED</strong> (Gestion Electronique des Documents) est concu comme le referentiel documentaire officiel du programme. Il repose sur la plateforme SharePoint Online afin de:</p>
      <ul>
        <li>garantir la tracabilite complete des documents;</li>
        <li>assurer la conformite aux exigences du MCC en matiere d audit et d archivage;</li>
        <li>standardiser les pratiques de classement, de codification et de versionnement;</li>
        <li>securiser l acces a l information selon les profils autorises;</li>
        <li>centraliser l ensemble de la documentation officielle du programme.</li>
      </ul>
      <p>
        Le module GED s appuie strictement sur la structure de decoupage du programme (WBS)
        et sur la codification documentaire validee, constituant ainsi la source unique et
        fiable de l information documentaire dans MOSES.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objectifs du module</h3>
      <p>Le module GED vise quatre objectifs principaux:</p>
      <ol>
        <li>Centraliser tous les documents officiels du programme dans un environnement unique, structure et securise, afin d eviter la dispersion des informations sur des supports non controles.</li>
        <li>Assurer un classement normalise fonde sur la structure WBS, permettant de retrouver rapidement tout document selon son rattachement au projet, a l activite, a la sous-activite et au contrat.</li>
        <li>Garantir la tracabilite documentaire grace au versionnement, aux metadonnees et a l historique des modifications, assurant ainsi la transparence et la conformite aux exigences d audit.</li>
        <li>Faciliter la recherche et l acces a l information via des mecanismes de recherche simple et avancee par metadonnees, permettant aux utilisateurs autorises d identifier rapidement les documents pertinents.</li>
      </ol>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>Le module GED s applique a l ensemble des activites du Compact Regional et couvre:</p>
      <ul>
        <li>tous les projets, activites et sous-activites;</li>
        <li>l ensemble des contrats et livrables associes;</li>
        <li>toutes les categories de documents officiels du programme.</li>
      </ul>
      <p>Il concerne les utilisateurs autorises appartenant aux organisations impliquees dans MOSES:</p>
      <ul>
        <li>MCA-Benin Regional et l equipe MOSES, responsables de l administration et de la gouvernance documentaire;</li>
        <li>MCC, consultants et entites partenaires, utilisateurs en consultation ou contribution selon leurs droits;</li>
        <li>ingenieurs superviseurs, entrepreneurs et unites d execution pour le depot et l acces aux documents contractuels.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>4. Position du module GED dans le systeme MOSES</h3>
      <p>Le module GED constitue le referentiel documentaire transversal du systeme MOSES. Il couvre notamment:</p>
      <ul>
        <li>la documentation contractuelle;</li>
        <li>les livrables techniques;</li>
        <li>les comptes rendus de reunions;</li>
        <li>les rapports et notes officielles.</li>
      </ul>
      <p>La GED fonctionne comme source documentaire unique, garantissant que chaque module MOSES s appuie sur une information fiable et a jour.</p>
    </section>

    <section className="cdoc-block">
      <h3>5. Expression des besoins fonctionnels</h3>
      <h4>5.1 Acces et securite</h4>
      <p>L acces au module GED est assure via les comptes Microsoft 365 du programme, avec authentification centralisee et gestion des droits par profil utilisateur.</p>

      <h4>5.2 Structure documentaire et navigation</h4>
      <p>L arborescence documentaire reproduit fidelement la structure WBS du programme, selon une hierarchie unique et non modifiable: Projet, Activite, Sous-activite, Contrat, Type de dossier documentaire.</p>

      <h4>5.3 Depot et codification des documents</h4>
      <p>Chaque document doit etre identifie par son intitule, son type, sa version et son rattachement au projet, a l activite et au contrat. Une codification normalisee est appliquee selon la structure officielle du programme.</p>

      <h4>5.4 Recherche et consultation des documents</h4>
      <p>Le module offre deux modes complementaires: une recherche simple par mots-cles et une recherche avancee basee sur les metadonnees.</p>

      <h4>5.5 Gestion du cycle de vie documentaire</h4>
      <p>Le module couvre l ensemble du cycle de vie des documents: depot, validation, versionnement, archivage.</p>

      <h4>5.6 Notifications et alertes</h4>
      <p>Le module permet la configuration d alertes automatiques en cas de depot, modification ou suppression de documents.</p>
    </section>

    <section className="cdoc-block">
      <h3>6. Exigences non-fonctionnelles</h3>
      <p>La solution garantit la securite et la confidentialite des donnees, la disponibilite du service, la maintenabilite a long terme grace a l utilisation exclusive de fonctionnalites natives SharePoint, et la performance y compris en conditions de connectivite limitee.</p>
    </section>

    <section className="cdoc-block">
      <h3>7. Architecture fonctionnelle cible</h3>
      <p>La solution repose sur une bibliotheque documentaire SharePoint Online integree au tenant Microsoft 365 du programme. Elle s appuie sur:</p>
      <ul>
        <li>Microsoft Entra ID pour l authentification;</li>
        <li>les bibliotheques SharePoint pour le stockage des documents;</li>
        <li>les metadonnees pour le classement et la recherche;</li>
        <li>les mecanismes de versioning et d audit natifs.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Roles et responsabilites</h3>
      <p>Le MCA-Benin Regional est le commanditaire du module GED. L equipe MOSES assure la conception, la mise en oeuvre et la maintenance technique. Le Documentaliste ou Records Manager est responsable de la gouvernance documentaire.</p>
    </section>
  </article>
);

const GedGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module GED (Gestion des Documents) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide decrit les procedures d utilisation du module GED (Gestion des Documents) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES.',
          'Prerequis: un compte Microsoft 365 actif avec les droits d acces au module, un navigateur web recent (Edge, Chrome, Firefox).'
        ]
      },
      {
        title: '2. Acces au module',
        paragraphs: [
          'Pour acceder au module, connectez-vous au portail SIP via votre compte Microsoft 365. Depuis le tableau de bord principal, cliquez d abord sur voir tous les modules ensuite sur la tuile correspondant au module.',
          'Vous pouvez egalement acceder directement au module via l URL fournie par l administrateur.'
        ]
      },
      {
        title: '3. Page d accueil',
        paragraphs: [
          'La page d accueil presente la bibliotheque documentaire centrale du MCA Benin Regional sur SharePoint, permettant la navigation dans l arborescence du programme et l acces aux fonctionnalites de gestion, de recherche et de depot des documents.'
        ]
      },
      {
        title: '4.1 Creation et enregistrement de documents',
        paragraphs: [
          'Le bouton Creer ou charger permet d ajouter un nouveau contenu dans la bibliotheque. Il est possible de creer un dossier, un contrat, un livrable, un compte rendu, un lien, ou de televerser des fichiers ou dossiers existants.'
        ],
        bullets: [
          'Enregistrement direct dans l arborescence officielle (Projet, Activite, Sous-activite, Contrat)',
          'Respect obligatoire des regles de codification et de nommage du programme',
          'Option de televersement de fichiers ou de dossiers existants'
        ]
      },
      {
        title: '4.2 Recherche par mot-cle, type ou date',
        paragraphs: [
          'Utilisation de la barre de recherche situee en haut de la bibliotheque SharePoint. Recherche possible par mot-cle (nom du document, code projet, contrat, livrable, etc.).'
        ],
        bullets: [
          'Affichage automatique des elements correspondants (dossiers et fichiers)',
          'Possibilite d affiner les resultats via les filtres: type de document, date de modification, auteur, emplacement',
          'Acces rapide aux documents sans navigation manuelle dans toute l arborescence',
          'Recherche avancee par metadonnees disponible'
        ]
      },
      {
        title: '4.3 Tri par categorie',
        paragraphs: [
          'Cliquez sur le bouton Options puis choisissez le tri correspondant pour organiser l affichage des documents par categorie.'
        ]
      },
      {
        title: '4.4 Gestion des versions',
        paragraphs: [
          'Le module GED SharePoint integre des mecanismes natifs de tracabilite et de gestion des versions des documents. Le systeme enregistre automatiquement: l auteur du document, la date de creation, la date de modification et l utilisateur ayant effectue la derniere mise a jour.',
          'Les utilisateurs ne sont pas autorises a modifier ni a supprimer directement un document dans SharePoint. Seuls l Administrateur systeme et le Documentaliste (Records Manager) disposent des droits de modification ou de suppression.'
        ],
        bullets: [
          'Pour reviser un document: telecharger la version existante, effectuer les modifications en local, recharger le document dans le dossier approprie',
          'Le document mis a jour doit etre enregistre sous une nouvelle version, conformement a la codification documentaire en vigueur',
          'Toute modification documentaire doit etre tracable, versionnee et conforme a la codification officielle'
        ]
      },
      {
        title: '4.5 Telechargement et consultation',
        paragraphs: [
          'Acces aux documents via la navigation dans l arborescence SharePoint ou par la barre de recherche. Ouverture des fichiers en mode consultation directement dans SharePoint. Possibilite de telecharger un document pour consultation hors ligne.'
        ]
      },
      {
        title: '4.6 Partage entre utilisateurs',
        paragraphs: [
          'Possibilite de partager des documents ou dossiers via la fonction Partager de SharePoint. Le partage s effectue par clic droit sur le document ou le dossier, puis selection de l option Partager.'
        ],
        bullets: [
          'Generation d un lien securise a destination des utilisateurs autorises',
          'Partage limite selon les droits d acces definis par le systeme',
          'Recommandation d eviter l envoi de documents par e-mail lorsque le partage SharePoint est disponible',
          'Tracabilite des acces et des partages assuree par la plateforme'
        ]
      },
      {
        title: '4.7 Saisie, recherche et affichage des metadonnees',
        paragraphs: [
          'Les metadonnees des documents sont visibles directement dans la bibliotheque SharePoint via les colonnes affichees. Il est possible d afficher le detail complet en selectionnant le document puis en cliquant sur Details.'
        ],
        bullets: [
          'Principales metadonnees: Projet, Activite, Sous-activite, Contrat, Type de document, Version et statut',
          'Les metadonnees facilitent la recherche avancee, le filtrage et le controle documentaire',
          'Toute modification des metadonnees est soumise aux droits d acces et aux regles de gouvernance du programme'
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

const GedDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module GED (Gestion Electronique des Documents) du SIP MCA-Benin Regional, son architecture SharePoint Online, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module de Gestion Electronique des Documents (GED) du systeme MOSES constitue le referentiel documentaire officiel du programme MCA-Benin Regional. Il permet la centralisation, l organisation, la securisation et la tracabilite de l ensemble des documents produits ou recus dans le cadre du Compact Regional.',
          'Base sur SharePoint Online, le module assure le stockage structure des documents selon la decomposition officielle du programme (WBS), la gestion des versions et de l historique des modifications, le controle des acces selon les profils utilisateurs, la recherche rapide par mots-cles et metadonnees, et l archivage conforme aux exigences du MCC.'
        ]
      },
      {
        title: '1.1 Architecture technique',
        paragraphs: ['Le module repose sur les composants suivants:'],
        bullets: [
          'Architecture: SharePoint Online',
          'Couche de donnees: SharePoint Online',
          'Notifications: Microsoft Outlook',
          'Aucune couche d automatisation ou de reporting dediee n est actuellement implementee'
        ]
      },
      {
        title: '2. Modele de donnees',
        paragraphs: [
          'Le module repose sur une bibliotheque documentaire SharePoint dediee, configuree pour gerer les documents contractuels, les livrables techniques, les comptes rendus, les correspondances officielles et les rapports et notes internes.',
          'Chaque document est associe a des metadonnees obligatoires permettant son identification et sa tracabilite.'
        ],
        bullets: [
          'Projet: projet du Compact Regional',
          'Activite: activite correspondante',
          'Sous-activite: code WBS officiel',
          'Contrat: numero et intitule du contrat',
          'Type de document: contrat, livrable, rapport, CR, note, etc.',
          'Statut: brouillon, soumis, valide, final, archive',
          'Version: numero de version',
          'Date du document: date officielle',
          'Auteur / Responsable: entite ou personne responsable'
        ]
      },
      {
        title: '2.1 Arborescence documentaire',
        paragraphs: [
          'L arborescence reproduit strictement la structure WBS du programme et ne peut etre modifiee par les utilisateurs. Structure hierarchique: Projet, Activite, Sous-activite (Code WBS), Contrat, Dossiers documentaires (Contrats, Livrables, Comptes rendus, Correspondances, Archives).',
          'Aucun document ne doit etre stocke en dehors de cette structure officielle.'
        ]
      },
      {
        title: '3. Interfaces utilisateur',
        paragraphs: ['Le module propose les ecrans suivants:'],
        bullets: [
          'Page d accueil de la GED: acces aux bibliotheques documentaires, acces rapide aux dossiers recents, liens vers les projets principaux, barre de recherche globale',
          'Vue bibliotheque documentaire: liste des documents d un dossier, affichage des metadonnees, filtres et tri, actions disponibles (ouvrir, telecharger)',
          'Formulaire de depot de document: selection du dossier cible, televersement du fichier, saisie des metadonnees obligatoires, validation du depot',
          'Page de consultation d un document: apercu du document dans le navigateur, historique des versions, informations detaillees',
          'Interface de recherche avancee: recherche par mots-cles, filtres par metadonnees, export de la liste des resultats'
        ]
      },
      {
        title: '4. Fonctionnalites',
        paragraphs: ['Les fonctionnalites principales du module sont:'],
        bullets: [
          'Gestion documentaire: depot structure des documents, versionnement automatique, historique des modifications',
          'Organisation et classement: arborescence basee sur le WBS, codification normalisee des documents, certaines metadonnees obligatoires',
          'Recherche et consultation: recherche simple par mots-cles, recherche avancee par mots-cles ou metadonnees, filtres dynamiques',
          'Securite et gouvernance (administrateur): gestion des droits par profil, tracabilite des actions utilisateurs, audit des acces et modifications',
          'Archivage: transfert vers les archives a la cloture d un contrat, conservation conforme aux exigences MCC'
        ]
      },
      {
        title: '5. Flux d automatisation',
        paragraphs: [
          'Aucun flux d automatisation n est actuellement implemente dans le module GED.',
          'Les operations de depot, modification et archivage sont realisees manuellement selon les procedures etablies.'
        ]
      },
      {
        title: '6. Integrations externes',
        paragraphs: [
          'Microsoft Outlook: envoi de notifications par courrier electronique lors de certaines actions (partage de document, alertes de modification, invitations).',
          'Le module beneficie egalement de l integration native avec l environnement Microsoft 365 pour l authentification et la gestion des utilisateurs.'
        ]
      },
      {
        title: '7. Environnements de deploiement',
        paragraphs: [
          'Le module est deploye uniquement dans l environnement de production du tenant Microsoft 365 du programme. Hebergement SharePoint Online, authentification via Microsoft Entra ID, acces securise via internet.',
          'Aucun environnement de test ou de preproduction distinct n est actuellement utilise.'
        ]
      },
      {
        title: '8. Checklist de deploiement',
        paragraphs: ['Verifications avant mise en production:'],
        bullets: [
          'Configuration technique: site documentaire d equipe cree, bibliotheque documentaire creee, mise en place de l arborescence WBS, configuration des metadonnees, activation du versioning',
          'Securite: attribution des permissions, verification des acces',
          'Fonctionnalite: test de depot de document, test de recherche, test de consultation',
          'Documentation et formation: guide utilisateur disponible, formation des responsables de depot, communication aux parties prenantes'
        ]
      }
    ]}
  />
);

const gedPages: Record<SectionId, React.ComponentType> = {
  'note-technique': GedNoteTechniquePage,
  'guide-utilisateur': GedGuideUtilisateurPage,
  'documentation-technique': GedDocumentationTechniquePage
};

export default gedPages;
