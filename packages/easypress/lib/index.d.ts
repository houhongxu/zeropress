import { UserConfig } from 'vite';

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

interface TocItem {
    id: string;
    text: string;
    depth: number;
}

export type { EasypressSiteConfig, EasypressUserConfig, Footer, NavItemWithLink, Sidebar, SidebarGroup, SidebarItem, ThemeConfig, TocItem };
