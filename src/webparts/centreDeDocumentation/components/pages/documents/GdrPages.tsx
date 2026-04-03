import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const GdrNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module informatique de Gestion Des Risques (GDR)
    </p>

    <section className="cdoc-block">
      <h3>Introduction</h3>
      <p>
        La gestion des risques constitue un levier essentiel pour la reussite du
        programme MCA-Benin Regional. Pour y repondre efficacement, un dispositif
        structure, tracable et harmonise est a deployer par MOSES, couvrant l ensemble
        du cycle de vie du risque, depuis la declaration a l archivage.
      </p>
      <p>Le module Gestion Des Risques (GDR) propose vise a:</p>
      <ul>
        <li>centraliser l ensemble des informations relatives aux risques identifies;</li>
        <li>permettre aux differentes parties prenantes du programme de suivre l exposition aux risques du programme et de ses contrats.</li>
      </ul>
      <p>Ce module est concu comme un module integre aux modules du SGESSS.</p>
    </section>

    <section className="cdoc-block">
      <h3>1. Objectifs du module</h3>
      <h4>1.1 Objectif general</h4>
      <p>
        Mettre a disposition du MCA-Benin Regional un outil informatique integre
        permettant de declarer, approuver, analyser, traiter, suivre et clore
        l ensemble des risques du programme, conformement au cadre de gestion des risques.
      </p>
      <h4>1.2 Objectifs specifiques</h4>
      <ul>
        <li>Permettre a un utilisateur de declarer un risque</li>
        <li>Permettre a un approbateur de valider ou de rejeter un risque relevant du domaine dont il est en charge</li>
        <li>Permettre la saisie des donnees relatives a l analyse d un risque</li>
        <li>Permettre la planification de mesures d attenuation pour un risque</li>
        <li>Permettre le suivi de la mise en oeuvre des mesures</li>
        <li>Permettre le suivi de l evolution du statut d un risque tout au long de son cycle de vie</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>2. Architecture generale du module</h3>
      <p>Le module est structure autour de trois grandes parties complementaires:</p>
      <ol>
        <li>
          <strong>Partie 1:</strong> Un registre des risques qui affiche tous les risques
          saisis dans le module GDR avec toutes les donnees pertinentes.
        </li>
        <li>
          <strong>Partie 2:</strong> La gestion du cycle de vie des risques, en respectant le cycle suivant:
          <ul>
            <li>Declaration</li>
            <li>Approbation</li>
            <li>Analyse</li>
            <li>Planification des mesures</li>
            <li>Suivi des mesures</li>
            <li>Cloture</li>
            <li>Archivage</li>
          </ul>
        </li>
        <li>
          <strong>Partie 3:</strong> Un dashboard a double niveau (operationnel et executif)
          permettant l analyse consolidee de l exposition aux risques et eclaire la prise de decision.
        </li>
      </ol>
    </section>

    <section className="cdoc-block">
      <h3>3. Roles et autorisations</h3>
      <p>Le module integre une gestion des roles configurables par domaines:</p>
      <ul>
        <li><strong>Declarant:</strong> peut creer un risque (plusieurs declarants par domaine)</li>
        <li><strong>Approbateur:</strong> approuve ou rejette le risque (un seul approbateur par domaine)</li>
        <li><strong>Proprietaire du risque MOSES:</strong> prend en charge l analyse, le traitement et le suivi (plusieurs proprietaires par domaine)</li>
        <li><strong>Homologue MCA:</strong> notifie, collabore a la planification des mesures et au suivi des risques (lie au proprietaire designe)</li>
      </ul>
      <p>
        A chaque changement de statut du risque, un ensemble d utilisateurs predefinis
        et configures dans le module par domaine sont notifies par email.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>4. Detail des etapes du cycle de vie</h3>
      <h4>Etape 1: Declaration du risque</h4>
      <p><strong>Acteur:</strong> Declarant du risque</p>
      <p>Champs obligatoires: intitule du risque, description du risque, date d identification, domaine du risque, projet, niveau GDR, code contrat (le cas echeant).</p>
      <p>Champs optionnels: cause(s), categorie(s) concernee(s), consequence(s), document(s) attache(s).</p>

      <h4>Etape 2: Approbation du risque</h4>
      <p><strong>Acteur:</strong> Approbateur du risque (unique pour chaque domaine)</p>
      <p>Scenario d approbation: designation obligatoire du proprietaire du risque (MOSES) et de l homologue MCA. Le risque passe en statut Approuve.</p>
      <p>Scenario de rejet: le risque passe en statut Rejete et archive avec archivage automatique.</p>

      <h4>Etape 3: Analyse du risque</h4>
      <p><strong>Acteur:</strong> Proprietaire du risque (MOSES)</p>
      <p>Le proprietaire renseigne les donnees suivantes:</p>
      <ul>
        <li>Probabilite (score de 1 a 5)</li>
        <li>Impact financier, sur l echeancier, sur la securite, sur l environnement, sur l inclusion sociale, sur la qualite (scores de 1 a 5)</li>
        <li>Impact (score calcule)</li>
        <li>Proximite dans le temps (score de 1 a 5)</li>
        <li>Score du risque (score calcule)</li>
        <li>Indice de risque (score calcule)</li>
      </ul>

      <h4>Etape 4: Planification des mesures</h4>
      <p><strong>Acteur:</strong> Proprietaire du risque</p>
      <p>Apres avoir analyse le risque, le proprietaire planifie une ou plusieurs mesures avec les champs: intitule, description, debut planifie, fin planifiee, cout planifie, devise, commentaires, responsable d execution designe, document(s) attache(s).</p>

      <h4>Etape 5: Suivi de la mise en oeuvre des mesures</h4>
      <p><strong>Acteur:</strong> Proprietaire du risque</p>
      <p>Pour chaque mesure: debut reel, fin reelle, pourcentage d avancement, commentaires, document(s) attache(s).</p>

      <h4>Etape 6: Cloture du risque</h4>
      <p><strong>Acteur:</strong> Proprietaire du risque</p>
      <p>Saisie d un commentaire de cloture contenant les lecons apprises et confirmation de la cloture.</p>

      <h4>Etape 7: Archivage automatique</h4>
      <p>Une fois le risque cloture, il est archive dans les 30 jours qui suivent la date de cloture.</p>
    </section>

    <section className="cdoc-block">
      <h3>5. Tableaux de bord</h3>
      <h4>5.1 Tableau de bord operationnel</h4>
      <p>
        Le tableau bord operationnel vise a offrir aux equipes GDR, aux proprietaires de risques
        et aux responsables de suivi une vue synthetique et dynamique de l exposition du programme
        et de ses contrats aux risques.
      </p>
      <p>Indicateurs:</p>
      <ul>
        <li>Total de risques: nombre global de risques enregistres dans le module</li>
        <li>Pourcentage de risques couverts par un plan de traitement</li>
        <li>Pourcentage de nouveaux risques</li>
        <li>Pourcentage de plans d actions executes</li>
        <li>Pourcentage de risques reevalues apres action</li>
        <li>Pourcentage de plans d actions en cours</li>
      </ul>
      <p>Filtres disponibles: statut, domaine, projet, categorie, contrat.</p>

      <h4>5.2 Tableau de bord executif</h4>
      <p>
        Le tableau bord executif vise a offrir a la direction du MCA, aux decideurs et
        aux parties prenantes une vue strategique, consolidee et ciblee sur les risques
        majeurs et critiques, avec un focus prioritaire sur l impact financier et les couts
        de traitement des risques.
      </p>
      <p>Indicateurs:</p>
      <ul>
        <li>Risques critiques: nombre de risques dont la criticite depasse le seuil defini</li>
        <li>Risques majeurs: nombre de risques de niveau eleve</li>
        <li>Estimation mise en oeuvre des reponses: cout total planifie des mesures d attenuation</li>
        <li>Reel mise en oeuvre des reponses: cout total reel engage</li>
        <li>Impact cumulatif des risques: somme des impacts financiers potentiels</li>
      </ul>
      <p>Filtres disponibles: statut, domaine, projet, categorie, contrat.</p>
    </section>
  </article>
);

const GdrGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide a pour objectif d accompagner les utilisateurs du module Gestion des Risques (GDR) dans la prise en main de l application. Il decrit les fonctionnalites principales, les etapes d utilisation et les bonnes pratiques. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Introduction',
        paragraphs: [
          'Ce guide a pour objectif d accompagner les utilisateurs du module Gestion des Risques dans la prise en main de l application. Il decrit les fonctionnalites principales, les etapes d utilisation et les bonnes pratiques.',
          'Prerequis: un compte Microsoft 365 actif avec acces au tenant MCA/MOSES, un navigateur recommande (Microsoft Edge ou Google Chrome), droits d acces accordes par l administrateur MOSES.'
        ]
      },
      {
        title: '2. Acces au module',
        paragraphs: [
          'Pour acceder au module, ouvrez votre navigateur web et saisissez directement l URL du module Gestion des risques dans la barre d adresse.',
          'Connectez-vous avec votre compte professionnel (email et mot de passe), puis cliquez sur Autoriser. L application se charge et vous etes pret a utiliser toutes les fonctionnalites.'
        ]
      },
      {
        title: '2.1 Navigation vers le module',
        paragraphs: [
          'A l ouverture, deux options sont disponibles: Application GDR pour acceder a l espace de gestion des risques, et Tableau de bord GDR pour consulter les indicateurs et statistiques.',
          'Cliquez sur Application GDR pour naviguer vers l espace de gestion des risques. Chaque bloc affiche le statut, le nombre de risques et une redirection vers l ecran d accueil.'
        ]
      },
      {
        title: '3. Presentation de l interface',
        paragraphs: [
          'L interface principale du module GDR comprend les elements suivants:'
        ],
        bullets: [
          'Barre de recherche: permet de rechercher par intitule du risque',
          'Bouton Declarer un risque: permet de creer un nouveau risque',
          'Zone de filtres: filtres pour affiner l affichage des donnees',
          'Liste principale: affiche les enregistrements avec les colonnes cles',
          'Boutons d action: creer/afficher une mesure, modifier/afficher un risque'
        ]
      },
      {
        title: '4.1 Declaration du risque',
        paragraphs: [
          'Cette fonctionnalite permet a l utilisateur d enregistrer un nouveau risque dans le module. Elle est accessible depuis le bouton Declarer un risque.',
          'Preconditions: etre connecte avec un role Declarant et avoir acces a l application.'
        ],
        bullets: [
          'Etape 1: Cliquez sur le bouton + Declarer un risque pour acceder au formulaire',
          'Etape 2: Remplissez tous les champs obligatoires du formulaire (intitule, description, projet, domaine, niveau GDR)',
          'Etape 3: Verifiez que tous les champs obligatoires sont remplis, puis cliquez sur Enregistrer',
          'Etape 4: Pour annuler, cliquez sur le bouton Annuler et confirmez votre choix'
        ]
      },
      {
        title: '4.2 Champs du formulaire',
        paragraphs: [
          'Les champs du formulaire de declaration du risque comprennent:'
        ],
        bullets: [
          'Intitule du risque (obligatoire): nom ou titre descriptif du risque',
          'Description du risque (obligatoire): description detaillee du risque',
          'Projet (obligatoire): Transversal, Infrastructure du corridor (IC), Efficacite des operations du corridor (ECO)',
          'Domaine du risque (obligatoire): Gestion du programme, GESSS, Rehabilitation route, Maintenance routiere, etc.',
          'Niveau de la GDR (obligatoire): Activite, Realisation du contrat, Gestion du contrat, Gestion du programme',
          'Code du contrat (optionnel): affiche uniquement lorsque le niveau GDR est Gestion du contrat ou Realisation du contrat',
          'Date d identification, Cause(s), Categorie concernee, Consequence(s), Pieces jointes (optionnels)'
        ]
      },
      {
        title: '5. Tableau de bord',
        paragraphs: [
          'Le module dispose de deux niveaux de tableaux de bord: un tableau de bord operationnel et un tableau de bord executif.',
          'Les filtres et interactions permettent d affiner les donnees affichees par statut, domaine, projet, categorie et contrat.'
        ]
      },
      {
        title: '6. Roles et droits d acces',
        paragraphs: ['Les roles disponibles dans le module sont:'],
        bullets: [
          'Declarant: saisie des declarations de risques (lecture + ecriture)',
          'Approbateur: validation ou rejet des risques declares (lecture + ecriture)',
          'Proprietaire du risque MOSES: analyse, suivi et cloture des risques (lecture + ecriture)',
          'Proprietaire du risque MCA: consultation des risques (lecture seule)',
          'Responsable d execution: consultation des risques (lecture seule)',
          'Visionneur: consultation des risques (lecture seule)'
        ]
      },
      {
        title: '7. Bonnes pratiques',
        paragraphs: ['Pour garantir une utilisation optimale du module:'],
        bullets: [
          'Remplir tous les champs obligatoires avant de soumettre pour eviter les erreurs de validation',
          'Verifier les pieces jointes avant envoi (les documents doivent etre lisibles et au bon format)',
          'Utiliser les filtres du tableau de bord pour retrouver rapidement l information recherchee',
          'Mettre a jour regulierement le statut des risques en cours',
          'Signaler tout dysfonctionnement a l equipe support'
        ]
      },
      {
        title: '8. Resolution des problemes courants',
        paragraphs: ['En cas de difficulte, consultez les solutions suivantes:'],
        bullets: [
          'Impossible d acceder au module: contacter l administrateur MOSES pour verifier l attribution du role de securite',
          'Le formulaire ne se soumet pas: verifier que tous les champs marques * sont remplis',
          'L ecran est vide ou pas de donnees: reinitialiser les filtres ou rafraichir la page (F5)',
          'Erreur lors du telechargement d un fichier: verifier le format (PDF/PNG/JPEG) et la taille'
        ]
      },
      {
        title: '9. Support et assistance',
        paragraphs: [
          'Pour toute question ou difficulte, contactez l equipe technique du SIP via le canal de support dedie.',
          'Fournissez une description detaillee du probleme, accompagnee de captures d ecran si possible.'
        ]
      }
    ]}
  />
);

const GdrDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module GDR (Gestion Des Risques) du SIP MCA-Benin Regional, son architecture Power Platform, ses fonctionnalites et son modele de donnees. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'La gestion des risques constitue un levier essentiel pour la reussite du programme MCA-Benin Regional. Le module GDR propose vise a centraliser les informations relatives aux risques identifies et permettre aux differentes parties prenantes de suivre l exposition aux risques du programme et de ses contrats.',
          'Ce module est concu comme un module integre aux modules du SGESSS.'
        ]
      },
      {
        title: '2. Architecture et technologie',
        paragraphs: ['L architecture du module repose sur le socle Microsoft Power Platform:'],
        bullets: [
          'Interface utilisateur: Power Apps (Canvas) -- application composee d une page d accueil, d un tableau de bord, d un registre des risques et de formulaires de saisie et de consultation',
          'Donnees: Microsoft SharePoint -- les donnees sont stockees dans des listes SharePoint avec des relations entre les differentes listes',
          'Automatisation: Power Automate -- flux de notification par email (creation, approbation, mesure, cloture, archivage)',
          'Reporting: Power BI -- tableau de bord publie sur Power BI Service, compose de deux vues (operationnelle et executive), actualise quotidiennement',
          'Messagerie: Microsoft Outlook -- notifications automatiques envoyees par e-mail aux utilisateurs concernes a chaque etape du processus'
        ]
      },
      {
        title: '2.1 Environnements',
        paragraphs: ['Le module est deploye sur trois environnements:'],
        bullets: [
          'DEV: solution non-geree pour le developpement',
          'TEST: solution geree pour les tests',
          'PROD: solution geree pour la production'
        ]
      },
      {
        title: '3. Modele de donnees',
        paragraphs: ['Le module repose sur un schema relationnel base sur des listes SharePoint interconnectees.']
      },
      {
        title: '3.1 Tables principales',
        paragraphs: ['Le modele comprend les tables suivantes:'],
        bullets: [
          'MOSES - Risque (SpList_Risque): stocke l ensemble des risques avec leurs informations',
          'Moses - Mesures (spListe_Mesure): stocke les mesures de mitigation associees a chaque risque',
          'MOSES - Mise en oeuvre (spListe_MiseOeuvre): stocke les informations de mise en oeuvre des mesures',
          'MOSES - Historique des modifications (spListe_Historique): stocke l historique des modifications apportees a l analyse des risques',
          'MOSES - Autorisation (spListe_Autorisation): stocke les roles et les utilisateurs associes a chaque role',
          'Moses - En tete (spListe_EnTete): stocke les informations d en-tete de la liste des risques',
          'Ref - Domaine du risque (spListe_Domaine): stocke la liste des domaines de risque avec leur approbateur et le projet associe',
          'Ref - Projet (spListe_Projet): liste des projets disponibles',
          'Ref - Categories Concernees (spListe_Categorie): stocke la liste des categories de risque',
          'Ref - Niveau de la GDR (spListe_NiveauGDR): liste des niveaux de la GDR disponibles'
        ]
      },
      {
        title: '3.2 Relations entre tables',
        paragraphs: ['Le modele de donnees implemente les relations suivantes:'],
        bullets: [
          'MOSES - Risque vers MOSES - Mesures: relation 0:N (un risque peut avoir plusieurs mesures ou aucune)',
          'MOSES - Mesures vers MOSES - Mise en oeuvre: relation 0:1 (une mesure est associee a une seule mise en oeuvre ou aucune)',
          'MOSES - Risque vers MOSES - Historique des modifications: relation 1:N (un risque peut avoir plusieurs historiques)',
          'Ref - Domaine du risque vers MOSES - Risque: Lookup N:1 (chaque risque appartient a un domaine)',
          'Ref - Projet vers MOSES - Risque: Lookup N:1 (chaque risque est associe a un projet)',
          'Ref - Categories Concernees vers MOSES - Risque: Lookup N:1 (chaque risque appartient a une categorie)',
          'Ref - Niveau de la GDR vers MOSES - Risque: Lookup N:1 (chaque risque a un niveau de GDR)'
        ]
      },
      {
        title: '4. Ecrans de l application',
        paragraphs: ['L application comprend les ecrans suivants:'],
        bullets: [
          'Ecran All: ecran d accueil du module GDR, point d entree pour acceder a l Application GDR ou au Tableau de bord GDR',
          'Ecran Home: ecran principal affichant des blocs par statut avec le nombre de risques correspondant, avec redirection vers le registre filtre',
          'Ecran Registre des risques: affichage des risques avec barre de recherche, filtres et boutons d action',
          'Formulaire de declaration: creation d un nouveau risque avec champs obligatoires et optionnels',
          'Formulaire d approbation: validation ou rejet du risque avec designation du proprietaire',
          'Formulaire d analyse: saisie des scores de probabilite et d impact',
          'Formulaire de mesures: planification des mesures d attenuation',
          'Formulaire de cloture: saisie du commentaire de cloture et des lecons apprises'
        ]
      },
      {
        title: '5. Automatisations / Flux Power Automate',
        paragraphs: ['Le module utilise les flux Power Automate suivants:'],
        bullets: [
          'Moses - Mail: notification par email lors de la creation d un risque',
          'Moses - Mail approbation: notification lors de l approbation ou du rejet d un risque',
          'Moses - Mail Mesure: notification lors de la creation d une mesure',
          'Moses - Mail Cloture: notification lors de la cloture d un risque',
          'Moses - Risque Archive: archivage automatique des risques clotures apres 30 jours'
        ]
      },
      {
        title: '6. Securite et roles',
        paragraphs: ['Le module integre une gestion des roles configurables par domaines:'],
        bullets: [
          'Declarant: peut creer un risque (plusieurs declarants par domaine)',
          'Approbateur: approuve ou rejette le risque (un seul approbateur par domaine)',
          'Proprietaire du risque MOSES: prend en charge l analyse, le traitement et le suivi',
          'Homologue MCA: notifie et collabore a la planification des mesures et au suivi',
          'Visionneur: visualise l ensemble des risques (lecture seule)',
          'Visibilite restreinte: un utilisateur non visionneur visualise uniquement les risques qu il a crees, approuves ou dont il est proprietaire'
        ]
      },
      {
        title: '7. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production:'],
        bullets: [
          'Donnees: listes SharePoint creees avec colonnes correctes, relations configurees',
          'Application: variables d environnement configurees, Connection References OK, tests fonctionnels passes',
          'Flux: flux Power Automate actives et testes',
          'Reporting: tableau de bord Power BI publie et actualise',
          'Securite: roles et autorisations configures par domaine, aucun secret en dur dans le code'
        ]
      }
    ]}
  />
);

const gdrPages: Record<SectionId, React.ComponentType> = {
  'note-technique': GdrNoteTechniquePage,
  'guide-utilisateur': GdrGuideUtilisateurPage,
  'documentation-technique': GdrDocumentationTechniquePage
};

export default gdrPages;
