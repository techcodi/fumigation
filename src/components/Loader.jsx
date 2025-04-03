function Loader() {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-ring spinner-ring-1"></div>
          <div className="spinner-ring spinner-ring-2"></div>
          <img src="./logo2.png" className="spinner-icon" />
        </div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
