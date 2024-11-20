export default function Footer() {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Get 10% Off Your First Order</h2>
            <p className="text-gray-400 mb-4">
              Let's keep it simple. Only the news & updates you need, and 10% off your first order.
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
              <div className="text-5xl font-bold mb-2">F</div>
              <p className="text-gray-400">
                ForChics is committed to creating thoughtful, modern haircare treatments that serve
                to empower and embrace natural beauty.
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
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-lg">
                  <i className="fab fa-snapchat"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© Copyright 2024 • ForChics</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <img src="/images/amex.png" alt="Amex" className="w-8" />
              <img src="/images/apple-pay.png" alt="Apple Pay" className="w-8" />
              <img src="/images/visa.png" alt="Visa" className="w-8" />
              <img src="/images/mastercard.png" alt="Mastercard" className="w-8" />
              <img src="/images/paypal.png" alt="Paypal" className="w-8" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  