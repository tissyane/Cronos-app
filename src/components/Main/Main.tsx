import HubBanner from "./HubBanner/HubBanner";
import Newsletter from "./Newsletter";
import ServicesBanner from "./ServicesBanner";
import WelcomeBanner from "./WelcomeBanner";

export default function Main() {
  return (
    <>
      <WelcomeBanner />
      <ServicesBanner />
      <HubBanner />
      <Newsletter />
    </>
  );
}
