import React from "react";
import { cx } from 'emotion';
import { withTheme } from 'emotion-theming';

import theme, { listBase } from './index.theme';

export const List = (props) => 
    <ul className={cx(listBase, theme(props.theme))}>
        {props.title}
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>

export default withTheme(List);