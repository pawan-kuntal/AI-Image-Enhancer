import Loading from "./Loading";
import { useEffect, useState } from "react";

const ImagePreview = (props) => {
  const handleDownload = async () => {
    try {
      const res = await fetch(props.enhanced, { mode: "cors" });
      const blob = await res.blob();
      const contentType = res.headers.get("content-type") || "image/png";
      const ext = contentType.includes("jpeg")
        ? "jpg"
        : contentType.split("/")[1] || "png";
      const filename = `enhanced.${ext}`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      // Fallback: try native download attribute directly on the URL
      const a = document.createElement("a");
      a.href = props.enhanced;
      a.download = "enhanced.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  const [glareTick, setGlareTick] = useState(0);

  useEffect(() => {
    if (props.enhanced && !props.loading) {
      setGlareTick((t) => t + 1);
    }
  }, [props.enhanced, props.loading]);

  return (
    <>
      <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-5xl xl:max-w-6xl px-2">
      {/* Original Image */}
      <div className="rounded-xl overflow-hidden border border-black bg-white">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>

        {props.uploaded ? (
          <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[30rem] p-2">
            <img
              src={props.uploaded}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[30rem] bg-gray-200 text-black font-bold">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div key={glareTick} className="rounded-xl overflow-hidden border border-black bg-white flex flex-col glare-container glare-run">
        <h2 className="text-xl font-semibold text-center bg-blue-950 text-white py-2">
          Enhanced Image
        </h2>

        {props.enhanced && !props.loading && (
          <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[30rem] p-2">
            <img
              src={props.enhanced}
              alt="Enhanced"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {props.loading && <Loading />}

        {!props.loading && !props.enhanced && (
          <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[30rem] bg-gray-200 text-black font-bold">
            No Enhanced Image
          </div>
        )}

      </div>
    </div>
    {!props.loading && props.enhanced && (
      <div className="mt-4 w-full max-w-4xl flex justify-end">
        <button
          type="button"
          onClick={handleDownload}
className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-2 text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Download enhanced image"
        >
          Download Enhanced Image
        </button>
      </div>
    )}
    </>
  );
};

export default ImagePreview;
