import { UserConfig } from 'vite';
import { ReactElement } from 'react';

interface EasypressUserConfig {
    title?: string;
    description?: string;
    themeConfig?: ThemeConfig;
    vite?: UserConfig;
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

interface EasypressSiteConfig {
    root: string;
    userConfigPath?: string;
    userConfig: EasypressUserConfig;
}

type PageType = 'home' | 'doc' | 'custom' | '404';
interface PageData {
    userConfig: EasypressUserConfig;
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

export type { EasypressSiteConfig, EasypressUserConfig, Footer, FrontMatter, NavItemWithLink, PageData, PageModule, PageType, Route, Sidebar, SidebarGroup, SidebarItem, ThemeConfig, TocItem };
