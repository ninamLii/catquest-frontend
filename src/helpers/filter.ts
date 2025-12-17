export type FilterType = "checkbox" | "select";

export type FilterConfig = {
  key: string;
  label: string;
  type: FilterType;
  min?: number;
  max?: number;
  options?: { label: string; value: string | number }[];
};

// define the available filters for cats
export const CAT_FILTERS: FilterConfig[] = [
  {
    key: "indoors",
    label: "Indoor only",
    type: "checkbox",
  },
  {
    key: "hypoallergenic",
    label: "Hypoallergenic",
    type: "checkbox",
  },
  {
    key: "social_needs",
    label: "Min Social Needs",
    type: "select",
    options: [
      { label: "Any", value: "" },
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
    ],
  },
  {
    key: "activity_level",
    label: "Min Activity Level",
    type: "select",
    options: [
      { label: "Any", value: "" },
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
    ],
  },
  {
    key: "child_friendly",
    label: "Min Family Friendly",
    type: "select",
    options: [
      { label: "Any", value: "" },
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 },
    ],
  },
];
