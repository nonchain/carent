import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-5 text-black-100 border-t border-gray-100 flex flex-col">
      <div className="px-6 py-10 flex flex-wrap justify-between gap-5 max-md:flex-col sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} />
          <p className="text-base text-gray-700 ">
            Carent <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 px-6 py-10 border-t border-gray-100 flex flex-wrap justify-between gap-5 max-md:flex-col sm:px-16">
        <p className="">@2023 Carent. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
