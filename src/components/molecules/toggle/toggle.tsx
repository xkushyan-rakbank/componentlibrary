import { Switch, SwitchStyleProps } from "src/components/atoms/switch/switch";

import { Typography } from "src/components/atoms/typography/typography";

export interface ToggleProps { 
    label ?: string;
    caption ?: string;
    switchProps ?: SwitchStyleProps;
}

const Toggle = ({label, caption, switchProps}: ToggleProps) => {  
    return (
        <div className="flex ">
            <div className="pt-[1px]">
            <Switch icon size="medium" {...switchProps} />
            </div>
            <div className="pl-[12px]">
                <Typography fontWeight={400} variant="body1">{label}</Typography>
                <Typography className="pt-[2px]" variant="body1">{caption}</Typography>
            </div>
        </div>
    );
}

export { Toggle };
