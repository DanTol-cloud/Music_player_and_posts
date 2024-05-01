import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

interface IDefaultOptions {
  handleSnapPress: (index: number) => void;
  snapPoints: string[];
  sheetRef: RefObject<BottomSheetMethods>;
}

type BottomSheetProviderType = {
  children: ReactNode;
};
//@ts-ignore
const defaultOptions: IDefaultOptions = {
  handleSnapPress: () => {},
  snapPoints: ['0%'],
};

const BottomSheetContext = createContext<IDefaultOptions>(defaultOptions);

export const BottomSheetProvider = ({children}: BottomSheetProviderType) => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['50%'], []);

  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <BottomSheetContext.Provider
      value={{handleSnapPress, snapPoints, sheetRef}}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => useContext(BottomSheetContext);
