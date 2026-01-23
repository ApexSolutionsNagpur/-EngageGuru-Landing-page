import { NextResponse } from 'next/server';

export async function GET() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://salescrm.engageguru.in";
  const API_URL = `${API_BASE}/api/v1/public/onboard/industries`;
  const API_KEY = process.env.NEXT_PUBLIC_ONBOARD_API_KEY || "onb_aca4b1d27c4b77d384a73d4e0b0527e1d11797009c8166fb2ec9474e29acacaa6";

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "X-Onboard-Key": API_KEY,
      },
      next: { revalidate: 60 } // Cache for 1 minute
    });

    const contentType = response.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } else {
      const text = await response.text();
      console.error(`Industries API returned non-JSON (${response.status}):`, text.substring(0, 500));
      return NextResponse.json({ 
        success: false, 
        message: `Backend returned non-JSON response (${response.status})`,
        status: response.status
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Industries proxy error:", error);
    return NextResponse.json({ 
      success: false, 
      message: error.message || "Connection to backend failed" 
    }, { status: 500 });
  }
}
