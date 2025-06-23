import { Container, Heading } from '../../styles';

interface CategoryHeaderProps {
  categoryName: string;
}

export const CategoryHeader = ({ categoryName }: CategoryHeaderProps) => {
  return (
    <section className="bg-audiophile-black text-white py-16 md:py-24">
      <Container>
        <div className="text-center">
          <Heading level={1} color="white" className="uppercase">
            {categoryName}
          </Heading>
        </div>
      </Container>
    </section>
  );
};
