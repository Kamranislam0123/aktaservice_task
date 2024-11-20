import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Get 10% Off Your First Order</h2>
          <p className="text-gray-400 mb-4">
            Let's keep it simple. Only the news & updates you need, and 10% off
            your first order.
          </p>
          <div className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-64 px-4 py-2 text-black rounded-lg"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 text-white font-medium rounded-lg">
              GET YOUR COUPON
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <div className="text-5xl font-bold text-center mb-2">F</div>
            <p className="text-gray-400">
              ForChics is committed to creating thoughtful, modern haircare
              treatments that serve to empower and embrace natural beauty.
            </p>
          </div>
          {/* Shop Concerns */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop Concerns</h3>
            <ul className="space-y-2">
              <li>Eyelash Enhancing Serum</li>
              <li>Eyebrow Enhancing Serum</li>
              <li>Better Than Falsies Mascara</li>
              <li>Bundles</li>
            </ul>
          </div>
          {/* Check Us Out */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Check us out!</h3>
            <ul className="space-y-2">
              <li>Our Story</li>
              <li>Reviews</li>
              <li>Blog</li>
              <li>Content Creator Program</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Need a hand?</h3>
            <ul className="space-y-2">
              <li>Growth Guarantee</li>
              <li>Track Your Order</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social ForChics</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg">
                <Facebook />
              </a>

              <a href="#" className="bg-gray-800 p-2 rounded-lg">
                <Instagram />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg">
                <Youtube />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Copyright 2024 • ForChics</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="pi-american_express"
              viewBox="0 0 38 24"
              width="38"
              height="24"
            >
              <title id="pi-american_express">American Express</title>
              <path
                fill="#000"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                opacity=".07"
              ></path>
              <path
                fill="#006FCF"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
              ></path>
              <path
                fill="#FFF"
                d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
              ></path>
              <path
                fill="#006FCF"
                d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
              ></path>
              <path
                fill="#006FCF"
                d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
              ></path>
              <path
                fill="#FFF"
                d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
              ></path>
              <path
                fill="#006FCF"
                d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
              ></path>
              <path
                fill="#006FCF"
                d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
              ></path>
            </svg>

            <svg
              viewBox="0 0 38 24"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              width="38"
              height="24"
              aria-labelledby="pi-diners_club"
            >
              <title id="pi-diners_club">Diners Club</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                fill="#fff"
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
              ></path>
              <path
                d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                fill="#3086C8"
              ></path>
            </svg>
            <svg
              viewBox="0 0 38 24"
              width="38"
              height="24"
              role="img"
              aria-labelledby="pi-discover"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="pi-discover">Discover</title>
              <path
                fill="#000"
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
              ></path>
              <path
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                fill="#fff"
              ></path>
              <path
                d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                fill="#231F20"
              ></path>
              <path
                d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                fill="url(#pi-paint0_linear)"
              ></path>
              <path
                opacity=".65"
                d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                fill="url(#pi-paint1_linear)"
              ></path>
              <path
                d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                fill="#231F20"
              ></path>
              <path
                d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                fill="#231F20"
              ></path>
              <path
                d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                fill="#F48120"
              ></path>
              <defs>
                <linearGradient
                  id="pi-paint0_linear"
                  x1="21.657"
                  y1="12.275"
                  x2="19.632"
                  y2="9.104"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F89F20"></stop>
                  <stop offset=".25" stopColor="#F79A20"></stop>
                  <stop offset=".533" stopColor="#F68D20"></stop>
                  <stop offset=".62" stopColor="#F58720"></stop>
                  <stop offset=".723" stopColor="#F48120"></stop>
                  <stop offset="1" stopColor="#F37521"></stop>
                </linearGradient>
                <linearGradient
                  id="pi-paint1_linear"
                  x1="21.338"
                  y1="12.232"
                  x2="18.378"
                  y2="6.446"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F58720"></stop>
                  <stop offset=".359" stopColor="#E16F27"></stop>
                  <stop offset=".703" stopColor="#D4602C"></stop>
                  <stop offset=".982" stopColor="#D05B2E"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="38"
              height="24"
              role="img"
              aria-labelledby="pi-metapay"
              viewBox="0 0 38 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="pi-metapay">Meta Pay</title>
              <path
                opacity=".07"
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                fill="#000"
              ></path>
              <path
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                fill="#fff"
              ></path>
              <path
                d="M4.983 12.986c0 .348.076.614.176.776a.6.6 0 00.524.3c.257 0 .491-.063.943-.688.362-.5.788-1.204 1.076-1.645l.486-.747c.337-.518.728-1.095 1.176-1.486.366-.319.76-.496 1.158-.496.667 0 1.302.386 1.788 1.111.532.794.79 1.793.79 2.825 0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688v-.981c.558 0 .697-.513.697-1.1 0-.836-.195-1.764-.624-2.427-.305-.47-.7-.757-1.134-.757-.47 0-.848.354-1.274.986-.226.336-.457.745-.718 1.207l-.287.508c-.576 1.02-.722 1.254-1.01 1.637-.504.672-.935.927-1.502.927-.674 0-1.1-.291-1.363-.73C4.106 13.956 4 13.486 4 12.95l.983.035z"
                fill="#0081FB"
              ></path>
              <path
                d="M4.775 10.18C5.225 9.486 5.875 9 6.622 9c.432 0 .861.128 1.31.494.49.4 1.013 1.06 1.665 2.146l.234.39c.565.94.886 1.424 1.074 1.652.242.293.411.38.631.38.558 0 .697-.512.697-1.099l.867-.027c0 .613-.12 1.064-.326 1.42-.2.345-.587.688-1.238.688-.405 0-.764-.088-1.16-.462-.306-.287-.663-.798-.937-1.257l-.816-1.363c-.41-.684-.785-1.194-1.003-1.425-.234-.249-.534-.549-1.014-.549-.388 0-.718.273-.994.69l-.837-.498z"
                fill="url(#pi-paint0_linear_1164_3)"
              ></path>
              <path
                d="M6.606 9.988c-.388 0-.718.273-.994.69-.39.588-.629 1.466-.629 2.308 0 .348.076.614.176.776l-.838.552C4.106 13.956 4 13.486 4 12.95c0-.973.267-1.987.775-2.77C5.225 9.485 5.875 9 6.622 9l-.016.988z"
                fill="url(#pi-paint1_linear_1164_3)"
              ></path>
              <path
                d="M15.01 9.191h1.138l1.933 3.498 1.934-3.498h1.112v5.747h-.928v-4.405l-1.695 3.05h-.87l-1.696-3.05v4.405h-.927V9.191zm9.023 2.143c-.665 0-1.066.5-1.162 1.12h2.258c-.046-.638-.415-1.12-1.096-1.12zm-2.081 1.474c0-1.305.843-2.254 2.097-2.254 1.234 0 1.971.937 1.971 2.323v.255h-3.148c.111.674.559 1.129 1.28 1.129.576 0 .936-.176 1.277-.497l.493.603c-.465.427-1.055.674-1.803.674-1.358 0-2.167-.99-2.167-2.233zm5.193-1.392h-.854v-.76h.854V9.402h.895v1.256h1.297v.76H28.04v1.924c0 .657.21.89.726.89.236 0 .371-.02.57-.053v.752c-.248.07-.485.102-.742.102-.966 0-1.45-.528-1.45-1.584v-2.032zm5.96.739a1.207 1.207 0 00-1.17-.788c-.766 0-1.256.543-1.256 1.428 0 .863.451 1.433 1.22 1.433.603 0 1.034-.351 1.206-.788v-1.285zM34 14.938h-.878v-.6c-.246.353-.693.703-1.417.703-1.164 0-1.941-.975-1.941-2.246 0-1.283.796-2.241 1.99-2.241.591 0 1.055.236 1.368.653v-.55H34v4.281z"
                fill="#000000"
              ></path>
              <defs>
                <linearGradient
                  id="pi-paint0_linear_1164_3"
                  x1="5.93"
                  y1="12.703"
                  x2="12.196"
                  y2="13.019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0064E1"></stop>
                  <stop offset=".4" stopColor="#0064E1"></stop>
                  <stop offset=".83" stopColor="#0073EE"></stop>
                  <stop offset="1" stopColor="#0082FB"></stop>
                </linearGradient>
                <linearGradient
                  id="pi-paint1_linear_1164_3"
                  x1="5.424"
                  y1="13.399"
                  x2="5.424"
                  y2="11.089"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0082FB"></stop>
                  <stop offset="1" stopColor="#0064E0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 38 24"
              width="38"
              height="24"
              aria-labelledby="pi-google_pay"
            >
              <title id="pi-google_pay">Google Pay</title>
              <path
                d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                fill="#000"
                opacity=".07"
              ></path>
              <path
                d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                fill="#FFF"
              ></path>
              <path
                d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z"
                fill="#5F6368"
              ></path>
              <path
                d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z"
                fill="#4285F4"
              ></path>
              <path
                d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z"
                fill="#34A853"
              ></path>
              <path
                d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z"
                fill="#FBBC04"
              ></path>
              <path
                d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z"
                fill="#EA4335"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
