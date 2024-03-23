import { X } from "phosphor-react";
import { styled } from "../../styles";

export const TooltipContainer = styled('div', {
    width: "calc($40 + $12)",
    backgroundColor: "$gray900",
    padding: "$3 $4",
    borderRadius: '$sm',
    display: "flex",
    justifyContent: "center",
    position: 'relative'
})

export const Arrow = styled('div',{
    width: "$4",
    height: "$4",
    position: 'absolute',
    transform: 'rotate(45deg)',
    background: '$gray900',
    top: 'calc($1 + $8)'
})