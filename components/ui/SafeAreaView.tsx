import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

export function SafeAreaView({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <RNSafeAreaView edges={['top', 'left', 'right']} className={className}>
      {children}
    </RNSafeAreaView>
  )
}
