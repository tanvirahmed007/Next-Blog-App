import { NextResponse } from "next/server";
import { query } from "@/lib/db";

// GET all users (for testing/debugging)
export async function GET() {
  try {
    const result = await query('SELECT user_id, password FROM public."Login"');
    console.log(result.rows);
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// POST for login authentication
export async function POST(request) {
  try {
    console.log("Login attempt received");
    const { userCode, password } = await request.json();

    if (!userCode || !password) {
      return NextResponse.json(
        { error: "User code and password are required" },
        { status: 400 }
      );
    }

    // Query the database to check if user exists with matching credentials
    const result = await query(
      'SELECT user_id FROM public."Login" WHERE user_id = $1 AND password = $2',
      [userCode, password]
    );

    if (result.rows.length > 0) {
      // User authenticated successfully
      return NextResponse.json(
        { 
          success: true, 
          message: "Login successful",
          user: result.rows[0] 
        },
        { status: 200 }
      );
    } else {
      // Authentication failed
      return NextResponse.json(
        { success: false, error: "Invalid user code or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}