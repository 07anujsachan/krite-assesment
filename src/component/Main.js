import { useState } from "react";
import { Filter } from "./Filter";
import { Header } from "./Header";
import { Footer } from "./Main-footer";
import { Table } from "./Table";

export const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="main-component">
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Filter />
      <Table searchInput={searchInput} />
      <Footer />
    </div>
  );
};
