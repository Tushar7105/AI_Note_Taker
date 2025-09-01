"use client"
import { useAction, useMutation } from 'convex/react';
import { AlignCenter, AlignLeft, AlignRight, Bold, Heading1, Heading2, Heading3, Highlighter, Italic, List, Sparkles, Subscript, Superscript, Underline} from 'lucide-react'
import { useParams } from 'next/navigation';
import React from 'react'
import { api } from '../../../../convex/_generated/api';
import { generateResult } from '../../../../configs/AiModel';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';

function EditorExtension({editor}) {
    const searchAI = useAction(api.myAction.search);
    const {fileId} = useParams();
    const saveNotes = useMutation(api.notes.AddNotes);
    const {user} = useUser();
    const onAiClick = async ()=>{
        toast("AI is getting the answer...");

        const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        );


        const result = await searchAI({
            query : selectedText,
            fileId : fileId
        });
        const UnformattedAnswer = JSON.parse(result);
        let AllUnformattedAnswer = '';
        UnformattedAnswer&&UnformattedAnswer.forEach(item => {
            AllUnformattedAnswer = AllUnformattedAnswer + item.pageContent
        });
        const PROMPT = `For question : ${selectedText}. And with the given page content as the answer
        please give the appropriate answer in HTML formate just the HTML body not the entire document 
        also since we are just writing answers in a documnet so dont use very large size text with no 
        CSS styling. The answer content is : ${AllUnformattedAnswer}`;

        const AiResult = (await generateResult(PROMPT)).replace('```', '').replace('html', '').replace('```', '');

        const allText = editor.getHTML();
        editor.commands.setContent(allText + '<p><strong> Answer: </strong>' + AiResult + '</p>');

        saveNotes({
            fileId : fileId,
            notes : editor.getHTML(),
            createdBy : user.primaryEmailAddress?.emailAddress
        })
    }

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
                    className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : '' }
                >
                    <AlignRight strokeWidth={2.5}/>
                </button>

                <button
                    onClick={() => onAiClick()}
                    className={'hover:text-blue-500 cursor-pointer'}
                >
                    <Sparkles strokeWidth={2}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default EditorExtension