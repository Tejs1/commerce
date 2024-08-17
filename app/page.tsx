import Image from "next/image"
import ProductCard from "./_components/ProductCard"

export default async function Home() {
	const products = await fetch(
		"https://fakestoreapi.com/products/category/electronics",
	).then(res => res.json())
	console.log(products)
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="container mx-auto px-4 py-6">
				<h1 className="text-2xl font-bold mb-4">Product Listing</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{products.length > 0 &&
						products.map(product => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
		</main>
	)
}
