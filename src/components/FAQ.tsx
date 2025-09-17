import { useState } from "react";

const faqs = [
    { question: "How do I create an account?", answer: "Creating an account is easy! Simply visit our Sign-Up page, enter your details, and follow the instructions to verify your email. Once verified, you can start using the AI assistant immediately.", id: 1 },
    { question: "What features are included in the free plan?", answer: "The free plan provides AI-powered news updates and basic AI assistance to help you stay informed and make better financial decisions.", id: 2 },
    { question: "What are the benefits of the premium plans?", answer: "The premium plan offers: (i) Group Chat – Create a room for up to 4 people to discuss insights. (ii) Voice-Assisted AI News – Get financial news read to you by AI.", id: 3 },
    { question: "Can I switch between plans?", answer: "Of course! You can upgrade or downgrade your plan anytime from the billing section of your account.", id: 4 },
    { question: " Can I cancel my subscription anytime?", answer: "Yes! You can cancel your subscription at any time from your account settings, and you’ll still have access until the end of your billing cycle.", id: 5 }];
function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section className="scroll-smooth py-10 bg-black sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-slate-300 leading-relaxed">
                        Have questions? We've got answers! Here are some of the most common queries.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="cursor-pointer transition-all duration-200 bg-neutral-800 border border-transparent shadow-lg rounded-xl hover:bg-neutral-700">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFAQ(faq.id)}>
                                <span className="text-lg font-semibold text-white"> {faq.question} </span>
                                <svg className={`w-6 h-6 text-gray-400 transform ${openFAQ === faq.id ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openFAQ === faq.id && (
                                <div className="px-4 text-zinc-300 pb-5 sm:px-6 sm:pb-6">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-300 text-base mt-9">
                    Didn’t find the answer you are looking for? &nbsp;
                    <a href="#support" className="font-medium text-slate-200 transition-all duration-200 hover:text-gray-500 focus:text-gray-500 hover:underline">Contact our support</a>
                </p>
            </div>
        </section>
    );
}

export default FAQSection;