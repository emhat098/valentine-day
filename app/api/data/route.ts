import connect from "@/db/index";
import Data from "@/models/Data";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connect();
    const data: any = await req.json();
    const result = await Data.create(data);
    return NextResponse.json(
      {
        message: "Create data success",
        data: result,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong.",
        data: error,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connect();
    const result = await Data.find({});
    return NextResponse.json(
      {
        message: "Get data success",
        data: result,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong.",
        data: error,
      },
      { status: 500 }
    );
  }
}
