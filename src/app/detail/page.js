export default async function DetailPage({ searchParams }) {
  // Pastikan kita mendapatkan `id` dari searchParams
  const id = searchParams?.id;

  // Jika `id` tidak tersedia, tampilkan pesan error
  if (!id) {
    return <p>No product ID provided</p>;
  }

  try {
    // Fetch detail produk berdasarkan ID
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch product details");
    }
    const product = await res.json();

    // Render detail produk
    return (
      <div style={{ padding: "20px" }}>
        <h1>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold" }}>${product.price}</p>
      </div>
    );
  } catch (error) {
    // Jika terjadi error, tampilkan pesan error
    return <p>Failed to fetch product details: {error.message}</p>;
  }
}
