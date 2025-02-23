import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req: Request) {
  let response = {
    error: false,
    message: "",
  };
  try {
    const body = await req.json();
    const { email } = body;

    const existingRequest = await prisma.OfferrRequest.findUnique({
      where: { email },
    });

    if (existingRequest) {
      return NextResponse.json({
        error: true,
        message: "Email already exists.",
      });
    }

    const requestEmail = await prisma.OfferrRequest.create({
      data: {
        email,
      },
    });

    if (requestEmail) {
      response.error = false;
      response.message = "Message sent successfully";
    }
  } catch (error) {
    response.error = true;
    response.message = error.message;
  }
  return NextResponse.json(response);
}
