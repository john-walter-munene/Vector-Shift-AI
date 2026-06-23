// store.js

import { create } from "zustand";
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
  } from 'reactflow';

export const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    getNodeID: (type) => {
        const newIDs = {...get().nodeIDs};
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({nodeIDs: newIDs});
        return `${type}-${newIDs[type]}`;
    },
    // addNode: (node) => {
    //     set({
    //         nodes: [...get().nodes, node]
    //     });
    // },
    addNode: (node) => {
      const updatedNodes = [...get().nodes, node];

      console.log("🟦 NODE ADDED:", node);
      console.log("📦 ALL NODES:", updatedNodes);

      set({
        nodes: updatedNodes
      });
    },
    // onNodesChange: (changes) => {
    //   set({
    //     nodes: applyNodeChanges(changes, get().nodes),
    //   });
    // },
    onNodesChange: (changes) => {
      const updated = applyNodeChanges(changes, get().nodes);

      console.log("🔄 NODE CHANGED:", changes);
      console.log("📦 UPDATED NODES:", updated);

      set({ nodes: updated });
    },
    onEdgesChange: (changes) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    // onConnect: (connection) => {
    //   set({
    //     edges: addEdge({...connection, type: 'smoothstep', animated: true, markerEnd: {type: MarkerType.Arrow, height: '20px', width: '20px'}}, get().edges),
    //   });
    // },
    onConnect: (connection) => {
      const newEdge = {
        ...connection,
        type: 'smoothstep',
        animated: true,
        markerEnd: {
          type: MarkerType.Arrow,
          height: '20px',
          width: '20px'
        }
      };

      const updatedEdges = addEdge(newEdge, get().edges);

      console.log("🟥 EDGE CREATED:", newEdge);
      console.log("🔗 ALL EDGES:", updatedEdges);

      set({
        edges: updatedEdges,
      });
    },
    updateNodeField: (nodeId, fieldName, fieldValue) => {
      set({
        nodes: get().nodes.map((node) => {
          if (node.id === nodeId) {
            node.data = { ...node.data, [fieldName]: fieldValue };
          }
  
          return node;
        }),
      });
    },
  }));
