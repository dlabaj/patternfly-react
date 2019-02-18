import { CircleNotchIcon } from '@patternfly/react-icons';
import React, { HTMLProps, ReactElement } from 'react';

const defaultAriaLabel = 'Loading...';

export interface SpinnerProps extends HTMLProps<HTMLDivElement> {
  /** Content to show when not loading */
  children?: ReactElement<any>,
  /** Additional element css classes */
  className?: string,
  /** Indicates if the loading spinner should be shown */
  loading: boolean,
  /** Indicates if the spinner should appear inline */
  inline?: boolean,
  /** Indicates if the spinner should spin in reverse */
  inverse?: boolean,
  /** The size of the spinner */
  // PropTypes.oneOf(['lg', 'md', 'sm', 'xs'])
  /** Adds accessible text to the spinner */
  'aria-label': string
};

export const defaultProps = {
  children: null,
  className: '',
  inline: false,
  inverse: false,
  loading: false,
  // size: 'md',
  'aria-label': defaultAriaLabel
};

const Spinner:React.FunctionComponent<SpinnerProps> = (props) => {
  if (props.loading) {
    // const classes = classNames(className, 'spinner', `spinner-${size}`, {
    //   'spinner-inline': inline,
    //   'spinner-inverse': inverse
    // });

    // return <div className={classes} {...props} />;
    return (
      <div {...props}>
        <CircleNotchIcon className="fa-spin" />
      </div>
    );
  }

  return props.children;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
