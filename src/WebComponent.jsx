import ReactDom from "react-dom/client";
import { Widget } from "./components/Widget";

//  fn to convert kabab-case attributes to camel-case
export const normalizeAttribute = (attr) => {
  return attr.replace(/-([a-z])/g, (_, letter) => letter?.toUpperCase());
};

// creating a shadow root, so that we can integrate it as a widget in any other web application
class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDom.createRoot(this.shadowRoot);

    root.render(<Widget {...props} />);
  }

  getPropsFromAttributes = () => {
    const props = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }
    return props;
  };
}

export default WidgetWebComponent;
