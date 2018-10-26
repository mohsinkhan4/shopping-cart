import React from "react";
import { cx } from 'emotion';
import { withTheme } from 'emotion-theming';

import Theme, { listBase } from './index.theme';

export const List = ({theme = {}, title}) => 
    <ul className={cx(listBase, Theme(theme))}>
        {title}
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>

export default withTheme(List);