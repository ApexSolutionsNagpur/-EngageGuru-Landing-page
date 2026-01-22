import { NextResponse } from 'next/server';

const calendlyApiKey = process.env.CALENDLY_API_KEY;
const calendlyApiUrl = 'https://api.calendly.com';

export async function GET() {
  if (!calendlyApiKey) {
    console.error('CALENDLY_API_KEY is not set');
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
  }

  try {
    const response = await fetch(`${calendlyApiUrl}/scheduled_events`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${calendlyApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error fetching Calendly events:', errorData);
      return NextResponse.json({ message: 'Error fetching events from Calendly' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error('Error fetching Calendly events:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
