import * as React from 'react';
import { IActiveSelection, SectionId } from '../models/DocumentationModels';
import actPages from '../pages/documents/ActPages';
import bioPages from '../pages/documents/BioPages';
import eppPages from '../pages/documents/EppPages';
import forPages from '../pages/documents/ForPages';
import gatPages from '../pages/documents/GatPages';
import gdaPages from '../pages/documents/GdaPages';
import gdiPages from '../pages/documents/GdiPages';
import gdrPages from '../pages/documents/GdrPages';
import gedPages from '../pages/documents/GedPages';
import gncPages from '../pages/documents/GncPages';
import mgpPages from '../pages/documents/MgpPages';
import parPages from '../pages/documents/ParPages';
import pasPages from '../pages/documents/PasPages';
import pesPages from '../pages/documents/PesPages';
import sgpPages from '../pages/documents/SgpPages';
import sigPages from '../pages/documents/SigPages';
import sipPages from '../pages/documents/SipPages';
import DocumentationPageTemplate from '../pages/shared/DocumentationPageTemplate';
import { getModuleById } from './documentationModules';

interface IPageRegistry {
  [moduleId: string]: Record<SectionId, React.ComponentType>;
}

const pageRegistry: IPageRegistry = {
  ACT: actPages,
  BIO: bioPages,
  EPP: eppPages,
  FOR: forPages,
  GAT: gatPages,
  GDA: gdaPages,
  GDI: gdiPages,
  GDR: gdrPages,
  GED: gedPages,
  GNC: gncPages,
  MGP: mgpPages,
  PAR: parPages,
  PAS: pasPages,
  PES: pesPages,
  SGP: sgpPages,
  SIG: sigPages,
  SIP: sipPages
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
