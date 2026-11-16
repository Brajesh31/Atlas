# 📚 Atlas documentation hub

This documentation describes the existing Express/EJS/Mongoose application and its important gaps. Start with the root README for a concise project overview.

## Start by topic

| Need | Read |
|---|---|
| Understand the project | [Product brief](product-brief.md), [Project overview](project-overview.md) |
| Understand runtime components | [Architecture](architecture.md), [System design](system-design.md) |
| Inspect route behavior | [Route reference](routes.md), [HTTP contract](api.md) |
| Follow request and data lifecycle | [Data flow](data-flow.md), [Mermaid diagrams](diagrams/flows.md) |
| Review database design | [Database](database.md), [Data privacy](data-privacy.md) |
| Configure local environment | [Configuration](configuration.md), [Installation](installation.md) |
| Develop and contribute | [Development](development.md), [Workflow](workflow.md) |
| Review security concerns | [Security review](security-review.md), [Risk register](risk-register.md) |
| Test behavior | [QA plan](qa.md), [Testing strategy](testing-strategy.md), [Traceability](traceability-matrix.md) |
| Deploy safely | [Deployment](deployment.md), [Release management](release-management.md) |
| Diagnose errors | [Troubleshooting](troubleshooting.md), [Operations](operations.md), [Observability](observability.md) |
| Understand files and dependencies | [Project structure](project-structure.md), [Dependencies](dependencies.md) |
| Review visuals | [Diagram catalogue](diagrams/README.md), [Demo policy](demo/README.md) |

## Architecture and implementation
- [Architecture](architecture.md)
- [System design](system-design.md)
- [Routes](routes.md)
- [HTTP contract](api.md)
- [Data flow](data-flow.md)
- [Database](database.md)
- [Configuration](configuration.md)
- [Project structure](project-structure.md)
- [Dependencies](dependencies.md)

## Security and operations
- [Security review](security-review.md)
- [Data privacy](data-privacy.md)
- [Risk register](risk-register.md)
- [Operations](operations.md)
- [Observability](observability.md)
- [Troubleshooting](troubleshooting.md)
- [Deployment](deployment.md)
- [Performance](performance.md)
- [Release management](release-management.md)

## Quality and maintenance
- [QA plan](qa.md)
- [Testing strategy](testing-strategy.md)
- [Traceability matrix](traceability-matrix.md)
- [Maintenance](maintenance.md)
- [Documentation maintenance](documentation-maintenance.md)
- [Workflow](workflow.md)
- [Glossary](glossary.md)
- [FAQ](faq.md)

## Product and visuals
- [Product brief](product-brief.md)
- [Feature inventory](features.md)
- [Limitations](limitations.md)
- [Roadmap](../ROADMAP.md)
- [Diagram catalogue](diagrams/README.md)
- [Demo screenshot guide](demo/README.md)
- [Asset inventory](asset-inventory.md)

## Current implementation status
- **Present:** code exists for the described narrow behavior.
- **Partial:** implementation exists but important reliability/security behavior is missing.
- **Not implemented:** no working source path exists.
- **Target:** proposed architecture or future capability only.

## Documentation rules
1. Base statements on source files and configuration.
2. Keep the plaintext-password and exposed-secret warnings visible until verified fixes land.
3. Never describe target authentication/session architecture as implemented.
4. Do not invent performance, uptime, or test-coverage numbers.
5. Do not present technical diagrams as browser screenshots.
6. Update this index whenever a document is added or renamed.
