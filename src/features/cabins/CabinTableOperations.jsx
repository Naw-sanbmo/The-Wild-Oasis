import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "sort By Name (A-Z)" },
          { value: "name-desc", label: "sort By Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort By Price (low first)" },
          { value: "regularPrice-desc", label: "Sort By Price (high first)" },
          { value: "maxCapacity-asc", label: "Soty By Capacity (low first)" },
          { value: "maxCapacity-desc", label: "Soty By Capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
