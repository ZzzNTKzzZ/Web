import { Mark } from '@tiptap/core';

export const FontFamily = Mark.create({
  name: 'fontFamily',

  addOptions() {
    return {
      types: ['textStyle'],
    };
  },

  addAttributes() {
    return {
      fontFamily: {
        default: null,
        parseHTML: element => element.style.fontFamily.replace(/['"]/g, ''),
        renderHTML: attributes => {
          if (!attributes.fontFamily) return {};
          return {
            style: `font-family: ${attributes.fontFamily}`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        style: 'font-family',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setFontFamily: font => ({ chain }) => {
        return chain()
          .setMark('fontFamily', { fontFamily: font })
          .run();
      },
      unsetFontFamily: () => ({ chain }) => {
        return chain().unsetMark('fontFamily').run();
      },
    };
  },
});
