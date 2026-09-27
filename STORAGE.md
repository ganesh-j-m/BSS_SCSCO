# Storage Abstraction & Asset Management

To prevent database bloat and ensure fast asset delivery, the SC(S)CO Digital Campus uses a flexible storage abstraction layer.

---

## Supported Storage Providers

### 1. In-App Data URL / Base64 (Default for Local Demo & Client Operations)
Uploaded portrait photos and document scans are converted client-side into lightweight Data URLs stored in application state and LocalStorage. This requires zero external cloud keys to evaluate the system.

### 2. Cloudflare R2 / AWS S3
For production scale, uploads are directed to an S3-compatible bucket:
- Endpoint: `S3_ENDPOINT`
- Access Key: `S3_ACCESS_KEY`
- Secret Key: `S3_SECRET_KEY`
- Bucket: `S3_BUCKET`

### 3. Cloudinary
For automatic face-detection cropping, compression, and WebP conversion:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
