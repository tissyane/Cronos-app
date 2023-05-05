import HubBanner from "./HubBanner/HubBanner";
import ServicesBanner from "./ServicesBanner";
import WelcomeBanner from "./WelcomeBanner";

export default function Main() {
  return (
    <>
      <WelcomeBanner />
      <ServicesBanner />
      <HubBanner />
    </>
  );
}
