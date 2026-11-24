# Arbias Gjoshi

I build the control surface of enterprise agents. The plan a person can read, the approval before anything changes, the record of what changed, and the knowledge graph the system reasons over.

I work mostly in the interface, and I treat that interface as part of the system’s reliability. If the person watching cannot tell what is about to happen, the feature is not done.

## Now

At [Manta](https://manta.eu/) (Oslo, remote) I work on the Co-pilot, the customer-facing agent, and I led initiatives there. Travel and real-estate teams use it: Journey.travel, Newbuilds, Plot.AI, and Immobilière 3F.

The agent proposes an action plan. A person approves, rejects, or skips each step. I took that from prototype to release, including an admin view across customers. While it runs, the screen shows live progress. People attach files and images. Partner brands embed it white-label, and the same assistant ships as an SDK, already inside the Journey.travel app, with the developer docs.

EU customers run Anthropic Claude on Google Cloud Vertex AI in the EU, so the data stays inside the region the contract requires. Journey.travel’s agent runs on Claude Opus 5.5. The Journey.travel app itself sits on Cloudflare Workers, with storage kept in the EU.

The assistant is grounded in what the user is looking at. It waits until the data has loaded, and it holds up on very large customer datasets. Beside the chat, I built views that explain how the business rules reached a decision, with personal data masked, and I redesigned the interactive data-graph.

On Marketer.com, the same engagement before the Co-pilot, I shipped the first AI features: campaign suggestions with one-click actions, and an agent dashboard. I built the campaign ordering flows for Meta Advantage+, Google Performance Max, and Snapchat, with live ad previews and automated tests. Around that: the asset library, product analytics, the v4 design system, and a pass on the first chat agent with a stop-generation control and theming.

I also introduced AI code review and shared Cursor rules across the repos.

## With a client

For two months I sat with the Newbuilds.com team, sent from Manta, and moved the product off Marketer.tech. Front end, backend, Cloudflare, and the deploy path: ninety-plus tasks, with a person reviewing every change before it shipped.

The team’s coding agents ran on a Hetzner box, up to twenty Claude Code and Codex sessions at once, taking tasks from the tracker and restarting the ones that stalled. Shared agent rules, automated tests, and limits on what an agent is allowed to run. One feature from that stretch is a post editor with live feed, email, and SMS previews, built before the backend APIs existed.

## How I engineer

I start from the decision a person has to make, and I build backwards until that decision is inspectable. The model is typed. The states are explicit. The path that would be expensive to get wrong has a test.

The bugs I go after are a step that ran, a value that changed, and no record of which rule caused it. A screen that looks finished and cannot explain itself is unfinished.

I have led platforms as well as features. Design systems, state machines, end-to-end coverage, performance, and the pipeline that ships them. The long stretches were leading frontend at Zetta and at Justt. Day to day I work in Claude Code, with the review and the repo rules treated as part of the build.

I would rather ship a plan someone can refuse than an answer they have to take on trust.

## Stack

TypeScript, React, Next.js, Vue, and Nuxt. Vercel AI SDK, streaming, and tool calling. Google Cloud Vertex AI and Cloudflare AI Gateway. Cloudflare Workers. AWS (S3, CloudFront, Lambda). RDF, SPARQL, SHACL, and RDFox. GraphQL, React Flow, Zustand, and XState. Playwright and Cypress. GitHub Actions.

## Elsewhere

[LinkedIn](https://www.linkedin.com/in/arbiasgjoshi) · Pristina
