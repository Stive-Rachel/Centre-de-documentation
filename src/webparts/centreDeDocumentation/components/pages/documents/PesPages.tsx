import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const PesNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module de Suivi des Indicateurs de Performance Environnementale et Sociale (PES)
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Dans le cadre de la mise en oeuvre du Compact Regional de MCA-Benin, il a ete confie a MOSES
        la responsabilite de mettre en place un Systeme de Gestion Environnementale, Sociale, Sante
        et Securite (SGESSS). Le SGESSS contient un certain nombre de modules qui donnent de la
        visibilite pour le suivi des aspects lies a l environnement, le social et la sante securite
        au travail.
      </p>
      <p>
        Pendant l operationnalisation du SGESSS, le fonctionnement de tous ses modules en lien direct
        avec certaines activites des projets du Compact generera un grand nombre d indicateurs dont le
        suivi permettra d evaluer la Performance Environnementale et Sociale des Projets du Compact.
        En revanche, certains indicateurs ne derivent pas directement du fonctionnement des modules
        du SGESSS. Il urge de collecter des donnees brutes afin de proceder a leur calcul pour
        alimenter le tableau de bord general du SGESSS.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objectifs du module</h3>
      <h4>2.1 Objectif general</h4>
      <p>
        Doter le SGESSS d un outil integre dedie a la collecte, le calcul et le suivi des indicateurs
        de Performance Environnementale et Sociale des projets du Compact.
      </p>
      <h4>2.2 Objectifs specifiques</h4>
      <ul>
        <li>Collecter des donnees periodiques issues des activites qui ne sont pas directement rattachees a l un des modules du SGESSS afin de pouvoir calculer les indicateurs lies a ces activites</li>
        <li>Etablir des liens de connectivite avec les autres modules afin de centraliser l ensemble des indicateurs de Performance Environnementale et Sociale dans un seul module</li>
        <li>Faciliter le suivi de la collecte des donnees periodiques necessaires a l alimentation du tableau de bord general du SGESSS</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>
        Le module s applique a l ensemble des projets du Compact MCA Benin Regional et concerne
        les parties prenantes cles telles que:
      </p>
      <ul>
        <li>Entreprises de construction</li>
        <li>Ingenieur de supervision</li>
        <li>MOSES</li>
        <li>MCA Benin Regional</li>
        <li>Autres Consultants de MCA Benin Regional</li>
        <li>MCC</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>4. Domaines couverts par la collecte des donnees</h3>
      <p>La collecte des donnees couvre les domaines habituels. Les sous-domaines ci-dessous concernent les informations qui n etaient pas prises en compte dans le fonctionnement des modules:</p>
      <ul>
        <li>Doleances/plaintes</li>
        <li>Activites d engagement des parties prenantes</li>
        <li>Sante et Securite</li>
        <li>Consommation</li>
        <li>Affichage</li>
        <li>Droit du travail</li>
        <li>Incidents environnementaux</li>
        <li>Formation/sensibilisation</li>
        <li>Dechets, terres excavees, effluents et emissions</li>
        <li>Surveillance environnementale - Biodiversite et services ecosystemiques</li>
        <li>Embauche et controle de la traite des personnes</li>
        <li>Reinstallation</li>
        <li>PRMS: Restauration des moyens de subsistance; Suivi et evaluation</li>
        <li>Analyse sociale</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5. Definitions cles</h3>
      <p>
        Les <strong>indicateurs de performance</strong> mesurent l efficacite des modules du SGESSS et
        des processus operationnels ou non, en lien avec les activites des projets du Compact pour
        stimuler l amelioration continue. Dans le cadre du present compact, les indicateurs ont ete
        categorises par domaine d action lie aux composantes du SGESSS (Environnement, Sante-Securite,
        Action sociale, Parties Prenantes, Reinstallation, Gestion des plaintes, etc.).
      </p>
    </section>

    <section className="cdoc-block">
      <h3>6. Description fonctionnelle du module</h3>
      <h4>6.1 Acces au module</h4>
      <p>
        L acces est reserve aux personnes designees par leurs organismes respectifs et disposant d un
        profil valide sur la plateforme SGESSS. L authentification se fait par un identifiant et un
        mot de passe securise.
      </p>
      <h4>6.2 Roles et responsabilites des acteurs</h4>
      <p>Les trois acteurs cles intervenant dans le processus sont:</p>
      <ul>
        <li><strong>Entreprises</strong>: collectent et enregistrent periodiquement les donnees brutes, relatives a leurs activites sur le terrain, conformement aux obligations legales</li>
        <li><strong>Ingenieur de supervision</strong>: supervise les activites des entreprises, suit le processus de collecte des donnees, verifie la completude et le respect des delais de transmission</li>
        <li><strong>MOSES</strong>: organise les campagnes periodiques de collectes de donnees necessaires a l etablissement des indicateurs de performance des activites des entreprises</li>
      </ul>
      <h4>6.3 Procedure de collecte des donnees brutes</h4>
      <p>La collecte des donnees brutes s opere a une frequence mensuelle et a l aide d un formulaire de collecte prepare par MOSES:</p>
      <ol>
        <li>MOSES genere un formulaire electronique personnalise et le transmet a l Ingenieur de Supervision</li>
        <li>L Ingenieur de Supervision recoit le formulaire, appose son visa et le transmet a l Organisme concerne (48 heures de delai)</li>
        <li>L Organisme concerne collecte les donnees brutes, remplit le formulaire et le transmet a l Ingenieur de Supervision avec copie a MOSES</li>
        <li>L Ingenieur de Supervision verifie la conformite des donnees (3 jours ouvrables), valide et transmet a MOSES</li>
        <li>En cas de rejet, l Organisme prend en compte les commentaires et transmet le formulaire corrige. En cas de validation, MOSES verifie et procede au traitement</li>
      </ol>
    </section>

    <section className="cdoc-block">
      <h3>7. Resultats attendus</h3>
      <ul>
        <li>Alimentation du tableau de bord general du SGESSS avec les resultats issus des methodes de calcul</li>
        <li>Etablissement des liens de connectivite avec les autres modules pour centraliser l ensemble des indicateurs</li>
        <li>Interpretation des tendances pour alimenter les rapports periodiques d activite</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Liste des indicateurs</h3>
      <p>
        La liste des indicateurs par domaine est disponible dans le formulaire electronique des indicateurs.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>9. Conclusion</h3>
      <p>
        Le module de suivi des indicateurs de performance environnementale et sociale est un outil d aide
        a la decision. Il a pour ambition d orienter les decisions afin d assurer une performance efficace
        des projets du Compact.
      </p>
    </section>
  </article>
);

const PesGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Guide utilisateur du systeme de gestion des indicateurs de Performance Environnementale et Sociale (PES) -- MOSES. Ce guide est destine aux utilisateurs finaux de l application: MOSES, MCA, MSA, IS (Ingenieurs), FIDIC. Version 1.0 -- Mars 2026."
    blocks={[
      {
        title: '1. Introduction au systeme PES',
        paragraphs: [
          'L application Indicateurs PES (Performance Environnementale et Sociale) est une plateforme numerique developpee par MCA Benin Regional dans le cadre du projet MOSES. Elle permet de gerer de maniere centralisee et securisee la collecte, la validation et le suivi des donnees environnementales et sociales produites par les differents acteurs du projet.'
        ],
        bullets: [
          'Recevoir et telecharger les fiches de collecte (templates) valides',
          'Soumettre les donnees renseignees en fin de campagne',
          'Suivre le statut de vos soumissions en temps reel',
          'Recevoir des notifications automatiques par email',
          'Consulter l historique des campagnes cloturees'
        ]
      },
      {
        title: '1.2 Qui utilise l application',
        paragraphs: ['Le systeme distingue cinq roles:'],
        bullets: [
          'MOSES: creer les campagnes, soumettre les templates, valider les rapports du Groupe 2',
          'MCA: viser le template MOSES, valider le rapport MOSES, soumettre son propre rapport',
          'IS (Ingenieurs): viser les templates Groupe 1, valider les rapports FIDIC, soumettre son rapport',
          'FIDIC: telecharger le template, remplir et soumettre le rapport collecte',
          'MSA: telecharger le template, remplir et soumettre le rapport collecte'
        ]
      },
      {
        title: '2. Connexion a l application',
        paragraphs: [
          'Pour acceder a l application, vous devez disposer d un compte Microsoft 365 actif fourni par MCA Benin. Contactez votre administrateur si vous n avez pas encore vos identifiants.',
          'Ouvrez un navigateur web (Microsoft Edge ou Google Chrome), accedez a Power Apps via le portail Microsoft 365 (office.com), saisissez vos identifiants, puis lancez l application PES depuis la liste de vos applications.'
        ]
      },
      {
        title: '3. Navigation -- Interface generale',
        paragraphs: [
          'L interface de l application est composee de trois zones principales: la barre laterale (Sidebar) a gauche avec les icones de navigation vers les differents modules, la barre de titre (Topbar) en haut affichant la fleche retour, le fil d Ariane, votre nom et votre role, et la zone de contenu centrale affichant les donnees et actions disponibles.'
        ]
      },
      {
        title: '4. Ecran d accueil',
        paragraphs: [
          'L ecran d accueil (Home) est le point de depart de l application. Le bandeau de bienvenue affiche votre prenom, la campagne en cours et sa periode, une description du programme, et 3 statistiques cles: nombre de campagnes, en attente, et taux de conformite.',
          'La grille centrale presente les 6 modules principaux: Campagnes, Approbation template, Soumissions de document, Verification de la conformite, Campagnes rejetees, Campagnes cloturees.'
        ]
      },
      {
        title: '5.1 Module -- Toutes les campagnes',
        paragraphs: [
          'Cet ecran liste toutes les campagnes PES creees dans le systeme. Vous pouvez rechercher une campagne par reference, filtrer par date de debut et date de fin, reinitialiser les filtres, et cliquer sur une reference pour acceder au detail de la campagne.'
        ]
      },
      {
        title: '5.2 Module -- Telechargement du template',
        paragraphs: [
          'Cet ecran vous permet de telecharger le template (fiche de collecte) valide par le responsable de validation (IS ou MCA selon votre groupe). Le bandeau vert indique que vos fichiers de collecte sont disponibles.',
          'Reperez votre fichier dans le tableau, cliquez sur le bouton Telecharger, ouvrez le fichier Excel et renseignez toutes les donnees demandees dans les onglets du fichier. Ne modifiez pas l onglet de visa.'
        ]
      },
      {
        title: '5.3 Module -- Soumissions de document',
        paragraphs: [
          'Cet ecran vous permet de soumettre votre fiche de collecte remplie pour validation. Ajoutez un commentaire optionnel, joignez le fichier via l icone trombone, verifiez le fichier joint, puis cliquez sur Soumettre pour validation.',
          'Apres soumission, votre fichier est transmis automatiquement dans la file d attente de validation. Vous recevrez un email de confirmation lorsque votre rapport sera valide ou rejete.'
        ]
      },
      {
        title: '5.4 Module -- Visa / Approbation',
        paragraphs: [
          'Cet ecran est reserve aux Ingenieurs de Supervision (IS) et a MCA. Il permet d apposer le visa electronique sur les templates avant leur distribution aux entreprises.',
          'Le bandeau orange rappelle le delai reglementaire: l IS ou MCA dispose de 48 heures pour apposer son visa. Tout retard genere une notification automatique de non-conformite.'
        ]
      },
      {
        title: '5.5 Module -- Verification de la conformite',
        paragraphs: [
          'Cet ecran est utilise par l IS et MOSES pour verifier la conformite des donnees renseignees par les entreprises dans leurs rapports de collecte.',
          'Le validateur dispose de 3 jours ouvrables pour verifier la conformite. Consultez le fichier, verifiez les donnees, puis prenez une decision (valider ou rejeter). En cas de rejet, saisissez le motif dans le champ prevu.'
        ]
      },
      {
        title: '5.6 Module -- Campagnes rejetees',
        paragraphs: [
          'Cet ecran affiche tous les fichiers qui ont ete rejetes par le validateur. Vous ne voyez que les fichiers qui vous concernent selon votre role.',
          'Pour resoumettre apres un rejet: consultez le motif du rejet, corrigez le fichier, cliquez sur Resoumettre, joignez le fichier corrige, puis confirmez la resoumission. Le validateur recoit automatiquement une notification.'
        ]
      },
      {
        title: '5.7 Module -- Campagnes cloturees',
        paragraphs: [
          'Cet ecran affiche la liste de toutes les campagnes qui ont ete validees et cloturees. Il sert d archive consultable de l historique des collectes.',
          'Les campagnes cloturees sont archivees a titre informatif. Vous ne pouvez plus les modifier. Pour toute question sur une campagne cloturee, contactez MOSES.'
        ]
      },
      {
        title: '6. Glossaire des termes',
        paragraphs: ['Les termes cles du systeme PES:'],
        bullets: [
          'Campagne PES: periode de collecte des indicateurs environnementaux et sociaux',
          'Template: fichier Excel modele fourni par MOSES a remplir par chaque acteur',
          'Fiche de collecte: le template rempli par l acteur avec ses donnees mensuelles',
          'Visa electronique: onglet verrouille ajoute par IS ou MCA dans le fichier Excel pour attester sa validation',
          'IS (Ingenieur de Supervision): responsable de validation des templates et rapports du Groupe 1',
          'MOSES: equipe de coordination, cree les campagnes et valide les rapports du Groupe 2',
          'MCA: Millennium Challenge Account, vise le template MOSES et valide son rapport',
          'FIDIC: entreprise du Groupe 1, soumet ses rapports a IS pour validation',
          'MSA: entreprise du Groupe 2, soumet ses rapports a MOSES pour validation'
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

const PesDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Documentation technique du Systeme de Gestion des Indicateurs de Performance Environnementale et Sociale (PES) -- MOSES. Plateforme Microsoft Power Platform. Version 1.0 -- Mars 2026."
    blocks={[
      {
        title: '1. Introduction et contexte',
        paragraphs: [
          'Le systeme de gestion des indicateurs PES (Performance Environnementale et Sociale) est une application developpee dans le cadre du projet MOSES -- Millennium Challenge Account Benin Regional. Cette plateforme numerique centralise la collecte, la validation et le suivi des donnees environnementales et sociales produites par les differents acteurs du projet.'
        ]
      },
      {
        title: '1.1 Objectifs du systeme',
        paragraphs: ['Le systeme poursuit les objectifs suivants:'],
        bullets: [
          'Digitaliser le processus de collecte des indicateurs PES',
          'Assurer la tracabilite complete des donnees depuis la creation jusqu a la validation finale',
          'Automatiser les notifications et les workflows de validation entre acteurs',
          'Garantir l integrite des donnees via un systeme de visa electronique',
          'Fournir un tableau de bord de suivi en temps reel'
        ]
      },
      {
        title: '1.2 Perimetre fonctionnel',
        paragraphs: ['Le systeme couvre l ensemble du cycle de vie d une campagne PES:'],
        bullets: [
          'Creation et lancement de campagne par MOSES',
          'Visa du template par l Ingenieur de Supervision (IS) ou MCA selon le groupe',
          'Distribution des templates aux entreprises concernees',
          'Collecte et soumission des donnees par les entreprises',
          'Validation ou rejet des rapports soumis',
          'Cloture de la campagne et archivage'
        ]
      },
      {
        title: '1.3 Technologies utilisees',
        paragraphs: ['Le systeme repose sur les technologies suivantes:'],
        bullets: [
          'Interface utilisateur: Canvas Apps (Power Apps) -- Application principale',
          'Automatisation: Power Automate -- Workflows et notifications',
          'Stockage fichiers: SharePoint Online -- Bibliotheque Soumissions_PES',
          'Base de donnees: Microsoft Dataverse -- Campagnes, roles, utilisateurs',
          'Messagerie: Office 365 Outlook -- Notifications par email',
          'Scripts Excel: Office Scripts (TypeScript) -- Visa electronique IS/MCA'
        ]
      },
      {
        title: '2. Architecture du systeme',
        paragraphs: [
          'L architecture repose sur quatre composants principaux qui communiquent entre eux via des connecteurs Microsoft natifs: Canvas Apps (interface), SharePoint (fichiers), Power Automate (workflows), Dataverse (donnees).'
        ]
      },
      {
        title: '2.1 Structure SharePoint',
        paragraphs: ['La bibliotheque SharePoint Soumissions_PES est organisee en sous-dossiers representant les differents etats d avancement des fichiers:'],
        bullets: [
          '/Pending: templates en attente de visa IS ou MCA (statut En cours)',
          '/To_be_validating: rapports soumis en attente de validation (statut A Verifier IS N2 / A Verifier MOSES)',
          '/Validated: templates vises et rapports valides (statut Valide MOSES / Cloturee)',
          '/Rejected: fichiers rejetes, templates et rapports (statut Rejete IS N2 / Rejete MOSES / Rejete MCA)'
        ]
      },
      {
        title: '2.2 Colonnes SharePoint',
        paragraphs: ['La bibliotheque Soumissions_PES contient les colonnes suivantes:'],
        bullets: [
          'statut (Choice): etat du fichier dans le workflow',
          'date_debut (Date): date de debut de la campagne',
          'date_fin (Date): date de fin de la campagne',
          'ID_Campagne (Texte): GUID Dataverse pour synchronisation',
          'commentaire_rejet (Texte): motif du rejet par le validateur',
          'email_deposant (Texte): email de l acteur ayant depose le fichier',
          'date_soumission_entreprise_rapport (Date/Heure): date de soumission du rapport par l entreprise',
          'vise_par (Texte): nom du validateur (IS ou MCA)',
          'vise_par_email (Texte): email du validateur',
          'date_visa (Date/Heure): date et heure du visa electronique'
        ]
      },
      {
        title: '2.3 Structure Dataverse',
        paragraphs: ['Dataverse stocke les donnees metier structurees du systeme:'],
        bullets: [
          'Table Campagnes: Statut, DateValidation, FileRefValidated, ID -- Suivi des campagnes actives',
          'Table RolesPES: UsersRoles (Choice), cr77f_users_value -- Roles et droits des utilisateurs',
          'Table Users: internalemailaddress, fullname -- Annuaire des utilisateurs du systeme'
        ]
      },
      {
        title: '3. Acteurs et roles',
        paragraphs: ['Le systeme distingue deux groupes d acteurs avec des processus distincts:'],
        bullets: [
          'Groupe 1: FIDIC (valide par IS, valeur role Dataverse 0), Ingenieurs/IS (valide par IS, valeur 1)',
          'Groupe 2: MOSES (valide par MCA, valeur 3), MCA (valide par MOSES, valeur 2), MSA (valide par MOSES, valeur 4)'
        ]
      },
      {
        title: '3.1 Matrice des droits',
        paragraphs: ['Les actions disponibles par role:'],
        bullets: [
          'Creer une campagne: MOSES',
          'Viser template Groupe 1: IS',
          'Viser template MOSES: MCA',
          'Telecharger template: tous les roles',
          'Soumettre rapport: tous les roles',
          'Valider rapport Groupe 1: IS',
          'Valider rapport Groupe 2: MOSES',
          'Valider rapport MOSES: MCA',
          'Rejeter rapport: MOSES, IS, MCA',
          'Resoumettre apres rejet: tous les roles'
        ]
      },
      {
        title: '4. Processus metier',
        paragraphs: ['Le cycle de vie complet d une campagne: Creation, Visa template, Distribution, Soumission rapport, Validation, Cloture.']
      },
      {
        title: '4.1 Processus Groupe 1 (FIDIC / Ingenieurs)',
        paragraphs: ['Le processus pour le Groupe 1 suit les etapes suivantes:'],
        bullets: [
          'MOSES cree la campagne et genere le template pour FIDIC/Ingenieurs',
          'Le fichier est depose dans /Pending avec statut En cours',
          'IS recoit une notification pour viser le template et appose son visa electronique',
          'Le fichier est deplace dans /Validated avec statut Valide MOSES',
          'FIDIC/Ingenieurs recoivent une notification de telechargement',
          'L entreprise remplit le template et le soumet dans /To_be_validating',
          'IS valide ou rejette le rapport'
        ]
      },
      {
        title: '4.2 Processus Groupe 2 (MOSES / MCA / MSA)',
        paragraphs: ['Le processus pour le Groupe 2 suit les etapes suivantes:'],
        bullets: [
          'MOSES cree la campagne et genere le template pour MOSES',
          'MCA recoit une notification pour viser le template MOSES et appose son visa',
          'Le fichier est deplace dans /Validated avec statut Valide MOSES',
          'Tous les acteurs du Groupe 2 recoivent leur template directement',
          'Chaque acteur remplit son template et le soumet',
          'MOSES valide ou rejette le rapport'
        ]
      },
      {
        title: '4.3 Processus de resoumission apres rejet',
        paragraphs: ['Lorsqu un fichier est rejete, l acteur concerne peut le corriger et le resoumettre:'],
        bullets: [
          'Rejet par IS (FIDIC/Ingenieurs): statut Rejete IS N2, resoumission avec statut Soumis N2 Rapport Revu',
          'Rejet par MOSES (MCA/MSA/IS): statut Rejete MOSES, resoumission avec statut Soumis N2 Rapport Revu',
          'Rejet par MCA (rapport MOSES): statut Rejete MCA, resoumission avec statut Soumis N2 Rapport Revu',
          'Rejet par IS (template MOSES): statut Rejete, resoumission avec statut Soumis N2 Revue'
        ]
      },
      {
        title: '5. Workflows Power Automate',
        paragraphs: ['Le systeme utilise les flux Power Automate suivants:'],
        bullets: [
          'Flow_Lancement_Campagne: declencheur modification statut SharePoint, cree les fichiers et notifie IS/MCA',
          'Flow_Visa_Template: declencheur statut Valide MOSES, execute le script Office de visa et notifie les entreprises',
          'Flow_Soumission_Rapport: declencheur upload entreprise, deplace vers /To_be_validating et notifie le validateur',
          'Flow_Validation_Rapport: declencheur statut Cloturee, deplace vers /Validated et notifie l acteur',
          'Flow_Rejet_Rapport: declencheur statut rejet (3 cas), deplace vers /Rejected et envoie un email avec le motif',
          'Flow_Resoumission: declencheur statut Soumis N2, deplace vers /To_be_validating et notifie le validateur'
        ]
      },
      {
        title: '6. Canvas Apps -- Interface utilisateur',
        paragraphs: ['L application est configuree en mode paysage (1366 x 768 px) avec une sidebar de 72 px et une topbar de 56 px. Les ecrans principaux sont:'],
        bullets: [
          'Accueil (srcHome): dashboard avec modules et statistiques, acces tous les roles',
          'Campagnes (srcCampagnes): liste des campagnes actives, acces tous les roles',
          'Upload Template (srcUploadTemplate): soumission du template campagne, acces MOSES',
          'Visa Template (srcVisaTemplate): visa et validation du template, acces IS/MCA',
          'Telechargement (srcDownload): telechargement du template vise, acces tous les roles',
          'Upload Rapport (srcUploadRapport): soumission du rapport rempli, acces tous les roles',
          'Verification IS (srcVerificationIS): validation des rapports soumis, acces IS/MOSES',
          'Rejets (srcRejets): fichiers rejetes et resoumission, acces tous les roles',
          'Campagnes cloturees (srcCloturees): archives des campagnes terminees, acces tous les roles',
          'Tableau de bord (srcDashboard): indicateurs et statistiques, acces MOSES/MCA'
        ]
      },
      {
        title: '7. Environnements de deploiement',
        paragraphs: ['Le systeme est deploye sur les environnements suivants:'],
        bullets: [
          'DEV: solution non-geree pour le developpement',
          'TEST: solution geree pour les tests',
          'PROD: solution geree pour la production'
        ]
      }
    ]}
  />
);

const pesPages: Record<SectionId, React.ComponentType> = {
  'note-technique': PesNoteTechniquePage,
  'guide-utilisateur': PesGuideUtilisateurPage,
  'documentation-technique': PesDocumentationTechniquePage
};

export default pesPages;
