import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';
import DocumentationPageTemplate from '../shared/DocumentationPageTemplate';

const SipNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module Site Web -- Portail SIP/MOSES. Expression des besoins fonctionnels. Phase initiale du projet -- Fevrier 2026.
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Le programme MCA-Benin Regional est un compact de 202 millions de
        dollars finance par le Millennium Challenge Corporation (MCC) et execute
        par le Millennium Challenge Account -- Benin Regional. Il vise
        l amelioration du corridor de transport Cotonou-Niamey a travers deux
        projets : le Projet Infrastructure du Corridor (IC) et le Projet
        Efficacite des Operations du Corridor (ECO).
      </p>
      <p>
        Dans ce contexte, le module Site Web, designe SIP pour Systeme
        d Information du Programme, constitue le portail central et le point
        d entree unique vers l ensemble des modules. Le SIP est la porte
        d entree numerique du programme MOSES.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. Objectifs du module Site Web</h3>
      <p>Le portail SIP doit remplir quatre fonctions principales :</p>
      <ol>
        <li>Regrouper en un seul endroit l acces a tous les modules MOSES, de sorte que n importe quel utilisateur autorise puisse ouvrir l outil dont il a besoin en trois clics depuis la page d accueil</li>
        <li>Assurer la communication institutionnelle interne : actualites, evenements, annonces du programme a l attention de toutes les parties prenantes</li>
        <li>Proposer une lecture rapide de l avancement du programme, avec des indicateurs de performance integres dans les pages de presentation de chaque module</li>
        <li>Donner aux utilisateurs un moyen simple de signaler un probleme ou de proposer une amelioration, via un formulaire accessible depuis le portail</li>
      </ol>
    </section>

    <section className="cdoc-block">
      <h3>3. Champ d application</h3>
      <p>
        Le portail SIP s applique a l ensemble des activites du programme sur
        le corridor Cotonou-Niamey, pour les projets IC et ECO. Il concerne cinq
        categories d acteurs aux besoins distincts.
      </p>
      <p>
        Le MCA-Benin Regional et l equipe MOSES sont les commanditaires et
        maitres d oeuvre du portail. Le MCC, Sofreco et la MSA interviennent
        en qualite d observateurs. Les ingenieurs superviseurs et les entrepreneurs
        utilisent le portail pour acceder aux modules de leur perimetre d intervention.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>4. Les modules accessibles depuis le portail</h3>
      <p>
        Le portail SIP a vocation a centraliser l acces a l ensemble des modules
        applicatifs du systeme MOSES. Ces modules couvrent les grands domaines de gestion du programme :
      </p>
      <ul>
        <li>Gestion environnementale, sociale, de sante et securite (SGESSS) : suivi des incidents et accidents, gestion des plaintes, autorisations de travaux, gestion des risques et non-conformites, engagement des parties prenantes, formations et analyse sociale</li>
        <li>Planification et suivi du programme : gestion documentaire, suivi general de l avancement des projets IC et ECO, reinstallation des populations affectees</li>
        <li>Module transversal de cartographie s appuyant sur ArcGIS Online pour la representation geospatiale des activites le long du corridor</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5. Expression des besoins fonctionnels</h3>
      <h4>5.1 Acces et securite</h4>
      <p>
        L acces au portail repose exclusivement sur le compte Microsoft
        365 du programme, via le tenant mosesmcareg. Le mecanisme de Single
        Sign-On (SSO) permet a un utilisateur deja connecte a son
        environnement Microsoft de s authentifier automatiquement.
      </p>
      <p>Cinq profils sont envisages :</p>
      <ul>
        <li>Administrateur : gere le portail dans son ensemble</li>
        <li>Contributeur : publie et met a jour les contenus</li>
        <li>Utilisateur avance : accede aux modules et aux indicateurs</li>
        <li>Utilisateur standard : navigue et consulte les outils de son perimetre</li>
        <li>Observateur en lecture seule</li>
      </ul>

      <h4>5.2 Page d accueil et navigation</h4>
      <p>
        La page d accueil affiche les logos MCA-Benin Regional et MCC, une
        banniere photo du corridor de transport et la devise du programme.
        Les icones des modules sont visibles des la page d accueil,
        representees par leur trigramme. L objectif est qu un utilisateur puisse
        atteindre n importe quel module ou information en 3 clics au plus.
      </p>

      <h4>5.3 Pages de presentation des modules</h4>
      <p>
        Chaque module dispose d une page de presentation standardisee
        comportant son titre, une description de ses objectifs et
        fonctionnalites principales, ainsi qu un bouton d acces direct a
        l application correspondante.
      </p>

      <h4>5.4 Communication : actualites et evenements</h4>
      <p>
        La page d accueil affiche un carrousel des cinq dernieres
        actualites publiees, avec titre, image de couverture, resume et lien
        vers l article complet. Les contributeurs peuvent creer,
        modifier et publier des articles depuis l editeur SharePoint integre.
      </p>

      <h4>5.5 Gestion documentaire</h4>
      <p>
        Le portail offre un acces rapide a la bibliotheque documentaire du
        programme, hebergee sur un site SharePoint dedie (MCA-Benin
        Documentation). Tout document publie beneficie du versioning.
      </p>

      <h4>5.6 Demandes de modification et support</h4>
      <p>
        Un formulaire de demande de modification est accessible depuis la
        navigation principale, ouvert a tous les utilisateurs du portail.
        Chaque soumission declenche un enregistrement dans une liste SharePoint,
        une notification a l equipe MOSES et un accuse de reception au demandeur.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>6. Exigences non-fonctionnelles</h3>
      <p>
        Le portail est compatible avec les navigateurs Microsoft Edge, Google Chrome
        et Mozilla Firefox. L affichage s adapte automatiquement aux ecrans de
        tablettes et smartphones. La conformite WCAG 2.1 niveau AA est l objectif vise.
      </p>
      <p>
        Le portail est developpe exclusivement avec des composants WebParts natifs de
        SharePoint Online, sans recours a des developpements SPFx personnalises, pour
        assurer la compatibilite avec les mises a jour automatiques de Microsoft.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>7. Architecture fonctionnelle cible</h3>
      <p>
        La solution retenue est un site de communication SharePoint Online
        deploye sur le tenant Microsoft 365 existant du programme
        (mosesmcareg.sharepoint.com), configure comme site hub racine.
      </p>
      <p>Cote automatisation, quatre flux Power Automate sont prevus :</p>
      <ul>
        <li>Flux Backlog-SI pour le traitement des demandes de modification</li>
        <li>Flux de notification lors de la publication d actualites</li>
        <li>Rappel automatique sept jours avant chaque evenement</li>
        <li>Alerte a l administrateur pour les comptes inactifs depuis 90 jours</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Contraintes et dependances</h3>
      <p>
        Le portail s appuie imperativement sur Microsoft SharePoint Online et le
        tenant mosesmcareg. L utilisation exclusive de WebParts natifs est une
        contrainte non negociable pour garantir la maintenabilite.
      </p>
      <p>Le portail depend de plusieurs services externes :</p>
      <ul>
        <li>Tenant Microsoft 365 et Entra ID pour l authentification (dependance critique)</li>
        <li>Applications Power Apps pour les modules metier</li>
        <li>Service Power BI pour les tableaux de bord</li>
        <li>Microsoft Forms pour le formulaire de demandes</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>9. Risques identifies</h3>
      <ul>
        <li>Faible adoption : probabilite moyenne, impact eleve. Formation prealable et designation de referents recommandees</li>
        <li>Connectivite degradee sur le terrain : probabilite haute. Optimisation des performances (images compressees, pages legeres)</li>
        <li>Informations obsoletes : probabilite haute. Designation de contributeurs responsables par domaine et revision trimestrielle</li>
        <li>Acces non autorise : faible probabilite, impact critique. Politiques d acces conditionnel et journalisation des acces</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>10. Roles et responsabilites</h3>
      <ul>
        <li>MCA-Benin Regional : commanditaire du portail, valide les besoins et les livrables</li>
        <li>Equipe MOSES : maitrise d oeuvre technique, conception, developpement et maintenance</li>
        <li>Administrateur SharePoint : gestion des comptes, permissions et maintenance technique</li>
        <li>Contributeurs editoriaux : publication des actualites, creation des evenements et mise a jour des pages</li>
        <li>Referents de modules : fournissent les informations et valident les indicateurs</li>
      </ul>
    </section>
  </article>
);

const SipGuideUtilisateurPage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Ce guide decrit les procedures d utilisation du portail SIP (Systeme d Information du Programme) / MOSES du MCA-Benin Regional. Il est destine aux profils Lecteur et Contributeur. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation du portail SIP',
        paragraphs: [
          'Le SIP est un portail SharePoint Online qui constitue le point d entree unique vers l ensemble des applications et modules du systeme d information MOSES du programme MCA-Benin Regional.',
          'Le portail remplit plusieurs fonctions essentielles : centraliser l acces aux 11 modules fonctionnels du systeme regroupes en deux domaines (SGESSS et Planification), diffuser les actualites et evenements du programme, et offrir un acces securise via l authentification Microsoft 365.'
        ]
      },
      {
        title: '2. Prerequis et connexion',
        paragraphs: [
          'Pour acceder au portail SIP, vous devez disposer d un compte Microsoft 365 actif avec les droits d acces au tenant mosesmcareg, d un navigateur web recent (Microsoft Edge recommande, Google Chrome ou Mozilla Firefox), et d une connexion internet stable.',
          'Ouvrez votre navigateur et saisissez l URL du portail. La page d authentification Microsoft s affiche : saisissez votre adresse e-mail professionnelle puis votre mot de passe. Si l authentification multifacteur (MFA) est activee, validez la notification sur votre telephone.'
        ]
      },
      {
        title: '3. Page d accueil du portail',
        paragraphs: [
          'La page d accueil presente une barre de navigation superieure, les logos MCA-Benin Regional et MCC, une banniere avec la devise du programme, un panneau des evenements a venir, les badges des modules et un carrousel des dernieres actualites.',
          'La barre de navigation permet d acceder aux rubriques : Gestion des Documents, Demande de modifications, Domaines, MCA-Benin Regional, FAQ et Admin (pour les administrateurs).'
        ]
      },
      {
        title: '4. Navigation vers les modules',
        paragraphs: [
          'Chaque module du SIP est accessible depuis la page d accueil. Selectionnez le module en cliquant sur son badge, utilisez le menu Domaines dans la barre de navigation, ou cliquez sur Voir tous les modules.',
          'Une page de presentation dediee s affiche avec le titre du module, un bouton d acces a l application et des tableaux de bord Power BI affichant les indicateurs de suivi.'
        ]
      },
      {
        title: '4.1 Liste des modules accessibles',
        paragraphs: ['Le portail donne acces a 11 modules fonctionnels regroupes en deux domaines :'],
        bullets: [
          'Domaine SGESSS : GDA (Gestion des accidents), PAR (PAR et PRMS), MGP (Gestion des plaintes), GAT (Autorisation de travail), GNC (Non-conformites), GDR (Gestion des risques), GDI (Gestion des incidents), EPP (Engagement des parties prenantes), SIG (Systeme d information geographique)',
          'Domaine Planification : SGP (Systeme de gestion de la planification), GED (Gestion des documents)'
        ]
      },
      {
        title: '5. Profil Lecteur',
        paragraphs: [
          'Le profil Lecteur (groupe Visiteurs) permet de consulter l ensemble du contenu publie sur le portail SIP sans possibilite de modification.',
          'En tant que lecteur, vous pouvez : visualiser la banniere et les informations generales, consulter le calendrier des evenements, parcourir les actualites, acceder aux modules, consulter la FAQ, acceder aux documents et soumettre une demande de modification.'
        ]
      },
      {
        title: '5.1 Soumettre une demande de modification',
        paragraphs: ['Le formulaire Microsoft Forms permet de decrire la demande avec les champs suivants :'],
        bullets: [
          'Nom du module : liste deroulante, obligatoire',
          'Objet de la demande : texte court, obligatoire',
          'Description complete : texte long, obligatoire, max 400 caracteres',
          'Demandeur : e-mail, optionnel',
          'Pieces jointes : max 10 fichiers, 10 Mo chacun'
        ]
      },
      {
        title: '6. Profil Contributeur',
        paragraphs: [
          'Le profil Contributeur (groupe Membres, niveau Modification) dispose de toutes les fonctionnalites du profil Lecteur, auxquelles s ajoutent des droits de creation et de modification de contenu.',
          'Les contributeurs peuvent creer et modifier des pages, gerer les evenements et publier des actualites.'
        ]
      },
      {
        title: '6.1 Creation et modification de pages',
        paragraphs: ['Pour creer ou modifier une page :'],
        bullets: [
          'Creer : cliquez sur Creer dans la barre d outils, selectionnez Page, choisissez un modele, saisissez le contenu, previsualisez et publiez',
          'Modifier : naviguez vers la page, cliquez sur Modifier, effectuez vos modifications, cliquez sur Republier',
          'Les pages modifiees sont enregistrees en brouillon tant qu elles ne sont pas publiees ou republiees'
        ]
      },
      {
        title: '6.2 Gestion des evenements et actualites',
        paragraphs: [
          'Les evenements apparaissent dans le panneau lateral droit de la page d accueil. Cliquez sur Ajouter un evenement, remplissez les champs obligatoires (titre, dates, description, lieu) et enregistrez.',
          'Les actualites sont des articles publies sous forme de carrousel. Cliquez sur Creer puis Publication d actualites, choisissez un modele, redigez le contenu et publiez.'
        ]
      },
      {
        title: '7. Roles et permissions',
        paragraphs: ['Le portail utilise trois niveaux de permissions bases sur les groupes SharePoint natifs :'],
        bullets: [
          'Lecteur (Visiteurs) : consulter les pages publiees, visualiser les evenements et actualites, acceder aux modules, soumettre des demandes',
          'Contributeur (Membres) : tous les droits du Lecteur + creer et modifier des pages, publier du contenu, gerer les evenements',
          'Administrateur (Proprietaires) : tous les droits du Contributeur + gerer les permissions, configurer la navigation, modifier le theme, supprimer des pages'
        ]
      },
      {
        title: '8. Bonnes pratiques',
        paragraphs: ['Pour les Lecteurs :'],
        bullets: [
          'Consultez regulierement le portail pour rester informe',
          'Utilisez la barre de recherche SharePoint pour trouver un contenu specifique',
          'Signalez tout probleme d acces ou de contenu via le formulaire de demande de modifications',
          'Naviguez par domaine via le menu Domaines pour une recherche thematique'
        ]
      },
      {
        title: '8.1 Pour les Contributeurs',
        paragraphs: ['Recommandations supplementaires :'],
        bullets: [
          'Previsualiser systematiquement vos pages avant publication',
          'Utiliser des titres clairs et concis pour les pages, actualites et evenements',
          'Verifier l orthographe et la mise en forme avant de publier',
          'Respecter la charte graphique du programme (logos, couleurs vertes MCA, typographie Segoe UI)',
          'Cliquer sur Republier apres chaque modification pour que les changements soient visibles'
        ]
      },
      {
        title: '9. Resolution des problemes courants',
        paragraphs: ['En cas de difficulte, consultez les solutions suivantes :'],
        bullets: [
          'Impossible d acceder au portail : verifier vos droits d acces aupres de l administrateur',
          'La page ne s affiche pas correctement : vider le cache du navigateur ou utiliser Edge/Chrome',
          'Le bouton Modifier n apparait pas : vous avez un profil Lecteur, demandez le profil Contributeur',
          'Les modifications ne sont pas visibles : page non republiee, cliquez sur Republier',
          'Le module ne s ouvre pas : droits d acces au module non attribues, contactez l administrateur'
        ]
      },
      {
        title: '10. Support et assistance',
        paragraphs: [
          'Le canal de support principal est le formulaire Demande de modifications accessible depuis la barre de navigation du portail.',
          'Decrivez precisement le probleme rencontre, joignez des captures d ecran et selectionnez le bon module concerne dans la liste deroulante.'
        ]
      }
    ]}
  />
);

const SipDocumentationTechniquePage: React.FC = () => (
  <DocumentationPageTemplate
    intro="Cette documentation technique presente le module SIP (Systeme d Information du Programme), portail SharePoint Online du programme MCA-Benin Regional, son architecture, ses composants et sa configuration. Version 1.0 -- Fevrier 2026."
    blocks={[
      {
        title: '1. Presentation generale',
        paragraphs: [
          'Le module SIP est un site SharePoint Online qui sert de portail central pour le Systeme d Information du Programme MCA-Benin Regional. Il centralise l acces aux modules fonctionnels du programme et assure la diffusion des actualites et evenements.',
          'Le site est deploye sur le tenant mosesmcareg.sharepoint.com, configure comme site hub racine du programme, en langue francaise (fr-FR), avec un theme personnalise MCA-Benin Regional.'
        ]
      },
      {
        title: '2. Architecture technique',
        paragraphs: ['Le portail SIP s appuie sur l ecosysteme Microsoft 365 du tenant mosesmcareg.onmicrosoft.com :'],
        bullets: [
          'SharePoint Online : site de communication, hub site, pages modernes, composants WebPart, Quick Links vers les modules',
          'Microsoft Entra ID (Azure AD) : authentification SSO, gestion des identites, groupes de securite',
          'Power Apps : applications Canvas pour les modules fonctionnels (GDA, PAR, MGP, GAT, GNC, GDR, GDI, EPP, SGP, GED)',
          'Power BI : tableaux de bord integres dans les pages de presentation des modules',
          'Power Automate : flux Backlog-SI pour le traitement des demandes de modification',
          'Microsoft Forms : formulaire de demande de modification de module',
          'ArcGIS Online : module SIG -- cartographie et donnees geospatiales',
          'Microsoft Dataverse : stockage des donnees metier des modules Power Apps',
          'Office 365 Outlook : notifications par e-mail via Power Automate'
        ]
      },
      {
        title: '3. Structure du site SharePoint',
        paragraphs: ['Le site est organise selon la hierarchie suivante :'],
        bullets: [
          'Site hub (racine) : portail principal SIP',
          'Pages des modules : une page dediee par module fonctionnel (11 modules)',
          'Bibliotheques : documents (site MCA-Benin Documentation), medias, modeles',
          'Listes : evenements, liens rapides, parametrage, demandes de modifications'
        ]
      },
      {
        title: '4. Navigation et menus',
        paragraphs: ['La navigation principale comprend les entrees suivantes :'],
        bullets: [
          'Gestion des Documents : redirige vers le site MCA-Benin Documentation',
          'Demande de modifications : page du formulaire Microsoft Forms',
          'Domaines : menu deroulant (SGESS, Gestion de la planification, Infrastructure du Corridor, Efficacite des Operations du Corridor, SI)',
          'MCA-Benin Regional : page institutionnelle',
          'FAQ : page des questions frequentes',
          'Admin : menu deroulant visible pour les administrateurs (Liste des demandes, Dossiers modules, Demande d acces au site)'
        ]
      },
      {
        title: '5. Pages et composants WebPart',
        paragraphs: ['Le portail utilise exclusivement des pages modernes SharePoint. Les composants WebPart utilises sont :'],
        bullets: [
          'Hero (Banniere) : photo aerienne de route/infrastructure avec devise du programme',
          'Actualites (News) : disposition carrousel (6 articles)',
          'Evenements (Events) : calendrier des evenements a venir',
          'Liens rapides (Quick Links) : tuiles des 11 modules regroupes par domaine',
          'Power BI : tableaux de bord integres dans les pages modules',
          'Bouton (Button) : badge trigramme + lien Acceder au module',
          'Texte (Text) : contenu FAQ en grille 2 colonnes',
          'Incorporer (Embed) : formulaire Microsoft Forms integre'
        ]
      },
      {
        title: '6. Listes et bibliotheques',
        paragraphs: ['Les listes SharePoint du portail :'],
        bullets: [
          'Evenements : calendrier des evenements affiche en page d accueil',
          'Liens Modules : URLs et metadonnees des 11 modules',
          'Parametres du site : configuration generale',
          'Demande de modification : liste des demandes de modifications pour les modules'
        ]
      },
      {
        title: '7. Gestion des permissions et securite',
        paragraphs: ['La gestion des acces repose sur les groupes SharePoint natifs :'],
        bullets: [
          'Proprietaires de Site de communication : controle total, administration complete du site',
          'Site de communication - Membres : modification, creation et modification de pages, evenements et actualites',
          'Site de communication - Visiteurs : lecture, consultation des pages et documents publies'
        ]
      },
      {
        title: '7.1 Authentification',
        paragraphs: ['L authentification est geree par Microsoft Entra ID avec les parametres suivants :'],
        bullets: [
          'SSO (Single Sign-On) via le tenant mosesmcareg.onmicrosoft.com',
          'Authentification multifacteur (MFA) activee pour tous les comptes',
          'Acces conditionnel configurable par geolocalisation et appareil',
          'Session timeout de 60 minutes d inactivite'
        ]
      },
      {
        title: '8. Catalogue des modules',
        paragraphs: ['Le portail donne acces a 11 modules fonctionnels regroupes en deux domaines :'],
        bullets: [
          'SGESSS : GDA (Power Apps), PAR (Power Apps), MGP (Power Apps), GAT (Power Apps), GNC (Power Apps), GDR (Power Apps), GDI (Power Apps), EPP (Power Apps), SIG (ArcGIS Online)',
          'Planification : SGP (Power Apps), GED (Power Apps)'
        ]
      },
      {
        title: '9. Personnalisation et theme',
        paragraphs: ['Le theme du site utilise les parametres suivants :'],
        bullets: [
          'Couleur principale : #2E7D32 (vert MCA)',
          'Couleur secondaire : #388E3C',
          'Couleur d accent : #1B5E20',
          'Couleur de texte : #333333',
          'Police d en-tete : Segoe UI Semibold',
          'Police de corps : Segoe UI'
        ]
      },
      {
        title: '10. Flux Power Automate',
        paragraphs: ['Le flux Backlog-SI automatise le traitement des demandes de modification :'],
        bullets: [
          'Declencheur : soumission du formulaire Microsoft Forms',
          'Recuperation des champs remplis par l utilisateur (connecteur Microsoft Forms)',
          'Creation d un element dans la liste SharePoint (connecteur SharePoint)',
          'Envoi d un e-mail de notification aux membres de l equipe Backlog SI (connecteur Office 365 Outlook)',
          'Mise a jour du statut de la demande apres envoi de la notification'
        ]
      },
      {
        title: '11. Integrations externes',
        paragraphs: ['Le portail SIP integre les services suivants :'],
        bullets: [
          'Modules Power Apps : 10 modules Canvas accessibles via des liens directs depuis les pages de presentation',
          'ArcGIS Online : module SIG integre via un lien direct vers le portail ArcGIS',
          'Power BI : tableaux de bord integres dans les pages de presentation des modules',
          'Site WordPress (mcabeninreg.bj) : complementarite communication interne/externe, sans synchronisation automatique'
        ]
      },
      {
        title: '12. Environnements et URLs',
        paragraphs: ['Le portail SIP est deploye uniquement en environnement de production :'],
        bullets: [
          'Portail SIP (PROD) : https://mosesmcareg.sharepoint.com/',
          'Centre d administration SharePoint : https://mosesmcareg-admin.sharepoint.com/',
          'Power Apps : https://make.powerapps.com/',
          'Power Automate : https://make.powerautomate.com/',
          'Power BI : https://app.powerbi.com/'
        ]
      },
      {
        title: '13. Performances et limites',
        paragraphs: ['Recommandations de performance :'],
        bullets: [
          'Limiter le nombre de composants WebPart par page a 25 maximum',
          'Optimiser les images (format WebP ou JPEG compresse, max 1920px de large)',
          'Utiliser l indexation des colonnes pour les listes depassant 5 000 elements',
          'Activer le versioning avec un nombre limite de versions (50 recommande)'
        ]
      },
      {
        title: '14. Sauvegarde et restauration',
        paragraphs: ['SharePoint Online inclut des mecanismes de sauvegarde natifs :'],
        bullets: [
          'Retention automatique de 14 jours (restauration via le support Microsoft)',
          'Corbeille de premier niveau (93 jours)',
          'Corbeille de second niveau administrateur',
          'Versioning pour la restauration de versions precedentes des fichiers et pages'
        ]
      },
      {
        title: '15. Checklist deploiement',
        paragraphs: ['Verifications avant mise en production :'],
        bullets: [
          'Site : pages creees et publiees, navigation configuree, theme applique',
          'Listes : evenements, liens modules, parametres du site, demandes de modification',
          'Flux : Backlog-SI active et teste',
          'Integrations : liens vers les modules Power Apps et ArcGIS verifies',
          'Securite : groupes SharePoint configures, permissions attribuees, MFA active'
        ]
      }
    ]}
  />
);

const sipPages: Record<SectionId, React.ComponentType> = {
  'note-technique': SipNoteTechniquePage,
  'guide-utilisateur': SipGuideUtilisateurPage,
  'documentation-technique': SipDocumentationTechniquePage
};

export default sipPages;
