import * as Slider from "@radix-ui/react-slider";

export default function LabeledSlider({
  value,
  onChange,
  steps,
  min = 0,
  max = steps.length - 1,
  step = 1,
}: {
  value: number;
  onChange: (value: number) => void;
  steps: string[];
  min?: number;
  max?: number;
  step?: number;
}) {
  const maxIndex = Math.max(steps.length - 1, 0);

  return (
    <div className="relative w-1/2 pt-8">
      <Slider.Root
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        min={min}
        max={max}
        step={step}
        className="relative flex items-center w-full h-5"
      >
        <Slider.Track className="bg-gray-200 grow h-1 rounded-full">
          <Slider.Range className="bg-gray-800 h-full rounded-full" />
        </Slider.Track>

        <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-800 rounded-full shadow" />
      </Slider.Root>

      <div className="pointer-events-none absolute inset-x-0 top-0">
        {steps.map((label, i) => {
          const position = maxIndex === 0 ? 0 : (i / maxIndex) * 100;
          return (
            <span
              key={`${label}-${i}`}
              className={`absolute -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap ${
                value === i ? "font-semibold text-gray-900" : ""
              }`}
              style={{ left: `${position}%` }}
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
