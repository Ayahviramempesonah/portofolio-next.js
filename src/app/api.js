export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
  
    return {
      props: {
        products,
      },
    };
  }
  
  export default function ProductList({ products }) {
    return (
      <div>
        <h1>FakeStore Products</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px' }}>
              <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  