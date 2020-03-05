import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataToolbarItem, DataToolbarItemProps } from './DataToolbarItem';
import { ChipGroup, Chip, ChipGroupToolbarItem } from '../../components/ChipGroup';
import { DataToolbarContentContext, DataToolbarContext } from './DataToolbarUtils';
import { PickOptional } from '../../helpers/typeUtils';

export interface DataToolbarChip {
  /** A unique key to identify this chip */
  key: string;
  /** The ReactNode to display in the chip */
  node: React.ReactNode;
}

export interface DataToolbarChipGroup {
  /** A unique key to identify this chip group category */
  key: string;
  /** The category name to display for the chip group */
  name: string;
}

export interface DataToolbarFilterProps extends DataToolbarItemProps {
  /** An array of strings to be displayed as chips in the expandable content */
  chips?: DataToolbarChip[];
  /** Callback passed by consumer used to delete a chip from the chips[] */
  deleteChip?: (category: DataToolbarChipGroup, chip: DataToolbarChip) => void;
  /** Content to be rendered inside the data toolbar item associated with the chip group */
  children: React.ReactNode;
  /** Unique data tool bar category to be used as a label for the chip group */
  dataToolbarCategory: DataToolbarChipGroup;
  /** Flag to show the toolbar item */
  showToolbarItem?: boolean;
}

interface DataToolbarFilterState {
  isMounted: boolean;
}

export class DataToolbarFilter extends React.Component<DataToolbarFilterProps, DataToolbarFilterState> {
  static contextType: any = DataToolbarContext;
  static defaultProps: PickOptional<DataToolbarFilterProps> = {
    chips: [] as DataToolbarChip[],
    showToolbarItem: true
  };

  constructor(props: DataToolbarFilterProps) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    this.context.updateNumberFilters(this.props.dataToolbarCategory, this.props.chips.length);
    this.setState({ isMounted: true });
  }

  componentDidUpdate() {
    this.context.updateNumberFilters(this.props.dataToolbarCategory, this.props.chips.length);
  }

  render() {
    const { children, chips, deleteChip, dataToolbarCategory, showToolbarItem, ...props } = this.props;
    const { isExpanded, chipGroupContentRef } = this.context;

    const chipGroup = chips.length ? (
      <DataToolbarItem variant="chip-group">
        <ChipGroup withToolbar>
          <ChipGroupToolbarItem key={dataToolbarCategory.key} categoryName={dataToolbarCategory.name}>
            {chips.map(chip => (
              <Chip key={chip.key} onClick={() => deleteChip(dataToolbarCategory, chip)}>
                {chip.node}
              </Chip>
            ))}
          </ChipGroupToolbarItem>
        </ChipGroup>
      </DataToolbarItem>
    ) : null;

    if (!isExpanded && this.state.isMounted) {
      return (
        <React.Fragment>
          {showToolbarItem && <DataToolbarItem {...props}>{children}</DataToolbarItem>}
          {ReactDOM.createPortal(chipGroup, chipGroupContentRef.current.firstElementChild)}
        </React.Fragment>
      );
    }

    return (
      <DataToolbarContentContext.Consumer>
        {({ chipContainerRef }) => (
          <React.Fragment>
            {showToolbarItem && <DataToolbarItem {...props}>{children}</DataToolbarItem>}
            {chipContainerRef.current && ReactDOM.createPortal(chipGroup, chipContainerRef.current)}
          </React.Fragment>
        )}
      </DataToolbarContentContext.Consumer>
    );
  }
}
