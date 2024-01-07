import { Button } from './style';

const XXButton = ({ variant, size, shape, children, onClick, ...rest }) => {
    return (
        <>
            <Button variant={variant} size={size} shape={shape} onClick={onClick} {...rest}>
                {children}
            </Button>
        </>
    );
};

export default XXButton;
