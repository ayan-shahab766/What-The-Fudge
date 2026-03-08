"use client";

import { motion } from "framer-motion";
import AddToCartButton from "@/app/components/AddToCartButton";

interface DessertCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function DessertCard({ id, name, description, price, imageUrl }: DessertCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-[#FFF8F0] rounded-xl overflow-hidden flex flex-col
                 shadow-[0_2px_12px_rgba(44,24,16,0.07)]
                 hover:shadow-[0_8px_32px_rgba(44,24,16,0.14)]
                 border border-[#DEB887]/20 transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44 shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E07]/50 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Hover price badge */}
        <div className="absolute bottom-2.5 left-2.5
                        translate-y-1.5 opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-300">
          <span className="bg-[#D2691E] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-display text-lg text-[#3D1C02] leading-snug">{name}</h3>
        <p className="text-[#8B6347] text-xs leading-relaxed line-clamp-2 flex-1">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2.5 border-t border-[#DEB887]/20 mt-auto">
          <span className="text-[#8B4513] font-bold text-base">${price.toFixed(2)}</span>
          <AddToCartButton id={id} name={name} price={price} imageUrl={imageUrl} />
        </div>
      </div>

      {/* Left accent bar */}
      <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#D2691E]
                       scale-y-0 group-hover:scale-y-100
                       transition-transform duration-300 origin-bottom rounded-r" />
    </motion.article>
  );
}