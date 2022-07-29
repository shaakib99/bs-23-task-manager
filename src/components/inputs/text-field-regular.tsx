const TextField = (props: {
  placeholder?: string;
  icon?: string;
  onChange?: VoidFunction;
  value?: string | number;
  type?: string;
  required?: boolean;
  label?: string;
  register?: any;
}) => {
  const placeholder = props?.placeholder;
  const icon = props?.icon;
  const onChange = props?.onChange || function () {};
  const value = props?.value;
  const type = props?.type || "text";
  const required = props?.required || false;
  const label = props?.label || "";
  const register = props?.register || {};

  return (
    <div className="my-1">
      <p className="text-slate-500 my-2">
        {label} {required && <span className="text-red-600">*</span>}
      </p>
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        {icon && (
          <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <i className={icon}></i>
          </span>
        )}
        <input
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          placeholder={placeholder}
          className={`px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full ${
            icon && "pl-10"
          }`}
          {...register}
        />
      </div>
    </div>
  );
};
export default TextField;
