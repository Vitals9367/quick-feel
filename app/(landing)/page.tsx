import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";

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
import TimeWasted from "@/components/TimeWasted";
import Vsl from "@/components/Vsl";
import { IoArrowDownOutline } from "react-icons/io5";

const HomePage: React.FC = async () => {

  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>

        <Section
          id="time-wasted"
          title="Where Does Your Time Go?"
          description="See How Much Time You’re Spending on Non-Adventuring Tasks"
        >
          <TimeWasted />
          <p className="flex items-center justify-center gap-2">
            <IoArrowDownOutline />
            There's an easier way
          </p>
        </Section>

        <Section
          id="benefits"
          title="Benefits"
          description="Simple, transparent pricing. No surprises."
        >
          <Benefits />
        </Section>

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        {/* <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section> */}

        <FAQ />

        {/* <Stats /> */}
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
