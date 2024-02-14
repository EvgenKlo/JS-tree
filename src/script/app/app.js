import myCreateElement from "../helpers/myCreateElement.js";

export const createRootList = () => {
  const root = document.getElementById("root");

  const list = myCreateElement("ul", ["tree"]);

  const title = myCreateElement("h1", ["title"]);

  title.innerHTML = "Tree";

  list.append(title);

  root.append(list);

  return list;
};

const renderItem = (item, elementDom) => {
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
      renderItem(childrenItem, newElementDom);
    });
  }
};

export const render = (data, listRoot) => {
  data.map((item) => {
    renderItem(item, listRoot);
  });
};
