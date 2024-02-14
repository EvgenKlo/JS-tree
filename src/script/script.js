import { DataTree } from "./data/dataTree.js";

import JSON from "./../data/data.json" assert { type: "json" };

import { App } from "./app/app.js";

const root = document.getElementById("root");

const app = new App(root);

const data = new DataTree(JSON);

const sortData = data.getSortData();

app.render(sortData);
