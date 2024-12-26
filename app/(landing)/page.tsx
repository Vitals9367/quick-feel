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
        title="Where Does Your Time Go?"
        description="Discover how much time you're losing on planning instead of exploring during each trip."
      >
          <TimeBreakdown />
          <p className="flex items-center justify-center gap-2 mt-14">
            <IoArrowDownOutline />
            There&apos;s an easier way
          </p>
        </Section>

        <Section
          id="benefits"
          title="Make Travel Easy and Enjoyable"
          description="Forget the stress of planning. Unlock expertly curated itineraries, insider tips, and worry-free travel experiences customized just for you."
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
