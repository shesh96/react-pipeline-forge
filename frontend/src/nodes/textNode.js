// TextNode.js
import { useState, useEffect, useRef } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // Dynamic Handle Logic
  useEffect(() => {
    // Regex to extract variables formatted as {{ variableName }}
    const variableRegex = /{{(.*?)}}/g;
    const matches = new Set();
    let match;

    while ((match = variableRegex.exec(currText)) !== null) {
      const variableName = match[1].trim();
      // Ensure unique and non-empty variable names
      if (variableName) {
        matches.add(variableName);
      }
    }

    // Generate handles based on unique variable names
    const newHandles = Array.from(matches).map((variableName, index) => ({
      type: 'target',
      position: Position.Left,
      id: variableName,
      // Stack handles vertically with consistent spacing
      style: { top: `${(index + 1) * 20 + 50}px` }
    }));

    // Always include the output handle
    newHandles.push({ type: 'source', position: Position.Right, id: 'output' });

    setHandles(newHandles);

    // CRITICAL FIX: Notify ReactFlow about the handle changes so edges re-render
    setTimeout(() => updateNodeInternals(id), 0);

  }, [currText, id, updateNodeInternals]);


  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Text"
      handles={handles}
      style={{ height: 'auto', minHeight: '100px' }} // let it grow
    >
      <label style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            resize: 'none',
            overflow: 'hidden',
            minHeight: '40px',
            fontFamily: 'monospace'
          }}
        />
      </label>
    </BaseNode>
  );
}
