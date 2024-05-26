interface ItemProp {
  item: string;
  index: number;
  activeTab: number;
  handleChangeTab: (index: number) => void;
}
const TabItem = ({ item, index, activeTab, handleChangeTab }: ItemProp) => {
  return (
    <li
      className={`${
        activeTab === index ? "bg-green-500 text-white" : "bg-white text-black"
      } p-2 rounded text-center cursor-pointer`}
      onClick={() => handleChangeTab(index)}
    >
      {item}
    </li>
  );
};

export default TabItem;
