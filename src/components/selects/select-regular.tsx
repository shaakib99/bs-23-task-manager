const SelectRegular = (props: {
  title?: string;
  data: {
    label: string;
    value: string;
  }[];
  register?: any;
}) => {
  const title = props?.title || "Choose an option";
  return (
    <div className="my-2">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {title}
      </label>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...(props?.register || {})}
      >
        <option selected>{"Select an option"}</option>
        {props.data.map((d, index) => (
          <option key={index} value={d.value}>{d.label}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectRegular;
