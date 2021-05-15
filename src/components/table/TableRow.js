import React from "react";

const TableRow = ({ data }) => {
  console.log(data);

  return (
    <tr>
      {data
        ? data.name.map((item) => {
            return (
              <td
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                key={item.name}
              >
                {item}
              </td>
            );
          })
        : ""}
    </tr>
  );
};

export default TableRow;
