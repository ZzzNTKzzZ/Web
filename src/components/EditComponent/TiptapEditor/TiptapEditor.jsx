import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor({ content, onChange, editable }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate({ editor }) {
      onChange?.(editor.getText());
    },
    editorProps: {
      attributes: {
        class: "prose border border-gray-300 p-2 rounded",
        spellCheck: "false",
      },
    },
    editable: editable
  });

  useEffect(() => {
    if (editor && content !== editor.getText()) {
      editor.commands.setContent(content, false);
    }
  }, [content, editor]);

  return <EditorContent editor={editor} />;
}
