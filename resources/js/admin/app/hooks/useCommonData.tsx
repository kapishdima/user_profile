import { useLocales, LocaleDomainEntity } from "modules/locales";

export type CommonData = {
    locales: LocaleDomainEntity[];
    generalLocale: LocaleDomainEntity;
};

export const useCommonData = () => {
    const { fetchAndSaveLocales, clearLocales } = useLocales();

    const prepareCommonData = async () => {
        try {
            const response = await Promise.all([fetchAndSaveLocales()]);
            return fromResponse(response);
        } catch (error) {
            throw error;
        }
    };

    const clearCommonData = () => {
        clearLocales();
    };

    const fromResponse = (response): CommonData =>
        response.reduce((acc, value) => {
            return {
                ...acc,
                ...value,
            };
        }, {});

    return {
        prepareCommonData,
        clearCommonData,
    };
};
