import myCreateElement from "../helpers/myCreateElement.js";

export class App {
  constructor(root) {
    this.root = root;
    this.listRoot;
  }

  render(data) {
    this.createRootList();
    data.map((item) => {
      this.renderItem(item, this.listRoot);
    });
  }

  createRootList() {
    const list = myCreateElement("ul", ["tree"]);

    const title = myCreateElement("h1", ["title"]);

    title.innerHTML = "Tree";

    list.append(title);

    this.root.append(list);

    this.listRoot = list;

    return list;
  }

  renderItem(item, elementDom) {
    const listItem = myCreateElement("li", ["list__item"]);

    const text = myCreateElement("p", ["list__item_text"]);

    text.innerHTML = `${item.item.name} (${item.item.price})`;

    listItem.append(text);

    elementDom.append(listItem);

    if (item.children) {
      text.classList.add("button");

      text.addEventListener("click", () => {
        listItem.classList.toggle("open");
        text.classList.toggle("open");
      });

      const newElementDom = myCreateElement("ul", [
        "tree__item",
        "tree__item_parent",
      ]);

      listItem.append(newElementDom);

      item.children.map((childrenItem) => {
        this.renderItem(childrenItem, newElementDom);
      });
    }
  }
}
