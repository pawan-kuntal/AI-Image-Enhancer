const ImageUpload = (props) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };

  return (
    <div className="rounded-2xl p-4 sm:p-6 w-full max-w-xl sm:max-w-2xl border border-black bg-white">
      <label
        htmlFor="fileInput"
className="block w-full cursor-pointer rounded-lg p-6 text-center border-2 border-dotted border-black hover:border-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:animate-pulse text-gray-800"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ShowImageHandler}
        />
        <span className="text-lg font-medium">Click and drag to upload your image</span>
      </label>
    </div>
  );
};

export default ImageUpload;
