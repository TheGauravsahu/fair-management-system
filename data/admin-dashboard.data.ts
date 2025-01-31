"use server";
import { prisma } from "@/lib/prisma";

export async function getTotalUsers() {
  return await prisma.user.count();
}

export async function getTotalEvents() {
  return await prisma.event.count();
}

export async function getTotalRevenue() {
  const events = await prisma.event.findMany({
    where: {
      status: "active",
    },
    select: {
      price: true,
    },
  });

  return events.reduce((acc, event) => acc + event.price, 0);
}

export async function getActiveEvents() {
  return await prisma.event.count({
    where: {
      status: "active",
      endDate: {
        gte: new Date(),
      },
    },
  });
}


