import { css as emotion } from 'emotion';

export const listBase = emotion({
    label: 'base',
    fontSize: '16px',
    lineHeight: 1,
    listStyle: 'none',
    '& li' : {
        color: 'grey'
    }
});

export const listSuccess = emotion(
    listBase,
    {
        label: 'success',
        color: 'green'
    }
);

export const listDanger = emotion(
    listBase,
    {
        label: 'danger',
        color: 'red'
    }
);

export default ({color, fontSize, margin, padding, backgroundColor}) => 
    emotion({
        color,
        fontSize,
        backgroundColor,
        margin,
        padding
    });
    