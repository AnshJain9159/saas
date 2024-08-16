/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ArrowRight, Image, Video, Zap, Shield, Github, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 bg-white shadow-md">
    <div className="flex items-center space-x-4">
      <Zap className="w-8 h-8 text-blue-600" />
      <span className="text-2xl font-bold text-blue-600">SouL</span>
    </div>
    <div className="flex items-center space-x-4">
      <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
      <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
      <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
      <a href="/sign-in"><button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-100">Sign In</button></a>
      
      <a href="/sign-up"><button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Sign Up</button></a>
    </div>
  </nav>
);

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PricingCard: React.FC<{ title: string; price: number; features: (string | number)[]; }> = ({ title, price, features }) => (
  <div className="p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <h3 className="mb-2 text-2xl font-bold text-gray-800">{title}</h3>
    <p className="mb-4 text-3xl font-bold text-blue-600">${price}<span className="text-lg font-normal text-gray-600">/mo</span></p>
    <ul className="mb-6 space-y-2">
      {features.map((feature: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
        <li key={index} className="flex items-center">
          <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Choose Plan</button>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container px-4 py-8 mx-auto">
        <section className="text-center mb-16">
          <h1 className="mb-4 text-5xl font-bold text-gray-800">Transform Your Media with SouL</h1>
          <p className="mb-8 text-xl text-gray-600">Effortlessly resize images and compress videos for optimal social media performance</p>
          <a href="/sign-up"><button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 inline-flex items-center">
            Start Free Trial <ArrowRight className="ml-2" />
          </button></a>
        </section>
        
        <section id="features" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Powerful Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard 
              icon={<Image className="w-8 h-8 text-blue-600" />}
              title="Smart Image Resizing"
              description="Automatically resize images for any social platform while preserving quality and focal points."
            />
            <FeatureCard 
              icon={<Video className="w-8 h-8 text-blue-600" />}
              title="Efficient Video Compression"
              description="Reduce video file sizes by up to 90% without noticeable quality loss, perfect for quick uploads."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Secure Cloud Processing"
              description="Your media is processed securely in the cloud, ensuring data privacy and fast results."
            />
          </div>
        </section>

        <section id="pricing" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <PricingCard 
              title="Basic"
              price={9.99}
              features={[
                "100 image resizes/mo",
                "10 video compressions/mo",
                "Basic support"
              ]}
            />
            <PricingCard 
              title="Pro"
              price={29.99}
              features={[
                "Unlimited image resizes",
                "50 video compressions/mo",
                "Priority support",
                "API access"
              ]}
            />
            <PricingCard 
              title="Enterprise"
              price={99.99}
              features={[
                "Unlimited everything",
                "24/7 premium support",
                "Custom integrations",
                "Dedicated account manager"
              ]}
            />
          </div>
        </section>

        <section id="contact" className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Ready to optimize your medaia workflow?</h2>
          <p className="mb-8 text-xl text-gray-600">Join thousands of creators and businesses who trust SouL</p>
          <a href="/sign-up"><button className="px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Get Started Now
          </button></a>
        </section>
      </main>
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">SouL</h3>
              <p className="text-gray-400">Transforming media for the digital age</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/AnshJain9159/saas" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://x.com/whoanshjain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ansh-jain-78986b242/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2024 SouL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;