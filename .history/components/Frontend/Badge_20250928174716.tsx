const Badge = ({ text }: { text: string }) => (
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6 backdrop-blur-sm border border-green-200 dark:border-green-700/30">
    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
    {text}
  </div>
);

export default Badge;