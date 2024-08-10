import { useEffect } from "react";

const useProgress = ( visible: boolean, setProgress: (value: number) => void, resetProgress: () => void ) => {
  useEffect(() => {
    if (visible) {
      resetProgress();

      let i = 0;
      const interval = setInterval(() => {
        if (i <= 100) {
          setProgress(i / 100);
          i += 1;
        } else {
          clearInterval(interval);
        }
      }, 40);

      return () => clearInterval(interval);
    }
  }, [visible, resetProgress, setProgress]);
};

export default useProgress;

// this hook is used to update the progress of the upload screen
// it takes 3 arguments:
// 		- visible: boolean, to check if the modal is visible
// 		- setProgress: (value: number) => void, to set the progress
// 		- resetProgress: () => void, to reset the progress
// it uses useEffect to update the progress every 40ms until it reaches 100%