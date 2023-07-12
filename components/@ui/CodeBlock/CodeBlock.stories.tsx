import type { Meta, StoryFn } from '@storybook/react';
import HighlightCDN from 'components/@feature/@common/HighlightCDN';
import CodeBlock from 'components/@ui/CodeBlock/CodeBlock';

export default {
  title: 'components/common/CodeBlock',
  component: CodeBlock,
} as Meta<typeof CodeBlock>;

export const html: StoryFn<typeof CodeBlock> = () => (
  <>
    <HighlightCDN />
    <CodeBlock>{`
      <body>
        <div>HTML CODE</div>
      </body>
      `}</CodeBlock>
  </>
);

export const javascript: StoryFn<typeof CodeBlock> = () => (
  <>
    <HighlightCDN />
    <CodeBlock>
      {`
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        document.getElementById("demo").innerHTML = fruits.toString();
      `}
    </CodeBlock>
  </>
);
export const java: StoryFn<typeof CodeBlock> = () => (
  <>
    <HighlightCDN />
    <CodeBlock>
      {`
      public class Main {
        public static void main(String[] args) {
          System.out.println("Hello World");
        }
      }`}
    </CodeBlock>
  </>
);
