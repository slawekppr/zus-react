// tsrafce
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { useFocus } from "../../common/hooks/useFocus";

type Props = {
  onSearch: (query: string) => void;
};

const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState(""); 

  

  function search() {
    onSearch(query);
  }

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          icon="pi pi-search"
          className="p-button-success"
          onClick={search}
        />
      </div>
    </div>
  );
};

export default SearchForm;
