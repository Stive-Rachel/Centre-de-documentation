import * as React from 'react';
import {
  IActiveSelection,
  IDocumentationModule,
  SectionId
} from '../models/DocumentationModels';

interface IDocumentationSidebarProps {
  modules: IDocumentationModule[];
  activeSelection: IActiveSelection | undefined;
  onSelectSection: (moduleId: string, sectionId: SectionId) => void;
  onGoHome: () => void;
}

const DocumentationSidebar: React.FC<IDocumentationSidebarProps> = ({
  modules,
  activeSelection,
  onSelectSection,
  onGoHome
}) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [expandedModuleIds, setExpandedModuleIds] = React.useState<string[]>([]);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredModules = modules.filter((moduleItem) => {
    if (!normalizedSearchTerm) {
      return true;
    }

    return moduleItem.name.toLowerCase().indexOf(normalizedSearchTerm) > -1;
  });

  const toggleModule = (moduleId: string): void => {
    setExpandedModuleIds((previousIds) => {
      const isExpanded = previousIds.indexOf(moduleId) > -1;

      if (isExpanded) {
        return previousIds.filter((id) => id !== moduleId);
      }

      return previousIds.concat(moduleId);
    });
  };

  return (
    <div className="cdoc-sidebar-inner">
      <button type="button" className="cdoc-home-button" onClick={onGoHome}>
        Accueil
      </button>

      <div className="cdoc-search-wrapper">
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Rechercher un module"
          className="cdoc-search-input"
          aria-label="Rechercher un module"
        />
      </div>

      <nav className="cdoc-module-list" aria-label="Liste des modules documentaires">
        {filteredModules.length === 0 && (
          <p className="cdoc-empty-search">Aucun module ne correspond a votre recherche.</p>
        )}

        {filteredModules.map((moduleItem) => {
          const isExpanded = expandedModuleIds.indexOf(moduleItem.id) > -1;

          return (
            <div key={moduleItem.id} className="cdoc-module">
              <button
                type="button"
                className="cdoc-module-toggle"
                onClick={() => toggleModule(moduleItem.id)}
                aria-expanded={isExpanded}
              >
                <span className="cdoc-module-name">{moduleItem.name}</span>
                <span className="cdoc-chevron" aria-hidden="true">
                  {isExpanded ? '▾' : '▸'}
                </span>
              </button>

              {isExpanded && (
                <div className="cdoc-section-list">
                  {moduleItem.sections.map((section) => {
                    const isActive =
                      !!activeSelection &&
                      activeSelection.moduleId === moduleItem.id &&
                      activeSelection.sectionId === section.id;

                    return (
                      <button
                        key={`${moduleItem.id}-${section.id}`}
                        type="button"
                        className={`cdoc-section-button ${isActive ? 'is-active' : ''}`}
                        onClick={() => onSelectSection(moduleItem.id, section.id)}
                      >
                        {section.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DocumentationSidebar;
