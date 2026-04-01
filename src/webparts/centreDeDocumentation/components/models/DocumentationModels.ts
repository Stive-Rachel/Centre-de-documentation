export type SectionId = 'note-technique' | 'guide-utilisateur' | 'documentation-technique';

export interface ISectionDefinition {
  id: SectionId;
  label: string;
}

export interface IDocumentationModule {
  id: string;
  name: string;
  sections: ISectionDefinition[];
}

export interface IActiveSelection {
  moduleId: string;
  sectionId: SectionId;
}
