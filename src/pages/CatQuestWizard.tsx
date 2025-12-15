import { useState } from "react";
import Button from "../components/Button";
import type { WizardResult } from "../types/wizard";
import { generateSteps } from "../helpers/catQuestWizard";
import CurrentWizardStep from "../components/CurrentWizardStep";
import type { Cat } from "../types/cats";
import CatList from "../components/CatList";

type CatWizardResult = {
  perfectHit: Cat[];
  oneDifference: Cat[];
  twoDifferences: Cat[];
  threeDifferences: Cat[];
  moreThanThree: Cat[];
};

const CatQuestWizard = () => {
  const [resultLoading, setResultLoading] = useState(false);
  const [result, setResult] = useState<CatWizardResult | null>(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<WizardResult>({
    hyperallergenic: 0,
    welfare: 0,
    socialNeeds: 0,
    activityLevel: 0,
    garden: 0,
    familyFriendly: 0,
    dogFriendly: 0,
    affectionate: 0,
    strangerFriendly: 0,
    sheddingLevel: 0,
    annoyingPotential: 0,
  });

  const wizardSteps = generateSteps({ data });

  function next() {
    setStep((s) => Math.min(s + 1, wizardSteps.length - 1));
  }

  async function finish() {
    setResultLoading(true);
    fetch(`${import.meta.env.VITE_CATQUEST_API_URL}/cat-quest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error in fetching cat data", {
            cause: res.statusText,
          });
        }
        return res.json();
      })
      .then((json) => {
        setResult(json);
        setResultLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setResultLoading(false);
      });
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function update(id: keyof WizardResult, value: number) {
    setData((d) => ({ ...d, [id]: value }));
  }

  return (
    <div className="flex flex-col items-center justify-center gap-16 my-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold ">Cat Quest Wizard</h1>
        {!resultLoading && !result && (
          <p>
            {" "}
            Answer the following questions to find your perfect cat match.{" "}
          </p>
        )}
        {resultLoading && <p>Loading your perfect cat matches...</p>}
      </div>

      {result && !resultLoading && (
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4 text-left ">
            <p
              className={`text-xl font-bold ${
                result.perfectHit.length > 0 && "col-span-2"
              }`}
            >
              Perfect Hits
            </p>
            {result.perfectHit.length === 0 && <p>No perfect hits found.</p>}
            {result.perfectHit.length > 0 && (
              <div className="col-span-2">
                <CatList cats={result.perfectHit} />
              </div>
            )}
            <p
              className={`text-xl font-bold  ${
                result.oneDifference.length > 0 && "col-span-2"
              }`}
            >
              One Difference
            </p>
            {result.oneDifference.length === 0 && (
              <p>No cats found with one difference.</p>
            )}
            {result.oneDifference.length > 0 && (
              <div className="col-span-2">
                <CatList cats={result.oneDifference} />
              </div>
            )}
            <p
              className={`text-xl font-bold  ${
                result.twoDifferences.length > 0 && "col-span-2"
              }`}
            >
              Two Differences
            </p>
            {result.twoDifferences.length === 0 && (
              <p>No cats found with two differences.</p>
            )}
            {result.twoDifferences.length > 0 && (
              <div className="col-span-2">
                <CatList cats={result.twoDifferences} />
              </div>
            )}
            <p
              className={`text-xl font-bold  ${
                result.threeDifferences.length > 0 && "col-span-2"
              }`}
            >
              Three Differences
            </p>
            {result.threeDifferences.length === 0 && (
              <p>No cats found with three differences.</p>
            )}
            {result.threeDifferences.length > 0 && (
              <div className="col-span-2">
                <CatList cats={result.threeDifferences} />
              </div>
            )}
            <p
              className={`text-xl font-bold ${
                result.moreThanThree.length > 0 && "col-span-2"
              }`}
            >
              More Than Three Differences
            </p>
            {result.moreThanThree.length === 0 && (
              <p>No cats found with more than three differences.</p>
            )}
            {result.moreThanThree.length > 0 && (
              <div className="col-span-2">
                <CatList cats={result.moreThanThree} />
              </div>
            )}
          </div>
        </div>
      )}

      {!result && !resultLoading && (
        <CurrentWizardStep
          data={wizardSteps[step]}
          onChange={(value) => update(wizardSteps[step].id, value)}
        />
      )}

      {!result && !resultLoading && (
        <div className="flex justify-between w-full">
          <Button label={"Back"} onClick={back} disabled={step === 0} />

          <Button
            label={step === wizardSteps.length - 1 ? "Finish" : "Next"}
            onClick={step === wizardSteps.length - 1 ? finish : next}
          />
        </div>
      )}
    </div>
  );
};

export default CatQuestWizard;
