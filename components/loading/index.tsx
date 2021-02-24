import { useNProgress } from '@tanem/react-nprogress'
import Bar from './bar'
import Container from './container'
import Spinner from './spinner'

const Loading: React.FC<{ isRouteChanging: boolean }> = ({
  isRouteChanging,
}) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
  })

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
        <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  )
}

export default Loading
