import { EnSvg } from "../svg/EnSvg"
import { RuSvg } from "../svg/RuSvg"
import { NethSvg } from "../svg/NethSvg"
import { BelSvg } from "../svg/BelSvg"
import { KazSvg } from "../svg/KazSvg"
import { TurSvg } from "../svg/TurSvg"
import { LangItem } from "./types";
type T10 = ReturnType<(lang: string) => LangItem>
export const SvgLangController  = (lang: string) : T10 => {
    switch (lang) {
        case 'en': {
            return {
                key: lang,
                title: "United States",
                svg: EnSvg
            }
        }
        case 'ru': {
            return {
                key: lang,
                title: 'Россия',
                svg: RuSvg
            }
        }
        case 'neth': {
            return {
                key: lang,
                title: 'Netherlands',
                svg: NethSvg
            }
        }
        case 'bel': {
            return {
                key: lang,
                title: 'Беларусь',
                svg: BelSvg
            }
        }
        case 'kaz': {
            return {
                key: lang,
                title: 'Казахстан',
                svg: KazSvg
            }
        }
        case 'tur': {
            return {
                key: lang,
                title: 'Türkiye',
                svg: TurSvg
            }
        }
        default:  {
            return {
                key: lang,
                title: 'Türkiye',
                svg: TurSvg
            }
        }
    }
};

export const langs = [
    {
        key: 'en',
        title: "United States",
        svg: EnSvg
    },
    {
        key: 'ru',
        title: "Россия",
        svg: RuSvg
    },
    {
        key: 'neth',
        title: "Netherlands",
        svg: NethSvg
    },
    {
        key: 'bel',
        title: "Беларусь",
        svg: BelSvg
    },
    {
        key: 'kaz',
        title: "Казахстан",
        svg: KazSvg
    },
    {
        key: 'tur',
        title: "Türkiye",
        svg: TurSvg
    }
]