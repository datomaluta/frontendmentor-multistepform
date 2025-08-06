import { nextStep, prevStep, setFormErrors } from "./store/formSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import backGroundImageMobile from "./assets/images/bg-sidebar-mobile.svg";
import PersonalInfo from "./components/steps/PersonalInfo";
import ProgressBar from "./components/ProgressBar";
import { validateTextInput } from "./hooks/utils/validators";
import DesktopProgressBar from "./components/DesktopProgressBar";

function App() {
  const { currentStep, formData } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const validateStep = () => {
    switch (currentStep) {
      case 1: {
        const errors: Record<string, string> = {};
        dispatch(setFormErrors(null));

        if (!validateTextInput(formData.name)) {
          errors.name = "Name is required";
        }
        if (!validateTextInput(formData.email)) {
          errors.email = "Please Provide Valid Email";
        }
        if (!validateTextInput(formData.phoneNumber)) {
          errors.phoneNumber = "Please Provide Valid Phone Number";
        }

        if (Object.keys(errors).length > 0) {
          Object.entries(errors).forEach(([key, value]) => {
            dispatch(setFormErrors({ key, value }));
          });
        } else {
          dispatch(nextStep());
        }

        return;
      }
      case 2:
        return;
      case 3:
        return;
      case 4:
        return;
      default:
        break;
    }
  };

  const nextAndPrevButtons = (
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
        onClick={() => validateStep()}
      >
        Next Step
      </button>
    </div>
  );

  return (
    <div className="font-ubuntu flex justify-center items-center min-h-screen md:p-4">
      <div className="h-screen relative flex md:hidden flex-col w-full">
        <img src={backGroundImageMobile} alt="background" className="w-full" />

        <div className="absolute left-1/2 -translate-x-1/2 top-[5%] w-[90%] ">
          <ProgressBar />
          <div className="bg-white rounded-lg px-6 py-8 shadow-xl">
            {currentStep === 1 && <PersonalInfo />}
          </div>
        </div>

        {nextAndPrevButtons}
      </div>

      <div className="hidden md:flex max-w-5xl w-full  mx-auto rounded-lg shadow-xl border-slate-200 border ">
        <div className="bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover bg-center w-1/3 min-h-[600px] items-center p-10 overflow-hidden rounded-lg">
          <DesktopProgressBar />
        </div>
        <div className="p-10 flex flex-col w-2/3">
          {currentStep === 1 && <PersonalInfo />} {nextAndPrevButtons}
        </div>
      </div>
    </div>
  );
}

export default App;
