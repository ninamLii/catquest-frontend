export type WizardResult = {
  hyperallergenic: number;
  welfare: number;
  socialNeeds: number;
  activityLevel: number;
  garden: number;
  familyFriendly: number;
  dogFriendly: number;
  affectionate: number;
  strangerFriendly: number;
  sheddingLevel: number;
  annoyingPotential: number;
};

export type WizardStep = {
  question: string;
  sliderLabels: Array<string>;
  value: number;
  id: keyof WizardResult;
  min?: number;
  max?: number;
  step?: number;
};
