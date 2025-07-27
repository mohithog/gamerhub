import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}
const SortSelector = ({onSelectSortOrder , selectedSortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
    ];
    const currentSortOrder = sortOrders.find((s) => selectedSortOrder === s.value  )
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
         Order by : {currentSortOrder?.label || 'Relevance' }
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
            <MenuItem onClick={ ()=> onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
