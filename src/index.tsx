import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   root.render(<App />);
}

