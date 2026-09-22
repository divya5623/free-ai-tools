# Structured directory data

`tools.json` is the machine-readable source for future website, search, filters, and automated checks.

Each entry should include:

- `name`: official tool name
- `category`: practical category
- `url`: official landing page
- `access`: open-source, free-tier, credits, mixed, or unknown
- `free_limit`: concise and honest free-access description
- `paid_after`: what may require payment
- `last_verified`: ISO date (`YYYY-MM-DD`)

Do not guess quotas. If a provider changes its pricing or limits, update the entry and verification date in the same pull request.
