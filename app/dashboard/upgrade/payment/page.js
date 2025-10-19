"use client"
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const planDetails = {
    name: "Pro Plan",
    price: "₹450",
    duration: "per month",
    features: [
      "Unlimited PDF uploads",
      "Unlimited AI query",
      "No limit on File-size",
      "Priority customer support",
      "Phone support",
      "Community access"
    ]
  };

  const handlePayPalApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log('Payment completed by', details.payer.name.given_name);
      // Handle successful payment here
      alert('Payment successful!');
    });
  };

  const handlePayPalError = (err) => {
    console.error('PayPal error:', err);
    alert('Payment failed. Please try again.');
  };

  return (
    <PayPalScriptProvider options={{ 
      clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID, 
      currency: "INR",
      intent: "capture"
    }}>
      <div className="min-h-screen bg-white">

        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Let's upgrade to PRO</h1>
        </div>


        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            

            <div className="space-y-8">

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{planDetails.name}</h2>
                    <div className="flex items-baseline mt-2">
                      <span className="text-3xl font-bold text-gray-900">{planDetails.price}</span>
                      <span className="text-gray-600 ml-2">{planDetails.duration}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-medium text-gray-900 mb-3">What's included:</h3>
                    <ul className="space-y-2">
                      {planDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Important:</strong> Your subscription will automatically renew each month unless cancelled. 
                  You can cancel anytime from your account settings. All features are available immediately upon payment confirmation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>
                    . I understand that my subscription will auto-renew monthly and I can cancel anytime.
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-6">

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pro Plan (Monthly)</span>
                    <span className="font-medium text-gray-900">{planDetails.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium text-gray-900">₹0.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-gray-900">{planDetails.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                
                {/* PayPal Button */}
                <div className="space-y-3">
                  {termsAccepted ? (
                    <PayPalButtons
                      style={{ 
                        layout: "vertical",
                        color: "blue",
                        shape: "rect",
                        label: "paypal"
                      }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              amount: {
                                value: "450.00",
                                currency_code: "INR"
                              },
                              description: "Pro Plan Monthly Subscription"
                            }
                          ]
                        });
                      }}
                      onApprove={handlePayPalApprove}
                      onError={handlePayPalError}
                    />
                  ) : (
                    <div className="w-full py-3 px-4 rounded-lg font-medium bg-gray-100 text-gray-400 cursor-not-allowed text-center">
                      PayPal Payment (Accept terms first)
                    </div>
                  )}
                  
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or</span>
                    </div>
                  </div>

                  <button
                    disabled={!termsAccepted}
                    className={`w-full py-3 px-4 rounded-lg font-medium border transition-all duration-200 ${
                      termsAccepted 
                        ? 'border-gray-300 hover:border-gray-400 text-gray-700 bg-white shadow-sm hover:shadow-md' 
                        : 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                    }`}
                  >
                    Pay with Credit Card
                  </button>
                </div>

                {!termsAccepted && (
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Please accept the terms and conditions to continue
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutPage;
