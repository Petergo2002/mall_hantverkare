# Security & Reliability Sweep Report

Project: `mall_hantverkare`  
Date: 2026-03-04  
Scope: Next.js 14 App Router frontend template (`src/`, `next.config.mjs`, package/config files)

## Executive Summary

The template is structurally solid and currently builds/lints cleanly, but there are several important production risks to address before using it broadly for customer deployments:

1. The app is pinned to an outdated Next.js major version.
2. No explicit security headers baseline (notably CSP) is configured in app code.
3. Environment file ignore patterns are incomplete and increase secret-leak risk.
4. Contact form is currently simulated (no real submission), which creates functional loss risk in production.

---

## Critical

### [SEC-001] Outdated Next.js version pinned
- Severity: Critical
- Location: `package.json:13`
- Evidence:
  - `next`: `"14.2.35"`
- Impact:
  - Older Next.js lines can miss security patches and advisories; this is a direct exposure risk on internet-facing deployments.
- Fix:
  - Upgrade to a supported, patched Next.js major/minor and retest (`lint`, `build`, smoke test).
- Mitigation:
  - Add dependency maintenance cadence (monthly) and security advisory monitoring.
- False positive notes:
  - None from app code perspective; package pin is explicit.

---

## High

### [SEC-002] Missing explicit security headers/CSP baseline in app config
- Severity: High
- Location: `next.config.mjs:1`
- Evidence:
  - Config is empty object (`const nextConfig = {}`), no headers policy.
- Impact:
  - No app-level baseline for CSP/clickjacking/nosniff/referrer policy; increased XSS and framing exposure if edge/proxy layer is not hardening headers.
- Fix:
  - Add `async headers()` in `next.config.mjs` with at least:
    - `Content-Security-Policy`
    - `X-Content-Type-Options: nosniff`
    - `X-Frame-Options: DENY` (or CSP `frame-ancestors`)
    - `Referrer-Policy`
- Mitigation:
  - If headers are already enforced in CDN/proxy, document exact policy and keep it versioned.
- False positive notes:
  - Could be handled outside repo; must be verified in runtime response headers.

### [SEC-003] Incomplete `.env` ignore patterns
- Severity: High
- Location: `.gitignore:29`
- Evidence:
  - Only `.env*.local` is ignored.
  - `.env`, `.env.production`, `.env.development` are not ignored by this file.
- Impact:
  - Increased chance of accidentally committing secrets when onboarding customer-specific env config.
- Fix:
  - Add:
    - `.env`
    - `.env.*`
    - keep exception if needed for `.env.example`
- Mitigation:
  - Add pre-commit secret scanning (e.g., gitleaks/trufflehog in CI).
- False positive notes:
  - If you never use env files locally this is lower, but template reuse strongly suggests env usage over time.

---

## Medium

### [REL-001] Contact form is simulated only (no real delivery path)
- Severity: Medium
- Location: `src/components/ui/ContactForm.tsx:9-13`
- Evidence:
  - `handleSubmit` blocks default submit and uses `setTimeout` to show success.
- Impact:
  - Leads are silently dropped in production unless each customer gets a real submission integration.
- Fix:
  - Connect to real backend/email/form provider endpoint and handle error/success states.
- Mitigation:
  - Add visible fallback contact path and instrumentation (event/log) until backend is connected.
- False positive notes:
  - Might be intentional for template stage, but should be treated as release blocker for live customer sites.

### [REL-002] Third-party hosted images from Unsplash on key pages
- Severity: Medium
- Location:
  - `src/app/page.tsx:101`
  - `src/app/om-oss/page.tsx:37`
  - `src/components/ui/Hero.tsx:56`
  - `src/components/ui/ServiceCard.tsx:53-66`
- Evidence:
  - Multiple direct `https://images.unsplash.com/...` URLs are loaded at runtime.
- Impact:
  - Visitor IP/user-agent/referrer leak to third party; possible compliance concerns and dependency on external uptime/licensing.
- Fix:
  - Replace with local assets or your own CDN.
- Mitigation:
  - If kept, document third-party data sharing in privacy text.
- False positive notes:
  - Not an exploit by itself, but a common compliance/reliability gap.

### [REL-003] Placeholder business/legal/schema values remain
- Severity: Medium
- Location:
  - `src/config/siteConfig.ts:49`
  - `src/config/siteConfig.ts:58-65`
- Evidence:
  - Organization number placeholder and schema address/geo placeholders.
- Impact:
  - Weak trust signals and potentially inaccurate structured data in production.
- Fix:
  - Require real values per customer in onboarding checklist before deployment.
- Mitigation:
  - Add pre-deploy validation script to fail on placeholder markers.
- False positive notes:
  - Acceptable in template repo, but not in customer production deploy.

---

## Low

### [OPS-001] No automated test suite beyond lint/build
- Severity: Low
- Location: project-level (no test script in `package.json`)
- Evidence:
  - `scripts` include `dev`, `build`, `start`, `lint`; no `test`.
- Impact:
  - Lower confidence in safe refactors when scaling many customer forks.
- Fix:
  - Add smoke tests for routing and critical page rendering.
- Mitigation:
  - Keep strict pre-deploy checklist until tests are added.

---

## Verified Good

- `npm run lint` passes.
- `npm run build` passes; SSG routes are generated correctly.
- No usage found of high-risk sinks like `eval`, `new Function`, `innerHTML` for user content, or unsafe dynamic redirects.
- `dangerouslySetInnerHTML` usage is limited to JSON-LD scripts with `JSON.stringify(...)` (acceptable pattern).

---

## Notes on Tooling Limits

- `npm audit` could not run due restricted network access to npm audit endpoint in this environment.
