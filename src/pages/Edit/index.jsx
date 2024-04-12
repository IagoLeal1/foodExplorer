import Footer from '../../components/Footer';
import HeaderAdmin from '../../components/HeaderAdmin';
import Section from '../../components/Section';

import { BtnDiv, Container, NewDiv, SaveBtn } from './styles';

export default function Edit() {
  return (
    <Container>
      <HeaderAdmin />

      <NewDiv>
        <BtnDiv>
          <button>
            <img
              src="../../src/assets/left.png"
              alt="seta pra esquerda"
            />
            voltar
          </button>
        </BtnDiv>

        <h1>Editar Prato</h1>

        <div className="Wrapper">
          <Section title="Imagem do prato">
            <label
              htmlFor=""
              className="PlateImg">
              <input
                type="file"
                name="PlateImg"
                id="PlateImgInput"></input>
              <img
                src="../../src/assets/Upload.png"
                alt="upload img"
              />
              <span>Selecione uma imagem</span>
            </label>
          </Section>

          <Section title="Nome">
            <input
              className="AllInput"
              type="text"
              placeholder="Ex.: Salada Ceasar"
            />
          </Section>

          <Section title="Categoria">
            <select
              name="Category"
              id="Category">
              <option value="Refeição">Refeição</option>
              <option value="Sobremesa">Sobremesa</option>
              <option value="Sucos">Sucos</option>
            </select>
          </Section>
        </div>

        <div className="Wrapper">
          <Section title="Marcadores">
            <div className="tags"></div>
          </Section>

          <Section title="Preço">
            <label
              htmlFor="Price"
              className="AllInput">
              R$
              <input
                className="AllInput"
                id="Price"
                type="text"
                placeholder="00,00"
              />
            </label>
          </Section>
        </div>

        <Section title="Descrição">
          <input
            className="Description"
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
        </Section>

        <SaveBtn>
          <button className="Delete">Excluir Prato</button>
          <button className="Save">Salvar alterações</button>
        </SaveBtn>
      </NewDiv>

      <Footer />
    </Container>
  );
}
