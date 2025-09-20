"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "blur" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal logoSrc="/images/logo.svg" buttonText="Get Started" className="text-white" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to CrimsonGlass" subtitle="Experience the Future of SaaS" />
      </div>

      <div id="about" data-section="about">
        <SocialsAbout title="About CrimsonGlass" descriptions={["We provide innovative solutions that enhance productivity and create value.", "Our team is dedicated to making your life easier through technology."]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy" steps={[
          { title: "Step 1", description: "Visit our website.", image: "", position: "left", isCenter: false },
          { title: "Step 2", description: "Choose your plan.", image: "", position: "center", isCenter: true },
          { title: "Step 3", description: "Complete your purchase.", image: "", position: "right", isCenter: false },
        ]} />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics title="Tokenomics Overview" description="Our token distribution and usage for sustainable growth." cardItems={[
          { id: 1, title: "Supply", description: "1 Million" },
          { id: 2, title: "Liquidity", description: "500k Locked" },
          { id: 3, title: "Tax", description: "2% on transactions" }
        ]} />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo-dot.svg" logoText="CrimsonGlass" items={[
          { label: "Privacy Policy", onClick: () => console.log('Privacy policy clicked') },
          { label: "Terms of Service", onClick: () => console.log('Terms of service clicked') },
          { label: "Contact Us", onClick: () => console.log('Contact clicked') }
        ]} className="bg-gradient-to-r from-red-500 to-red-700" />
      </div>
    </SiteThemeProvider>
  );
}
