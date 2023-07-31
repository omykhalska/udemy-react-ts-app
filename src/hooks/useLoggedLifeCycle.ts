import { useEffect } from 'react';
import { LogTagged } from 'utils/LogTagged';

export const useLoggedLifeCycle = (tag: string) => {
  LogTagged(`🔄 ${tag}`, 'is RENDERED');

  useEffect(() => {
    LogTagged(`✅ ${tag}`, 'is MOUNTED');

    return () => {
      LogTagged(`⛔️ ${tag}`, 'is UNMOUNTED');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
