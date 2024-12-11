// tsrafce
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          placeholder="search"
          value={""}
          onChange={(e) => e.target.value}
        />
        <Button icon="pi pi-search" className="p-button-success" />
      </div>
    </div>
  );
};

export default SearchForm;
