import type { FilterConfig } from "../helpers/filter";
import type { FilterState } from "../pages/AllCats";

type Props = {
  filters: FilterState;
  config: FilterConfig[];
  onChange: (filters: FilterState) => void;
};

const Filter = ({ filters, config, onChange }: Props) => {
  const update = (key: string, value: string | number | boolean) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="w-full flex flex-wrap items-center gap-4">
      {config.map((filter) => {
        // render based on filter type
        switch (filter.type) {
          case "checkbox":
            return (
              <label
                key={filter.key}
                className="flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <input
                  type="checkbox"
                  checked={Boolean(filters[filter.key])}
                  onChange={(e) => update(filter.key, e.target.checked)}
                />
                {filter.label}
              </label>
            );

          case "select":
            return (
              <div key={filter.key} className="flex items-center gap-2 text-sm">
                <label className="whitespace-nowrap">{filter.label}</label>
                <select
                  value={filters[filter.key] as string | number}
                  onChange={(e) =>
                    update(
                      filter.key,
                      isNaN(Number(e.target.value))
                        ? e.target.value
                        : Number(e.target.value)
                    )
                  }
                  className="border rounded px-2 py-1 text-sm"
                >
                  {filter.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default Filter;
