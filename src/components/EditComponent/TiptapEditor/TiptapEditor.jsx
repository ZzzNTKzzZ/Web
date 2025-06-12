import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TiptapEditor({ content, onChange, editable, onFocus, onBlur, styleItem }) {
  const editor = useEditor({
    content,
    editable,
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <EditorContent
      editor={editor}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{
        ...styleItem,
        border: "none",
        outline: "none",
      }}
    />
  );
}
