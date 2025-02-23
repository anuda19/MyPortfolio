import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function POST(req: Request) {
  let response = {
    error: false,
    message: "",
  };
  try {
    const body = await req.json();
    const { first_name, last_name, email, message } = body;

    const contact = await prisma.Client.create({
      data: {
        first_name,
        last_name,
        email,
        message,
      },
    });

    if(contact) {
      response.error = false;
      response.message = "Message sent successfully";
    }
  } catch (error) {
    console.error(error);
    response.error = true;
    response.message = error.message;
  }
  return NextResponse.json(response);
}
