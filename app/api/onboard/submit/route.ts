import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://salescrm.engageguru.in";
  const API_URL = `${API_BASE}/api/v1/public/onboard`;
  const API_KEY = process.env.NEXT_PUBLIC_ONBOARD_API_KEY || "onb_aca4b1d27c4b77d384a73d4e0b0527e1d11797009c8166fb2ec9474e29acacaa6";

  try {
    const body = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Onboard-Key": API_KEY,
      },
      body: JSON.stringify(body),
    });

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      console.error(`Submit API returned non-JSON (${response.status}):`, text.substring(0, 500));
      return NextResponse.json({ 
        success: false, 
        message: `Backend returned non-JSON response (${response.status})`,
        status: response.status,
        debug: text.substring(0, 100)
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Submission proxy error:", error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || "Connection to backend failed" 
    }, { status: 500 });
  }
}
