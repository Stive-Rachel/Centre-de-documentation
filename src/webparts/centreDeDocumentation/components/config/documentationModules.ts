import { IDocumentationModule, ISectionDefinition } from '../models/DocumentationModels';

const FIXED_SECTIONS: ISectionDefinition[] = [
  { id: 'note-technique', label: 'Note technique' },
  { id: 'guide-utilisateur', label: 'Guide utilisateur' },
  { id: 'documentation-technique', label: 'Documentation technique' }
];

const buildModule = (id: string, name: string): IDocumentationModule => ({
  id,
  name,
  sections: FIXED_SECTIONS.map((section) => ({ ...section }))
});

export const documentationModules: IDocumentationModule[] = [
  buildModule('ACT', 'ACT'),
  buildModule('ALL', 'ALL'),
  buildModule('BIO', 'BIO'),
  buildModule('EPP', 'EPP'),
  buildModule('FOR', 'FOR'),
  buildModule('GAT', 'GAT'),
  buildModule('GDA', 'GDA'),
  buildModule('GDI', 'GDI'),
  buildModule('GDR', 'GDR'),
  buildModule('GED', 'GED'),
  buildModule('GEN', 'GEN'),
  buildModule('GNC', 'GNC'),
  buildModule('MGP', 'MGP'),
  buildModule('PAR', 'PAR'),
  buildModule('PAS', 'PAS'),
  buildModule('PES', 'PES'),
  buildModule('SGP', 'SGP'),
  buildModule('SIG', 'SIG'),
  buildModule('SIP', 'SIP')
];

export const getModuleById = (moduleId: string): IDocumentationModule | undefined => {
  for (let index = 0; index < documentationModules.length; index += 1) {
    if (documentationModules[index].id === moduleId) {
      return documentationModules[index];
    }
  }

  return undefined;
};
