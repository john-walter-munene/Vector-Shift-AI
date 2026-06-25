# VectorShift AI Technical Assessment

A ReactFlow-based workflow builder featuring reusable node abstractions, dynamic text handles, backend graph analysis, and a responsive mobile-first interface.

## Features

* Reusable `BaseNode` abstraction
* Five additional custom nodes
* Dynamic TextNode variable extraction
* Auto-resizing TextNode textarea
* Pipeline submission to backend
* Node and edge counting
* DAG validation using Kahn's Algorithm
* Zustand state management
* Mobile-first responsive styling
* One-command installation and startup

## Getting Started

Clone the repository:

```bash
git clone https://github.com/john-walter-munene/Vector-Shift-AI.git

cd Vector-Shift-AI
```

Install all dependencies:

```bash
npm run install-all
```

Start the application:

```bash
npm start
```

This launches both the frontend and backend servers simultaneously.

## Pipeline Analysis

Submitting a pipeline returns:

```json
{
  "num_nodes": 9,
  "num_edges": 8,
  "is_dag": true
}
```

The results are displayed in a dismissible alert while keeping the pipeline visible for continued editing only after closure.