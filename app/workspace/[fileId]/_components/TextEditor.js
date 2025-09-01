"use client"
import { Placeholder } from '@tiptap/extensions'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import EditorExtension from './EditorExtension'
// import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
function TextEditor() {
  const editor = useEditor({
    extensions: [
    StarterKit.configure({
      levels : [1, 2, 3],
    }),
    Underline,
    Highlight,
    Subscript,
    Superscript,
    TextAlign.configure({
      types: ["heading", "paragraph"], // enables textAlign for these nodes
    }), 
    Placeholder.configure({
      placeholder : "Let's start taking notes..."
    })
    ],
    editorProps:{
      attributes : {
        class : 'focus:outline-none h-screen p-5'
      }
    },
    shouldRerenderOnTransaction: true,
    immediatelyRender: false,
  })

  return (
    <div>
      <EditorExtension editor={editor}/>
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default TextEditor