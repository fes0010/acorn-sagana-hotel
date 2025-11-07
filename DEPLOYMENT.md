# Deployment Guide - Acorn Sagana Hotel

## Dokploy Deployment

This project is configured for easy deployment with Dokploy.

### Prerequisites
- Dokploy instance running
- Docker installed on your Dokploy server
- GitHub repository access

### Environment Variables

This static site doesn't require any environment variables for basic functionality. However, if you plan to add features like contact forms or analytics, you may need:

**Optional Environment Variables:**
- `VITE_API_URL` - Backend API endpoint (if you add a booking system)
- `VITE_EMAIL_SERVICE_ID` - Email service ID (for contact forms)
- `VITE_GA_TRACKING_ID` - Google Analytics tracking ID

### Deployment Steps

1. **Connect Repository to Dokploy**
   - Log into your Dokploy dashboard
   - Create a new application
   - Connect to GitHub repository: `fes0010/acorn-sagana-hotel`
   - Select branch: `main`

2. **Configure Build Settings**
   - Build Type: Docker
   - Dockerfile: `Dockerfile` (in root)
   - Port: 80
   - Health Check: Enabled (path: `/`)

3. **Deploy**
   - Click "Deploy" button
   - Dokploy will automatically:
     - Pull the latest code
     - Build the Docker image
     - Start the container
     - Configure nginx with security headers

4. **Custom Domain (Optional)**
   - Add your custom domain in Dokploy settings
   - Configure DNS to point to your Dokploy server
   - Enable SSL/TLS certificate (Let's Encrypt)

### Manual Docker Build (Testing)

```bash
# Build the image
docker build -t acorn-sagana-hotel .

# Run locally
docker run -p 8080:80 acorn-sagana-hotel

# Visit http://localhost:8080
```

### Security Features Included

✅ Multi-stage Docker build (optimized size)
✅ Nginx with security headers
✅ X-Frame-Options: DENY
✅ X-Content-Type-Options: nosniff
✅ X-XSS-Protection enabled
✅ Referrer-Policy configured
✅ Gzip compression enabled
✅ Static asset caching
✅ SPA routing support
✅ Hidden files blocked

### Troubleshooting

**Build fails:**
- Check Docker is running
- Verify all files are committed to git
- Check build logs in Dokploy

**Site not loading:**
- Verify port 80 is exposed
- Check health check status
- Review nginx logs

**Images not showing:**
- Ensure images are in `public/images/` directory
- Check file paths are correct
- Verify images were included in git commit

### Performance

- Build time: ~2-3 minutes
- Image size: ~25MB (nginx alpine)
- First load: ~300KB (gzipped)
- Lighthouse score: 90+

### Support

For issues or questions, open an issue on GitHub:
https://github.com/fes0010/acorn-sagana-hotel/issues
