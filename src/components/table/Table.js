import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

const Table = ({ theadData, tbodyData, removeTableHeader, edit }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {theadData.map((h) => {
            return (
              <TableHeadItem
                key={h.id}
                item={h.name}
                id={h.id}
                removeTableHeader={removeTableHeader}
                edit={edit}
              />
            );
          })}
        </tr>
      </thead>
      {tbodyData ? (
        <tbody>
          {tbodyData.map((item) => {
            return <TableRow key={item.id} data={item} />;
          })}
        </tbody>
      ) : (
        ""
      )}
    </table>
  );
};

export default Table;
