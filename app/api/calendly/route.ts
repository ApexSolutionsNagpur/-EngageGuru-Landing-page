import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const calendlyWebhookSecret = process.env.CALENDLY_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  if (!calendlyWebhookSecret) {
    console.error('CALENDLY_WEBHOOK_SECRET is not set');
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
  }

  const rawBody = await req.text();
  const signatureHeader = req.headers.get('calendly-webhook-signature');

  if (!signatureHeader) {
    return NextResponse.json({ message: 'Signature header missing' }, { status: 401 });
  }

  try {
    const { t, signature } = signatureHeader.split(',').reduce((acc, part) => {
      const [key, value] = part.trim().split('=');
      acc[key] = value;
      return acc;
    }, {} as { [key: string]: string });

    if (!t || !signature) {
      return NextResponse.json({ message: 'Invalid signature format' }, { status: 401 });
    }

    const signedPayload = t + '.' + rawBody;
    const expectedSignature = crypto
      .createHmac('sha256', calendlyWebhookSecret)
      .update(signedPayload, 'utf8')
      .digest('hex');

    if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      const event = JSON.parse(rawBody);

      // Process the event
      // For example, save to database
      console.log('Calendly event received:', event);
      
      // Add your business logic here

      return NextResponse.json({ message: 'Webhook received' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error verifying Calendly webhook:', error);
    return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
  }
}
