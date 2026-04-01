import * as React from 'react';
import styles from './CentreDeDocumentation.module.scss';
import { ICentreDeDocumentationProps } from './ICentreDeDocumentationProps';
import { documentationModules } from './config/documentationModules';
import { IActiveSelection } from './models/DocumentationModels';
import DocumentationLayout from './layout/DocumentationLayout';
import DocumentationSidebar from './sidebar/DocumentationSidebar';
import DocumentationContent from './content/DocumentationContent';

interface ICentreDeDocumentationState {
  activeSelection: IActiveSelection | undefined;
}

export default class CentreDeDocumentation extends React.Component<
  ICentreDeDocumentationProps,
  ICentreDeDocumentationState
> {
  public constructor(props: ICentreDeDocumentationProps) {
    super(props);

    this.state = {
      activeSelection: undefined
    };
  }

  private readonly handleSelectSection = (moduleId: string, sectionId: IActiveSelection['sectionId']): void => {
    this.setState({
      activeSelection: {
        moduleId,
        sectionId
      }
    });
  };

  private readonly handleGoHome = (): void => {
    this.setState({
      activeSelection: undefined
    });
  };

  public render(): React.ReactElement<ICentreDeDocumentationProps> {
    const { hasTeamsContext } = this.props;
    const { activeSelection } = this.state;

    return (
      <section className={`${styles.centreDeDocumentation} ${hasTeamsContext ? styles.teams : ''}`}>
        <DocumentationLayout
          sidebar={
            <DocumentationSidebar
              modules={documentationModules}
              activeSelection={activeSelection}
              onSelectSection={this.handleSelectSection}
              onGoHome={this.handleGoHome}
            />
          }
          content={
            <DocumentationContent
              activeSelection={activeSelection}
              onSelectSection={this.handleSelectSection}
              onGoHome={this.handleGoHome}
            />
          }
        />
      </section>
    );
  }
}
