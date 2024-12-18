// tsrafce
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useRef, useState } from "react";
import { useFocus } from "../../common/hooks/useFocus";
import { useDebounce } from "../../common/hooks/useDebounce";
import { useForm } from "../../common/hooks/useForm";


type Props = {
  onSearch: (query: string) => void;
};


const SearchForm = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");
  const { ref: inputElemRef } = useFocus();

  const { onSubmit } = useForm(() => onSearch(query));

  useDebounce(() => onSearch(query), [query]);

  return (
    <form onSubmit={onSubmit}>
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
