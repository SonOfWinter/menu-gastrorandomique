# Security Gaps

- Automated dependency vulnerability scanning is now configured in CI.
- Dependency update automation is configured (Dependabot).
- SAST and secret scanning are configured (CodeQL and gitleaks).
- CSP/security headers are enforced in Next.js config.
- Security-relevant events are logged (rate limiting).
- No environment variable validation or secrets management guidance.
- No automated test coverage for security-related behaviors (rate limits, input validation).
