# Security Policy

This repository contains the source for [peopleintelligence.co.za](https://peopleintelligence.co.za), the website for People Intelligence's EQ and leadership coaching services. We take the security of the site and of our visitors' information seriously, and we appreciate responsible disclosure from the security community.

## Supported Versions

This is a continuously deployed website, not a versioned software package. Only the current live site and the `main` branch receive security fixes.

| Version                               | Supported          |
| ------------------------------------- | ------------------ |
| `main` branch / live production site  | :white_check_mark: |
| Older commits, forks and local copies | :x:                |

## Scope

**In scope**

- `peopleintelligence.co.za` and `www.peopleintelligence.co.za`
- Source code in this repository (including `/client`)
- Contact and enquiry forms, and the handling of any personal information submitted through them
- Misconfigurations in HTTP security headers, TLS, DNS or redirects that affect the site

**Out of scope**

- Third-party platforms we use but do not control (e.g. GoDaddy, Cloudflare, Netlify, GitHub, Zoom, Microsoft Teams) — please report these to the respective vendor
- Denial-of-service (DoS/DDoS) or load testing
- Social engineering, phishing or physical attacks against staff or clients
- Automated scanner output without a demonstrated, exploitable impact
- Missing best-practice headers or cookie flags with no practical security consequence
- Clickjacking on pages with no sensitive actions
- Self-XSS, or issues that require a compromised device or browser

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security problems.**

Report vulnerabilities privately using one of the following:

1. **GitHub Private Vulnerability Reporting** (preferred) — go to the **Security** tab of this repository and click **Report a vulnerability**.
2. **Email** — security@peopleintelligence.co.za

Please include:

- A description of the vulnerability and its potential impact
- The affected URL(s), page(s) or file(s)
- Step-by-step instructions to reproduce, including any proof-of-concept
- Screenshots or request/response captures, where helpful
- Your name or handle, if you would like to be credited

## What to Expect

| Stage                   | Target timeframe                       |
| ----------------------- | -------------------------------------- |
| Acknowledgement         | Within **3 business days**             |
| Initial assessment      | Within **7 business days**             |
| Status updates          | At least every **14 days** until resolved |
| Fix for critical/high   | Aim for **14 days** from confirmation  |
| Fix for medium/low      | Aim for **60 days** from confirmation  |

- **If accepted:** we will confirm the issue, keep you updated as we work on a fix, and let you know when it has been deployed. With your permission, we will credit you in the release notes or commit history.
- **If declined:** we will explain why (for example, out of scope, not reproducible, or accepted risk). You are welcome to provide more information if you believe we have misjudged it.

We ask that you allow us reasonable time to remediate before any public disclosure, and that you coordinate the disclosure date with us.

## Safe Harbour

We will not pursue legal action against researchers who, in good faith:

- Stay within the scope above and avoid privacy violations, data destruction, or service disruption
- Access only the minimum data needed to demonstrate the issue, and do not keep, share or modify it
- Stop testing and report immediately if they encounter personal information
- Give us reasonable time to fix the issue before disclosing it publicly

Personal information is handled in line with South Africa's **Protection of Personal Information Act (POPIA)**. Any personal information encountered during research must be treated as confidential and deleted once the report is submitted.

## Bug Bounty

We do not currently offer a paid bug bounty, but we are grateful for every responsible report and are happy to publicly acknowledge your contribution.

