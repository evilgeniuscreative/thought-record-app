import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

type TestOrientationProps = {
  onOrientationChange: (message: string) => void;
};

export default function TestOrientation({
  onOrientationChange,
}: TestOrientationProps) {
  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (event) => {
        if (
          event.orientationInfo.orientation ===
          ScreenOrientation.Orientation.PORTRAIT_UP
        ) {
          onOrientationChange(
            "This app is designed for landscape mode. Please rotate your device to landscape left."
          );
        } else {
          onOrientationChange("");
        }
      }
    );

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, [onOrientationChange]);

  return null;
}
