const LoadingComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-orange border-opacity-75 h-32 w-32"></div>
    </div>
  );
};

export default LoadingComponent;
