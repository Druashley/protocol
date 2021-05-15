import React from "react";

const TableHeadItem = ({ item, id, removeTableHeader, edit }) => {
  return (
    <td
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:line-through hover:text-red-500"
      title={item}
      key={id}
      onClick={edit ? () => removeTableHeader(id) : ""}
    >
      {item}
    </td>
  );
};

export default TableHeadItem;
