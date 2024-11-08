import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Faq() {
    return(
        <main className="text-center">
            <div className="my-10">
                <h1 className="font-pg text-xl md:text-3xl text-[#4528B6]">FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <Accordion type="single" collapsible className="w-full px-8 md:px-16 lg:px-32">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="font-dhyana text-xs md:text-xl lg:text-2xl text-[#4528B6] font-semibold">What do your service plans include?</AccordionTrigger>
                    <AccordionContent className="font-dhyana text-xs md:text-lg font-medium space-y-1">
                        <p className="text-[#4528B6] text-xs md:text-lg font-semibold">Each of our service plans includes:</p>
                        <ul className="list-disc pl-5 text-[#4528B6] text-[10px] md:text-sm lg:text-lg">
                            <li>A dedicated team including an Email Marketing Specialist, Copywriter, Designer, Email Marketing Technician, and Account Manager.</li>
                            <li>Customer-centered marketing strategy with Customer Lifecycle Flows and Advanced Flows.</li>
                            <li>Regular account audits and ongoing adjustments.</li>
                            <li>Advanced segmentation and targeting.</li>
                            <li>Optimized ROI and engagement.</li>
                            <li>Customizable email and SMS communication from your Email Marketing Specialist.</li>
                            <li>Comprehensive monthly campaign review.</li>
                            <li>Monthly reports that are in-depth with common KPIs we track and prioritize for your account.</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="font-dhyana text-xs md:text-xl lg:text-2xl text-[#4528B6] font-semibold">Which ESPs & eCommerce platforms do you work with?</AccordionTrigger>
                    <AccordionContent className="font-dhyana text-xs md:text-lg font-medium space-y-1">
                        <p className="text-[#4528B6] text-[10px] md:text-sm lg:text-lg">We specialize in Klaviyo, one of the only platforms that allows Cannabis-related marketing. We work with Shopify, Shopify Plus, Magento, WooCommerce, and other eCommerce stores. Our expertise ensures compliance with cannabis industry regulations across all platforms.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-dhyana text-xs md:text-xl lg:text-2xl text-[#4528B6] font-semibold">How many emails come with my plan?</AccordionTrigger>
                    <AccordionContent className="font-dhyana text-xs md:text-lg font-medium space-y-1">
                        <p className="text-[#4528B6] text-[10px] md:text-sm lg:text-lg">We have several plan options based on the number of emails you would like us to create for your strategy each month. Depending on your company & marketing objectives, your Account Executive will help you select the plan that best fits your needs.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="font-dhyana text-xs md:text-xl lg:text-2xl text-[#4528B6] font-semibold">What does onboarding look like?</AccordionTrigger>
                    <AccordionContent className="font-dhyana text-xs md:text-lg font-medium space-y-1">
                        <p className="text-[#4528B6] text-[10px] md:text-sm lg:text-lg">The first thing we do is have you fill out a simple onboarding document. Then, we launch your project with a kick-off call where you meet your Email Marketing Specialist.</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="font-dhyana text-xs md:text-xl lg:text-2xl text-[#4528B6] font-semibold">Is there a minimum commitment required for your services?</AccordionTrigger>
                    <AccordionContent className="font-dhyana text-xs md:text-lg font-medium space-y-1">
                        <p className="text-[#4528B6] text-[10px] md:text-sm lg:text-lg  ">Absolutely not. We don’t believe in tying anyone down. If you stay, it’s because of the excellent service we provide, not a binding contract.</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}