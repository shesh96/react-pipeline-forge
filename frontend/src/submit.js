// submit.js
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000'}/pipelines/parse`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }),
            });

            const data = await response.json();

            alert(`Pipeline Analysis:\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag}`);
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred while submitting the pipeline. Please check the console.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
