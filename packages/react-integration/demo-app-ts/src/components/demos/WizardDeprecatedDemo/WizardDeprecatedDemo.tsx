import { Component } from 'react';
import { Button } from '@patternfly/react-core';
import { Wizard, WizardStep } from '@patternfly/react-core/deprecated';

interface WizardDeprecatedDemoState {
  isOpen: boolean;
  isOpenWithRole: boolean;
}

export class WizardDeprecatedDemo extends Component<React.HTMLProps<HTMLDivElement>, WizardDeprecatedDemoState> {
  static displayName = 'WizardDemo';
  state = {
    isOpen: false,
    isOpenWithRole: false
  };

  handleModalToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleRoleWizardToggle = () => {
    this.setState(({ isOpenWithRole }) => ({ isOpenWithRole: !isOpenWithRole }));
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const steps: WizardStep[] = [
      { name: 'A', component: <p>Step 1</p> },
      {
        name: 'B',
        steps: [
          {
            name: 'B-1',
            component: <p>Step 2</p>,
            enableNext: true
          },
          {
            name: 'B-2',
            component: <p>Step 3</p>,
            enableNext: false,
            canJumpTo: false
          }
        ]
      },
      { name: 'C', component: <p>Step 4</p> },
      { name: 'D', component: <p>Step 5</p> }
    ];
    const stepsWithAnchorLinks: WizardStep[] = [
      {
        name: 'Read about PF3',
        component: <p>Step 1</p>,
        stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v3/', target: '_blank' }
      },
      {
        name: 'Read about PF4',
        component: <p>Step 2</p>,
        stepNavItemProps: { navItemComponent: 'a', href: 'https://www.patternfly.org/v4/', target: '_blank' }
      },
      {
        name: 'Review',
        component: <p>Step 3</p>,
        stepNavItemProps: { navItemComponent: 'button', href: 'hhttps://www.patternfly.org/v4/' }
      }
    ];

    const stepsOnOverflow: WizardStep[] = [
      {
        name: 'Step without overflow',
        component: <p>Step 1</p>
      },
      {
        name: 'Step with overflow',
        component: (
          <div>
            <>
              <p>
                The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                "region", and an aria-label or aria-labelledby to be applied.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                auctor.
              </p>
              <p>
                Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in odio
                nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
              </p>
            </>
            <>
              <p>
                The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                "region", and an aria-label or aria-labelledby to be applied.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                auctor.
              </p>
              <p>
                Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in odio
                nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
              </p>
            </>
            <>
              <p>
                The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                "region", and an aria-label or aria-labelledby to be applied.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                auctor.
              </p>
              <p>
                Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in odio
                nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
              </p>
            </>
            <>
              <p>
                The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of
                "region", and an aria-label or aria-labelledby to be applied.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis
                lacinia vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor,
                enim ex porttitor odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla
                facilisi. Duis eget finibus ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus
                posuere pulvinar id nec turpis. Morbi mattis orci vel posuere tincidunt. Fusce bibendum et libero a
                auctor.
              </p>
              <p>
                Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris
                ultrices orci fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec
                bibendum ante. Vestibulum sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem,
                commodo sodales quam lectus a urna. Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non
                egestas diam velit in mi. Ut sit amet commodo orci. Duis sed diam odio. Duis mi metus, dignissim in odio
                nec, ornare aliquet libero. Sed luctus elit nibh. Quisque et felis diam. Integer ac metus dolor.
              </p>
            </>

            <button onClick={this.handleRoleWizardToggle}>Open wizard in modal</button>
          </div>
        )
      }
    ];
    return (
      <>
        <Button id="launchWiz" variant="primary" onClick={this.handleModalToggle}>
          Show Modal
        </Button>
        <Wizard
          title="Simple Wizard"
          description="Simple Wizard Description"
          steps={steps}
          startAtStep={1}
          id="modalWizId"
          onClose={this.handleModalToggle}
          isOpen={this.state.isOpen}
          width={710}
        />
        <Wizard
          title="Wizard title"
          description="Description here"
          id="inPageWizId"
          hideClose
          steps={steps}
          startAtStep={1}
          height={500}
          isNavExpandable
        />
        <Wizard
          title="Wizard with anchor"
          description="This wizard uses anchor tags for the nav item elements"
          id="inPageWizWithAnchorsId"
          hideClose
          steps={stepsWithAnchorLinks}
          startAtStep={1}
          height={500}
        />
        <Wizard
          title="Wizard with focusable content on overflow"
          description="This wizard has content that is focusable only when the content causes an overflow"
          id="wizard-focusable-overflow"
          steps={stepsOnOverflow}
          startAtStep={1}
          height={400}
          mainAriaLabel="Step content"
        />
        <Wizard
          title="Wizard with role"
          description="This wizard has a body that has a role of region only when content overflows and when the wizard is not in a modal."
          id="wizard-correct-role"
          steps={stepsOnOverflow}
          startAtStep={1}
          height={500}
          mainAriaLabel="Step content"
          onClose={this.handleRoleWizardToggle}
          {...(this.state.isOpenWithRole && { isOpen: true })}
        />
      </>
    );
  }
}
