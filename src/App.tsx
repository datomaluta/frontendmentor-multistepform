import { nextStep, prevStep } from "./store/formSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import backGroundImageMobile from "./assets/images/bg-sidebar-mobile.svg";
import PersonalInfo from "./components/steps/PersonalInfo";
import ProgressBar from "./components/ProgressBar";

function App() {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  const dispatch = useAppDispatch();
  return (
    <div className="font-ubuntu">
      <div className=" h-screen relative flex flex-col">
        <img src={backGroundImageMobile} alt="background" className="w-full" />

        <div className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[90%] ">
          <ProgressBar />
          <div className="bg-white rounded-lg px-6 py-8 shadow-xl">
            {currentStep === 1 && <PersonalInfo />}
          </div>
        </div>

        <div className="mt-auto flex justify-between w-[90%] mx-auto pb-10 ">
          {currentStep !== 1 && (
            <button
              onClick={() => dispatch(prevStep())}
              className="text-slate-500 font-medium"
            >
              Go Back
            </button>
          )}
          <button
            className="ml-auto bg-primary py-2 px-4 rounded-md text-white font-medium"
            onClick={() => dispatch(nextStep())}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
