import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

export default function TiptapEditor({ content, edit }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: edit,
  });
  
  // Update edit mode dynamically
  useEffect(() => {
    if (editor) {
      editor.setEditable(edit);
    }
  }, [edit, editor]);
  // Update content
  useEffect(() => {
    editor.commands.setContent(content)
  }, [content])

  return <EditorContent editor={editor} />;
}
