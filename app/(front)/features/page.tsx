import React from "react";
import {
  Stethoscope,
  ShieldCheck,
  TabletSmartphone,
  Microscope,
  Thermometer,
  Syringe,
  FileText,
  MapPin,
  Cloud,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      title: "Online Consultations",
      desc: "Consult top doctors from the comfort of your home.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Secure Medical Records",
      desc: "Encrypted storage for your medical history and reports.",
    },
    {
      icon: <TabletSmartphone className="w-8 h-8 text-white" />,
      title: "Mobile Access",
      desc: "Get healthcare support anytime via our mobile app.",
    },
    {
      icon: <Microscope className="w-8 h-8 text-white" />,
      title: "Lab Test Integration",
      desc: "Book tests and receive reports within the platform.",
    },
    {
      icon: <Thermometer className="w-8 h-8 text-white" />,
      title: "Symptom Checker",
      desc: "AI-powered tool to check symptoms and get guidance.",
    },
    {
      icon: <Syringe className="w-8 h-8 text-white" />,
      title: "Vaccination Tracking",
      desc: "Track your vaccine doses and receive reminders.",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Digital Prescriptions",
      desc: "Receive and manage prescriptions digitally.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Nearest Clinics",
      desc: "Locate nearby clinics and book appointments instantly.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Cloud Synced Health Data",
      desc: "All your health data synced and backed up securely.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          App Features
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the powerful features designed to simplify your healthcare journey
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-gray-700 hover:border-blue-500"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FeaturesPage = () => (
  <div className="min-h-screen bg-gray-900">
    <Features />
  </div>
);

export default FeaturesPage;
