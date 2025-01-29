
import { NextResponse } from "next/server";
import {client} from "@/sanity/lib/client"; // Update this path as necessary
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { NextApiResponse } from "next";


export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    // Parse the incoming request body
    const { name, email, password } = await req.json();

    // Validate the input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 11);

    // Save user to Sanity
    const result = await client.create({
      _type: "user",
      name,
      email,
      password: hashedPassword,
    });

    // Respond with success
    // return NextResponse.json(
    //   { message: "User created successfully", user: result },
    //   { status: 201 }
    // );


    // Create JWT token
    const token = jwt.sign({ name: name, email:email },"4028390d7f644efc904d598bc8bd9f82e3aeb96bae3eb4f88a926b0ffe4d1b5f" , {
        expiresIn: '1h',
      });
  
      // Set token in HTTP-only cookie
      res.setHeader('Set-Cookie', `authToken=${token}; HttpOnly; Path=/; Max-Age=3600`);
   // Respond with success
   return NextResponse.json(
    { message: "User created successfully", user: result },
    { status: 201 }
  );

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
