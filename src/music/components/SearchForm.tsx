// tsrafce
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useRef, useState } from "react";
import { useFocus } from "../../common/hooks/useFocus";
import { useDebounce } from "../../common/hooks/useDebounce";
import { useForm } from "../../common/hooks/useForm";

type Props = {
  onSearch: (query: string) => void;
  query: string;
};

const SearchForm = ({ onSearch, query: parentQuery }: Props) => {
  const [query, setQuery] = useState(parentQuery);
  const { ref: inputElemRef } = useFocus();
  const [submittedQuery, setSubmittedQuery] = useState(parentQuery);

  useEffect(() => setQuery(parentQuery), [parentQuery]);

  const { onSubmit } = useForm(() => {
    setSubmittedQuery(query);
    onSearch(query);
  });

  useDebounce(() => {
    if (parentQuery === query) return;
    if (submittedQuery === query) return;
    onSearch(query);
  }, [query, parentQuery, submittedQuery]);

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
