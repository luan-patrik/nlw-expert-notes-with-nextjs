import { ChangeEvent } from "react";

interface SearchProps {
  setSearch: (search: string) => void;
}

export const Search = ({ setSearch }: SearchProps) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const query = e.target.value;

    setSearch(query);
  };

  return (
    <form className="w-full">
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Busque em suas notas..."
        className="w-full bg-input outline-none text-3xl font-semibold tracking-tight placeholder:text-slate-500"
      />
    </form>
  );
};
