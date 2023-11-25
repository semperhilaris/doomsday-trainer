import SEO from '../components/SEO';
import DoomsdayTrainer from '@/components/DoomsdayTrainer';
import Logo from '@/assets/svg/logo.inline.svg';

export default function Home() {
  return (
    <main>
      <div className="bg-ash flex flex-col items-stretch justify-center align-center min-h-screen">
        <Logo className="w-full	max-w-screen-md h-auto mx-auto" />
        <DoomsdayTrainer />
      </div>
    </main>
  );
}

export const Head = () => <SEO />;
