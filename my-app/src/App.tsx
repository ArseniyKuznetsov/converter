import ProductCard from "./components/ProductCard/ProductCard"

export const App = () => {

    return (
        <>
            <ProductCard title={"title"} origin={"origin"} price={34900} currency={"RUB"} imageUrl={"imageUrl"} />
            <ProductCard title={"title"} origin={"origin"} price={34900} currency={"USD"} imageUrl={"imageUrl"} />
        </>
    )
}