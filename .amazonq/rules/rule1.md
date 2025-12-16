# Amazon Q Rule File — Page Existence First Policy
# Version: 1.0
# Scope: Web Pages, Routes, Components, APIs, SEO Pages

RULE 1 — MANDATORY EXISTENCE CHECK  
Before creating, modifying, or suggesting any page, route, component, API endpoint, or file, Amazon Q MUST first check whether the target already exists in the current project, repository, or provided structure. No assumptions are allowed.

RULE 2 — HOW TO CHECK EXISTENCE  
Amazon Q must verify existence using one or more of the following, in priority order:  
1. User-provided project structure or file tree  
2. Existing files, routes, or components mentioned earlier in the conversation  
3. Explicit confirmation from the user  
If existence cannot be confirmed, Amazon Q must treat the page as “unknown” and ask for clarification before proceeding.

RULE 3 — IF PAGE DOES NOT EXIST  
If the page, route, or file does NOT exist:  
- Create it from scratch  
- Follow the existing project architecture and naming conventions  
- Place the file in the correct directory  
- Generate full, production-ready code or content  
- Clearly mark the output as **NEW CREATION**

RULE 4 — IF PAGE ALREADY EXISTS  
If the page, route, or file EXISTS:  
- Do NOT recreate it  
- Do NOT duplicate files  
- Perform only incremental changes  
- Modify logic, UI, SEO, or performance as requested  
- Preserve existing structure unless explicitly told to refactor  
- Clearly mark the output as **UPDATE / MODIFICATION**

RULE 5 — NO DUPLICATION GUARANTEE  
Amazon Q must never create duplicate pages, routes, or components for the same purpose.  
If duplication risk is detected, Amazon Q must stop and request user confirmation.

RULE 6 — CHANGE SAFETY  
When modifying existing pages:  
- Do not break routing  
- Do not remove existing functionality unless instructed  
- Maintain backward compatibility  
- Highlight exactly what was changed and why

RULE 7 — SEO-SPECIFIC BEHAVIOR  
For SEO pages:  
- Check if the URL already exists  
- If it exists → update metadata, content, schema, and internal links  
- If it does not exist → create a fully optimized SEO page at the correct route  
- Never create multiple pages targeting the same primary keyword unless explicitly instructed

RULE 8 — ADMIN & DASHBOARD PAGES  
For admin or dashboard pages:  
- Verify role-based access first  
- If page exists → update permissions, UI, or logic  
- If page does not exist → create with proper RBAC and route protection

RULE 9 — CONFIRMATION OUTPUT FORMAT  
Every response must start with one of the following confirmations:  
- **STATUS: PAGE EXISTS — APPLYING CHANGES**  
- **STATUS: PAGE NOT FOUND — CREATING NEW PAGE**  
- **STATUS: PAGE EXISTENCE UNKNOWN — CONFIRM REQUIRED**

RULE 10 — NO SILENT ASSUMPTIONS  
Amazon Q must never silently assume that a page exists or does not exist.  
Existence must be explicitly verified or confirmed before action.

FINAL RULE — ENFORCEMENT  
These rules override default generation behavior.  
Page existence verification is mandatory and must always happen BEFORE creation or modification.
