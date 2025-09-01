import { AlignCenter, AlignLeft, AlignRight, Bold, Heading1, Heading2, Heading3, Highlighter, Italic, List, Subscript, Superscript, Underline} from 'lucide-react'
import React from 'react'

function EditorExtension({editor}) {
  return editor&&(
    <div>
        <div className="control-group">
            <div className="button-group flex gap-3">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'text-blue-500' : ''}
                >
                    <Heading1 strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'text-blue-500' : ''}
                >
                    <Heading2 strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'text-blue-500' : ''}
                >
                    <Heading3 strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'text-blue-500' : ''}
                >
                    <Bold strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'text-blue-500' : ''}
                >
                    <Italic strokeWidth={2.5}/>
                </button>
                
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'text-blue-500' : ''}
                >
                    <Underline strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={editor.isActive('highlight') ? 'text-blue-500' : ''}
                >
                    <Highlighter strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'text-blue-500' : ''}
                >
                    <List strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleSubscript().run()}
                    className={editor.isActive('subscript') ? 'text-blue-500' : ''}
                >
                    <Subscript strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                    className={editor.isActive('superscript') ? 'text-blue-500' : ''}
                >
                    <Superscript strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : ''}
                >
                    <AlignLeft strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-500' : ''}
                >
                    <AlignCenter strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : ''}
                >
                    <AlignRight strokeWidth={2.5}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default EditorExtension