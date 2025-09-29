const LoadingOverlay = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <div className="animate-spin rounded-full border-8 border-gray-400 border-t-transparent h-24 w-24"></div>
  </div>
);

export default LoadingOverlay;
