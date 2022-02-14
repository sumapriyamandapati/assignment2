const contentNode = document.getElementById('contents');
const products = [];

const ProductRow = props => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.product.productName), /*#__PURE__*/React.createElement("td", null, "$", props.product.price), /*#__PURE__*/React.createElement("td", null, props.product.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
  href: props.product.imageUrl,
  target: "_blank"
}, /*#__PURE__*/React.createElement("u", null, "View"))));

function ProductTable(props) {
  const productRows = props.products.map(product => /*#__PURE__*/React.createElement(ProductRow, {
    key: product.id,
    product: product
  }));
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table colmn-width"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Product Name"), /*#__PURE__*/React.createElement("th", null, "Price"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Image"))), /*#__PURE__*/React.createElement("tbody", null, productRows));
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.productAdd;
    this.props.createProduct({
      category: form.category.value,
      price: form.price.value.slice(1),
      productName: form.productName.value,
      imageUrl: form.imageUrl.value
    });
    form.category.value = "";
    form.price.value = "$";
    form.productName.value = "";
    form.imageUrl.value = "";
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      name: "productAdd",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/React.createElement("label", null, "Category")), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/React.createElement("label", null, "Price")), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/React.createElement("select", {
      id: "category",
      className: "form-control"
    }, /*#__PURE__*/React.createElement("option", {
      value: "Shirts"
    }, "Shirts"), /*#__PURE__*/React.createElement("option", {
      value: "Jeans"
    }, "Jeans"), /*#__PURE__*/React.createElement("option", {
      value: "Jackets"
    }, "Jackets"), /*#__PURE__*/React.createElement("option", {
      value: "Sweaters"
    }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
      value: "Accessories"
    }, "Accessories"))), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      type: "text",
      name: "price"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6  top-buffer"
    }, /*#__PURE__*/React.createElement("label", null, "Product Name")), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6  top-buffer"
    }, /*#__PURE__*/React.createElement("label", null, "Image URL")), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      type: "text",
      name: "productName"
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-sm-6"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      type: "text",
      name: "imageUrl"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-sm-10"
    }, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-default  top-buffer"
    }, "Add Product")))));
  }

}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    document.forms.productAdd.price.value = "$";
  }

  createProduct(newProduct) {
    const newProducts = this.state.products.slice();
    newProduct.id = this.state.products.length + 1;
    newProducts.push(newProduct);
    this.setState({
      products: newProducts
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "main_div"
    }, /*#__PURE__*/React.createElement("h1", null, "My Company Inventory"), /*#__PURE__*/React.createElement("div", {
      className: "table_heading"
    }, "Showing all available products."), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
      products: this.state.products
    }), /*#__PURE__*/React.createElement("div", {
      className: "form_heading"
    }, "Add a new product to inventory"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
      createProduct: this.createProduct
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(ProductList, null), contentNode);