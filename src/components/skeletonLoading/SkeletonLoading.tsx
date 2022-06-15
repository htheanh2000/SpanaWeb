import './index.scss';

const SkeletonLoading = () => {
  return (
    <div className="SkeletonLoading">
      <div className="Top">
        <div className="Logo"></div>
        <div className="Lines">
          <div className="Line1"></div>
          <div className="Line2"></div>
        </div>
      </div>
      <div className="Bot">
        <div className="Logo"></div>
        <div className="Lines">
          <div className="Line1"></div>
          <div className="Line2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
