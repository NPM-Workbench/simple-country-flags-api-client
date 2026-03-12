/* app imports */
import type { TFlagIconSize, TFlagIconStyle } from "../types/index.js";

/* types */ 
type TGetFlagIconParams = {
    countryCode: string;
    size: TFlagIconSize;
    style: TFlagIconStyle;
};

/* module */
function getFlagIcon(props: TGetFlagIconParams): string {
    /* props - destruct */
    const { countryCode, size, style } = props;
    /* end */
    return `https://flagsapi.com/${countryCode}/${size}/${style}.png`;
}

/* exports */
export type { TGetFlagIconParams };
export { getFlagIcon };