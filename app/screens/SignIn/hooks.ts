import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
  interpolate,
  withRepeat,
} from "react-native-reanimated";
export const useLoginAnimation = () => {
  const animationParent = useSharedValue(1.2);
  const scaleParent = useDerivedValue(() => {
    return interpolate(animationParent.value, [1, 1.2], [1, 1.2]);
  });
  const scalationParent = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleParent.value,
        },
      ],
    };
  });
  const handleAnimationParent = () => {
    animationParent.value = withRepeat(
      withTiming(1.2, {
        duration: 200,
      }),
      1,
      false
    );
    animationTeacher.value = withRepeat(
      withTiming(1, {
        duration: 200,
      }),
      1,
      false
    );
    animationDriver.value = withRepeat(
      withTiming(1, {
        duration: 200,
      }),
      1,
      false
    );
  };

  const animationTeacher = useSharedValue(1);
  const scaleTeacher = useDerivedValue(() => {
    return interpolate(animationTeacher.value, [1, 1.2], [1, 1.2]);
  });
  const scalationTeacher = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleTeacher.value,
        },
      ],
    };
  });
  const handleAnimationTeacher = () => {
    animationTeacher.value = withRepeat(
      withTiming(1.2, {
        duration: 200,
      }),
      1,
      false
    );
    animationParent.value = withRepeat(
      withTiming(1, {
        duration: 200,
      }),
      1,
      false
    );
    animationDriver.value = withRepeat(
      withTiming(1, {
        duration: 200,
      }),
      1,
      false
    );
  };

  const animationDriver = useSharedValue(1);
  const scaleDriver = useDerivedValue(() => {
    return interpolate(animationDriver.value, [1, 1.2], [1, 1.2]);
  });
  const scalationDriver = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scaleDriver.value,
        },
      ],
    };
  });
  const handleAnimationDriver = () => {
    animationDriver.value = withRepeat(
      withTiming(1.2, {
        duration: 200,
      }),
      1,
      false
    );
    animationParent.value = withRepeat(
      withTiming(1, {
        duration: 200,
      }),
      1,
      false
    );
    animationTeacher.value = withRepeat(
      withTiming(1, {
        duration: 200,
      }),
      1,
      false
    );
  };

  return {
    parent: {
      animatedStyle: scalationParent,
      handler: handleAnimationParent,
    },
    teacher: {
      animatedStyle: scalationTeacher,
      handler: handleAnimationTeacher,
    },
    driver: {
      animatedStyle: scalationDriver,
      handler: handleAnimationDriver,
    },
  };
};
