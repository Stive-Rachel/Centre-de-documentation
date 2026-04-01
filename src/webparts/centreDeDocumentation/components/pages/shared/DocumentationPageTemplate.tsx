import * as React from 'react';

interface IContentBlock {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface IDocumentationPageTemplateProps {
  intro: string;
  blocks: IContentBlock[];
}

const DocumentationPageTemplate: React.FC<IDocumentationPageTemplateProps> = ({ intro, blocks }) => {
  return (
    <article className="cdoc-article">
      <p className="cdoc-intro">{intro}</p>
      {blocks.map((block) => (
        <section key={block.title} className="cdoc-block">
          <h3>{block.title}</h3>
          {block.paragraphs.map((paragraph, index) => (
            <p key={`${block.title}-paragraph-${index}`}>{paragraph}</p>
          ))}
          {!!block.bullets && block.bullets.length > 0 && (
            <ul>
              {block.bullets.map((bullet, index) => (
                <li key={`${block.title}-bullet-${index}`}>{bullet}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </article>
  );
};

export default DocumentationPageTemplate;
