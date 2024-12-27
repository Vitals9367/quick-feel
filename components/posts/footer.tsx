import { EXAMPLE_PATH } from "@/lib/constants";
import Container from "../Container";
import JoinWaitlistButton from "../buttons/JoinWaitlistButton";
import { Button } from "../ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 relative text-white">
      <div className="w-full h-full absolute inset-0 -z-10 h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/waitlist-background.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center relative">
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-4xl lg:text-[2.5rem] font-bold text-[var(--primary)] tracking-tighter leading-tight text-center lg:text-left mb-10 lg:pr-4">
              Become a Founding Member of Adventurer Guide!
            </h3>
            <p>Join the waitlist today and enjoy exclusive lifetime benefits:</p>
            <ul className="list-disc text-left mb-6 ml-4 mt-2">
                <li><span className="font-bold">Locked-in Discounts:</span> Get special pricing for life, only available to founding members.</li>
                <li><span className="font-bold">Premium Support:</span> Access priority customer support whenever you need it.</li>
                <li><span className="font-bold">Early Access to New Features:</span> Be the first to try out new tools and enhancements before anyone else.</li>
                <li><span className="font-bold">Exclusive Community:</span> Join a select group of passionate adventurers shaping the future of travel.</li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 font-[1.1rem]">
            <JoinWaitlistButton text="Become a Founding Member!" />
            <Button>
              <Link href="/#features">Explore Features</Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
