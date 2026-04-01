import * as React from 'react';
import { getDocumentPageBySelection } from '../config/documentationPages';
import { getModuleById } from '../config/documentationModules';
import { IActiveSelection, SectionId } from '../models/DocumentationModels';
import HomePage from '../pages/HomePage';
import { documentationModules } from '../config/documentationModules';

interface IDocumentationContentProps {
  activeSelection: IActiveSelection | undefined;
  onSelectSection?: (moduleId: string, sectionId: SectionId) => void;
  onGoHome?: () => void;
}

const DocumentationContent: React.FC<IDocumentationContentProps> = ({
  activeSelection,
  onSelectSection,
  onGoHome
}) => {
  if (!activeSelection) {
    return <HomePage modules={documentationModules} onSelectModule={onSelectSection} />;
  }

  const moduleItem = getModuleById(activeSelection.moduleId);
  let sectionItem;

  if (moduleItem) {
    for (let index = 0; index < moduleItem.sections.length; index += 1) {
      const section = moduleItem.sections[index];

      if (section.id === activeSelection.sectionId) {
        sectionItem = section;
        break;
      }
    }
  }

  const ActivePage = getDocumentPageBySelection(activeSelection);

  if (!moduleItem || !sectionItem || !ActivePage) {
    return (
      <div className="cdoc-home">
        <h2>Contenu indisponible</h2>
        <p>La page demandee n a pas ete trouvee. Merci de verifier la configuration des modules.</p>
      </div>
    );
  }

  return (
    <div>
      <nav className="cdoc-breadcrumb" aria-label="Fil d ariane">
        <button type="button" className="cdoc-breadcrumb-home" onClick={onGoHome}>
          Accueil
        </button>
        <span className="cdoc-breadcrumb-separator">/</span>
        <span>{moduleItem.name}</span>
        <span className="cdoc-breadcrumb-separator">/</span>
        <span>{sectionItem.label}</span>
      </nav>

      <header className="cdoc-content-header">
        <h2>{sectionItem.label}</h2>
        <p>{moduleItem.name}</p>
      </header>

      <ActivePage />
    </div>
  );
};

export default DocumentationContent;
