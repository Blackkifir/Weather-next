import Image from 'next/image';
import img from '../../img/rain-clouds.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_flex">
          <div className="footer_block-1">
            <span className="footer_text-1">23:00 pm</span>
          </div>
          <Image src={...img} alt="not-found" />
          <div className="footer_block-2">
            <span className="footer_text-2">29°</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
