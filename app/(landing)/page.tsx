import { redirect } from "next/navigation";

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import TimeBreakdown from "@/components/TimeBreakdown";
import Vsl from "@/components/Vsl";
import { IoArrowDownOutline } from "react-icons/io5";
import { WaitlistForm } from "@/components/WaitlistForm";

const HomePage: React.FC = async () => {

  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>

      <Section
        id="time-wasted"
        title="How Much Time Are You Wasting on Travel Planning?"
        description="Planning a trip should be exciting, not exhausting. Here's how much time you're likely losing on tedious tasks instead of enjoying the adventure:"
      >
          <TimeBreakdown />
          <p className="flex items-center justify-center gap-2 mt-14">
            <IoArrowDownOutline />
            There&apos;s an easier way
          </p>
        </Section>

        <Section
          id="benefits"
          title="Why Choose Adventurer Guide?"
          description="Let our intelligent assistant save you valuable hours by automating and optimizing your trip planning. Spend more time exploring, less time stressing."
        >
          <Benefits />
        </Section>

        {/* <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section> */}

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

        {/* <Stats /> */}

        <Section
          id="waitlist"
        >
          <WaitlistForm />
        </Section>
        
        <FAQ />

        {/* <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
