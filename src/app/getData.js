import Link from "next/link"; 
export default async function Page() {
  const data = await fetch("https://fakestoreapi.com/products");
  const posts = await data.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded shadow">
          {/* Gunakan Link tanpa <a> */}
          <Link href={`/detail?id=${post.id}`}>
            <div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-600">${post.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
