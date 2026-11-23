# Arbias Gjoshi

I build the control surface of enterprise agents. The plan a person can read, the approval before anything changes, the record of what changed, and the knowledge graph the system reasons over.

I work mostly in the interface, and I treat that interface as part of the system’s reliability. If the person watching cannot tell what is about to happen, the feature is not done.

## Now

At [Manta](https://manta.eu/) I build the product surface of a reasoning engine. It keeps a per-tenant knowledge graph, derives what should happen next, and proposes an action plan. A person approves it. The system then acts in the customer’s own tools and keeps the reason.

What I own there:

- Copilot views that stream, and tool calls shown while they happen
- Action plans with execution state, progress, and an activity log
- Knowledge-graph exploration: typed nodes, ego-graphs, and type summaries
- SHACL forms for editing the graph, with shape selection and RDFox-backed queries
- The campaign workflows the agent acts through, across Meta, Google, and Snapchat

## How I engineer

I start from the decision a person has to make, and I build backwards until that decision is inspectable. The model is typed. The states are explicit. The path that would be expensive to get wrong has a test.

The bugs I go after are a step that ran, a value that changed, and no record of which rule caused it. A screen that looks finished and cannot explain itself is unfinished.

I have led platforms as well as features. Design systems, state machines, end-to-end coverage, performance, and the pipeline that ships them. The long stretches were leading frontend at Zetta and at Justt. The work now is the agent surface above that craft.

I would rather ship a plan someone can refuse than an answer they have to take on trust.

## Proof

**Agent loop.** Streaming responses, tool-call rendering, and action plans a person can follow while they run.

**Graph, with a contract.** Views over typed entities, and forms that edit the graph against its SHACL shapes instead of a one-off schema.

**A workflow with a live consequence.** Multi-step campaign tools, catalogs, and validation, in a product where a bad step changes a real ad account.

## Stack

TypeScript, React, Vue, Nuxt. React Flow for graph UI. RDF, SHACL, and RDFox in product code, not as a side interest. Zustand, XState, GraphQL. Playwright and Cypress. AWS and GitHub Actions.

## Elsewhere

[LinkedIn](https://www.linkedin.com/in/arbiasgjoshi) · Pristina
