"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarBase logoSrc="/images/logo.svg" logoAlt="xeven logo" leftButtonText="Menu" rightButtonText="Contact" onLeftButtonClick={() => {}} onRightButtonClick={() => {}} className="bg-transparent" />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero title="Welcome to xeven" subtitle="Your guide to a no-stress t-shirt buying experience" contractAddress="0x123456789" copyButtonText="Copy Code" copiedText="Code Copied!" />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout title="Discover xeven" descriptions={["Undeniably stylish t-shirts.", "Crafted for comfort.", "Effortless buying experience."]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{ title: "Step 1", description: "Select your size", image: "/images/placeholder1.avif", position: "left", isCenter: false }, { title: "Step 2", description: "Choose your color", image: "/images/placeholder2.avif", position: "center", isCenter: true }, { title: "Step 3", description: "Add to cart", image: "/images/placeholder3.avif", position: "right", isCenter: false }]} />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics title="Token Stats" description="Grab your xeven user token and enjoy exclusive benefits." tokenData={[{ value: "200", description: "Total Users" }, { value: "10K", description: "Tokens Minted" }, { value: "50%", description: "Community Owned" }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="xeven Logo" logoText="xeven" className="bg-transparent" />
      </div>
    </SiteThemeProvider>
  );
}