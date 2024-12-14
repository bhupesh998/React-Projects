import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: "p1", price : 1, title: "p1", descriprtion : "p1"},
  {id: "p2", price : 2, title: "p2", descriprtion : "p2"},
  {id: "p3", price : 3, title: "p3", descriprtion : "p3"},
  {id: "p4", price : 4, title: "p4", descriprtion : "p4"},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.descriprtion}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
