interface ContentProp {
  content: string;
  index: number;
  activeTab: number;
}
const TabContent = ({ content, index, activeTab }: ContentProp) => {
  return (
    <div className={`${activeTab === index ? "block" : "hidden"} p-3`}>
      {content}
    </div>
  );
};

export default TabContent;
