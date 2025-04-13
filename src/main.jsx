import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import AuthProvider from './Provider/AuthProvider';
import Routes from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Routes} />
    </AuthProvider>
  </StrictMode>,
)
