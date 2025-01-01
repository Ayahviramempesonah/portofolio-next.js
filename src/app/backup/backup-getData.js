import Link from "next/link";

export default async function Page() {
  const data = await fetch('https://fakestoreapi.com/products');
  const posts = await data.json();

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', padding: '16px' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
              textAlign: 'center',
            }}
          >
           <Link href={`/detail/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: '150px', objectFit: 'contain', marginBottom: '8px' }}
            />
            <h3 style={{ fontSize: '16px', margin: '8px 0' }}>{post.title}</h3>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>${post.price}</p>
            <button
              style={{
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
            </Link>
            
          </div>
        ))}
      </div>
    
    </>
  );
}
