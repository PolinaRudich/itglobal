import { useTranslation } from "react-i18next";
// custom hook for translations
export type TranslatorHookProps = {
    language: string,
    stringInDictionary: { name: string, isObject: boolean }
}

export const UseTranslatorHook = (props: TranslatorHookProps) => {
    const prop = { ...props }
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang = prop.language) => {
        i18n.changeLanguage(lang);
    };
    const changeString = (data = prop.stringInDictionary) => {
        const isObj = data.isObject
        const res: string = t(data.name, { returnObjects: isObj })
        return res
    }
    return [changeLanguage, changeString];

};