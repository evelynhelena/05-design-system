import { Text } from "../Text";
import { Arrow, TooltipContainer } from "./styles";

export interface TooltipProps {
    text: string;
}

export function Tooltip({ text }: TooltipProps) {
    return (
        <TooltipContainer>
            <Text size="sm" color="gray100" fontWeight='medium'>{text}</Text>
            <Arrow/>
        </TooltipContainer>
    )
}

Tooltip.displayName = 'Tooltip'