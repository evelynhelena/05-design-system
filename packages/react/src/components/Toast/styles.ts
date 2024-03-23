import { X } from "phosphor-react";
import { styled } from "../../styles";

export const ToastContainer = styled('div', {
    width: "$80",
    backgroundColor: "$gray800",
    padding: "$3 $5",
    fontFamily: 'roboto',
    border: '1px solid $gray600',
    borderRadius: '$sm'

})

export const Container = styled('div', {
    display: 'flex',
    justifyContent:'space-between'
})

export const IconClose = styled(X, {
    color: "$gray200",
    cursor: 'pointer',

    '&:hover':{
        color: '$gray100'
    }
})