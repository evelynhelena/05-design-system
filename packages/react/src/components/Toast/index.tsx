import { Text } from "../Text";
import { Container, IconClose, ToastContainer } from "./styles";

export interface ToastProps {
    title: string;
    subtitle: string;
    close?: () => void;
}

export function Toast({ title, subtitle, close }: ToastProps) {
    return (
        <ToastContainer>
            <Container>
                <div>
                    <Text size="xl" color="white" fontWeight="bold">{title}</Text>
                    <Text size="sm" color="gray200" fontWeight="regular">{subtitle}</Text>
                </div>
                <IconClose onClick={close}/>
            </Container>
        </ToastContainer>
    )
}

Toast.displayName = 'Toast'