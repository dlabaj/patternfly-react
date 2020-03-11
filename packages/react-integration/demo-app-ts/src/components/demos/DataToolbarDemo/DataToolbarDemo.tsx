import React from 'react';
import {
  Button,
  ButtonVariant,
  DataToolbar,
  DataToolbarItem,
  DataToolbarContent,
  DataToolbarFilter,
  DataToolbarToggleGroup,
  DataToolbarGroup,
  DataToolbarChip,
  DataToolbarChipGroup,
  DataToolbarProps,
  InputGroup,
  Select,
  SelectOption,
  SelectVariant,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  TextInput
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';
import EditIcon from '@patternfly/react-icons/dist/js/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/js/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/js/icons/sync-icon';

interface Filter {
  group: DataToolbarChipGroup;
  chips: DataToolbarChip[];
}

interface DataToolbarState {
  isExpanded: boolean;
  inputValue: string;
  filterIsExpanded: boolean[];
  filters: Filter[];
  kebabIsOpen: boolean;
}

export class DataToolbarDemo extends React.Component<DataToolbarProps, DataToolbarState> {
  constructor(props: DataToolbarProps) {
    super(props);
    this.state = {
      isExpanded: false,
      inputValue: '',
      filterIsExpanded: [false, false],
      filters: [
        {
          group: { key: 'risk', name: 'Risk' },
          chips: [{ key: 'riskLow', node: 'Low' }]
        },

        {
          group: { key: 'status', name: 'Status' },
          chips: [{ key: 'statusNew', node: 'New' }, { key: 'statusPending', node: 'Pending' }]
        }
      ],
      kebabIsOpen: false
    };
  }

  toggleIsExpanded = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  closeExpandableContent = () => {
    this.setState(() => ({
      isExpanded: false
    }));
  };

  onInputChange = newValue => {
    this.setState({ inputValue: newValue });
  };

  onDelete = (group: DataToolbarChipGroup, chip: DataToolbarChip) => {
    const filters: Filter[] = this.state.filters;
    const groupFilterIndex = filters.findIndex(filter => filter.group.key === group.key);
    filters[groupFilterIndex].chips.filter(currentChip => currentChip.key === chip.key);
    this.setState({ filters });
  };

  onKebabToggle = isOpen => {
    this.setState({
      kebabIsOpen: isOpen
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.closeExpandableContent);
  }

  render() {
    const { inputValue, filterIsExpanded, kebabIsOpen } = this.state;

    const FilterMenuItems = [
      [
        <SelectOption key="riskLow" value="Low" />,
        <SelectOption key="riskMedium" value="Medium" />,
        <SelectOption key="riskHigh" value="High" />
      ],
      [
        <SelectOption key="statusNew" value="New" />,
        <SelectOption key="statusPending" value="Pending" />,
        <SelectOption key="statusRunning" value="Running" />,
        <SelectOption key="statusCancelled" value="Cancelled" />
      ]
    ];

    const toggleGroupItems = (
      <React.Fragment>
        <DataToolbarItem id="toolbar-demo-search">
          <InputGroup>
            <TextInput
              name="textInput2"
              id="textInput2"
              type="search"
              aria-label="search input example"
              onChange={this.onInputChange}
              value={inputValue}
            />
            <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </DataToolbarItem>
        <DataToolbarGroup variant="filter-group" id="toolbar-demo-filters">
          {FilterMenuItems.map((value: any[], index: number) => {
            const currentFilter = this.state.filters[index];
            return (
              <DataToolbarFilter
                key={currentFilter.group.key}
                chips={currentFilter.chips}
                deleteChip={this.onDelete}
                categoryName={currentFilter.group}
              >
                <Select
                  variant={SelectVariant.checkbox}
                  aria-label={currentFilter.group.name}
                  onToggle={isExpanded => {
                    const newFilterIsExpanded: boolean[] = this.state.filterIsExpanded;
                    newFilterIsExpanded[index] = isExpanded;
                    this.setState({ filterIsExpanded: newFilterIsExpanded });
                  }}
                  onSelect={(event: any, selection) => {
                    const checked: boolean = event.target.checked;
                    const newFilter: Filter = this.state.filters[index];

                    newFilter.chips = checked
                      ? [...newFilter.chips, { key: `${newFilter.group.name}${selection}`, node: selection }]
                      : currentFilter.chips.filter(chip => chip.node !== selection);
                    const newFilters = this.state.filters;
                    newFilters[index] = currentFilter;
                    this.setState({ filters: newFilters });
                  }}
                  selections={currentFilter.chips.map((chip: DataToolbarChip) => chip.node)}
                  isExpanded={filterIsExpanded[index]}
                  placeholderText={currentFilter.group.name}
                >
                  {value}
                </Select>
              </DataToolbarFilter>
            );
          })}
        </DataToolbarGroup>
      </React.Fragment>
    );

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];

    const toolbarItems = (
      <React.Fragment>
        <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl" id="demo-toggle-group">
          {toggleGroupItems}
        </DataToolbarToggleGroup>
        <DataToolbarGroup variant="icon-button-group">
          <DataToolbarItem>
            <Button variant="plain">
              <EditIcon />
            </Button>
          </DataToolbarItem>
          <DataToolbarItem>
            <Button variant="plain">
              <CloneIcon />
            </Button>
          </DataToolbarItem>
          <DataToolbarItem>
            <Button variant="plain">
              <SyncIcon />
            </Button>
          </DataToolbarItem>
        </DataToolbarGroup>
        <DataToolbarItem>
          <Dropdown
            toggle={<KebabToggle onToggle={this.onKebabToggle} />}
            isOpen={kebabIsOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </DataToolbarItem>
      </React.Fragment>
    );

    return (
      <DataToolbar
        id="data-toolbar-filter-demo"
        clearAllFilters={() => {
          this.setState({
            filters: [
              {
                group: { key: 'risk', name: 'Risk' },
                chips: []
              },
              {
                group: { key: 'status', name: 'Status' },
                chips: []
              }
            ]
          });
        }}
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="xl"
        clearFiltersButtonText="Clear filters"
      >
        <DataToolbarContent>{toolbarItems}</DataToolbarContent>
      </DataToolbar>
    );
  }
}
