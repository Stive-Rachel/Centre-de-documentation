import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const SgpNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module informatique de Systeme de Gestion de la Planification (SGP)
    </p>

    <section className="cdoc-block">
      <h3>Introduction</h3>
      <p>
        La mise en oeuvre du Programme MCA Benin Regional implique la gestion des
        plannings de multiples contrats, activites, projets ainsi que celui du
        programme. Ces plannings doivent etre centralises, harmonises et
        tracables.
      </p>
      <p>
        Conformement aux termes de reference, MOSES doit livrer un
        systeme de gestion de la planification offrant une meilleure visibilite
        aux dirigeants et aux gestionnaires du MCA, ainsi qu aux differentes
        parties prenantes du programme, sur les delais, les couts et
        l avancement de la production des livrables par les contractants.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>1. Objectifs du module</h3>
      <h4>1.1 Objectif general</h4>
      <p>
        L objectif general du module SGP est de mettre a disposition du
        MCA-Benin Regional une solution informatique centralisee permettant
        de planifier, suivre et analyser l ensemble des plannings contractuels
        du programme, et d eclairer la prise de decision sur les delais, les
        couts et l execution du contenu contractuel.
      </p>
      <h4>1.2 Objectifs specifiques</h4>
      <ul>
        <li>Visualiser, pour chaque contrat du programme, l ensemble des donnees cles de planification</li>
        <li>Creer et structurer les plannings des nouveaux contrats</li>
        <li>Rattacher les contrats aux activites et projets correspondants</li>
        <li>Affecter les contrats aux acteurs responsables (contractant, gestionnaire MOSES, homologue MOSES)</li>
        <li>Modifier et mettre a jour les plannings des contrats</li>
        <li>Suivre les performances en termes de delais, de couts et de contenu, via les indicateurs de la gestion de la valeur acquise</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>2. Architecture generale du module</h3>
      <p>Le module s articule autour de deux composantes complementaires :</p>
      <ol>
        <li><strong>Partie 1 :</strong> Gestion et centralisation des donnees de planification des contrats</li>
        <li><strong>Partie 2 :</strong> Tableaux de bord de suivi de la performance (delais, couts, contenu (livrables))</li>
      </ol>
      <p>
        L ensemble s appuie sur la solution Microsoft Project Online comme
        moteur de planification, avec une interface de visualisation et de
        reporting integree au Systeme Informatique de gestion du Programme (SIP).
      </p>
    </section>

    <section className="cdoc-block">
      <h3>3. Partie 1 -- Gestion de la planification</h3>
      <h4>3.1 Principe general</h4>
      <p>
        Chaque contrat fait l objet d un planning dedie, rattache a une
        activite, elles-memes rattachees a un projet. Les donnees sont saisies
        et modifiees par les gestionnaires du planning MOSES, et suivi par ses
        collaborateurs au sein des equipes MOSES et MCA.
      </p>
      <h4>3.2 Donnees de planification des contrats</h4>
      <p>Pour chaque contrat, le module permet de planifier et de gerer les informations suivantes :</p>
      <ul>
        <li>Donnee de base du contrat : intitule, code, duree</li>
        <li>Dates cles du contrat : date de signature, date d emission de l ordre de service, date d expiration, date de debut actualisee, date de fin actualisee</li>
        <li>Acteurs responsables : contractant associe, gestionnaire de contrat cote MCA, homologue MOSES</li>
        <li>Tracabilite : date de la derniere modification du planning, date de la derniere publication du planning</li>
        <li>Rattachement : activite rattachee au contrat, projet rattache au contrat</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>4. Fonctionnalites de gestion des plannings</h3>
      <h4>4.1 Creation d un nouveau planning</h4>
      <p>
        Le module SGP permet au planificateur MOSES de creer un nouveau planning
        pour un contrat signe. En se basant sur un planning de reference,
        le planificateur utilise le module pour saisir la liste des taches, les
        associer a des livrables, definir les relations de precedence, saisir
        les couts des livrables, saisir les durees, les dates de debut et les
        dates de fin des taches et des livrables.
      </p>
      <p>
        La solution permet de consolider automatiquement les donnees du niveau N
        au niveau superieur N+1 de la structure de decoupage du contrat. Les
        donnees consolidees sont principalement : les durees, les dates de
        debut, les dates de fin et les couts.
      </p>
      <h4>4.2 Rattachement des donnees relatives a un contrat</h4>
      <p>
        Le module SGP permet de rattacher un contrat a une activite,
        elles-memes rattachees a un projet. Ce rattachement permet d agreger les
        donnees de planification au niveau activite, projet et programme.
      </p>
      <p>Egalement, le module SGP permet d affecter a chaque contrat :</p>
      <ul>
        <li>Un contractant</li>
        <li>Un gestionnaire de contrat MCA</li>
        <li>Un homologue MOSES</li>
      </ul>
      <h4>4.3 Modification des plannings</h4>
      <p>
        Toute modification apportee a un planning est tracee (date, utilisateur,
        nature de la modification).
      </p>
      <h4>4.4 Suivi des delais et des couts</h4>
      <p>Le module SGP permet de suivre en continu :</p>
      <ul>
        <li>Les modifications apportees au contenu du planning d un contrat donne</li>
        <li>La modification des dates, des durees des taches et des livrables d un contrat donne</li>
        <li>L ecart entre la date de fin contractuelle et la date de fin previsionnelle</li>
        <li>L ecart entre le cout planifie et le cout reel engage</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5. Partie 2 -- Tableaux de bord et indicateurs de performance</h3>
      <p>
        Le module integre un tableau de bord articule autour de trois dimensions
        de performance : livrables, delais et couts.
      </p>
      <h4>5.1 Donnees de base</h4>
      <p>Le tableau de bord permet d afficher les donnees de base de chaque contrat selectionne :</p>
      <ul>
        <li>Le cout contractuel</li>
        <li>Le delai d execution actualise</li>
        <li>Le cout reel depense a date</li>
        <li>Le cout restant a depenser</li>
      </ul>
      <p>
        Il permet egalement de calculer et d afficher des donnees statistiques
        sur les livrables, notamment leurs statuts ainsi que leurs taux
        d execution physiques et financiers.
      </p>
      <h4>5.2 Indicateurs d execution physique et financiere</h4>
      <p>Le tableau de bord permet de suivre les taux d execution physiques et financiers des contrats et des livrables :</p>
      <ul>
        <li>Taux d execution physique planifie par livrable et par contrat (TEP planifie)</li>
        <li>Taux d execution physique reel par livrable et par contrat (TEP reel)</li>
        <li>Taux d execution financier planifie par livrable et par contrat (TEF planifie)</li>
        <li>Taux d execution financier reel par livrable et par contrat (TEF reel)</li>
      </ul>
      <h4>5.3 Indicateurs de performance des couts : Gestion de la valeur acquise</h4>
      <p>Pour chaque contrat, le tableau de bord permet de calculer et de suivre les indicateurs de la valeur acquise :</p>
      <ul>
        <li>La Valeur planifiee (VP)</li>
        <li>La Valeur acquise (VA)</li>
        <li>Le Cout reel (CR)</li>
        <li>L Ecart de cout (EC)</li>
        <li>L Ecart de delai (SV)</li>
        <li>L Indice de performance de cout (IPC)</li>
        <li>L Indice de performance de delai (IPD)</li>
      </ul>
      <p>
        Ces valeurs sont calculees a date et sont representees chronologiquement
        tout au long de la duree du contrat.
      </p>
    </section>
  </article>
);

const SgpGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du module SGP (Systeme de Gestion de la Planification) du Systeme d Information du Programme (SIP). Il est destine aux utilisateurs finaux disposant d un acces Microsoft 365 au SIP/MOSES. Version 1.0 -- Fevrier 2025."
    blocks={[
      {
        title: '1. Introduction et contexte',
        paragraphs: [
          'Le module SGP s inscrit dans le cadre du Systeme d Information du Programme (SIP) du MCA Benin Regional. Il permet la gestion centralisee des plannings de multiples contrats, activites et projets du programme.',
          'La plateforme SIP repose sur Microsoft Project Online et SharePoint Online, offrant une gestion unifiee des documents et des donnees selon un referentiel de normalisation adapte au programme du MCA Benin Regional.'
        ]
      },
      {
        title: '2. Presentation du SIP',
        paragraphs: [
          'Le SIP est construit avec pour objectif la gestion unifiee des documents et des donnees. Il assure la centralisation de toutes les informations relatives aux projets et aux documents se referant exclusivement aux activites planifiees gerees par Project Online.',
          'Le perimetre de la couverture fonctionnelle du SIP couvre les domaines suivants : planification et gestion des contrats, gestion documentaire, gestion des risques, gestion des problemes, gestion des modifications, maitrise de la qualite et suivi-evaluation.'
        ]
      },
      {
        title: '3. Connexion a Project Online',
        paragraphs: [
          'Pour acceder au module SGP, connectez-vous a Project Online du MCA Benin Regional via votre compte Microsoft 365.',
          'Depuis le tableau de bord principal, vous accedez au centre de projets qui presente l ensemble des plannings des contrats du programme.'
        ]
      },
      {
        title: '4. Creation d un nouveau projet',
        paragraphs: [
          'Le module SGP permet au planificateur MOSES de creer un nouveau planning pour un contrat signe.',
          'En se basant sur un planning de reference, le planificateur utilise le module pour saisir la liste des taches, les associer a des livrables, definir les relations de precedence, saisir les couts des livrables, les durees, les dates de debut et les dates de fin.'
        ],
        bullets: [
          'Saisir les taches et les livrables du contrat',
          'Definir les relations de precedence entre les taches',
          'Saisir les couts des livrables',
          'Saisir les durees, les dates de debut et les dates de fin'
        ]
      },
      {
        title: '5. Etendue des services',
        paragraphs: [
          'La definition de l etendue des services est un processus cle du module SGP. Elle permet de cadrer le perimetre des travaux et des livrables attendus pour chaque contrat.',
          'Une matrice RACI est associee a chaque processus pour clarifier les roles et responsabilites des differents acteurs.'
        ]
      },
      {
        title: '6. Plan de gestion des modifications',
        paragraphs: [
          'Le module SGP integre un plan de gestion des modifications qui permet de gerer l etendue des services et les changements.',
          'Un Comite de revision des modifications est designe pour evaluer et valider les demandes de modification. Chaque modification est tracee et documentee dans le registre des modifications.'
        ],
        bullets: [
          'Soumission d une demande de modification',
          'Evaluation par le Comite de revision',
          'Validation ou rejet de la demande',
          'Mise a jour du planning en consequence'
        ]
      },
      {
        title: '7. Plan de gestion des problemes',
        paragraphs: [
          'Le module SGP permet de gerer efficacement les problemes identifies au cours de l execution des contrats.',
          'Chaque probleme est enregistre dans un dossier dedie, avec un tableau de suivi et une liste unifiee des problemes par contrat.'
        ]
      },
      {
        title: '8. Gestion des couts et valeur acquise',
        paragraphs: [
          'Le module SGP integre la gestion des couts et la gestion de la valeur acquise (EVM) pour chaque contrat.',
          'Les indicateurs de la valeur acquise permettent de suivre les performances en termes de delais et de couts.'
        ],
        bullets: [
          'Valeur planifiee (VP) et Valeur acquise (VA)',
          'Cout reel (CR)',
          'Ecart de cout (EC) et Ecart de delai (SV)',
          'Indice de performance de cout (IPC) et Indice de performance de delai (IPD)'
        ]
      },
      {
        title: '9. Tableaux de bord',
        paragraphs: [
          'Le module propose des tableaux de bord analytiques presentant l avancement de tous les contrats en cours, les courbes en S, l etat d avancement des livrables et le suivi de la valeur acquise.',
          'Les donnees sont actualisees en temps reel et permettent une aide a la decision pour les dirigeants et gestionnaires du programme.'
        ]
      },
      {
        title: '10. Gestion documentaire',
        paragraphs: [
          'Le module SGP s integre avec SharePoint Online pour la gestion documentaire. Les documents sont organises par contrat et par activite, avec un systeme de versioning et de validation.',
          'Seuls les documents valides sont publies et accessibles aux utilisateurs autorises.'
        ]
      },
      {
        title: '11. Roles et droits d acces',
        paragraphs: ['Les roles disponibles dans le module sont :'],
        bullets: [
          'Administrateur : gestion complete de la plateforme et des permissions',
          'Gestionnaire de planning : creation, modification et publication des plannings',
          'Contributeur : saisie des donnees et mise a jour des informations',
          'Lecteur : consultation seule des donnees et des tableaux de bord'
        ]
      },
      {
        title: '12. Bonnes pratiques',
        paragraphs: ['Pour garantir une utilisation optimale du module :'],
        bullets: [
          'Renseigner tous les champs obligatoires pour garantir la qualite des donnees',
          'Mettre a jour regulierement les plannings des contrats',
          'Utiliser les filtres de recherche pour retrouver rapidement les informations',
          'Verifier la coherence des donnees avant validation',
          'Exporter regulierement les rapports pour le suivi',
          'Signaler tout dysfonctionnement a l equipe support'
        ]
      },
      {
        title: '13. Support et assistance',
        paragraphs: [
          'Pour toute question ou difficulte, contactez l equipe technique du SIP via le canal de support dedie.',
          'Fournissez une description detaillee du probleme, accompagnee de captures d ecran si possible.'
        ]
      }
    ]}
  />
);

const SgpDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module SGP (Systeme de Gestion de la Planification) du SIP MCA-Benin Regional, son architecture, ses fonctionnalites et son modele de donnees. Version 2.0 -- Fevrier 2025."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module SGP est le composant central du Systeme d Information du Programme (SIP) dedie a la gestion de la planification des contrats du programme MCA-Benin Regional. Il s appuie sur Microsoft Project Online pour la gestion des plannings et SharePoint Online pour la gestion documentaire.',
          'Le module couvre la planification, le suivi et l analyse de l ensemble des plannings contractuels du programme, couvrant les projets Infrastructure du Corridor (IC) et Efficacite des Operations du Corridor (EOC).'
        ]
      },
      {
        title: '2. Contexte et objectifs',
        paragraphs: [
          'Le Compact MCA-Benin Regional (202 millions USD de MCC + 204,15 millions USD de contrepartie beninoise) vise a ameliorer le corridor Cotonou-Niamey via deux projets : Infrastructure du Corridor (IC) et Efficacite des Operations du Corridor (EOC).',
          'Le module SGP a ete concu pour centraliser et harmoniser la gestion des plannings de l ensemble des contrats du programme, en offrant une visibilite sur les delais, les couts et l avancement de la production des livrables.'
        ]
      },
      {
        title: '3. Architecture technique',
        paragraphs: [
          'La construction de la plateforme repose sur l utilisation de technologies modernes de gestion de programme et de projets. Le choix a ete porte sur la plateforme Microsoft 365 et Microsoft Project, pour sa completude et son aptitude a mettre en oeuvre les preceptes du PMI.'],
        bullets: [
          'Microsoft Project Online : gestion des portefeuilles et des projets',
          'SharePoint Online : gestion documentaire et collaboration entre les equipes',
          'SQL Server : centralisation des donnees pour la gestion des activites et des ressources',
          'Power Automate : automatisation des workflows, notifications et processus d approbation',
          'Power BI : production des tableaux de bord analytiques et visualisation des performances'
        ]
      },
      {
        title: '4. Fonctionnalites principales',
        paragraphs: ['Le module SGP offre les fonctionnalites suivantes :'],
        bullets: [
          'Gestion centralisee des plannings : creation, modification et publication des plannings des contrats',
          'Rattachement hierarchique : contrats rattaches aux activites, elles-memes rattachees aux projets IC et EOC',
          'Suivi des performances : indicateurs de delais, couts et contenu via la gestion de la valeur acquise (EVM)',
          'Gestion documentaire integree : documents organises par contrat et par activite avec versioning',
          'Tableaux de bord analytiques : courbes en S, taux d execution physique et financier, indicateurs de la valeur acquise',
          'Gestion des modifications : registre des modifications avec processus de validation',
          'Gestion des problemes : dossiers, tableaux et liste unifiee des problemes',
          'Matrices RACI : clarification des roles et responsabilites par contrat'
        ]
      },
      {
        title: '5. Types de licences',
        paragraphs: ['Le module utilise les licences Microsoft suivantes :'],
        bullets: [
          'Microsoft Project Plan 1, 3 et 5 selon les profils utilisateurs',
          'Microsoft 365 E5, E3 et F3 pour l acces aux differentes fonctionnalites',
          'Les licences sont attribuees en fonction du role : administrateur, gestionnaire de planning, contributeur ou lecteur'
        ]
      },
      {
        title: '6. Modele de donnees',
        paragraphs: [
          'Le modele de donnees du module SGP est structure autour des entites principales : programmes, projets, activites, contrats, taches et livrables.',
          'Les donnees de planification sont consolidees automatiquement du niveau N au niveau superieur N+1 de la structure de decoupage. Les donnees consolidees incluent les durees, les dates de debut, les dates de fin et les couts.'
        ]
      },
      {
        title: '7. Tableaux de bord et indicateurs',
        paragraphs: ['Le module integre plusieurs tableaux de bord :'],
        bullets: [
          'Tableau d avancement de tous les contrats en cours',
          'Courbes en S pour le suivi des couts',
          'Etat d avancement des livrables par contrat',
          'Suivi du taux d execution financier (TEF)',
          'Suivi de la valeur acquise avec les indicateurs VP, VA, CR, EC, SV, IPC et IPD'
        ]
      },
      {
        title: '8. Securite et politique de sauvegarde',
        paragraphs: [
          'Le module SGP dispose d options pour le controle des acces des utilisateurs autorises. Il garantit que seules les personnes autorisees peuvent consulter, modifier ou supprimer certains documents ou informations.',
          'La plateforme est securisee contre toute defaillance ou attaque grace a l implementation de mesures de sauvegarde dans des sites distants avec une administration distincte en collaboration avec la DSI du MCA-Benin Regional.'
        ],
        bullets: [
          'Gestion des acces par groupes et modeles d attribution des autorisations',
          'Tracabilite de toutes les actions sur les documents et les donnees',
          'Politique de sauvegarde specifique au SIP',
          'Respect des normes de securite et de conformite'
        ]
      },
      {
        title: '9. Environnements',
        paragraphs: ['Le module est deploye sur la plateforme Microsoft 365 du tenant mosesmcareg :'],
        bullets: [
          'Environnement de developpement et de test',
          'Environnement de production'
        ]
      },
      {
        title: '10. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production :'],
        bullets: [
          'Donnees : tables et listes creees avec colonnes correctes, index configures',
          'Application : variables d environnement configurees, licences attribuees',
          'Plannings : plannings de reference crees et valides',
          'Securite : permissions configurees par groupe, aucun secret en dur dans le code',
          'Formation : sessions administrateurs et utilisateurs realisees'
        ]
      }
    ]}
  />
);

const sgpPages: Record<SectionId, React.ComponentType> = {
  'note-technique': SgpNoteTechniquePage,
  'guide-utilisateur': SgpGuideUtilisateurPage,
  'documentation-technique': SgpDocumentationTechniquePage
};

export default sgpPages;
