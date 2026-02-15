# Security Gaps

- Automated dependency vulnerability scanning is now configured in CI.
- Dependency update automation is configured (Dependabot).
- SAST and secret scanning are configured (CodeQL and gitleaks).
- CSP/security headers are enforced in Next.js config.
- Security-relevant events are logged (rate limiting).
- Environment variable validation and guidance are provided.
- Automated tests cover security-related behaviors (rate limiting, input validation).
