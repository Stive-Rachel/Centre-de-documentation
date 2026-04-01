import * as React from 'react';
import { IDocumentationModule, SectionId } from '../models/DocumentationModels';

interface IHomePageProps {
  modules: IDocumentationModule[];
  onSelectModule?: (moduleId: string, sectionId: SectionId) => void;
}

const HomePage: React.FC<IHomePageProps> = ({ modules, onSelectModule }) => {
  const handleCardClick = (moduleId: string): void => {
    if (onSelectModule) {
      onSelectModule(moduleId, 'note-technique');
    }
  };

  const isModuleComplete = (moduleId: string): boolean => {
    return moduleId.toUpperCase() === 'GNC';
  };

  return (
    <div className="cdoc-home">
      <h2>Bienvenue dans le centre de documentation</h2>
      <p>
        Selectionnez un module ci-dessous ou dans la barre laterale pour explorer son contenu documentaire.
        Cliquez sur une carte pour acceder directement a sa note technique.
      </p>
      <div className="cdoc-home-grid">
        {modules.map((moduleItem) => (
          <article
            key={moduleItem.id}
            className={`cdoc-home-card ${
              isModuleComplete(moduleItem.id) ? 'cdoc-home-card-clickable' : 'cdoc-home-card-disabled'
            }`}
            onClick={() => isModuleComplete(moduleItem.id) && handleCardClick(moduleItem.id)}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && isModuleComplete(moduleItem.id)) {
                handleCardClick(moduleItem.id);
              }
            }}
            role={isModuleComplete(moduleItem.id) ? 'button' : 'article'}
            tabIndex={isModuleComplete(moduleItem.id) ? 0 : -1}
          >
            <h3>{moduleItem.name}</h3>
            {isModuleComplete(moduleItem.id) ? (
              <>
                <p className="cdoc-home-card-hint">Cliquez pour accéder à la note technique →</p>
              </>
            ) : (
              <p className="cdoc-home-card-wip">
                <span className="cdoc-home-card-badge">En construction</span>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
