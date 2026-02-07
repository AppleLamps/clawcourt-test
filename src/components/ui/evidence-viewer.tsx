interface EvidenceViewerProps {
  content: string;
  type?: "text" | "link" | "image";
}

export function EvidenceViewer({ content, type = "text" }: EvidenceViewerProps) {
  if (type === "link") {
    return (
      <div className="crt-overlay bg-black border border-terminal/30 p-6 font-mono text-sm">
        <a
          href={content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal underline hover:text-terminal-dark transition-colors"
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div className="crt-overlay bg-black border border-terminal/30 p-6 font-mono text-sm text-terminal">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
}
