// client/src/pages/Faq.jsx

export default function Faq() {
  const faqs = [
    {
      question: "What is RePack?",
      answer:
        "RePack is a return-and-reward platform that helps you send back used retail packaging and earn GreenPoints for every return."
    },
    {
      question: "How do I return a package?",
      answer:
        "Go to the Scan Return page, upload a return code or photo of the packaging, and drop it at a partnered location or schedule a pickup."
    },
    {
      question: "Where can I see my rewards?",
      answer:
        "Your GreenPoints and recent activity can be tracked in the User Dashboard under 'Rewards'."
    },
    {
      question: "Is RePack free to use?",
      answer:
        "Yes, it’s completely free for users. Our aim is to encourage sustainable behavior without charging you anything."
    }
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold text-green-600">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}