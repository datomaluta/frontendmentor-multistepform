import { useAppSelector } from "../store/hooks";

const ProgressBar = () => {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  return (
    <div className="flex justify-center center gap-4 mb-8">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className={`border-white border rounded-full w-10 h-10 flex justify-center items-center  font-semibold text-sm transition-all cursor-pointer ${
            currentStep === index + 1
              ? "bg-cyan-100 text-primary"
              : "text-white"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
