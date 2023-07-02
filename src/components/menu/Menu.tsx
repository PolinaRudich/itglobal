import { GroupItem, MenuContainer, MenuItem, MenuItemDescription, MenuItemTitle, MenuItemWithDescription, Separator } from "./MenuStyled"
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from 'react';
import { Dropdown } from "../dropdown/Dropdown";
import { SvgLangController, langs } from "../../utils/svg-lang-controller";
import { ChevronSvg } from "../../svg/Chevron";
import { Transition } from "react-transition-group";
import { delay } from "../../utils/helpers";
import { UseTranslatorHook } from "../../utils/TranslatorHook";
import { ItemList, LangItem } from "../../utils/types";

export type MenuProps = {
    in: boolean,
    closeMenu: () => void;
};

export const Menu = ({ in: inProp, closeMenu }: MenuProps) => {

    // todo: make HOC of transition container
    
    const duration = 300;
    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const [transitionState, setTransitionState] = useState(false);

    const [changeLanguage, changeString] = UseTranslatorHook({
        language: '',
        stringInDictionary: { name: '', isObject: false }
    });

    const listRef = useRef(null);

    const transitionStyles: any = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    const { t, i18n } = useTranslation();
    const nodeRef = useRef(null);

    const [menu, setMenu] = useState('menu_list');
    const [stepCount, setStepCount] = useState<number[]>([]);
    const [title, setTitle] = useState<any>('');
    const [items, setItems] = useState<ItemList[]>([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedItem, setSelectedItem] = useState<LangItem>(SvgLangController(i18n.language));

    const selectItem = (item: ItemList, idx: number) => {
        setTransitionState(true);
        let title = '';
        setCurrentStep(currentStep + 1);
        items.push(item);

        const name = (() => {
            switch (stepCount.length) {
                case 0: {
                    title = `menu_list.${idx}.title`;
                    return `menu_list.${idx}.menu_list`
                }
                case 1: {
                    title = `menu_list.${stepCount[0]}.menu_list.${idx}.title`
                    return `menu_list.${stepCount[0]}.menu_list.${idx}.items`
                }
                default: {
                    title = `menu_list.title`
                    return 'menu_list'
                }
            }
        })();

        setTitle(changeString({ name: title, isObject: false } as any) as any);
        stepCount.push(idx);
        setStepCount(stepCount)
        setMenu(name);

    };

    const goback = () => {
        const name: string = (() => {
            switch (stepCount.length) {
                case 1: {
                    return `menu_list`
                }
                case 2: {
                    return `menu_list.${stepCount[1]}.menu_list`
                }
                default: {
                    return 'menu_list'
                }
            }
        })();
        stepCount.pop();
        setStepCount(stepCount)
        setCurrentStep(currentStep - 1);
        items.pop();
        items[items.length - 1] ? setTitle(items[items.length - 1].title) : setTitle('');
        setItems(items);
        setMenu(name);

    };

    // set current lang

    const setSelectedItemFunction = async (item: any) => {
        changeLanguage(item.key)
        setSelectedItem(item);
    };

    // get title of sublists

    const getTitleFunction = async () => {
        const name = (() => {
            switch (stepCount.length) {
                case 2: {
                    return `menu_list.${stepCount[0]}.menu_list.${stepCount[currentStep - 1]}.title`
                }
                case 1: {
                    return `menu_list.${stepCount[0]}.title`
                }
                default: {
                    return `menu_list.title`
                }
            }
        })()
        const title = t(name);
        setTitle(title);
    };

    useEffect(() => {
        setTransitionState(false);
        delay(300).then(() => setTransitionState(true));

    }, [menu]);

    useEffect(() => {
        getTitleFunction();
    }, [selectedItem]);


    return <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
        {(state) => <MenuContainer ref={nodeRef} style={{
            ...defaultStyle,
            ...transitionStyles[state],
            gap: currentStep === 0 ? ' 77px' : ''
        }}>
            <div className="menu-header">
                <div className=" _flex-container _space-between">
                    <Dropdown
                        selectedItem={selectedItem}
                        menu={[
                            langs
                        ]}
                        selectItemFunction={setSelectedItemFunction}
                    />
                    <div onClick={closeMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9394 12.0001L2.46973 3.53039L3.53039 2.46973L12.0001 10.9394L20.4697 2.46973L21.5304 3.53039L13.0607 12.0001L21.5304 20.4697L20.4697 21.5304L12.0001 13.0607L3.53039 21.5304L2.46973 20.4697L10.9394 12.0001Z" fill="#151617" />
                        </svg>
                    </div>

                </div>
                {currentStep !== 0 && <GroupItem isSubMenu={!menu.includes('items')} onClick={() => { goback() }}>
                    <svg className="chevron" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646484 1.35354L1.35359 0.646432L7.00004 6.29288L12.6465 0.646432L13.3536 1.35354L7.00004 7.70709L0.646484 1.35354Z" fill="#1D7DED" />
                    </svg>
                    <span> {t(title)}</span>
                </GroupItem>
                }
            </div>
            {menu && menu.includes('items') && <Separator></Separator>}
            <Transition nodeRef={listRef} in={transitionState} timeout={duration}>
                {(state) => (
                    <div className={`menu-body scrollbar`} style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        {menu && !menu.includes('items') &&  (t(menu, { returnObjects: true }) as any).map((item: any, idx: number) => (
                            <MenuItem onClick={() => selectItem(item, idx)} key={t(item.id)}>
                                <span>{t(item.title)}</span>
                                <ChevronSvg />
                            </MenuItem>
                        ))}
                        {menu && menu.includes('items') && (t(menu, { returnObjects: true }) as any).map((item: any) => (
                            <MenuItemWithDescription>
                                <MenuItemTitle>{t(item.title)}</MenuItemTitle>
                                <MenuItemDescription> {t(item.description)}</MenuItemDescription>
                            </MenuItemWithDescription>
                        ))}
                    </div>
                )}
            </Transition>

            {
                !menu.includes('items') && <div className="menu-footer">
                    <div>{t("contacts")}</div>
                    <div>{t("search")}</div>
                </div>
            }

        </MenuContainer >}
    </Transition>

}