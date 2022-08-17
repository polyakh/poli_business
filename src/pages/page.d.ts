//region Global Imports
import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";
//endregion

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    // eslint-disable-next-line no-unused-vars
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};

