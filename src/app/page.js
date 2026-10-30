import SiteHeader from "../components/site/SiteHeader";
import Hero from "../components/site/Hero";
import Studio from "../components/site/Studio";
import StudioBand from "../components/site/StudioBand";
import Work from "../components/site/Work";
import SiteFootage from "../components/site/SiteFootage";
import Approach from "../components/site/Approach";
import Finishes from "../components/site/Finishes";
import Partners from "../components/site/Partners";
import ClientWords from "../components/site/ClientWords";
import Contact from "../components/site/Contact";
import SiteFooter from "../components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <a
        href="#studio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-[13px] focus:text-cream"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Studio />
        <StudioBand />
        <Work />
        <SiteFootage />
        <Approach />
        <Finishes />
        <Partners />
        <ClientWords />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
