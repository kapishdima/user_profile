import { useCommonDataContext } from "../../app/hooks";
import { useGetMe } from "modules/auth";
import { useEffect, useState } from "react";

const toCapitalize = (str: string) =>
    str.replace(/./, (letter) => letter.toUpperCase());

export const useUILocales = () => {
    const { fetchUser } = useGetMe();
    const { generalLocale, locales } = useCommonDataContext();

    if (!generalLocale || !locales) {
        return [];
    }
    const defaultLocale = {
        label: toCapitalize(generalLocale.name),
        id: generalLocale.id,
    };
    const [uiLocales, setUILocales] = useState([defaultLocale]);

    const prepareLocales = async () => {
        const user = await fetchUser();

        /* if (!user) {
      return;
    }*/

        const visibleLocales = locales.map((l) => ({
            label: toCapitalize(l.name),
            id: l.id,
        }));

        setUILocales((_locales) => visibleLocales);
    };

    useEffect(() => {
        prepareLocales();
    }, [generalLocale, locales]);

    return uiLocales;
};
