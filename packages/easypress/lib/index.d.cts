import { UserConfig as UserConfig$1 } from 'vite';
import * as react from 'react';
import { ReactElement } from 'react';
import * as zustand from 'zustand';

interface UserConfig {
    /**
     * md/mdx文档目录
     * @default docs
     */
    docs?: string;
    /**
     * 标题，首页以及文档使用
     */
    title?: string;
    /**
     * 描述，首页使用
     */
    description?: string;
    /**
     * 主题设置
     */
    themeConfig?: ThemeConfig;
    /**
     * vite设置
     */
    vite?: UserConfig$1;
}
interface ThemeConfig {
    /**
     * 自动文档侧边栏
     */
    autoSidebar?: boolean;
    /**
     * 自动头部导航栏，仅支持文字，固定在右边配置项的左边增加
     */
    autoNav?: boolean;
    /**
     * 头部导航栏，支持 图片、链接、文字，支持固定logo如github等，支持调整左右
     */
    nav?: NavItem[];
    /**
     * 侧边栏
     */
    sidebar?: Sidebar;
    /**
     * 底部
     */
    footer?: Footer;
}
type NavItem = {
    text?: string;
    logo?: NavLogo;
    img?: string;
    /**
     * 深色切换按钮
     */
    dark?: boolean;
    link?: string;
    /**
     * 导航项目的位置
     * @default right
     */
    position?: NavDirection;
};
type NavDirection = 'left' | 'right';
type NavLogo = 'github' | 'twitter';
interface Sidebar {
    [path: string]: SidebarDir[];
}
interface SidebarDir {
    text?: string;
    items?: SidebarItem[];
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
    userConfig: Required<UserConfig>;
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
    toc?: TocItem[] | undefined;
    setToc: (toc?: PageData['toc']) => void;
}>>;

export { Content, type Footer, type FrontMatter, type NavDirection, type NavItem, type NavLogo, type PageData, type PageModule, type PageType, type Route, type Sidebar, type SidebarDir, type SidebarItem, type SiteConfig, type ThemeConfig, type TocItem, type UserConfig, getPageData, usePageData };
