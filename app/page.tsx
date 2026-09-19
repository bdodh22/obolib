import LocalizedHomePage, { generateMetadata as localizedGenerateMetadata } from './[locale]/page';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const generateMetadata = () => localizedGenerateMetadata({ params: { locale: 'en' } });

export default function RootPage() {
  return (
    <div data-locale="en" className="w-full flex-1 flex flex-col">
      <Navbar locale="en" />
      <main className="flex-1 pt-16">
        <LocalizedHomePage params={{ locale: 'en' }} />
      </main>
      <Footer locale="en" />
    </div>
  );
}
