import { BlurryCircle } from "@/components/blurry-circle";
import { Testimonials } from "@/components/testimonials";
import { getStaticParams } from "@/locales/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@midday/ui/accordion";
import { Button } from "@midday/ui/button";
import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Midday",
};

export function generateStaticParams() {
  return getStaticParams();
}

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  return (
    <>
      <div className="container max-w-[800px]">
        <div className="min-h-[950px]">
          <h1 className="mt-24 font-medium text-center text-5xl mb-2">
            What it cost.
          </h1>

          <div className="flex items-center flex-col text-center relative">
            <h3 className="md:text-[344px] text-[244px] leading-[244px] font-medium md:leading-[344px]">
              30
            </h3>

            <p className="font-medium text-xl mt-4">
              Claim $30/mo early adopter plan
            </p>

            <span className="mt-2 text-[#878787]">Free while in beta</span>

            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <Link href="/talk-to-us">
                  <Button
                    variant="outline"
                    className="border border-primary h-12 px-6"
                  >
                    Talk to us
                  </Button>
                </Link>

                <a href="https://app.midday.ai">
                  <Button className="h-12 px-5">Get Early Access</Button>
                </a>
              </div>
            </div>

            <BlurryCircle className="absolute -top-[50px] right-[0px] bg-[#3633D0] bg-opacity-10 dark:bg-opacity-5" />
            <BlurryCircle className="absolute bottom-[160px] left-6 bg-[#A1F5CD] bg-opacity-10 dark:bg-opacity-5" />
            <BlurryCircle className="absolute bottom-0 right-[150px] bg-[#FFECBB] bg-opacity-10 dark:bg-opacity-5" />
          </div>
        </div>

        <div className="-mt-[200px]">
          <div className="text-center">
            <h4 className="text-4xl">Frequently asked questions</h4>
          </div>

          <Accordion type="single" collapsible className="w-full mt-10 mb-48">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="truncate">Can I self-host Midday.ai?</span>
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. We are currently writing the documentation for this.
                You can find the repository{" "}
                <a href="https://git.new/midday" className="underline">
                  here
                </a>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I run Midday.ai locally?</AccordionTrigger>
              <AccordionContent>
                Yes. We are currently writing documentation for this. You can
                find the repository{" "}
                <a href="https://git.new/midday" className="underline">
                  here
                </a>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is Midday.ai open source?</AccordionTrigger>
              <AccordionContent>
                Yes. You can find the repository{" "}
                <a href="https://git.new/midday" className="underline">
                  here
                </a>
                .
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <span className="truncate max-w-[300px] md:max-w-full">
                  What are your data privacy & security policies?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                We take data privacy very seriously and implement
                state-of-the-art security measures to protect your data. We are
                also actively working towards SOC 2 Type II compliance. We
                encrypt data at rest, and sensitive data on row level. We also
                support 2FA authentication.
                <Link href="/privacy">midday.co/privacy</Link>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <span className="truncate max-w-[300px] md:max-w-full">
                  Can I cancel my subscription at any time?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can cancel your subscription at any time. If you cancel
                your subscription, you will still be able to use Midday until
                the end of your billing period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                <span className="truncate max-w-[300px] md:max-w-full">
                  I have more questions about Midday.ai. How can I get in touch?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Sure, we're happy to answer any questions you might have. Just
                send us an email at{" "}
                <a href="mailto:support@midday.ai">support@midday.ai</a> and
                we'll get back to you as soon as possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Testimonials />
    </>
  );
}
