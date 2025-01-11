export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How does QuickFeel work?",
    answer: "QuickFeel uses AI to process your customer feedback and generate reports that highlight trends, sentiment, and key insights. Simply connect your feedback sources, and our AI will automatically analyze and categorize the feedback, providing you with actionable insights in minutes."
  },
  {
    question: "Can I integrate QuickFeel with my existing platforms?",
    answer: "Yes! QuickFeel integrates seamlessly with popular survey tools, social media platforms, and CRM systems. We support integrations with tools like Typeform, SurveyMonkey, Zendesk, and more. Our API also allows for custom integrations if needed."
  },
  {
    question: "What kind of reports can I generate?",
    answer: "You can generate sentiment analysis reports, keyword trend reports, and customer satisfaction trend analysis. Our reports help you understand sentiment changes over time, identify common themes in feedback, and track specific metrics that matter to your business."
  },
  {
    question: "What if I need more than 10,000 analyses per month?",
    answer: "For larger businesses, we offer custom enterprise solutions with unlimited analyses, dedicated support, and custom features. Please contact our sales team to discuss your specific needs and get a customized quote."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. QuickFeel uses enterprise-grade encryption, complies with GDPR and CCPA requirements, and follows industry best practices for data protection. Your data is stored securely and never shared with third parties."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on our Basic and Pro plans. You can try all features risk-free and upgrade or cancel at any time. No credit card is required to start your trial."
  }
]

