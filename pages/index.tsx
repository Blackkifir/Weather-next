import './globals.css';
import Header from '@/components/Header/HeaderW';
import Footer from '@/components/Footer/FooterW';
import Main from '@/components/Layout/LayoutW';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}
