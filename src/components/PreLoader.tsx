import { Fragment, useEffect } from "react";
export const PreLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".preloader")?.classList.add("loaded");
      const centrizeStyle = (document.querySelector(".centrize") as HTMLElement).style;
      if (centrizeStyle) {
        centrizeStyle.display = "none";
      }
    }, 1000);
  }, []);

  return (
    <Fragment>
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
