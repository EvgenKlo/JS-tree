const pushItem = (treeItem, item) => {
  if (treeItem.item.id === item.head) {
    if (item.node) {
      treeItem.children.push({ item, children: [] });
    } else {
      treeItem.children.push({ item, children: null });
    }
  } else {
    if (treeItem.children) {
      treeItem.children.map((treeItemChildren) => {
        pushItem(treeItemChildren, item);
      });
    }
  }
};

export default pushItem;
