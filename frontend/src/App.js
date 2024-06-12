import data from './data'
function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {/* Featured products are items that you highlight on your website or in your store. They may be new products, bestsellers, or items that you want to promote for a specific reason. For example, if you're running a sale, you may feature the products that are on sale */}
        <div className="products">
          {
            data && data.products && data.products.map((product) => (<div key={product.slug} className="product">
              <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>
                  {product.name}
                </p>
              </a>
                <p><strong>${product.price}</strong></p>
                <button type="">Add to Cart</button>
              </div>
            </div>))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
