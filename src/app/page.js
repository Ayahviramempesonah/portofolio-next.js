import Link from "next/link";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";

export default async function HomePage() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return (
    <>  
    <AppBar />
      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Link href={`/detail?id=${product.id}`}>
            <div>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <h3 style={{ marginTop: "8px" }}>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
      
      
    </div>
     <Footer />
     </>

  );
  
}
