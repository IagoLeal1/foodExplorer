import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderAdmin from '../../components/HeaderAdmin';
import Section from '../../components/Section';

import { api } from '../../services/api';

import { BtnDiv, Container, NewDiv, SaveBtn } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  function handleBack() {
    navigate(`/`);
  }

  function handleAddTag() {
    setTag((prevState) => [...prevState, newTag]);
  }

  function handleRemoveTag(deleted) {
    setTag((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewPlate() {

    event.preventDefault();

    if (newTag) {
      alert(
        'Você deixou um ingrediente no campo para adicionar mas não adiciononu, clique para adicionar ou deixe o campo vazio para continuar'
      );
      return;
    }

    await api.post('/plates', {
      title,
      description,
      tag,
      category,
      price,
    });

    alert('Prato criado com sucesso!');
    navigate('/');
  }

  return (
    <Container>
      <HeaderAdmin />

      <NewDiv>
        <BtnDiv>
          <button onClick={() => handleBack()}>
            <img
              src="../../src/assets/left.png"
              alt="seta pra esquerda"
            />
            voltar
          </button>
        </BtnDiv>

        <h1>Novo prato</h1>

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
                src="../../src/assets/uploadIcon.svg"
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </Section>

          <Section title="Categoria">
            <select
              name="category"
              id="category"
              onChange={(event) => setCategory(event.target.value)}>
              <option>Selecione uma opção</option>
              <option value="main">Refeição</option>
              <option value="dessert">Sobremesa</option>
              <option value="drink">Bebida</option>
            </select>
          </Section>
        </div>

        <div className="Wrapper">
          <Section title="Marcadores">
            <div className="tags">
              {tag.map((tag, index) => (
                <div
                  key={String(index)}
                  className="active">
                  <input value={tag}></input>
                  <button onClick={() => handleRemoveTag(tag)}>x</button>
                </div>
              ))}
              <div className="addTag">
                <input
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}></input>
                <button onClick={handleAddTag}>+</button>
              </div>
            </div>
          </Section>

          <Section title="Preço">
            <div className="Preco">
              <label htmlFor="PriceInput">
                R$
                <input
                  onChange={(event) => setPrice(event.target.value)}
                  id="PriceInput"
                  type="text"
                  placeholder="00,00"
                />
              </label>
            </div>
          </Section>
        </div>

        <Section title="Descrição">
          <input
            className="Description"
            type="text"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Section>

        <SaveBtn>
          <button
            className="Save"
            onClick={handleNewPlate}>
            Novo Prato
          </button>
        </SaveBtn>
      </NewDiv>

      <Footer />
    </Container>
  );
}
