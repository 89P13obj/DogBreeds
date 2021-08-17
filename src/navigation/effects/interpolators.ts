import { StackCardInterpolationProps } from '@react-navigation/stack/src/types';

export const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
