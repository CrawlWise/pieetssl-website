// app/layout.tsx
import React from 'react'
import Script from 'next/script'
import Header from "@/components/Header/Header";
import HeaderInfo from "@/components/Header/HeaderInfo";
import Footer from '@/components/Footer/Footer';
import "../globals.css"
import AOSInitializer  from '../../components/js/AOSInitializer';
export const metadata = {
  title: 'Pieets Senior Living',
  description: 'The best Pieets Senior Living Website',
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="font-WorkSans">
      <body>
        <div className="headerinfo">
          <HeaderInfo />
        </div>

        <div className="main-header">
          <Header />
        </div>
           <AOSInitializer />
        <main>{children}</main>

        <div className="footer">
          <Footer />
        </div>

        {/* Tawk.to Chat Script */}
        <Script
          id="tawkto-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                  s1.async=true;
                  s1.src='https://embed.tawk.to/6844a4c3490708190e501846/1it6277om';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
