import { useState } from "react";
import { Listbox } from "@headlessui/react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <Listbox as="div" value={selectedRegion} onChange={setSelectedRegion}>
      <div>
        <Listbox.Button>
          <span>{selectedRegion ? selectedRegion : "Filter by region"}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options>
          {regions.map((region, index) => (
            <Listbox.Option key={index} value={region}>
              {({ selected }) => <span>{region}</span>}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default Filter;
