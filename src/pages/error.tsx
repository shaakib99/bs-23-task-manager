const ErrorPage = (props: { code: number; message: string }) => {
  return <>{`Code: ${props.code} | ${props.message}`}</>;
};
export default ErrorPage;
