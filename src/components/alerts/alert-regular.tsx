import React from "react";

type alertType = "error" | "default" | "waring";
const alertColor: Record<alertType, string> = {
  error: "red",
  default: "sky",
  waring: "amber",
};

const AlertRegular = (props: {
  type?: alertType;
  message: string;
  icon?: string;
}) => {
  const [showAlert, setShowAlert] = React.useState(true);
  const type = props?.type || "default";
  const bgcolor = `bg-${alertColor[type]}-50`;
  const borderColor = `border-${alertColor[type]}-400`;
  const textColor = `text-${alertColor[type]}-800`;
  const message = props?.message || "";
  return (
    <>
      {showAlert ? (
        <div
          className={`${bgcolor} border-b ${borderColor} ${textColor} text-sm py-3 px-8 flex justify-between`}
        >
          <div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p>
                <span className="font-bold">Info: </span>
                {message}
              </p>
            </div>
          </div>
          <div
            className="ml-8 cursor-pointer"
            onClick={() => setShowAlert(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AlertRegular;
