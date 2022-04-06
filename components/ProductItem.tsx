import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishList(product.id)}>Add to Wish List</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product);
});

/**
 * memo = evita renderizar o componente se os props não mudarem
 * 
 * when to use? 
 * 
 * 1. Pure functional Components
 * 2. Renders too often
 * 3. Re-render with same props
 * 4. Medium or size components
 */