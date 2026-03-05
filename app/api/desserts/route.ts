import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, description, price, imageUrl } = await req.json();

    const dessert = await prisma.dessert.create({
      data: {
        name,
        description,
        price,
        imageUrl,
      },
    });

    return NextResponse.json(dessert);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create dessert" }, { status: 500 });
  }
}