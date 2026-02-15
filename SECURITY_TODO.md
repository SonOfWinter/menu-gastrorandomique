# Security Gaps

- Automated dependency vulnerability scanning is now configured in CI.
- Dependency update automation is configured (Dependabot).
- No SAST/secret scanning is configured (e.g., CodeQL, Trivy, gitleaks).
- No CSP/security headers are documented or enforced in Next.js config.
- No monitoring/logging for security-relevant events or errors.
- No environment variable validation or secrets management guidance.
- No automated test coverage for security-related behaviors (rate limits, input validation).
