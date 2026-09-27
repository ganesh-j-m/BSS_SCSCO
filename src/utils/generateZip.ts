import JSZip from 'jszip';

export async function createProjectZip(): Promise<Blob> {
  const zip = new JSZip();

  // Root files
  zip.file('package.json', `{
  "name": "scsco-digital-campus",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "tsc --noEmit",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:seed": "tsx prisma/seed.ts",
    "test": "node --test"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "jszip": "^3.10.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2"
  }
}`);

  zip.file('.env.example', `# ==============================================================================
# SC(S)CO DIGITAL CAMPUS ENVIRONMENT VARIABLES (NO SECRETS IN REPO)
# ==============================================================================
DATABASE_URL="postgresql://user:password@localhost:5432/scsco_db?schema=public"
AUTH_SECRET="your-32-character-secret-key-here"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

STORAGE_PROVIDER="local"
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

S3_ENDPOINT=""
S3_ACCESS_KEY=""
S3_SECRET_KEY=""
S3_BUCKET="scsco-assets"

AI_PROVIDER="gemini"
AI_API_KEY=""
`);

  zip.file('tsconfig.json', `{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`);

  zip.file('vite.config.ts', `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});`);

  zip.file('index.html', `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SC(S)CO Digital Campus - Shri Chhatrapati Shivaji College, Omerga</title>
    <meta name="description" content="Official institutional portal, comprehensive ERP, and digital campus management system for Shri Chhatrapati Shivaji College, Omerga (Bharat Shikshan Sanstha). NAAC 'A' Grade CGPA 3.14." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" rel="stylesheet">
  </head>
  <body class="font-poppins bg-slate-50 text-slate-900 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`);

  zip.file('metadata.json', `{
  "name": "SC(S)CO Digital Campus - Shri Chhatrapati Shivaji College Omerga",
  "description": "Official institutional portal, comprehensive ERP, and digital campus management system for Shri Chhatrapati Shivaji College, Omerga (Bharat Shikshan Sanstha).",
  "requestFramePermissions": [],
  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
}`);

  // Docs folder
  const docs = zip.folder('docs');
  docs?.file('OFFICIAL-DATA-SOURCE.md', `# SC(S)CO Official Data Source (From 2026-27-1.pdf)\nAll data is verified against the official 64-page prospectus.`);
  docs?.file('DEMO-CREDENTIALS.md', `# Demo Credentials\n- SuperAdmin: superadmin@scsco.edu.in\n- Principal: principal_scsco@rediffmail.com\n- Teacher: prof.suryawanshi@scsco.edu.in\n- Student: student.aniket@scsco.edu.in\n- Parent: parent.balasaheb@scsco.edu.in`);

  return await zip.generateAsync({ type: 'blob' });
}
