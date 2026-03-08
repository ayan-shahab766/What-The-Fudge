"use client";

import { useCart } from "@/app/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export default function AddToCartButton({ id, name, price, imageUrl, className = "" }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart({ id, name, price, imageUrl });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold
                  transition-all duration-200 hover:scale-105 active:scale-95
                  ${added
                    ? "bg-green-700 text-white"
                    : "bg-[#8B4513] hover:bg-[#A0522D] text-[#F5DEB3]"
                  } ${className}`}
    >
      {added ? <><Check size={12} />Added!</> : <><ShoppingCart size={12} />Add to Cart</>}
    </button>
  );
}