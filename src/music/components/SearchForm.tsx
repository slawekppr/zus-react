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

  function search() {
    onSearch(query);
  }

  // const inputElemRef = useRef<'lewy but'>()
  const inputElemRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputElemRef.current?.focus();
  }, []);

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <InputText
          ref={inputElemRef}
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
