import { useState } from "react";
import { DropdownMenu, DropdownTrigger, ListItem } from "./DropdownStyled";
import { capitalizer } from "../../utils/strings";
import { useTranslation } from "react-i18next";
import { ActiveSvg } from "../../svg/ActiveSvg";

export type DropdownProps = {
    menu: any[],
    selectedItem: any;
    selectItemFunction: (item: any) => void;
}
export const Dropdown = (props: DropdownProps) => {
    const [open, setOpen] = useState(false);

    const { t } = useTranslation();

    const selectItem = (menuItem: any) => {
        props.selectItemFunction(menuItem);
        setTimeout(() => {
            setOpen(false);
        }, 300)
    };
    
    return (
        <div className="dropdown">
            <DropdownTrigger isOpen={open} onClick={() => setOpen(!open)}>
                <div>{props.selectedItem.svg()}</div>
                <span>{capitalizer(props.selectedItem.key)}</span>
                <svg className="chevron" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646484 1.35354L1.35359 0.646432L7.00004 6.29288L12.6465 0.646432L13.3536 1.35354L7.00004 7.70709L0.646484 1.35354Z" fill="#1D7DED" />
                </svg>
            </DropdownTrigger>
            {open ? (
                <DropdownMenu>
                    <ListItem>{t('country')}</ListItem>
                    {props.menu.flat().map((menuItem, index) => (
                        <>
                            <ListItem className={`_flex-container _space-between _aic ${props.selectedItem.key === menuItem.key && 'active'}`} onClick={() => { selectItem(menuItem) }}>
                                <div className="_flex-container _aic list-item-content">
                                    <>{menuItem.svg()}</>
                                    <li key={index}>{menuItem.title}</li>
                                </div>
                                {props.selectedItem.key === menuItem.key && <ActiveSvg />}
                            </ListItem>
                        </>
                    ))}
                </DropdownMenu>
            ) : null}
        </div>
    );
};