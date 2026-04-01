import * as React from 'react';
import { IActiveSelection, SectionId } from '../models/DocumentationModels';
import gncPages from '../pages/documents/GncPages';
import DocumentationPageTemplate from '../pages/shared/DocumentationPageTemplate';
import { getModuleById } from './documentationModules';

interface IPageRegistry {
  [moduleId: string]: Record<SectionId, React.ComponentType>;
}

const pageRegistry: IPageRegistry = {
  GNC: gncPages
};

const buildDefaultPage = (moduleName: string, sectionId: SectionId): React.ComponentType => {
  const sectionLabelById: Record<SectionId, string> = {
    'note-technique': 'Note technique',
    'guide-utilisateur': 'Guide utilisateur',
    'documentation-technique': 'Documentation technique'
  };

  const sectionLabel = sectionLabelById[sectionId];

  const DefaultPage: React.FC = () => (
    <DocumentationPageTemplate
      intro={`Contenu de demonstration pour ${moduleName} - ${sectionLabel}.`}
      blocks={[
        {
          title: 'Objectif',
          paragraphs: [
            `Cette page est la vue web interne de la section ${sectionLabel} pour le module ${moduleName}.`,
            'Vous pouvez maintenant remplacer ce texte par votre contenu documentaire final.'
          ]
        },
        {
          title: 'Structure suggeree',
          paragraphs: ['Organisez le contenu avec des sections claires afin de faciliter la lecture.'],
          bullets: [
            'Contexte et perimetre',
            'Etapes ou procedures',
            'Regles, roles et bonnes pratiques'
          ]
        }
      ]}
    />
  );

  return DefaultPage;
};

export const getDocumentPageBySelection = (
  selection: IActiveSelection
): React.ComponentType | undefined => {
  const modulePages = pageRegistry[selection.moduleId];

  if (modulePages && modulePages[selection.sectionId]) {
    return modulePages[selection.sectionId];
  }

  const moduleItem = getModuleById(selection.moduleId);
  const moduleName = moduleItem ? moduleItem.name : 'Module';

  return buildDefaultPage(moduleName, selection.sectionId);
};
