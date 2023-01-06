import { Container, Content, Icon } from './styles'

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight 
          title="Nova Turma"
          subtitle="Crie a turma para adicionar membros."
        />

        <Input 
          placeholder="Nome da Turma"
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
        />
      </Content>
    </Container>
  );
}
