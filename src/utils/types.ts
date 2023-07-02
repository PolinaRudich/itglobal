export type ItemList = {
    id: number,
    menu_list: ItemList[],
    title: string
}

export type LangItem = {
    key: string,
    title: string,
    svg: () => JSX.Element;
}