import { Container, Section } from '../../styles';
import { CategoryCard } from './CategoryCard';

export const CategorySection = () => {
  const categories = [
    {
      category: 'headphones' as const,
      title: 'HEADPHONES'
    },
    {
      category: 'speakers' as const,
      title: 'SPEAKERS'
    },
    {
      category: 'earphones' as const,
      title: 'EARPHONES'
    }
  ];

  return (
    <Section spacing="xl" background="light">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.category}
              category={category.category}
              title={category.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

