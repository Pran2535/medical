 const BackgroundBlobs = () => (
  <div className="absolute top-0 left-0 w-full h-full">
    {[
      { className: "top-20 left-10 w-72 h-72 bg-green-300" },
      { className: "top-40 right-10 w-96 h-96 bg-blue-300 animation-delay-2000" },
      { className: "bottom-20 left-20 w-80 h-80 bg-teal-300 animation-delay-4000" }
    ].map((blob, i) => (
      <div
        key={i}
        className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse ${blob.className}`}
      ></div>
    ))}
  </div>
);
export default BackgroundBlobs;
