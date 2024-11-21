import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Flame-game/', // This should match your GitHub repo name
  plugins: [react()],
});
