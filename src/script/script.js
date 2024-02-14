import { getDataTree, sortData } from "./data/getDataTree.js";

import { createRootList, render } from "./app/app.js";

const dataTree = getDataTree();

const sortTree = sortData(dataTree);

const listRoot = createRootList();

render(sortTree, listRoot);
