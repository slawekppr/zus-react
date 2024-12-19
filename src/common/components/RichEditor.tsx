import { Button } from "primereact/button";
import { is } from "ramda";
import React, { useRef } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const RichEditor = ({ onChange }: Props) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML); // Capture content as HTML
    }
  };

  function addIsland() {
    const island = document.createElement("span");
    island.contentEditable = "false";
    island.className = " bg-slate-300 p-2 ";
    island.innerHTML = ` <span class="bg-white" contenteditable="true">
        Wysepka 
    </span> `;
    
    // getSelection()?.anchorNode?.
    editorRef.current?.append(island);
  }
  const value = "Ala ma <b>Kota</b>";

  return (
    <div>
      <div
        ref={editorRef}
        contentEditable="true"
        onChange={handleInput}
        dangerouslySetInnerHTML={{ __html: value }}
        className="border border-solid border-slate-600 w-full min-h-10"
      />
      <Button onClick={addIsland}>Add Island</Button>
    </div>
  );
};

export default RichEditor;
