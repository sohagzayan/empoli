'use client';
import Heading from '@tiptap/extension-heading';
import OrderedList from '@tiptap/extension-ordered-list';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';

const TextWrite = ({ content, onChange }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: 'text-xl font-bold',
          levels: [2],
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal',
          // keepMarks: true,
          // keepAttributes: true,
          itemTypeName: 'listItem',
        },
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          'rounded-md  min-h-[200px] border p-3 focus:outline-primary peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted group bg-destructive-200  border-destructive-500 focus:ring-destructive-400 placeholder:text-destructive-400 text-sm px-4 py-2',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log('i form tiptap >', editor.getHTML());
    },
  });

  return (
    <div className="">
      <Toolbar editor={editor} />
      <div className="editor-wrapper">
        <EditorContent editor={editor} className="" />
      </div>
    </div>
  );
};

export default TextWrite;
