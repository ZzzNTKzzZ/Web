import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor({ content, onChange, editable = true, className }) {
  const fallbackContent = "<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>"; // visible spaces when empty
  const safeContent = content || fallbackContent;

  const editor = useEditor({
    extensions: [StarterKit],
    content: safeContent,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML()); // send updated HTML back
    },
    editorProps: {
      attributes: {
        spellCheck: "false",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;

    if ((content || fallbackContent) !== editor.getHTML()) {
      editor.commands.setContent(safeContent, false);
    }
  }, [content, editor]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [editable, editor]);

  return <EditorContent editor={editor} className={className} />;
}
