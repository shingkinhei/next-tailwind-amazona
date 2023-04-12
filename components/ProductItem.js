import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function ProductItem({product}) {
  return (
    <div className="card">
      <Link legacyBehavior href={`/product/${product.slug}`}>
        <a>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link legacyBehavior href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
