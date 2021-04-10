import React, { Suspense } from 'react';
import { Switch, Route, RouteProps, RouteComponentProps } from 'react-router-dom';

import { Dictionary } from 'shared/entities';
import { routes } from './routes-list';

declare global {
  interface RoutesCustom extends RouteProps {
    hidden?: boolean;
    exact: boolean;
    path: string;
    component: React.ComponentType<RouteComponentProps<Dictionary>> | React.ComponentType<Dictionary>;
  }
}

export const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map(({ hidden, ...rest }: RoutesCustom) => {
          if (hidden) {
            return null;
          }
          return <Route {...rest} key={rest.path} />;
        })}
      </Switch>
    </Suspense>
  );
};
