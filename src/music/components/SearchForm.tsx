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
  
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(query);
    }, 500);
    
    return () => clearTimeout(handler)
  }, [query]);


  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={submit}>
      <div className="p-inputgroup flex-1">
        <InputText
          ref={inputElemRef}
          placeholder="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // onKeyDown={e => e.key === 'Enter' && search()}
        />
        <Button
          icon="pi pi-search"
          className="p-button-success"
          type="submit"
        />
      </div>
    </form>
  );
};

export default SearchForm;
