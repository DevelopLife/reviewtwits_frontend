interface CodeBlockProps {
  children: string;
}

const CodeBlock = ({ children }: CodeBlockProps) => {
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
};
export default CodeBlock;
