"use client"
import { useCart } from "@/hooks"
import Image from "next/image"

export default function Cart() {
	const { cart, removeFromCart, updateQuantity } = useCart()

	return (
		<div className="container mx-auto px-4 py-6">
			<h1 className="text-2xl font-bold mb-4">Your Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					{cart.map(item => (
						<div
							key={item.id}
							className="flex items-center justify-between mb-4"
						>
							<Image
								src={item.image}
								alt={item.title}
								className="h-16 w-16 object-cover"
								width={64}
								height={64}
							/>
							<p>{item.title}</p>
							<p>${item.price}</p>
							<input
								type="number"
								value={item.quantity}
								onChange={e => updateQuantity(item.id, e.target.value)}
								className="w-16 border px-2 py-1"
							/>
							<button
								onClick={() => removeFromCart(item)}
								className="bg-red-500 text-white px-4 py-2 rounded-lg"
							>
								Remove
							</button>
						</div>
					))}
					<div className="mt-6">
						<button className="bg-green-500 text-white px-6 py-2 rounded-lg">
							Proceed to Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	)
}
