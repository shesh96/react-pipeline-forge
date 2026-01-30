// newNodes.js
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';


// 1. Transform Node
export const TransformNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'in' },
        { type: 'source', position: Position.Right, id: 'out' }
    ];

    return (
        <BaseNode id={id} label="Transform" handles={handles}>
            <label>
                Op:
                <select>
                    <option>To Upper Case</option>
                    <option>To Lower Case</option>
                    <option>Trim</option>
                </select>
            </label>
        </BaseNode>
    );
};

// 2. Filter Node
export const FilterNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'in' },
        { type: 'source', position: Position.Right, id: 'out' }
    ];

    return (
        <BaseNode id={id} label="Filter" handles={handles}>
            <label>
                Condition:
                <input type="text" placeholder="contains..." />
            </label>
        </BaseNode>
    );
};

// 3. Join Node
export const JoinNode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'a', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'b', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'joined' }
    ];

    return (
        <BaseNode id={id} label="Join" handles={handles}>
            <span>Join inputs A & B</span>
        </BaseNode>
    );
};

// 4. API Node
export const APINode = ({ id, data }) => {
    const handles = [
        { type: 'target', position: Position.Left, id: 'trigger' },
        { type: 'source', position: Position.Right, id: 'response' }
    ];

    return (
        <BaseNode id={id} label="API Call" handles={handles}>
            <label>
                URL:
                <input type="text" placeholder="https://api.example.com" />
            </label>
            <label>
                Method:
                <select>
                    <option>GET</option>
                    <option>POST</option>
                </select>
            </label>
        </BaseNode>
    );
};

// 5. Note Node
export const NoteNode = ({ id, data }) => {
    // Notes might just be visual, but let's allow connecting to them or just no handles
    // Let's add handles to be compatible
    return (
        <BaseNode id={id} label="Note" handles={[]}>
            <textarea style={{ minHeight: '60px' }} placeholder="Add a note..."></textarea>
        </BaseNode>
    );
};
