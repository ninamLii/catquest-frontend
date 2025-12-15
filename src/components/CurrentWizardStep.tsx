import type { WizardStep } from "../types/wizard";
import LabeledSlider from "./LabledSlider";

const CurrentWizardStep = ({
  data,
  onChange,
}: {
  data: WizardStep;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <h2 className="text-2xl font-semibold">{data.question}</h2>
      <LabeledSlider
        steps={data.sliderLabels}
        value={data.value}
        onChange={onChange}
        min={data.min}
        max={data.max}
        step={data.step}
      />
    </div>
  );
};
export default CurrentWizardStep;
