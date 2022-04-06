import { FormEvent, useCallback, useState } from "react"
import { SearchResult } from "../components/SearchResults";

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const onAddToWishList = useCallback((id: number) => {
    console.log(id)
  }, [])

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    setResults(data)
  }

  return (
    <div>
      <h1>Search</h1>

      <div>
        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
          <button type="submit">Buscar</button>
        </form>
      </div>

      <SearchResult onAddToWishList={onAddToWishList} results={results} />
    </div>
  )
}

/**
 * useCallback = used to memoize functions
 */

/**
 * O ideal é sempre formatar/computar os dados logo após busca-los, assim evitamos alguns problemas
 * 
 * Podemos usar também o code-splitting para ajudar com o tamanho do bundle total
 * Dentro do next usamos a função "dynamic" para importar o componente que será carregado de forma tardia
 */
