import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const GncNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">REPUBLIQUE DU BENIN</p>
    <p>MILLENNIUM CHALLENGE CORPORATION</p>
    <p>MILLENNIUM CHALLENGE ACCOUNT - BENIN REGIONAL</p>

    <section className="cdoc-block">
      <h3>PROJETS</h3>
      <ul>
        <li>INFRASTRUCTURES DU CORRIDOR (IC)</li>
        <li>EFFICACITE DES OPERATIONS DU CORRIDOR (ECO)</li>
        <li>ETUDES TECHNIQUES ET SUPERVISION DES TRAVAUX DE RECONSTRUCTION EN 2X2 VOIES DE LA ROUTE BOHICON - DASSA ZOUME</li>
      </ul>
      <p><strong>NOTE TECHNIQUE</strong></p>
      <p><strong>MODULE DE GESTION DES NON-CONFORMITE</strong></p>
      <p>Plateforme SGESSS - Compact MCA Benin Regional</p>
      <p>Fevrier 2026</p>
    </section>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Dans le cadre du Compact regional de MCA Benin, la conformite aux exigences
        environnementales, sociales, sante et securite est essentielle pour assurer la reussite des
        projets. La gestion rigoureuse des ecarts identifies, sous forme d Observations,
        d Avertissements ou de Non-Conformites (OAN-C), permet de prevenir les risques, proteger
        les intervenants et respecter les obligations contractuelles.
      </p>
      <p>
        La mise en place d un mecanisme standardise via la plateforme SGESSS permet de:
      </p>
      <ul>
        <li>formaliser les etapes du processus depuis la declaration jusqu a la cloture des OAN-C;</li>
        <li>clarifier les roles et responsabilites de toutes les parties prenantes: Entrepreneur, Ingenieur, MOSES, MCA Ben Reg, et MCC;</li>
        <li>garantir la tracabilite et le suivi de toutes les non-conformites avec preuves documentees;</li>
        <li>assurer la conformite aux Normes de Performance (NP1 a NP6 et NP8) de la Societe Financiere Internationale.</li>
      </ul>
      <p>
        Cette approche systematique contribue a ameliorer la qualite de la supervision et a
        anticiper les risques ESSS (environnement, social, sante et securite).
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objet de la note</h3>
      <p>
        La presente note technique decrit le mecanisme de declaration, de traitement, de suivi et de
        cloture des Observations, Avertissements et Non-Conformites (OAN-C) enregistres dans la
        plateforme SGESSS dans le cadre du compact.
      </p>
      <p>Elle vise a:</p>
      <ul>
        <li>formaliser les etapes du processus;</li>
        <li>clarifier les roles et responsabilites des parties prenantes;</li>
        <li>garantir la tracabilite et le suivi des non-conformites;</li>
        <li>assurer la conformite aux exigences des Normes de Performance (NP) de la SFI concernes.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>La procedure s applique a:</p>
      <ul>
        <li>MCC</li>
        <li>MCA Ben Reg</li>
        <li>MOSES</li>
        <li>L Ingenieur</li>
        <li>L Entrepreneur</li>
      </ul>
      <p>
        Elle couvre toutes les non-conformites liees aux exigences environnementales, sociales,
        sante et securite (ESSS).
      </p>
    </section>

    <section className="cdoc-block">
      <h3>4. References</h3>
      <ul>
        <li>Normes de Performance (NP1 a NP8 hormis la NP 7) de la Societe Financiere Internationale</li>
        <li>Exigences contractuelles ESSS du compact</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5. Definitions</h3>
      <ul>
        <li>Observation: Ecart mineur sans impact significatif immediat.</li>
        <li>Avertissement: Ecart necessitant correction rapide.</li>
        <li>Non-Conformite: Manquement avere necessitant une action corrective formelle.</li>
        <li>OAN-C: Observation - Avertissement - Non-Conformite.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>6. Description du Processus</h3>
      <h4>6.1 Declaration d une OAN-C</h4>
      <p>
        Si l organisme du declarant est MCC/MCA Ben Reg/MOSES, et si la declaration concerne
        l entrepreneur: Premiere etape.
      </p>
      <p>La declaration s effectue sur la plateforme SGESSS par l entite declarante.</p>

      <h4>5.1.1 Informations a renseigner</h4>
      <p>Le formulaire numerique comprend notamment:</p>
      <ol>
        <li>Organisme concerne</li>
        <li>Organisme du declarant</li>
        <li>Nom du declarant</li>
        <li>Nom de l ingenieur accompagnateur</li>
        <li>Date de survenue</li>
        <li>Heure de constat</li>
        <li>Localisation precise (avec cartographie)</li>
        <li>Type de controle (programme, inopine, systematique, suite a alerte)</li>
        <li>NP de la SFI concernees</li>
        <li>Description detaillee et causes probables</li>
        <li>Recommandations</li>
        <li>Televersement des preuves (photos, rapports)</li>
        <li>Assignation</li>
      </ol>
      <p>
        L entite declarante le transmet a l Ingenieur et non directement a l entrepreneur dans ce
        premier cas.
      </p>

      <h4>5.2 Traitement par l Ingenieur</h4>
      <p>Apres reception:</p>
      <ul>
        <li>L Ingenieur peut assigner directement a l Entrepreneur;</li>
        <li>Requalifier l OAN-C (Observation â†” Avertissement â†” Non-Conformite);</li>
        <li>Completer ou modifier les informations apres verification terrain.</li>
      </ul>
      <p>Toutes les OAN-C doivent apparaitre dans un registre de suivi.</p>

      <h4>5.3 Traitement par l Entrepreneur</h4>
      <p>Apres assignation: notification automatique par email.</p>
      <h4>5.3.1 Champs a renseigner</h4>
      <ol>
        <li>Organisme de l entrepreneur</li>
        <li>Nom du declarant de levee</li>
        <li>Date de traitement</li>
        <li>Actions correctives detaillees</li>
        <li>Mesures preventives proposees</li>
        <li>Televersement des preuves</li>
        <li>Transmission a l Ingenieur</li>
      </ol>

      <h4>5.4 Validation Ingenieur ou commentaires</h4>
      <p>
        L Ingenieur examine les actions correctives et valide si satisfait. Si non satisfait, il fait un
        commentaire. Les parties prenantes MOSES, MCA Ben Reg et MCC peuvent aussi deposer des
        commentaires a reception de la notification pour prise en compte lors de la prise en charge.
        Dans les deux cas, une notification est envoyee aux parties prenantes concernees.
      </p>

      <h4>5.5 Cloture par MOSES</h4>
      <p>MOSES, apres verification, cloture la declaration.</p>
    </section>

    <section className="cdoc-block">
      <h3>6. Cas particuliers</h3>
      <ul>
        <li>Si l entite declarante est l Ingenieur, MOSES, MCA ou MCC: pas de phase intermediaire de prise en charge et assignation directe a l entite concernee.</li>
        <li>Les non-conformites identifiees par l Entrepreneur sont transmises a l Ingenieur pour analyse avant declaration officielle par l Ingenieur.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Responsabilites</h3>
      <table className="cdoc-table">
        <thead>
          <tr>
            <th>Acteur</th>
            <th>Responsabilite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Declarant (Ingenieur, MOSES, MCA Ben Reg)</td>
            <td>Mise en oeuvre des actions correctives</td>
          </tr>
          <tr>
            <td>Ingenieur</td>
            <td>Verification, requalification, assignation, validation, suivi</td>
          </tr>
          <tr>
            <td>MOSES</td>
            <td>Supervision globale et cloture</td>
          </tr>
          <tr>
            <td>MCA Ben Reg/MCC</td>
            <td>Suivi de conformite</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section className="cdoc-block">
      <h3>8. Delais</h3>
      <p>Delai maximal de traitement:</p>
      <ul>
        <li>1 jour si non-conformite</li>
        <li>1 jour si avertissement</li>
        <li>2 jours si observation</li>
      </ul>
      <p>
        Ces delais passes, des messages de rappel sont generes par la plateforme et envoyes aux
        parties prenantes concernees. Les organismes retenus pour deposer des commentaires au
        meme titre que l Ingenieur devront le faire aussitot la notification recue.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>9. tracabilite et Archivage</h3>
      <p>Toutes les OAN-C doivent:</p>
      <ul>
        <li>etre enregistrees dans la plateforme SGESSS dans le module eponyme;</li>
        <li>disposer d un code unique;</li>
        <li>etre disponibles pour audit et revue periodique.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>10. Conclusion</h3>
      <p>La presente procedure permet:</p>
      <ul>
        <li>une gestion structuree des non-conformites;</li>
        <li>une responsabilisation claire des acteurs;</li>
        <li>une amelioration continue des performances ESSS;</li>
        <li>une conformite aux exigences contractuelles et aux Normes de Performance de la SFI.</li>
      </ul>
    </section>
  </article>
);

const GncGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide utilisateur decrit pas a pas l utilisation du module GNC: de la declaration a la cloture d une non-conformite, avec les roles, les ecrans et les bonnes pratiques de traitement."
    blocks={[
      {
        title: '1. Objectif du guide',
        paragraphs: [
          'Ce document aide les utilisateurs a prendre en main le module GNC (Gestion des Non-Conformites) de la plateforme SGESSS.',
          'Il explique les prerequis, les roles, les ecrans et le traitement d une NC jusqu a sa cloture.'
        ]
      },
      {
        title: '2. Prerequis d acces',
        paragraphs: ['Avant toute utilisation, verifier les conditions techniques et habilitations.'],
        bullets: [
          'Compte Microsoft 365 actif avec droits d acces au module GNC',
          'Connexion internet stable',
          'Navigateur recent: Edge, Chrome ou Firefox',
          'Acces aux listes SharePoint et flux Power Automate selon le role'
        ]
      },
      {
        title: '3. Roles utilisateurs',
        paragraphs: [
          'Les actions disponibles dependent du role attribue dans Microsoft 365.',
          'Chaque acteur intervient a une etape precise du cycle de vie de la NC.'
        ],
        bullets: [
          'Declarant (MOSES, MCA, MCC, Ingenieur): cree et cloture la NC',
          'Ingenieur: prend en charge, requalifie, assigne et valide/rejette',
          'Organisme concerne (Entreprise): execute les actions correctives et preventives',
          'Parties prenantes: consultent et commentent selon habilitation'
        ]
      },
      {
        title: '4. Navigation dans l application',
        paragraphs: [
          'Apres connexion, l utilisateur accede au tableau de bord puis aux ecrans de traitement selon son profil.',
          'Le menu lateral est le point d entree principal pour toutes les operations.'
        ],
        bullets: [
          'Tableau de bord: indicateurs et repartition des statuts',
          'Nouvelle declaration: formulaire de creation de NC',
          'Registre des NC: recherche, filtres, tri et suivi des delais',
          'Fiche detaillee: historique, commentaires, pieces jointes et statut courant'
        ]
      },
      {
        title: '5. Procedure complete en 6 etapes',
        paragraphs: ['Le traitement d une NC suit un workflow sequentiel et controle.'],
        bullets: [
          'Etape 1 - Declaration: saisie des informations obligatoires (Statut: Declaree)',
          'Etape 2 - Prise en charge par Ingenieur (Statut: Prise en charge)',
          'Etape 3 - Assignation a l organisme responsable (Statut: Assignee)',
          'Etape 4 - Traitement avec preuves des actions (Statut: En traitement)',
          'Etape 5 - Validation ou rejet motive par Ingenieur (Statut: Validee ou maintien En traitement)',
          'Etape 6 - Cloture par le Declarant (Statut: Cloturee)'
        ]
      },
      {
        title: '6. Creer une non-conformite',
        paragraphs: [
          'Le declarant renseigne la fiche NC depuis l ecran de declaration.',
          'Tout champ manquant bloque la soumission du dossier.'
        ],
        bullets: [
          'Titre et description detaillee de la NC',
          'Type de NC: Observation, Avertissement ou Non-Conformite',
          'Date, heure, projet, organisme declarant et organisme concerne',
          'Localisation et coordonnees GPS',
          'Normes de Performance SFI impactees',
          'Causes probables, recommandations et pieces jointes'
        ]
      },
      {
        title: '7. Traitement, validation et commentaires',
        paragraphs: [
          'L organisme assigne met en oeuvre les corrections et depose les preuves dans la fiche.',
          'L Ingenieur verifie la conformite des actions avant validation finale.'
        ],
        bullets: [
          'Saisie des actions correctives et preventives',
          'Depot de preuves (photos, rapports, comptes rendus)',
          'Validation par Ingenieur si resultats satisfaisants',
          'Rejet motive avec commentaires si actions insuffisantes',
          'Nouveau cycle de correction jusqu a validation'
        ]
      },
      {
        title: '8. Notifications automatiques',
        paragraphs: [
          'Chaque changement de statut genere une notification email via Power Automate.',
          'Les messages permettent de reduire les retards et de renforcer le suivi.'
        ],
        bullets: [
          'Reference et identifiant de la NC',
          'Type, gravite et statut courant',
          'Acteur attendu et action a realiser',
          'Lien direct vers la fiche NC'
        ]
      },
      {
        title: '9. Delais de traitement',
        paragraphs: ['Le respect des delais est obligatoire pour limiter les risques terrain.'],
        bullets: [
          '1 jour maximum pour une Non-Conformite',
          '1 jour maximum pour un Avertissement',
          '2 jours maximum pour une Observation',
          'Des rappels automatiques sont envoyes en cas de depassement'
        ]
      },
      {
        title: '10. Bonnes pratiques utilisateur',
        paragraphs: ['Ces pratiques ameliorent la qualite des dossiers et la rapidite de traitement.'],
        bullets: [
          'Saisir des descriptions factuelles et precises',
          'Ajouter des preuves datees et exploitables',
          'Documenter chaque commentaire de validation/rejet',
          'Verifier les informations avant soumission',
          'Consulter regulierement le registre et les notifications'
        ]
      },
      {
        title: '11. Assistance et support',
        paragraphs: [
          'En cas de probleme d acces, de notification ou de comportement applicatif, contacter l administrateur fonctionnel.',
          'Pour faciliter le support, transmettre la reference NC, la date de l action et une capture d ecran du message observe.'
        ],
        bullets: [
          'Support fonctionnel: regles metier et processus',
          'Support technique: acces, performance, erreurs d affichage',
          'Escalade: incidents bloquants de production'
        ]
      }
    ]}
  />
);

const GncDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module GNC du SIP MCA Benin Regional, son architecture Power Platform, ses roles et son workflow metier complet."
    blocks={[
      {
        title: '1. Presentation du module',
        paragraphs: [
          'Le module GNC (Gestion des Non-Conformites) fait partie du Systeme d Information du Programme (SIP) deploye dans le cadre du programme MCA Benin Regional.',
          'Il permet la gestion centralisee et le suivi des non-conformites constatees lors des activites de supervision environnementale et sociale.',
          'Le cycle de vie couvert va de la declaration a la cloture: classification, prise en charge, assignation, traitement et validation des actions correctives.'
        ]
      },
      {
        title: '1.1 Contexte et architecture technique',
        paragraphs: [
          'Le programme MCA Benin II finance des investissements sur le corridor Cotonou-Niamey avec obligations fortes de conformite environnementale et sociale.',
          'La plateforme MOSES/SGESSS est l outil central de supervision E&S, et le module GNC en est un composant cle pour le suivi terrain.'
        ],
        bullets: [
          'Application developpee avec Microsoft Power Platform',
          'Power Apps Canvas pour l interface utilisateur',
          'SharePoint Online pour le stockage metier',
          'Power Automate pour les notifications et automatisations'
        ]
      },
      {
        title: '1.2 Perimetre fonctionnel',
        paragraphs: ['Le module prend en charge tout le cycle metier de la NC avec suivi, controle et tracabilite des actions.'],
        bullets: [
          'Declaration des non-conformites par acteurs autorises (MOSES, MCA, MCC, Ingenieurs)',
          'Classification en Observation, Avertissement et Non-Conformite',
          'Prise en charge et reclassification par l Ingenieur',
          'Assignation aux organismes responsables avec notification automatique',
          'Traitement et actions correctives/preventives par l organisme concerne',
          'Validation Ingenieur avec possibilite de rejet motive',
          'Cloture par le declarant apres validation',
          'tracabilite complete via historique des actions',
          'Generation de rapports et statistiques'
        ]
      },
      {
        title: '2. Acteurs et roles',
        paragraphs: [
          'Les roles et permissions sont geres via des groupes de securite Microsoft 365.',
          'Le role Declarant est attribue a MOSES, MCA, MCC et Ingenieurs.'
        ],
        bullets: [
          'Declarant: creation de la NC avec l ensemble des champs obligatoires',
          'Ingenieur: prise en charge, reclassification, assignation, validation/rejet',
          'Organisme concerne: traitement, actions correctives et preventives, preuves',
          'Declarant: cloture finale apres validation',
          'Limitation: les Entreprises ne declarent pas de NC; elles repondent uniquement aux NC assignees'
        ]
      },
      {
        title: '3. Structure de navigation',
        paragraphs: [
          'L application Power Apps Canvas propose une navigation laterale gauche commune a tous les ecrans.',
          'Apres connexion, l utilisateur accede a la page d accueil puis navigue selon ses permissions.'
        ],
        bullets: [
          'Tableau de bord d accueil',
          'Ecrans de declaration et de suivi',
          'Registre et consultation detaillee',
          'Navigation adaptee au profil connecte'
        ]
      },
      {
        title: '4. Workflow metier en 6 etapes',
        paragraphs: ['Le traitement d une NC suit un enchainement sequentiel avec statuts controles et historique complet.'],
        bullets: [
          'Etape 1 - Declaration (Statut: Declaree)',
          'Etape 2 - Prise en charge par Ingenieur (Statut: Prise en charge)',
          'Etape 3 - Assignation a l organisme concerne (Statut: Assignee)',
          'Etape 4 - Traitement par l organisme concerne (Statut: En traitement)',
          'Etape 5 - Validation ou rejet par Ingenieur (Statut: Validee ou maintien En traitement)',
          'Etape 6 - Cloture par le Declarant (Statut: Cloturee)'
        ]
      },
      {
        title: '4.1 Donnees de declaration',
        paragraphs: ['La declaration formalise la NC constatee sur chantier ou lors d un controle programme/inopine.'],
        bullets: [
          'Titre et description detaillee de la NC',
          'Type de NC et niveau de gravite',
          'Date de detection et organisme declarant',
          'Organisme concerne et projet associe',
          'Normes de performance SFI impactees',
          'Type de controle',
          'Localisation (commune, arrondissement, village/quartier)',
          'Coordonnees GPS (latitude, longitude)',
          'Nom/fonction du declarant, causes probables et recommandations'
        ]
      },
      {
        title: '5. Systeme de notifications',
        paragraphs: [
          'Chaque changement de statut declenche des notifications automatiques par email via Power Automate.',
          'Les notifications alertent en temps reel les acteurs concernes a chaque etape cle.'
        ],
        bullets: [
          'Identifiant de la NC',
          'Titre, type et niveau de gravite',
          'Statut actuel et organisme concerne',
          'Lien direct vers la NC dans l application'
        ]
      },
      {
        title: '6. Modele de donnees SharePoint',
        paragraphs: ['L application s appuie sur plusieurs listes SharePoint reliees par des Lookup pour couvrir tout le cycle metier.'],
        bullets: [
          'Liste principale Non-conformite',
          'Liste Statut (Declaree, Prise en charge, Assignee, En traitement, Validee, Cloturee)',
          'Liste Organisme',
          'Liste Historique',
          'Liste Projet',
          'Liste Normes de Performance SFI',
          'Liste Niveau NC',
          'Liste Types de controle',
          'Liste Type NC (Observation, Avertissement, Non-Conformite)'
        ]
      },
      {
        title: '8. Regles de gestion',
        paragraphs: [
          'Les transitions de statut sont strictement ordonnees et les permissions dependent du role.',
          'Toute action significative est historisee en lecture seule pour audit.'
        ],
        bullets: [
          'Transitions de statut controlees dans un ordre defini',
          'Notifications systematiques sur changements de statut',
          'tracabilite des anciens/nouveaux statuts et niveaux',
          'Tracage des reclassifications avec justification',
          'Historique consultable dans la fiche detaillee de chaque NC'
        ]
      },
      {
        title: '9. Exigences non fonctionnelles',
        paragraphs: ['Les exigences techniques couvrent performance, disponibilite, securite et compatibilite de la solution.'],
        bullets: [
          'Performance: ecran d accueil < 2 s, registre < 2 s, soumission NC < 4 s',
          'Capacite: au moins 50 utilisateurs simultanes',
          'Disponibilite cible: 99,5%',
          'Securite: authentification Azure AD / Microsoft 365 et TLS 1.2 minimum',
          'Conformite RGPD pour les donnees personnelles',
          'Compatibilite: Chrome, Edge, Firefox, mobile Power Apps (iOS/Android), tablettes terrain'
        ]
      },
      {
        title: '10. Environnements et glossaire',
        paragraphs: [
          'Le document de reference prevoit les environnements de deploiement du module et un glossaire metier pour harmoniser les termes utilises.',
          'La version source correspond a la Documentation Technique GNC v2.0 (Fevrier 2026).'
        ]
      },
      {
        title: '11. Rappel de gouvernance',
        paragraphs: [
          'Une NC Cloturee ne peut plus etre modifiee: elle reste accessible dans le registre pour consultation, reference et audit.',
          'Le cycle validation/rejet peut se repeter jusqu a satisfaction de l Ingenieur avant cloture definitive.'
        ]
      }
    ]}
  />
);

const gncPages: Record<SectionId, React.ComponentType> = {
  'note-technique': GncNoteTechniquePage,
  'guide-utilisateur': GncGuideUtilisateurPage,
  'documentation-technique': GncDocumentationTechniquePage
};

export default gncPages;

