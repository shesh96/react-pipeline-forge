// BaseNode.js
import { Handle } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [], style = {} }) => {
  return (
    <div className="custom-node" style={style}>
      {/* Render Handles */}
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          isConnectable={handle.isConnectable}
        />
      ))}

      <div className="custom-node-header">
        <span>{label}</span>
      </div>
      <div className="custom-node-body">
        {children}
      </div>
    </div>
  );
};
