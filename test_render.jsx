import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';

try {
  const html = renderToString(<App />);
  console.log("Render successful! HTML length:", html.length);
} catch (err) {
  console.error("Render failed:", err);
}
