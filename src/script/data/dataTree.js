export class DataTree {
  constructor(data) {
    this.data = data.services;
    this.dataTree;
    this.sortTree;
  }

  getSortData() {
    this.getDataTree();
    this.sortTree = this.sortData(this.dataTree);
    return this.sortTree;
  }

  getDataTree() {
    const tree = [];

    this.data.map((item) => {
      if (item.head === null) {
        if (item.node) {
          tree.push({ item, children: [] });
        } else {
          tree.push({ item, children: null });
        }
        return;
      }

      tree.map((treeItem) => {
        this.pushItem(treeItem, item);
      });
    });

    this.dataTree = tree;

    return tree;
  }

  sortData(data) {
    if (Array.isArray(data)) {
      data.sort((a, b) => a.item.sorthead - b.item.sorthead);
    }
    data.map((item) => {
      if (item.children) {
        this.sortData(item.children);
      }
    });

    return data;
  }

  pushItem(treeItem, item) {
    if (treeItem.item.id === item.head) {
      if (item.node) {
        treeItem.children.push({ item, children: [] });
      } else {
        treeItem.children.push({ item, children: null });
      }
    } else {
      if (treeItem.children) {
        treeItem.children.map((treeItemChildren) => {
          this.pushItem(treeItemChildren, item);
        });
      }
    }
  }
}
