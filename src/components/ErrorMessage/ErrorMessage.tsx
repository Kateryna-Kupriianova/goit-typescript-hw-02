interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;