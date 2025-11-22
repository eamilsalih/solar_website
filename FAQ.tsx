
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does your AI qualification process work?',
      answer: 'Our AI analyzes over 50 data points including property ownership, credit indicators, roof suitability, energy usage patterns, and behavioral signals to determine if a homeowner is genuinely ready to invest in solar. We only deliver leads that score above our strict qualification threshold.'
    },
    {
      question: 'What makes your leads better than other solar lead providers?',
      answer: 'Unlike traditional lead gen companies that sell the same lead to multiple buyers, our leads are exclusive to you. Plus, our AI pre-qualification eliminates tire-kickers, renters, and people with poor credit—saving your sales team countless hours of wasted effort.'
    },
    {
      question: 'How quickly will I receive leads after signing up?',
      answer: 'Most clients receive their first qualified leads within 24-48 hours of account setup. Our AI works 24/7 to identify and qualify prospects in your target areas, delivering them to your dashboard or CRM in real-time as they become available.'
    },
    {
      question: 'Can I customize the qualification criteria for my business?',
      answer: 'Absolutely! You can set specific parameters including geographic areas, minimum credit scores, property values, roof conditions, current energy bills, and more. Our AI adapts to your exact requirements to ensure every lead matches your ideal customer profile.'
    },
    {
      question: 'What if I receive a lead that doesn\'t meet my criteria?',
      answer: 'We stand behind our quality guarantee. If any lead doesn\'t meet the criteria you specified, simply report it within 48 hours and we\'ll replace it with a qualified lead at no additional cost. Your satisfaction is our priority.'
    },
    {
      question: 'Do you integrate with CRM systems?',
      answer: 'Yes! We integrate seamlessly with popular CRM platforms including Salesforce, HubSpot, Zoho, and many others. Leads can be automatically pushed to your existing workflow, or you can access them through our dashboard and export as needed.'
    },
    {
      question: 'Are the leads exclusive or shared with other solar companies?',
      answer: 'All leads are 100% exclusive to your company. We never sell the same lead to multiple solar installers. When you receive a lead, you\'re the only one contacting that prospect, giving you the best chance to close the deal.'
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Our clients typically see 3-5x ROI within the first 90 days. With conversion rates averaging 25-30% (compared to 8-12% for traditional leads) and lower cost per acquisition, most solar companies recover their investment quickly and scale profitably.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider whitespace-nowrap">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI-powered solar lead generation service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-2xl text-amber-600 flex-shrink-0`}></i>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
