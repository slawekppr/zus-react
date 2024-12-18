// tsrafce
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useRef, useState } from "react";
import { useFocus } from "../../common/hooks/useFocus";

type Props = {
  onSearch: (query: string) => void;
};


const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  const { ref: inputElemRef } = useFocus();

  function search() {
    onSearch(query);
  }

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          ref={inputElemRef}
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && search()}
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
