import {  Html, useProgress } from "@react-three/drei";

export function CustomLoader() {
  const {  progress } = useProgress();
  return (
    <Html>
      <div className="ctn-preloader">
        <div className="animation-preloader">
          <div className="spinner"> </div>
          {progress}
          <div className="txt-loading">
            <span data-text-preloader="L" className="letters-loading">
              L
            </span>

            <span data-text-preloader="O" className="letters-loading">
              O
            </span>

            <span data-text-preloader="A" className="letters-loading">
              A
            </span>

            <span data-text-preloader="D" className="letters-loading">
              D
            </span>

            <span data-text-preloader="I" className="letters-loading">
              I
            </span>

            <span data-text-preloader="N" className="letters-loading">
              N
            </span>

            <span data-text-preloader="G" className="letters-loading">
              G
            </span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </Html>
  );
}
