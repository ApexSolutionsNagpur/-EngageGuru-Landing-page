# Calendly Integration Setup

To complete the Calendly integration, please follow these steps:

## 1. Install Dependencies

You need to install the `react-calendly` package. Open your terminal and run the following command:

```bash
npm install react-calendly
```

## 2. Set up Environment Variables

Create a file named `.env.local` in the root of your project (if it doesn't exist already) and add the following environment variables:

```
NEXT_PUBLIC_CALENDLY_EVENT_URL=https://calendly.com/your-event-url
CALENDLY_API_KEY=your_calendly_api_key
CALENDLY_WEBHOOK_SECRET=your_calendly_webhook_secret
```

Replace the placeholder values with your actual Calendly information:
- `https://calendly.com/your-event-url`: The URL of your Calendly event.
- `your_calendly_api_key`: Your Calendly personal access token.
- `your_calendly_webhook_secret`: The secret key for your Calendly webhook.

## 3. Configure Webhook in Calendly

1. Go to your Calendly account's [Integrations page](https://calendly.com/integrations).
2. Click on "API & Webhooks".
3. Go to the "Webhooks" tab and click "Add Webhook".
4. For the "Endpoint URL", enter `https://your-domain.com/api/calendly`. Replace `your-domain.com` with your actual domain.
5. For the "Events", select "Invitee Created" and "Invitee Canceled".
6. Use the same secret you defined in `CALENDLY_WEBHOOK_SECRET` for the "Signing Key".

After completing these steps, the Calendly integration should be fully functional.
