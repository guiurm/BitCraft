import type { Component, Ref, VNode } from 'vue';

export const TAB_ADD = 'add_tab' as const;
export const TAB_REMOVE = 'rm_tab' as const;
export const TAB_SET_ACTIVE = 'set_active_tab' as const;
export const TAB_DIRECTION_LINE = 'line';
export const TAB_DIRECTION_COL = 'col';

export type TTabSlideData = {
    header: string | { component: Component | (() => VNode); binds: Record<string, any> };
    id: string;
    active: boolean;
    emit: { clickTab: () => void; show: () => void; hide: () => void };
};

export type TTabInjections = {
    [TAB_ADD]: (data: TTabSlideData) => Ref<TTabSlideData>;
    [TAB_REMOVE]: (tabId: string) => void;
    [TAB_SET_ACTIVE]: (tabId: string) => void;
};
export type TTabMenuDirection = typeof TAB_DIRECTION_LINE | typeof TAB_DIRECTION_COL;
