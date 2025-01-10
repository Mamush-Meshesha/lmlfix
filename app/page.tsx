import Announce from '@/components/Cards/Anounce';
import LandingContentOne from '@/components/LandingContentOne';

export default function Home() {
  const data = {
    title: "Issues With Your Devices?",
    description: "We Got You Covered!",
  };
  return (
    <div>
      <Announce description={data.description} title={data.title} />
      <LandingContentOne />
    </div>
  );
}
