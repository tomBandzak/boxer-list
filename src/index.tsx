import React from 'react';
import ReactDOM from 'react-dom/client';
import { boxersList } from "./boxers";

const App = ({ boxers }: { boxers: Record<string, string | number>[] }) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap' }}>
            {boxers.map((boxer) => <div key={boxer.name} style={{ width: 200, margin: 10, padding: 10, border: '1px solid #bbb', background: '#FAFAFA', borderRadius: 3, lineHeight: '10px' }}>{boxer.name}</div>)}
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App boxers={boxersList} />
    </React.StrictMode>
);
