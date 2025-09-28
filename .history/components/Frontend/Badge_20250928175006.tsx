const Badge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6 backdrop-blur-sm border border-green-200 dark:border-green-700/30">
    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
    {text}
  </div>
);
const PrimaryButton = ({ icon, text }: { icon: string; text: string }) => (
  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
    <span className="mr-2">{icon}</span>
    <span className="relative z-10">{text}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
  </button>
);
const SecondaryButton = () => (
  <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-white bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:bg-white dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
    <span className="mr-3">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </span>
    See How It Works
  </button>
);
const StatCard = ({ value, label, color }: { value: string; label: string; color: string }) => (
  <div className={`text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-${color}-100 dark:border-${color}-800`}>
    <div className={`text-3xl font-bold text-${color}-600 dark:text-${color}-400`}>{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);
const hospitals = [
  { name: "AIIMS", color: "#059669" },
  { name: "Apollo", color: "#2563eb" },
  { name: "Fortis", color: "#dc2626" },
  { name: "Max", color: "#7c3aed" }
];
const SingleImage = ({
  href,
  imgSrc,
  alt,
}: {
  href: string;
  imgSrc: string;
  alt: string;
}) => {
  return (
    <a
      href={href}
      className="group flex items-center justify-center p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-110"
    >
      <img
        src={imgSrc}
        alt={alt}
        className="h-8 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </a>
  );
};

;

const TrustedBy = () => (
  <div>
    <p className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center">
      🏥 Trusted by leading hospitals
    </p>
    <div className="flex items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
      {hospitals.map((hosp, i) => (
        <SingleImage
          key={i}
          href="#"
          imgSrc={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40' fill='${hosp.color}'><text x='10' y='25' font-family='Arial' font-size='12' font-weight='bold'>${hosp.name}</text></svg>`)}`}
          alt={hosp.name}
        />
      ))}
    </div>
  </div>
);




export default Badge ;
export { PrimaryButton, SecondaryButton, StatCard ,TrustedBy, SingleImage};
