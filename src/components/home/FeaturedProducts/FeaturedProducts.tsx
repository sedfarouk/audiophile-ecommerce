import { Container, Section } from '../../styles';
import { ZX9Speaker } from './ZX9Speaker';
import { ZX7Speaker } from './ZX7Speaker';
import { YX1Earphones } from './YX1Earphones';

export const FeaturedProducts = () => {
  return (
    <Section spacing="xl" background="light">
      <Container>
        <div className="space-y-8 lg:space-y-12">
          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
        </div>
      </Container>
    </Section>
  );
};
