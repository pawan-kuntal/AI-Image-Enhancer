import Home from "./components/Home";
import CircularTextBadge from "./components/CircularTextBadge";
import ParticlesBackground from "./components/ParticlesBackground";
const App = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen py-6 px-3 sm:py-8 sm:px-6">
      <ParticlesBackground />
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-6xl text-center mb-6 sm:mb-8 px-2">
          <CircularTextBadge text="AI*IMAGE*ENHANCER*" className="scale-75 sm:scale-100" />
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">AI Image Enhancer</h1>
          <p className="text-base sm:text-lg text-slate-200">Upload your Image and let AI enhance it in seconds!</p>
        </div>

        <Home />

        <div className="text-sm font-bold text-slate-200 mt-6">Powered By @PK</div>
      </div>
    </div>
  );
};

export default App;
