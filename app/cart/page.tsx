"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Empty state ── */
function EmptyCart() {
  return (
    <div className="min-h-screen bg-[#FDF6EC] flex items-center justify-center px-6 pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-sm"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl mb-6 select-none"
        >
          🧁
        </motion.div>
        <h1 className="font-display text-3xl text-[#3D1C02] mb-2">Your cart is empty</h1>
        <p className="text-[#8B6347] text-sm mb-7 leading-relaxed">
          Looks like you haven&apos;t added anything yet.
          <br />The desserts are waiting for you.
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 bg-[#D2691E] hover:bg-[#E07820]
                     text-white px-7 py-3 rounded-full font-semibold text-sm
                     transition-all hover:scale-105 active:scale-95"
        >
          <ShoppingBag size={15} />
          Browse Menu
        </Link>
      </motion.div>
    </div>
  );
}

/* ─── Cart item row ── */
interface RowProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

function CartItemRow({ name, price, imageUrl, quantity, onIncrease, onDecrease, onRemove }: RowProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-3.5 flex items-center gap-3.5
                 border border-[#DEB887]/20 shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 object-cover rounded-lg shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-base text-[#3D1C02] leading-snug truncate">{name}</h3>
        <p className="text-[#A0725A] text-xs mt-0.5">${price.toFixed(2)} each</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button onClick={onDecrease}
          className="w-7 h-7 rounded-full bg-[#F5DEB3] hover:bg-[#DEB887] flex items-center justify-center transition-colors active:scale-90">
          <Minus size={11} strokeWidth={2.5} />
        </button>
        <span className="w-6 text-center font-bold text-[#3D1C02] text-sm tabular-nums">{quantity}</span>
        <button onClick={onIncrease}
          className="w-7 h-7 rounded-full bg-[#F5DEB3] hover:bg-[#DEB887] flex items-center justify-center transition-colors active:scale-90">
          <Plus size={11} strokeWidth={2.5} />
        </button>
      </div>

      <p className="font-bold text-[#3D1C02] text-sm min-w-[52px] text-right tabular-nums shrink-0">
        ${(price * quantity).toFixed(2)}
      </p>
      <button onClick={onRemove}
        className="p-1 text-[#C4A882] hover:text-red-500 transition-colors rounded-md hover:bg-red-50 shrink-0">
        <Trash2 size={15} />
      </button>
    </motion.div>
  );
}

/* ─── Page ── */
export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) return <EmptyCart />;

  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + tax;

  return (
    <div className="min-h-screen bg-[#FDF6EC] pt-20 pb-14 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <Link href="/menu"
              className="inline-flex items-center gap-1 text-[#A0725A] hover:text-[#8B4513] text-xs mb-2 transition-colors">
              <ArrowLeft size={12} /> Continue shopping
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-[#3D1C02]">Your Cart</h1>
          </div>
          <span className="hidden sm:block text-[#A0725A] text-xs bg-[#FFF8F0]
                           border border-[#DEB887]/40 px-3 py-1.5 rounded-full mt-2">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-7 items-start">

          {/* Left — items */}
          <div>
            <div className="space-y-2.5">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <CartItemRow
                    key={item.id}
                    {...item}
                    onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                    onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                    onRemove={() => removeFromCart(item.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
            <div className="mt-4 text-right">
              <button onClick={clearCart}
                className="text-[#C4A882] hover:text-red-500 text-xs transition-colors underline-offset-2 hover:underline">
                Remove all items
              </button>
            </div>
          </div>

          {/* Right — summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#2C1810] text-[#F5DEB3] rounded-2xl p-6 shadow-xl sticky top-20"
          >
            <h2 className="font-display text-xl mb-5 pb-4 border-b border-[#8B4513]/30">
              Order Summary
            </h2>

            {/* Line items */}
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-xs text-[#D2B48C]">
                  <span className="truncate mr-2">
                    {item.name}
                    <span className="text-[#8B6347] ml-1">×{item.quantity}</span>
                  </span>
                  <span className="tabular-nums shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-1.5 py-3.5 border-t border-b border-[#8B4513]/25 text-xs mb-5">
              <div className="flex justify-between text-[#D2B48C]">
                <span>Subtotal</span>
                <span className="tabular-nums">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#D2B48C]">
                <span>Shipping</span>
                <span className="text-green-400 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-[#D2B48C]">
                <span>Tax (8%)</span>
                <span className="tabular-nums">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-6">
              <span className="font-semibold text-sm">Total</span>
              <span className="font-display text-2xl text-[#D2691E] tabular-nums">
                ${orderTotal.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-[#D2691E] hover:bg-[#E07820] text-white
                               py-3 rounded-full font-semibold text-sm tracking-wide
                               transition-all hover:scale-[1.02] active:scale-[0.98]
                               shadow-[0_4px_16px_rgba(210,105,30,0.3)] mb-2.5">
              Proceed to Checkout
            </button>
            <Link href="/menu"
              className="block w-full text-center text-[#D2B48C] hover:text-[#F5DEB3] text-xs py-1.5 transition-colors">
              ← Keep shopping
            </Link>
            <p className="text-center text-[#8B6347] text-[10px] mt-4">
              🔒 Secure checkout · Free returns
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}