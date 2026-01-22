// app/booking/page.tsx
import CalendlyInline from '@/components/CalendlyInline';

export default function BookingPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 
                     "https://calendly.com/apexsolutionsnagpur/30min";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a 30-minute meeting with our team to discuss your project requirements.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
          <CalendlyInline 
            url={calendlyUrl}
            pageSettings={{
              primaryColor: '2563eb',
              textColor: '1f2937'
            }}
          />
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>You will receive a confirmation email with meeting details.</p>
          <p className="mt-1">Need help? Contact us at contact@apexsolutionsnagpur.com</p>
        </div>
      </div>
    </div>
  );
}