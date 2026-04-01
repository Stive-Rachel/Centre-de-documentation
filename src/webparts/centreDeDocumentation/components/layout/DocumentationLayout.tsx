import * as React from 'react';

interface IDocumentationLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

const DocumentationLayout: React.FC<IDocumentationLayoutProps> = ({ sidebar, content }) => {
  return (
    <div className="cdoc-root">
      <header className="cdoc-header">
        <div className="cdoc-header-title">Centre de documentation</div>
        <div className="cdoc-header-subtitle">Portail documentaire interne</div>
      </header>
      <div className="cdoc-body">
        <aside className="cdoc-sidebar">{sidebar}</aside>
        <main className="cdoc-content">{content}</main>
      </div>
    </div>
  );
};

export default DocumentationLayout;
