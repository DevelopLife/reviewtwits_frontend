import { useAhthorizationRouting } from 'hooks/useAhthorizationRouting';
import type { ReactNode } from 'react';

export interface AuthrizationRouteProps {
  children: ReactNode;
  isRequiredAuthorization: boolean;
  redirectURL?: string;
}

export const AuthorizationRoute = ({
  children,
  isRequiredAuthorization,
  redirectURL,
}: AuthrizationRouteProps) => {
  useAhthorizationRouting({
    isRequiredAuthorization,
    redirectURL,
  });

  return <>{children}</>;
};
