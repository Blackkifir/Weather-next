import './globals.css';
import Header from '@/components/Header/HeaderW';
import Footer from '@/components/Footer/FooterW';
import Main from '@/components/Layout/LayoutW';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

export default function RootLayout() {
  const { items } = useAppSelector((state: RootState) => state.weatherSlice);
  return (
    <div>
      <Header
        localtime={items.location.localtime}
      />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}
