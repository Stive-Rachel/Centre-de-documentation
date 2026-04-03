import * as React from 'react';
import { SectionId } from '../../models/DocumentationModels';

const ForNoteTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      NOTE TECHNIQUE : Module de Gestion des Formations (GEF)
    </p>

    <section className="cdoc-block">
      <h3>1. Contexte et justification</h3>
      <p>
        Dans le cadre de la mise en oeuvre du Systeme de Gestion Environnementale, Sociale,
        de Sante et Securite (SGESSS) du Compact Regional de MCA Benin, il est necessaire de
        disposer sur la plateforme en ligne d un module structure d apprentissage: le Module
        Gestion des formations, permettant de partager avec les parties prenantes un ensemble
        specifique de savoirs, de competences ou de connaissances.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>2. References</h3>
      <ul>
        <li>Exigences reglementaires nationales: le Code du travail et la Loi n 2017-05 sur l embauche et la main-d oeuvre et les reformes 2025 encouragent la formation continue et la promotion sociale;</li>
        <li>Normes internationales: Normes de Performance de la SFI</li>
        <li>Main-d oeuvre NP2: Sensibilisation aux droits des travailleurs et conditions de travail</li>
        <li>Sante et securite communautaire NP4: Formation aux mesures de securite pour les communautes locales</li>
        <li>Autres domaines: Protection de la biodiversite (NP6), Gestion des terres (NP5), et Patrimoine culturel (NP8)</li>
        <li>Directives Environnementales, Sanitaires et Securitaires (EHS)</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>3. Objectifs de la note technique</h3>
      <p>La presente note technique vise a:</p>
      <ul>
        <li>Decrire l architecture fonctionnelle du module de Gestion des Formations;</li>
        <li>Definir les informations cles sur les composantes, les fonctionnalites et les procedures du module de gestion des formations;</li>
        <li>Clarifier le processus de planification, de creation d un module ou d une session de formation ainsi que les modalites de gestion de la formation en ligne;</li>
        <li>Fournir des informations sur les utilisateurs finaux ou potentiels et les moyens de mise a disposition;</li>
        <li>Permettre d integrer et d enregistrer des questionnaires d evaluation de la formation rediges par les participants;</li>
        <li>Garantir la tracabilite et la production d indicateurs de performance fiables.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>4. Champ d application</h3>
      <p>
        Le module s applique a l ensemble des projets IC (Infrastructure du Corridor) et ECO
        (Efficacite des Operations du Corridor) du Compact MCA Benin Regional et concerne:
      </p>
      <ul>
        <li>Les travailleurs du Compact et des entreprises sous-traitantes;</li>
        <li>Les parties prenantes interessees.</li>
      </ul>
      <p>Les acteurs concernes sont: MCC, MCA Benin Regional, MOSES, Ingenieur, Entrepreneurs.</p>
    </section>

    <section className="cdoc-block">
      <h3>5. Objectifs du module gestion des formations</h3>
      <p>
        Partie integrante de la mise en oeuvre du SGESSS, l objectif du module Gestion des
        formations est de concevoir, planifier, organiser et suivre les differentes activites
        de formation, depuis la creation d une formation jusqu a la gestion des sessions.
      </p>
      <p>Dans le cadre des activites du compact, ce module permettra de:</p>
      <ul>
        <li>Evaluer les besoins en formation et sensibilisation ESSS et en rendre compte a la coordination du programme;</li>
        <li>Concevoir et offrir un programme de formation et sensibilisation pour renforcer les competences du personnel du MCA-Benin regional et ses partenaires;</li>
        <li>Planifier et derouler des formations sur la plateforme en ligne pour renforcer les capacites des parties prenantes cles;</li>
        <li>Eduquer et induire le developpement professionnel afin de modifier les comportements, grace au transfert du savoir par la repetition et en s appuyant sur du multimedia.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5.1 Structure generale de la formation</h3>
      <ul>
        <li><strong>Niveau 1 -- Les parcours de formations:</strong> ce sont les grands themes de formations par domaine du SGESSS. Par exemple: Sante-securite, Analyse sociale, Environnement, Plateforme du SGESSS, etc.</li>
        <li><strong>Niveau 2 -- Les modules:</strong> c est une unite pedagogique autonome sur une thematique precise au sein du parcours qui integre des sessions de formation. Un parcours de formation contient un ou plusieurs modules.</li>
        <li><strong>Niveau 3 -- Les sessions:</strong> ce sont les sequences de formation (presentiel, e-learning) correspondant a une unite de temps. Lors d une session, le formateur dispense un programme pedagogique donne visant a acquerir des competences.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>5.2 Acces au module</h3>
      <p>
        L acces au module se fera par la page Web du SGESSS, en cliquant sur l identification du
        module GEF ou Gestion des Formations. Ce bouton donnera acces aux composantes du Module:
        Creer une formation - Registre des formations - Gerer une formation - Tableau de bord.
      </p>
      <p>
        L acces est reserve aux personnes designees par leurs organismes respectifs et disposant
        d un profil valide sur la plateforme SGESSS. L authentification se fait par un identifiant
        et un mot de passe securise.
      </p>
    </section>

    <section className="cdoc-block">
      <h3>5.3 Fonctionnalites du module</h3>
      <p>Le module Gestion des Formations a pour objectif de faciliter la gestion complete du cycle de vie des formations au sein de la plateforme SGESSS. Il comprend plusieurs fonctionnalites cles:</p>
      <ul>
        <li><strong>Creer une formation:</strong> cette fonctionnalite permet de definir une nouvelle formation en precisant ses caracteristiques principales telles que le calendrier, le titre, les objectifs pedagogiques, la duree, les prerequis et le public cible.</li>
        <li><strong>Creer un module:</strong> chaque formation peut etre subdivisee en modules. Cette option permet d ajouter et de configurer ces modules en precisant leurs domaines, themes, contenus, methodes pedagogiques et intervenants.</li>
        <li><strong>Creer une session:</strong> la creation d une session consiste a planifier une activite / derouler un programme dans une periode donnee. L utilisateur peut y definir les dates, le lieu, les formateurs, le nombre de places disponibles, ainsi que la liste des participants.</li>
        <li><strong>Modifier la session / formation:</strong> changer de session ou de module, le titre ou la categorie de la formation, changer de planification, messagerie pour informer.</li>
        <li><strong>Gerer une session:</strong> cette fonctionnalite permet de suivre le deroulement effectif des sessions. Elle inclut les invitations, les presentations, la gestion des presences, le nombre de places disponibles, les messageries, l evaluation des participants, et la cloture de la session. Elle facilite egalement la generation d attestations de participation.</li>
        <li><strong>Espace documentaire:</strong> les documents pedagogiques de cette formation seront classes par module et par session. Ils pourraient etre telechargeables par les participants.</li>
        <li><strong>Registre des formations:</strong> consigne les elements pedagogiques: titre, planning, participants, evaluations d une session. Il garantit la conformite, la qualite, la tracabilite, et le suivi des competences acquises.</li>
        <li><strong>Tableau de bord:</strong> pour mesurer l efficacite, le taux de satisfaction, etc. Des indicateurs cles seront suivis par parcours, module et sessions de formations.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>6. Roles et responsabilites</h3>
      <p>Un plan de formation global pour le programme a ete developpe. Les activites de formation et de sensibilisation seront planifiees et developpees tout au long du programme. Divers outils de sensibilisation et formation ont ete identifies:</p>
      <ul>
        <li>Formations donnees par des institutions de formation specialisees au Benin ou a l exterieur du Benin;</li>
        <li>Seances de formations internes, fournies par MCC / MCA, MOSES ou l Ingenieur;</li>
        <li>Communication interne via l intranet ou la plateforme web;</li>
        <li>Formations des parties prenantes cles (Ingenieur, Entrepreneur);</li>
        <li>Renforcement de capacite de l Entrepreneur par l Ingenieur.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>7. Resultats attendus</h3>
      <ul>
        <li>Renforcement des competences, capacites ou savoir-faire specifiques;</li>
        <li>Acquisitions de nouvelles connaissances, meilleure maitrise des actions menees et bonnes pratiques;</li>
        <li>Indicateurs de performance fiables et convenables;</li>
        <li>Changements de comportements et amelioration des methodes de travail;</li>
        <li>Conformite aux exigences nationales et internationales;</li>
        <li>Renforcement de la culture sante-securite.</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>8. Indicateurs cles</h3>
      <ul>
        <li>Cumul des accidents pour tout le compact</li>
        <li>Nombre d accidents par projet</li>
      </ul>
    </section>

    <section className="cdoc-block">
      <h3>9. Conclusion</h3>
      <p>
        Le module Gestion des Formations constitue un outil de renforcement des capacites et de
        tracabilite des activites de formation dans le SGESSS. Il vise a transmettre des connaissances
        dans un domaine specifique, faciliter l apprentissage en presentant de maniere concise des
        informations cles, reutiliser les modules formations, en reduisant ainsi considerablement
        les couts des grandes initiatives de formation, les economies de temps et de logistique,
        en particulier avec les modules en ligne.
      </p>
      <p>
        Ce module est essentiel pour developper les competences du personnel, renforcer la performance
        globale et assurer une conformite durable aux exigences du Compact MCA Benin Regional.
      </p>
    </section>
  </article>
);

const ForGuideUtilisateurPage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const ForDocumentationTechniquePage: React.FC = () => (
  <article className="cdoc-article">
    <p className="cdoc-intro">
      Cette section sera bientot disponible.
    </p>
  </article>
);

const forPages: Record<SectionId, React.ComponentType> = {
  'note-technique': ForNoteTechniquePage,
  'guide-utilisateur': ForGuideUtilisateurPage,
  'documentation-technique': ForDocumentationTechniquePage
};

export default forPages;
