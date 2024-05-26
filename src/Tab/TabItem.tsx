interface ItemProp {
  item: string;
  index: number;
  activeTab: number;
}
const TabItem = ({ item, index, activeTab }: ItemProp) => {
  return (
    <li
      className={`${
        activeTab === index ? "bg-green-500 text-white" : "bg-white text-black"
      } p-2 rounded text-center cursor-pointer`}
    >
      {item}
    </li>
  );
};

export default TabItem;
