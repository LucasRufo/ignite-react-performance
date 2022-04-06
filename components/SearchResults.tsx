import { ProductItem } from "./ProductItem";
import * as React from "react";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResult({ results, onAddToWishList }: SearchResultsProps) {
  const totalPrice = React.useMemo(() => {
    return results.reduce((acc, product) => {
      return acc + product.price;
    }, 0)
  }, [results])

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return <ProductItem key={product.id} onAddToWishList={onAddToWishList} product={product} />
      })}
    </div>
  )
}

/**
 * useMemo = used to memoize values/expensive calculations
 * 
 * when to use?
 * 
 * 1. When you need to calculate something that is expensive
 * 2. Avoid creating new memory allocations when that value is passed as a prop 
 */