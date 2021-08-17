import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name: string, params: any | undefined) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function reset(screen: string) {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{ name: screen }],
  });
}
