"use client"
import { useCart } from "@/hooks"
import Image from "next/image"
export default function ProductCard({ product }) {
	const { addToCart } = useCart()

	return (
		<div className="border p-4 rounded-lg shadow-lg">
			<div className="h-48 w-full object-cover mb-4">
				<Image
					src={product.image}
					alt={product.title}
					width={300}
					height={192}
				/>
			</div>

			<h2 className="text-lg font-semibold">{product.title}</h2>
			<p className="text-gray-700">${product.price}</p>
			<button
				onClick={() => addToCart(product)}
				className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
			>
				Add to Cart
			</button>
		</div>
	)
}
