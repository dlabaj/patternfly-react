import { BackToTop, Card, CardBody, Content, Gallery, GalleryItem, PageSection, Page } from '@patternfly/react-core';

export const BackToTopDemo = () => (
  <Page>
    <PageSection>
      <Content>
        <h1>Main title</h1>
        <p>
          Body text should be Red Hat Text at 1rem(16px). It should have leading of 1.5rem(24px) because <br />
          of it’s relative line height of 1.5.
        </p>
      </Content>
    </PageSection>
    <PageSection hasOverflowScroll name="scrolling-section">
      <Gallery hasGutter>
        {Array.from({ length: 60 }).map((_value, index) => (
          <GalleryItem key={index}>
            <Card key={index}>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum et urna eget semper. Sed
                tincidunt purus diam, id sollicitudin est pellentesque eget. Ut eget massa dignissim dolor pretium
                finibus at sit amet purus. Duis vulputate odio ac tristique convallis. Praesent porttitor condimentum
                varius. Duis pharetra in ligula nec ornare. Vivamus tincidunt nulla a semper semper. Duis tincidunt
                gravida elit non vehicula. Nunc eu sem venenatis, lobortis lorem sed, consectetur erat. Nulla accumsan,
                justo ac fringilla imperdiet, risus magna mollis libero, sit amet malesuada quam enim vel odio. Nullam
                vitae feugiat sem. Suspendisse potenti. Mauris dolor enim, pretium a pulvinar ut, commodo at risus.
              </CardBody>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
    </PageSection>
    <BackToTop scrollableSelector='[name="scrolling-section"]' />
  </Page>
);

export default BackToTopDemo;
