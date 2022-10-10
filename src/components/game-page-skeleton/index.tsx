import { FC } from "react";
import ContentLoader from "react-content-loader";

export const GamePageSkeleton: FC = () => (
  <ContentLoader
    width="100%"
    height="570"
    viewBox="0 0 1230 570"
    backgroundColor="#D7DAE8"
  >
    <rect width="382" height="276" rx="8" fill="#D9D9D9" />
    <rect x="424" width="382" height="276" rx="8" fill="#D9D9D9" />
    <rect x="848" width="382" height="276" rx="8" fill="#D9D9D9" />
    <rect y="294" width="382" height="276" rx="8" fill="#D9D9D9" />
    <rect x="424" y="294" width="382" height="276" rx="8" fill="#D9D9D9" />
    <rect x="848" y="294" width="382" height="276" rx="8" fill="#D9D9D9" />
  </ContentLoader>
);
