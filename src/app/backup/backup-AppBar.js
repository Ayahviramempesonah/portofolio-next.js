"use client"


// components/AppBar.js
import Link from 'next/link';
import { useState, useEffect } from'react';

const AppBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(data => setProducts(data))
   .catch(error => console.error(error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setSearchResults(filteredProducts);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold">Logo</Link>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari..."
              className="bg-gray-200 py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 w-64"
            />
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Cari
            </button>
          </form>
          {/* <ul className="flex items-center">
            <li className="mr-6">
              <Link href="/about" className="text-lg font-bold">Tentang</Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg font-bold">Kontak</Link>
            </li>
          </ul> */}
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="container mx-auto mt-4">
          <h2 className="text-lg font-bold">Hasil Pencarian</h2>
          <ul>
            {searchResults.map(product => (
              <li key={product.id} className="mb-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="text-sm">Harga: {product.price}</p>
                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AppBar;