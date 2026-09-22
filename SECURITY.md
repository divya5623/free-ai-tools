# 🔐 Security Policy

## Scope

This repository is a public directory of tools and resources. It should **never** require or store API keys, passwords, access tokens, private credentials, or personal data.

> **Important:** No repository document can guarantee that an account can never be hacked. Account security also depends on GitHub account settings, email security, device security, and safe user behavior.

## Maintainer security checklist

Enable these settings in GitHub:

- [ ] Enable **two-factor authentication (2FA)** on the GitHub account; prefer a passkey or authenticator app.
- [ ] Save GitHub recovery codes offline in a secure location.
- [ ] Use a unique, strong password for GitHub and the connected email account.
- [ ] Review authorized OAuth applications and revoke anything unfamiliar.
- [ ] Review active sessions and SSH keys regularly.
- [ ] Never share personal access tokens, recovery codes, or authentication codes.
- [ ] Keep repository settings and Actions permissions restricted to the minimum required.
- [ ] Protect the default branch with pull requests and required checks when the plan supports it.
- [ ] Do not add secrets to README files, JSON data, issues, pull requests, or workflow logs.

## Repository safety rules

- Tool entries must use official websites or clearly identified official repositories.
- Do not add shortened, suspicious, referral, or misleading links.
- Do not claim that a service is permanently free or unlimited without current evidence.
- Do not execute downloaded scripts or install tools solely because they appear in this directory.
- Review external links before using them, especially links involving authentication, downloads, payments, or browser extensions.
- Treat all community contributions as untrusted until reviewed.

## Reporting a security concern

If you identify an exposed secret, malicious link, compromised workflow, unsafe recommendation, or other security issue:

1. **Do not publish secrets or sensitive details in a public issue.**
2. Contact the maintainer privately through GitHub.
3. Include the affected file or link, impact, reproduction steps when safe, and suggested remediation.
4. If a secret is exposed, revoke or rotate it immediately through the relevant provider before investigating further.

## If a GitHub token or password is exposed

1. Revoke the token immediately.
2. Change the affected password if applicable.
3. Review account sessions, SSH keys, OAuth apps, and recent repository activity.
4. Check workflow logs and commit history for additional exposure.
5. Remove the secret from the current files, then consider history cleanup with care; deleting a file alone does not remove historical copies.

## Contributor requirements

Never commit:

- API keys or access tokens
- Passwords or recovery codes
- `.env` files containing secrets
- Private keys or certificates
- Personal identification data
- Private customer, student, or company information

Use placeholders such as `YOUR_API_KEY` in documentation and keep real secrets in local environment variables or approved secret managers.

## Disclaimer

This policy provides security guidance and reporting instructions. It does not guarantee complete protection against account compromise, malicious links, vulnerable dependencies, or third-party service incidents.
