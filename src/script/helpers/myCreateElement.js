const myCreateElement = (tagName, classes) => {
  const element = document.createElement(tagName);
  element.classList.add(...classes);
  return element;
};

export default myCreateElement;
