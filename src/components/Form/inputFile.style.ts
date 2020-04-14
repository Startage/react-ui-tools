import { css } from '@emotion/core';
import { Theme } from '@material-ui/core';

interface ContentFileProps {
  active: boolean;
  theme: Theme;
  hasError: boolean;
  hasLabel: boolean;
}

const contentFile = ({
  active,
  theme,
  hasError,
  hasLabel,
}: ContentFileProps) => css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
  min-height: 135px;
  text-align: center;
  
  ${hasLabel ? 'margin-top: 8px;' : ''}
  ${hasError ? `border-color: ${theme.palette.error.main};` : ''}
  ${active ? `border-color: ${theme.palette.primary.main};` : ''}
  
  input[type="file"] {
    opacity: 0;
    position: absolute;
    pointer-events: none;
    // alternative to pointer-events; compatible with all browsers; just make it impossible to find
    width: 1px;
    height: 1px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  .file-item {
    width: 100%;
  }
  
  .file-item > span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(100% - 30px);
  }
`;

export { contentFile };
