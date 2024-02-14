import JSON from "../../data/data.json" assert { type: "json" };
import pushItem from "./pushItem.js";

export const getDataTree = () => {
  const data = JSON.services;

  const tree = [];

  data.map((item) => {
    if (item.head === null) {
      if (item.node) {
        tree.push({ item, children: [] });
      } else {
        tree.push({ item, children: null });
      }
      return;
    }

    tree.map((treeItem) => {
      pushItem(treeItem, item);
    });
  });

  return tree;
};

export const sortData = (data) => {
  if (Array.isArray(data)) {
    data.sort((a, b) => a.item.sorthead - b.item.sorthead);
  }
  data.map((item) => {
    if (item.children) {
      sortData(item.children);
    }
  });
  return data;
};
