import { UserConfig as UserConfig$1 } from 'vite';
import * as react from 'react';
import { ReactElement } from 'react';
import * as zustand from 'zustand';

interface UserConfig {
    title?: string;
    description?: string;
    themeConfig?: ThemeConfig;
    vite?: UserConfig$1;
}
interface ThemeConfig {
    nav?: NavItemWithLink[];
    sidebar?: Sidebar;
    footer?: Footer;
}
type NavItemWithLink = {
    text: string;
    link: string;
};
interface Sidebar {
    [path: string]: SidebarGroup[];
}
interface SidebarGroup {
    text?: string;
    items: SidebarItem[];
}
type SidebarItem = {
    text: string;
    link: string;
} | {
    text: string;
    link?: string;
    items: SidebarItem[];
};
interface Footer {
    message?: string;
    copyright?: string;
}

interface SiteConfig {
    root: string;
    userConfigPath?: string;
    userConfig: UserConfig;
}

type PageType = 'home' | 'doc' | 'custom' | '404';
interface PageData {
    userConfig: UserConfig;
    pagePath: string;
    pageType: PageType;
    toc: TocItem[];
    frontmatter?: FrontMatter;
}
interface PageModule {
    default: ReactElement;
    frontmatter?: FrontMatter;
    toc: TocItem[];
    [key: string]: unknown;
}
interface TocItem {
    id: string;
    text: string;
    depth: number;
}
interface FrontMatter {
    title?: string;
    description?: string;
    pageType?: PageType;
}

interface Route {
    path: string;
    element: React.ReactElement;
    preload: () => Promise<PageModule>;
}

/**
 * 路由内容
 * @description 通过虚拟模块提供spa路由内容
 */
declare function Content(): react.ReactElement<any, string | react.JSXElementConstructor<any>> | null;

declare function getPageData(pathname: string): Promise<PageData>;
declare const usePageData: zustand.UseBoundStore<zustand.StoreApi<{
    pageData?: PageData | undefined;
    setPageData: (pageData?: PageData) => void;
}>>;

export { Content, type Footer, type FrontMatter, type NavItemWithLink, type PageData, type PageModule, type PageType, type Route, type Sidebar, type SidebarGroup, type SidebarItem, type SiteConfig, type ThemeConfig, type TocItem, type UserConfig, getPageData, usePageData };
