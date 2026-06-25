const express = require("express");
const cors = require("cors");

const { calculatePipeline } = require("./services/pipelineService");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ status: 200, health: "okay" });
});

app.post('/pipelines/parse', (req, res) => {

  const nodes = Array.isArray(req.body.nodes) ? req.body.nodes : [];
  const edges = Array.isArray(req.body.edges) ? req.body.edges : [];

  const result = calculatePipeline(nodes, edges);
  return res.status(200).json(result);

});


// Everything else => 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});