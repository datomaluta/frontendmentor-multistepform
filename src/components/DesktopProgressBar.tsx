import { useAppSelector } from "../store/hooks";

const DesktopProgressBar = () => {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  const stepsConfig = [
    {
      value: 1,
      title: "Your Info",
    },
    {
      value: 2,
      title: "Select Plan",
    },
    {
      value: 3,
      title: "Add-ons",
    },
    {
      value: 4,
      title: "Summary",
    },
  ];
  return (
    <div className="flex flex-col justify-center center gap-8 mb-8">
      {stepsConfig.map((step, index) => (
        <div key={index} className="flex gap-3 items-center">
          <div
            className={`border-white border rounded-full w-10 h-10 flex justify-center items-center  font-semibold text-sm transition-all cursor-pointer ${
              currentStep === step.value
                ? "bg-cyan-100 text-primary"
                : "text-white"
            }`}
          >
            {step.value}
          </div>

          <div className="flex flex-col text-white text-sm">
            <span className="uppercase text-slate-400 font-medium">
              Step {step.value}
            </span>
            <span className="uppercase font-bold tracking-wider text-white">
              {step.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopProgressBar;
