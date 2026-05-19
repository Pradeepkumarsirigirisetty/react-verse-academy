import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'React Hoodie', price: 49.99, category: 'Clothing', inStock: true },
  { id: 2, name: 'JavaScript Mug', price: 14.99, category: 'Accessories', inStock: true },
  { id: 3, name: 'Node.js Sticker Pack', price: 7.99, category: 'Accessories', inStock: false },
  { id: 4, name: 'TypeScript Cap', price: 24.99, category: 'Clothing', inStock: true },
  { id: 5, name: 'Git Cheat Sheet Poster', price: 19.99, category: 'Posters', inStock: true },
  { id: 6, name: 'CSS Wizard T-Shirt', price: 34.99, category: 'Clothing', inStock: false },
];

function ProductCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filtered = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || p.category === category;
    const matchStock = !showInStockOnly || p.inStock;
    return matchSearch && matchCategory && matchStock;
  });

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>🛒 Product Catalog</h2>
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', marginBottom: '1rem' }}
      />
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{
            padding: '0.4rem 1rem', borderRadius: '20px', border: 'none',
            cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
            background: category === cat ? '#6366f1' : '#f1f5f9',
            color: category === cat ? '#fff' : '#475569',
          }}>{cat}</button>
        ))}
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        <input type="checkbox" checked={showInStockOnly} onChange={() => setShowInStockOnly(!showInStockOnly)} />
        Show in-stock only
      </label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
        {filtered.map(product => (
          <div key={product.id} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>{product.name}</h4>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#6366f1', margin: '0 0 0.5rem' }}>${product.price.toFixed(2)}</p>
            <span style={{
              fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '20px',
              background: product.inStock ? '#dcfce7' : '#fee2e2',
              color: product.inStock ? '#16a34a' : '#dc2626',
            }}>{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '2rem' }}>No products match your filters.</p>}
    </div>
  );
}

export default ProductCatalog;
